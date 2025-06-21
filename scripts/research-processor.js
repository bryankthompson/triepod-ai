#!/usr/bin/env node

/**
 * Research Publication Processing Script
 * 
 * Adapted from blog-processor.js for AI research publications
 * Supports research papers, white papers, case studies, and technical reports
 * 
 * Usage:
 *   node scripts/research-processor.js [command] [options]
 * 
 * Commands:
 *   watch          - Start file watcher for automatic processing
 *   process        - Process files once and exit
 *   process-area   - Process all files in a research area
 *   enhance        - Enhance existing publications with AI
 *   init           - Initialize research publication system
 *   stats          - Show processing statistics
 * 
 * Options:
 *   --ai           - Enable AI enhancement
 *   --no-ai        - Disable AI enhancement
 *   --area <name>  - Specify research area (agriculture, healthcare, energy, defense)
 *   --file <path>  - Specify single file to process
 *   --config <path> - Use custom config file
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const matter = require('gray-matter');
const { marked } = require('marked');
const chokidar = require('chokidar');

const DEFAULT_RESEARCH_CONFIG = {
  watchMode: true,
  aiEnhancement: true,
  autoPublish: false,
  buildOnChange: true,
  aiModel: 'claude',
  outputFormat: 'tsx',
  researchAreas: ['agriculture', 'healthcare', 'energy', 'defense'],
  publicationTypes: ['research-paper', 'white-paper', 'case-study', 'technical-report', 'policy-brief'],
  defaultAuthor: 'Triepod AI Research Team',
  baseTitle: 'Triepod AI Research'
};

class ResearchPublicationProcessor {
  constructor(config) {
    this.config = config;
    this.processedPublications = new Map();
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  extractAbstract(content, maxLength = 250) {
    // Look for abstract section first
    const abstractMatch = content.match(/#{1,2}\s*Abstract\s*\n(.*?)(?=\n#{1,2}|\n\n|$)/is);
    if (abstractMatch) {
      const abstractText = abstractMatch[1].trim();
      if (abstractText.length <= maxLength) {
        return abstractText;
      }
      return abstractText.substring(0, maxLength).trim() + '...';
    }

    // Fallback to first paragraph
    const plainText = content
      .replace(/^#+\s/gm, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .trim();
    
    const firstParagraph = plainText.split('\n\n')[0];
    
    if (firstParagraph.length <= maxLength) {
      return firstParagraph;
    }
    
    return firstParagraph.substring(0, maxLength).trim() + '...';
  }

  determinePublicationType(frontmatter, content) {
    if (frontmatter.type) return frontmatter.type;
    
    // Auto-detect based on content
    if (content.includes('## Abstract') || content.includes('## Methodology')) {
      return 'research-paper';
    }
    if (content.includes('## Executive Summary') || content.includes('## Policy Recommendations')) {
      return 'white-paper';
    }
    if (content.includes('## Case Overview') || content.includes('## Results')) {
      return 'case-study';
    }
    if (content.includes('## Technical Specifications') || content.includes('## Implementation')) {
      return 'technical-report';
    }
    
    return 'research-paper'; // Default
  }

  determineResearchArea(filePath, frontmatter) {
    if (frontmatter.researchArea) return frontmatter.researchArea;
    
    // Auto-detect from file path
    for (const area of this.config.researchAreas) {
      if (filePath.includes(`/${area}/`)) {
        return area;
      }
    }
    
    return 'general'; // Default
  }

  async parseFile(filePath) {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content: markdownContent } = matter(fileContent);
    
    const title = data.title || path.basename(filePath, '.md');
    const slug = this.generateSlug(title);
    const wordCount = markdownContent.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    const abstract = data.abstract || this.extractAbstract(markdownContent);
    const publicationType = this.determinePublicationType(data, markdownContent);
    const researchArea = this.determineResearchArea(filePath, data);
    
    return {
      id: slug,
      slug,
      title,
      abstract,
      content: markdownContent,
      date: data.date || new Date().toISOString().split('T')[0],
      readingTime: data.readingTime || readingTime,
      keywords: data.keywords || [],
      researchArea,
      publicationType,
      authors: data.authors || [this.config.defaultAuthor],
      institution: data.institution || 'Triepod AI Research',
      citations: data.citations || [],
      methodology: data.methodology,
      findings: data.findings,
      implications: data.implications,
      relatedWork: data.relatedWork || [],
      funding: data.funding,
      doi: data.doi,
      status: 'draft',
      aiEnhanced: data.aiEnhanced || false,
      originalFile: filePath
    };
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  generateComponentName(slug) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'ResearchPage';
  }

  escapeJSXContent(content) {
    return content
      .replace(/'/g, '&apos;')
      .replace(/"/g, '&quot;')
      .replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  addResearchStyling(html) {
    // First escape JSX entities in text content
    const escapedHtml = this.escapeJSXContent(html);
    
    return escapedHtml
      .replace(/&lt;h1&gt;/g, '<h1 className="text-4xl font-bold mt-8 mb-6 text-gray-900">')
      .replace(/&lt;h2&gt;/g, '<h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 border-b border-gray-200 pb-2">')
      .replace(/&lt;h3&gt;/g, '<h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">')
      .replace(/&lt;h4&gt;/g, '<h4 className="text-lg font-semibold mt-6 mb-3 text-gray-700">')
      .replace(/&lt;p&gt;/g, '<p className="mb-4 leading-relaxed text-gray-700">')
      .replace(/&lt;ul&gt;/g, '<ul className="list-disc list-inside mb-6 space-y-2 pl-4">')
      .replace(/&lt;ol&gt;/g, '<ol className="list-decimal list-inside mb-6 space-y-2 pl-4">')
      .replace(/&lt;li&gt;/g, '<li className="leading-relaxed text-gray-700">')
      .replace(/&lt;a href=&quot;/g, '<a className="text-primary hover:text-primary/80 underline font-medium" href="')
      .replace(/&lt;pre&gt;/g, '<pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto mb-6 text-sm">')
      .replace(/&lt;code&gt;/g, '<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">')
      .replace(/&lt;blockquote&gt;/g, '<blockquote className="border-l-4 border-primary bg-primary/5 pl-6 py-4 italic text-gray-700 mb-6">')
      .replace(/&lt;img /g, '<img className="rounded-lg shadow-md mb-6 max-w-full h-auto mx-auto" ')
      .replace(/&lt;table&gt;/g, '<div className="overflow-x-auto mb-6"><table className="min-w-full border border-gray-200">')
      .replace(/&lt;\/table&gt;/g, '</table></div>')
      .replace(/&lt;th&gt;/g, '<th className="border border-gray-200 px-4 py-2 bg-gray-50 font-semibold text-left">')
      .replace(/&lt;td&gt;/g, '<td className="border border-gray-200 px-4 py-2">')
      .replace(/&lt;\/h1&gt;/g, '</h1>')
      .replace(/&lt;\/h2&gt;/g, '</h2>')
      .replace(/&lt;\/h3&gt;/g, '</h3>')
      .replace(/&lt;\/h4&gt;/g, '</h4>')
      .replace(/&lt;\/p&gt;/g, '</p>')
      .replace(/&lt;\/ul&gt;/g, '</ul>')
      .replace(/&lt;\/ol&gt;/g, '</ol>')
      .replace(/&lt;\/li&gt;/g, '</li>')
      .replace(/&lt;\/a&gt;/g, '</a>')
      .replace(/&lt;\/pre&gt;/g, '</pre>')
      .replace(/&lt;\/code&gt;/g, '</code>')
      .replace(/&lt;\/blockquote&gt;/g, '</blockquote>')
      .replace(/&lt;\/th&gt;/g, '</th>')
      .replace(/&lt;\/td&gt;/g, '</td>')
      .replace(/&quot;&gt;/g, '">');
  }

  getPublicationTypeIcon(type) {
    const icons = {
      'research-paper': 'FileText',
      'white-paper': 'BookOpen',
      'case-study': 'Search',
      'technical-report': 'Settings',
      'policy-brief': 'Scale'
    };
    return icons[type] || 'FileText';
  }

  getResearchAreaColor(area) {
    const colors = {
      agriculture: 'green',
      healthcare: 'blue',
      energy: 'yellow',
      defense: 'red',
      general: 'gray'
    };
    return colors[area] || 'gray';
  }

  async generateResearchPage(publication) {
    const htmlContent = await marked(publication.content);
    const styledContent = this.addResearchStyling(htmlContent);
    const seoTitle = this.escapeJSXContent(`${publication.title} | ${this.config.baseTitle}`);
    const seoDescription = this.escapeJSXContent(publication.abstract);
    const escapedTitle = this.escapeJSXContent(publication.title);
    const escapedInstitution = this.escapeJSXContent(publication.institution);
    const escapedAbstract = this.escapeJSXContent(publication.abstract);
    const typeIcon = this.getPublicationTypeIcon(publication.publicationType);
    const areaColor = this.getResearchAreaColor(publication.researchArea);
    
    return `import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, ${typeIcon}, Users, Tag, Building, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${seoTitle}',
  description: '${seoDescription}',
  keywords: [${publication.keywords.map(keyword => `'${keyword}'`).join(', ')}],
  openGraph: {
    title: '${seoTitle}',
    description: '${seoDescription}',
    type: 'article',
    publishedTime: '${publication.date}',
    authors: [${publication.authors.map(author => `'${author}'`).join(', ')}],
    tags: [${publication.keywords.map(keyword => `'${keyword}'`).join(', ')}],
  },
}

export default function ${this.generateComponentName(publication.slug)}() {
  return (
    <article className="min-h-screen py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back to Research */}
        <Link 
          href="/research" 
          className="inline-flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research
        </Link>

        {/* Publication Header */}
        <header className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${areaColor}-100 text-${areaColor}-800">
              <Tag className="w-3 h-3 mr-1" />
              ${publication.researchArea.charAt(0).toUpperCase() + publication.researchArea.slice(1)} Research
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              <${typeIcon} className="w-3 h-3 mr-1" />
              ${publication.publicationType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ${escapedTitle}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>${publication.authors.map(author => this.escapeJSXContent(author)).join(', ')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>${escapedInstitution}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="${publication.date}">${this.formatDate(publication.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>${publication.readingTime} min read</span>
            </div>
          </div>

          ${publication.abstract ? `
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
            <h3 className="font-semibold text-lg mb-3 text-primary">Abstract</h3>
            <p className="text-gray-700 leading-relaxed">${escapedAbstract}</p>
          </div>` : ''}
        </header>

        {/* Publication Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            ${styledContent}
          </div>
        </div>

        ${publication.keywords.length > 0 ? `
        {/* Keywords */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold text-lg mb-4">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            ${publication.keywords.map(keyword => `
            <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
              ${this.escapeJSXContent(keyword)}
            </span>`).join('')}
          </div>
        </div>` : ''}

        ${publication.citations.length > 0 ? `
        {/* Citations */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-semibold text-lg mb-4">References</h3>
          <ol className="space-y-2 text-sm text-gray-700">
            ${publication.citations.map(citation => `
            <li className="leading-relaxed">${this.escapeJSXContent(citation)}</li>`).join('')}
          </ol>
        </div>` : ''}

        {/* Research Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/research" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Explore More Research
            <ExternalLink className="w-4 h-4" />
          </Link>
          
          <Link 
            href="/contact?interest=research-collaboration" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
          >
            Collaborate with Us
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}`;
  }

  async processFile(inputFile) {
    try {
      console.log(chalk.blue(`📝 Processing research publication: ${inputFile}`));
      
      const publication = await this.parseFile(inputFile);
      const pageContent = await this.generateResearchPage(publication);
      
      // Create output directory structure
      const outputDir = path.join(process.cwd(), 'app', 'research', publication.researchArea, publication.slug);
      await fs.ensureDir(outputDir);
      
      // Write the page file
      const outputFile = path.join(outputDir, 'page.tsx');
      await fs.writeFile(outputFile, pageContent);
      
      this.processedPublications.set(publication.slug, publication);
      
      console.log(chalk.green(`✅ Generated: ${outputFile}`));
      console.log(chalk.gray(`   Research Area: ${publication.researchArea}`));
      console.log(chalk.gray(`   Type: ${publication.publicationType}`));
      console.log(chalk.gray(`   Reading time: ${publication.readingTime} min`));
      
      return publication;
    } catch (error) {
      console.error(chalk.red(`❌ Error processing ${inputFile}:`), error.message);
      throw error;
    }
  }

  async processDirectory(directory) {
    const files = await fs.readdir(directory);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    console.log(chalk.blue(`📁 Processing ${markdownFiles.length} research files in ${directory}`));
    
    for (const file of markdownFiles) {
      const fullPath = path.join(directory, file);
      await this.processFile(fullPath);
    }
    
    console.log(chalk.green(`✅ Processed ${markdownFiles.length} research publications`));
  }

  async startWatcher(watchPath) {
    console.log(chalk.blue(`👀 Watching for research publications in: ${watchPath}`));
    
    const watcher = chokidar.watch('**/*.md', {
      cwd: watchPath,
      ignored: /node_modules/,
      persistent: true,
      ignoreInitial: false
    });

    watcher
      .on('add', async (filePath) => {
        const fullPath = path.join(watchPath, filePath);
        console.log(chalk.yellow(`📄 New research file detected: ${filePath}`));
        await this.processFile(fullPath);
      })
      .on('change', async (filePath) => {
        const fullPath = path.join(watchPath, filePath);
        console.log(chalk.yellow(`📝 Research file updated: ${filePath}`));
        await this.processFile(fullPath);
      })
      .on('unlink', (filePath) => {
        console.log(chalk.red(`🗑️  Research file removed: ${filePath}`));
      });

    console.log(chalk.green('🚀 Research publication watcher started! Press Ctrl+C to stop.'));
  }

  showStats() {
    const totalPublications = this.processedPublications.size;
    const areaStats = {};
    const typeStats = {};
    
    for (const publication of this.processedPublications.values()) {
      areaStats[publication.researchArea] = (areaStats[publication.researchArea] || 0) + 1;
      typeStats[publication.publicationType] = (typeStats[publication.publicationType] || 0) + 1;
    }
    
    console.log(chalk.blue('\n📊 Research Publication Statistics:'));
    console.log(chalk.white(`Total Publications: ${totalPublications}`));
    
    console.log(chalk.blue('\n📋 By Research Area:'));
    Object.entries(areaStats).forEach(([area, count]) => {
      console.log(chalk.white(`  ${area}: ${count}`));
    });
    
    console.log(chalk.blue('\n📄 By Publication Type:'));
    Object.entries(typeStats).forEach(([type, count]) => {
      console.log(chalk.white(`  ${type}: ${count}`));
    });
  }
}

// CLI Logic
async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';
  
  // Load configuration
  const configPath = args.includes('--config') 
    ? args[args.indexOf('--config') + 1]
    : path.join(process.cwd(), 'research.config.json');
    
  let config = DEFAULT_RESEARCH_CONFIG;
  if (await fs.pathExists(configPath)) {
    const userConfig = await fs.readJson(configPath);
    config = { ...DEFAULT_RESEARCH_CONFIG, ...userConfig };
  }
  
  const processor = new ResearchPublicationProcessor(config);
  
  switch (command) {
    case 'init':
      console.log(chalk.blue('🔬 Initializing Research Publication System...'));
      
      // Create directory structure
      const contentDir = path.join(process.cwd(), 'content', 'research');
      await fs.ensureDir(contentDir);
      
      for (const area of config.researchAreas) {
        await fs.ensureDir(path.join(contentDir, area));
      }
      
      // Create sample research paper
      const samplePath = path.join(contentDir, 'agriculture', 'precision-farming-ai-research.md');
      if (!await fs.pathExists(samplePath)) {
        const sampleContent = `---
title: "AI-Driven Precision Agriculture: Optimizing Crop Yields in Mississippi"
date: ${new Date().toISOString().split('T')[0]}
authors: ["Triepod AI Research Team"]
researchArea: agriculture
publicationType: research-paper
keywords: ["precision agriculture", "AI", "crop optimization", "Mississippi farming", "automation"]
abstract: "This research investigates the application of artificial intelligence in precision agriculture systems to optimize crop yields for Mississippi's primary agricultural products including cotton and soybeans."
institution: "Triepod AI Research"
---

## Abstract

This research investigates the application of artificial intelligence in precision agriculture systems to optimize crop yields for Mississippi's primary agricultural products including cotton and soybeans. Our study demonstrates how AI-driven automation can increase yields by up to 20% while reducing resource consumption.

## Introduction

Mississippi's agricultural sector forms the backbone of the state's economy, with cotton and soybean production representing significant economic drivers. The integration of AI technologies presents unprecedented opportunities for optimization and sustainability.

## Methodology

Our research methodology combines field studies with AI modeling to develop practical automation solutions for Mississippi farmers.

### Data Collection

- Soil composition analysis across 50 Mississippi farms
- Weather pattern correlation with yield data
- Historical crop performance metrics

### AI Model Development

- Machine learning algorithms for yield prediction
- Computer vision systems for crop monitoring
- Automated irrigation optimization

## Results

Our findings demonstrate significant improvements in agricultural efficiency:

- **20% increase** in average crop yields
- **30% reduction** in water usage
- **15% decrease** in operational costs

## Implications

This research supports Mississippi's NVIDIA partnership goals by demonstrating practical AI applications in agriculture that can be scaled across the state's farming communities.

## Conclusion

AI-driven precision agriculture represents a transformative opportunity for Mississippi's agricultural sector, aligning with the state's economic development and technological advancement goals.
`;
        await fs.writeFile(samplePath, sampleContent);
        console.log(chalk.green(`📄 Created sample research paper: ${samplePath}`));
      }
      
      console.log(chalk.green('✅ Research publication system initialized!'));
      console.log(chalk.yellow('💡 Use "npm run research:process" to process research files'));
      break;
      
    case 'process':
      if (args.includes('--file')) {
        const filePath = args[args.indexOf('--file') + 1];
        await processor.processFile(filePath);
      } else if (args.includes('--area')) {
        const area = args[args.indexOf('--area') + 1];
        const areaDir = path.join(process.cwd(), 'content', 'research', area);
        await processor.processDirectory(areaDir);
      } else {
        const contentDir = path.join(process.cwd(), 'content', 'research');
        for (const area of config.researchAreas) {
          const areaDir = path.join(contentDir, area);
          if (await fs.pathExists(areaDir)) {
            await processor.processDirectory(areaDir);
          }
        }
      }
      processor.showStats();
      break;
      
    case 'watch':
      const watchPath = path.join(process.cwd(), 'content', 'research');
      await processor.startWatcher(watchPath);
      break;
      
    case 'stats':
      // Load existing publications for stats
      const researchDir = path.join(process.cwd(), 'content', 'research');
      for (const area of config.researchAreas) {
        const areaDir = path.join(researchDir, area);
        if (await fs.pathExists(areaDir)) {
          const files = await fs.readdir(areaDir);
          for (const file of files.filter(f => f.endsWith('.md'))) {
            const publication = await processor.parseFile(path.join(areaDir, file));
            processor.processedPublications.set(publication.slug, publication);
          }
        }
      }
      processor.showStats();
      break;
      
    case 'help':
    default:
      console.log(chalk.blue('🔬 Research Publication Processor'));
      console.log(chalk.white('\nCommands:'));
      console.log(chalk.white('  init           Initialize research publication system'));
      console.log(chalk.white('  process        Process all research files'));
      console.log(chalk.white('  process --area <name>  Process specific research area'));
      console.log(chalk.white('  process --file <path>  Process single file'));
      console.log(chalk.white('  watch          Watch for file changes'));
      console.log(chalk.white('  stats          Show processing statistics'));
      console.log(chalk.white('  help           Show this help'));
      console.log(chalk.white('\nResearch Areas: agriculture, healthcare, energy, defense'));
      console.log(chalk.white('Publication Types: research-paper, white-paper, case-study, technical-report, policy-brief'));
      break;
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { ResearchPublicationProcessor };