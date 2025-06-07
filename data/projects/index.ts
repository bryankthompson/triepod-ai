import { Project, ProjectsPageData } from '@/types/project';
import { disabilityRightsAI } from './disability-rights-ai';
import { directoryTreeAI } from './directory-tree-ai';
import { aiResearchEngine } from './ai-research-engine';
import { triepodKnowledgeBase } from './triepod-knowledge-base';
import { claudeCliMcp } from './claude-cli-mcp';

// Export individual projects
export { disabilityRightsAI, directoryTreeAI, aiResearchEngine, triepodKnowledgeBase, claudeCliMcp };

// Export all projects as an array
export const allProjects: Project[] = [
  triepodKnowledgeBase,
  disabilityRightsAI,
  directoryTreeAI,
  aiResearchEngine,
  claudeCliMcp,
];

// Get featured projects
export const featuredProjects = allProjects
  .filter(project => project.featured)
  .sort((a, b) => (a.order || 999) - (b.order || 999));

// Get projects by category
export const getProjectsByCategory = (category: string) => 
  allProjects.filter(project => project.category === category);

// Get project by slug
export const getProjectBySlug = (slug: string) => 
  allProjects.find(project => project.slug === slug);

// Projects page configuration
export const projectsPageData: ProjectsPageData = {
  hero: {
    title: 'AI Innovation Portfolio',
    subtitle: 'Building the Future of Intelligent Systems',
    description: 'Explore our collection of AI-powered solutions designed to solve real-world problems and democratize access to advanced technology.'
  },
  categories: [
    {
      value: 'ai-research',
      label: 'AI Research',
      description: 'Advanced research systems and frameworks'
    },
    {
      value: 'legal-tech',
      label: 'Legal Technology',
      description: 'AI solutions for legal and compliance challenges'
    },
    {
      value: 'accessibility',
      label: 'Accessibility',
      description: 'Tools for inclusive technology'
    },
    {
      value: 'data-analysis',
      label: 'Data Analysis',
      description: 'Intelligent data processing and visualization'
    },
    {
      value: 'automation',
      label: 'Automation',
      description: 'Workflow and process automation tools'
    },
    {
      value: 'enterprise',
      label: 'Enterprise',
      description: 'Enterprise-grade AI solutions and platforms'
    },
    {
      value: 'developer-tools',
      label: 'Developer Tools',
      description: 'Development utilities and integration tools'
    }
  ]
};
