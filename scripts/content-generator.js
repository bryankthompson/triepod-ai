#!/usr/bin/env node

/**
 * Automated Content Generator
 * Uses LLM to generate tech content summaries from research sources
 * Supports multiple tech topics beyond just aquaculture
 */

const fs = require('fs-extra');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');
const LLMIntegration = require('./llm-integrations');

class ContentGenerator {
    constructor(options = {}) {
        this.sourceDocsDir = path.join(process.cwd(), 'source-docs');
        this.outputDir = path.join(process.cwd(), 'content', 'generated');
        this.blogDir = path.join(process.cwd(), 'content', 'drafts');
        
        // LLM configuration
        this.llmProvider = options.llmProvider || 'local';
        this.useActualLLM = options.useActualLLM || false;
        this.llm = new LLMIntegration(this.llmProvider);
        
        // Ensure output directories exist
        fs.ensureDirSync(this.outputDir);
        fs.ensureDirSync(this.blogDir);
    }

    /**
     * Generate content from research sources
     */
    async generateContent(options = {}) {
        const {
            sourceFile = null,
            contentType = 'summary', // summary, commentary, analysis
            targetAudience = 'tech_professionals',
            outputFormat = 'blog_post'
        } = options;

        try {
            if (sourceFile) {
                return await this.processSourceFile(sourceFile, { contentType, targetAudience, outputFormat });
            } else {
                return await this.processAllSources({ contentType, targetAudience, outputFormat });
            }
        } catch (error) {
            console.error('Content generation error:', error);
            throw error;
        }
    }

    /**
     * Process a specific source file
     */
    async processSourceFile(filename, options) {
        const filePath = path.join(this.sourceDocsDir, filename);
        
        if (!fs.existsSync(filePath)) {
            throw new Error(`Source file not found: ${filename}`);
        }

        const sourceContent = await fs.readFile(filePath, 'utf8');
        const generated = await this.callLLM(sourceContent, options);
        
        const outputFile = await this.saveGeneratedContent(generated, filename, options);
        
        return {
            sourceFile: filename,
            outputFile,
            contentType: options.contentType,
            generated: generated
        };
    }

    /**
     * Process all source files
     */
    async processAllSources(options) {
        const sourceFiles = await fs.readdir(this.sourceDocsDir);
        const results = [];

        for (const file of sourceFiles) {
            if (file.endsWith('.md')) {
                try {
                    const result = await this.processSourceFile(file, options);
                    results.push(result);
                } catch (error) {
                    console.warn(`Skipping ${file}: ${error.message}`);
                }
            }
        }

        return results;
    }

    /**
     * Call LLM for content generation
     */
    async callLLM(sourceContent, options) {
        const prompt = this.buildPrompt(sourceContent, options);
        
        if (this.useActualLLM) {
            try {
                console.log(`Generating content using ${this.llmProvider} LLM...`);
                const llmResponse = await this.llm.generateContent(prompt, {
                    maxTokens: 2000,
                    temperature: 0.7
                });
                
                return {
                    content: llmResponse.content,
                    metadata: {
                        contentType: options.contentType,
                        targetAudience: options.targetAudience,
                        outputFormat: options.outputFormat,
                        timestamp: new Date().toISOString(),
                        llmProvider: llmResponse.provider,
                        llmModel: llmResponse.model,
                        llmUsage: llmResponse.usage
                    }
                };
            } catch (error) {
                console.warn(`LLM generation failed, falling back to prompt: ${error.message}`);
                // Fall through to prompt-only mode
            }
        }
        
        // Fallback to prompt-only mode (for development/testing)
        return {
            content: prompt,
            metadata: {
                contentType: options.contentType,
                targetAudience: options.targetAudience,
                outputFormat: options.outputFormat,
                timestamp: new Date().toISOString(),
                mode: 'prompt_only'
            }
        };
    }

    /**
     * Build LLM prompt based on source content and options
     */
    buildPrompt(sourceContent, options) {
        const { contentType, targetAudience, outputFormat } = options;
        
        const basePrompt = `
# Content Generation Request

## Source Material Analysis
${sourceContent}

## Generation Parameters
- **Content Type**: ${contentType}
- **Target Audience**: ${targetAudience}
- **Output Format**: ${outputFormat}
- **Focus**: Automation and technology applications

## Content Generation Instructions

### For Summary Content:
Create a concise, professional summary that:
1. Identifies key technical insights and applications
2. Highlights automation opportunities
3. Connects to broader technology trends
4. Maintains credibility through research citation
5. Positions insights for technology professionals

### For Commentary Content:
Develop thoughtful commentary that:
1. Analyzes the research from an automation perspective
2. Identifies practical implementation opportunities
3. Discusses technology integration challenges and solutions
4. Provides actionable insights for tech professionals
5. Maintains research-backed credibility

### For Analysis Content:
Provide deep analysis including:
1. Technical feasibility assessment
2. Market opportunity evaluation
3. Implementation roadmap suggestions
4. Risk and mitigation strategies
5. Future trend predictions

## Output Requirements:
- Professional, authoritative tone
- Research-backed insights
- Practical focus on automation applications
- Clear value proposition for readers
- SEO-optimized structure for web publication

## Content Structure:
1. **Executive Summary** (2-3 sentences)
2. **Key Insights** (3-5 bullet points)
3. **Technology Applications** (practical implementations)
4. **Industry Implications** (broader impact)
5. **Next Steps** (actionable recommendations)

Generate content that positions the author as an automation expert who understands both research and practical implementation.
`;

        return basePrompt;
    }

    /**
     * Save generated content
     */
    async saveGeneratedContent(generated, sourceFilename, options) {
        const { contentType, outputFormat } = options;
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        
        const outputFilename = `${path.parse(sourceFilename).name}-${contentType}-${timestamp}.md`;
        const outputPath = path.join(this.outputDir, outputFilename);

        const frontmatter = {
            title: `${contentType.charAt(0).toUpperCase() + contentType.slice(1)}: ${path.parse(sourceFilename).name}`,
            date: new Date().toISOString(),
            type: contentType,
            source: sourceFilename,
            generated: true,
            tags: ['automation', 'technology', 'research'],
            status: 'draft'
        };

        const fileContent = matter.stringify(generated.content, frontmatter);
        
        await fs.writeFile(outputPath, fileContent);
        
        console.log(`Generated content saved: ${outputFilename}`);
        return outputFilename;
    }

    /**
     * List available source files
     */
    async listSources() {
        const files = await fs.readdir(this.sourceDocsDir);
        return files.filter(file => file.endsWith('.md'));
    }

    /**
     * Get content generation statistics
     */
    async getStats() {
        const sources = await this.listSources();
        const generated = await fs.readdir(this.outputDir).catch(() => []);
        
        return {
            sourceFiles: sources.length,
            generatedFiles: generated.length,
            sources: sources,
            lastGenerated: generated.length > 0 ? generated[generated.length - 1] : null
        };
    }
}

// CLI Interface
async function main() {
    const args = process.argv.slice(2);
    const command = args[0];
    
    // Parse CLI options
    const options = {};
    if (args.includes('--llm')) {
        options.useActualLLM = true;
        const llmIndex = args.indexOf('--llm');
        if (args[llmIndex + 1] && !args[llmIndex + 1].startsWith('--')) {
            options.llmProvider = args[llmIndex + 1];
        }
    }
    
    const generator = new ContentGenerator(options);

    try {
        switch (command) {
            case 'list':
                const sources = await generator.listSources();
                console.log('Available source files:');
                sources.forEach(file => console.log(`  - ${file}`));
                break;

            case 'generate':
                const sourceFile = args[1];
                const contentType = args[2] || 'summary';
                
                if (sourceFile) {
                    const result = await generator.generateContent({
                        sourceFile,
                        contentType
                    });
                    console.log('Generated:', result);
                } else {
                    const results = await generator.processAllSources({ contentType });
                    console.log(`Generated ${results.length} content pieces`);
                }
                break;

            case 'stats':
                const stats = await generator.getStats();
                console.log('Content Generation Statistics:');
                console.log(`  Source files: ${stats.sourceFiles}`);
                console.log(`  Generated files: ${stats.generatedFiles}`);
                if (stats.lastGenerated) {
                    console.log(`  Last generated: ${stats.lastGenerated}`);
                }
                break;

            case 'init':
                console.log('Content Generator initialized');
                console.log(`Source directory: ${generator.sourceDocsDir}`);
                console.log(`Output directory: ${generator.outputDir}`);
                console.log(`LLM Provider: ${generator.llmProvider}`);
                console.log(`LLM Mode: ${generator.useActualLLM ? 'Enabled' : 'Prompt-only'}`);
                const initStats = await generator.getStats();
                console.log(`Ready to process ${initStats.sourceFiles} source files`);
                break;

            case 'test-llm':
                console.log(`Testing LLM connection (${generator.llmProvider})...`);
                const testResult = await generator.llm.testConnection();
                if (testResult.success) {
                    console.log('✅ LLM connection successful');
                    console.log(`Response preview: ${testResult.response}`);
                } else {
                    console.log('❌ LLM connection failed');
                    console.log(`Error: ${testResult.error}`);
                }
                break;

            default:
                console.log(`
Content Generator Commands:

  init                           Initialize content generator
  list                          List available source files
  generate [file] [type]        Generate content from source(s)
  test-llm                      Test LLM API connection
  stats                         Show generation statistics

Options:
  --llm [provider]              Enable actual LLM generation (local, openai, anthropic)

Examples:
  # Basic usage (prompt-only mode)
  node scripts/content-generator.js init
  node scripts/content-generator.js list
  node scripts/content-generator.js generate nvidia-ai-agriculture.md summary

  # With LLM generation
  node scripts/content-generator.js generate --llm local
  node scripts/content-generator.js generate nvidia-ai-agriculture.md summary --llm openai
  node scripts/content-generator.js test-llm --llm local

  # Batch processing
  node scripts/content-generator.js generate                    # All sources, prompt-only
  node scripts/content-generator.js generate --llm local        # All sources with LLM

Content Types: summary, commentary, analysis
LLM Providers: local (default), openai, anthropic

Environment Variables:
  ANTHROPIC_API_KEY             For Anthropic Claude API
  OPENAI_API_KEY               For OpenAI GPT API
`);
        }
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

// Run CLI if called directly
if (require.main === module) {
    main();
}

module.exports = ContentGenerator;