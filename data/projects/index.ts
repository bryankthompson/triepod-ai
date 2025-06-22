import { Project, ProjectsPageData } from '@/types/project';
import { disabilityRightsAI } from './disability-rights-ai';
import { directoryTreeAI } from './directory-tree-ai';
import { aiResearchEngine } from './ai-research-engine';
import { triepodKnowledgeBase } from './triepod-knowledge-base';
import { claudeCliMcp } from './claude-cli-mcp';
import { vectorCodeLens } from './vector-code-lens';
import { mergerBalanceAutomation } from './merger-balance-automation';
import { triepodEncoderRing } from './triepod-encoder-ring';
import { cyberpunkChat } from './cyberpunk-chat';
import { stellarTrielink } from './stellar-trielink';
import { ollamaMcpWrapper } from './ollama-mcp-wrapper';
import { memorySystemMcp } from './memory-system-mcp';
import { docucrewAiDocumentationGenerator } from './docucrew-ai-documentation-generator';
import { smartmatchResumeAdvisor } from './smartmatch-resume-advisor';
import { appwriteAiAssistant } from './appwrite-ai-assistant';
import { n8nWorkflowGeneratorMcp } from './n8n-workflow-generator-mcp';
import { healthcareAIRural } from './healthcare-ai-rural';
import { energyGridOptimization } from './energy-grid-optimization';
import { defenseCybersecurityAI } from './defense-cybersecurity-ai';

// Export individual projects
export { disabilityRightsAI, directoryTreeAI, aiResearchEngine, triepodKnowledgeBase, claudeCliMcp, vectorCodeLens, mergerBalanceAutomation, triepodEncoderRing, cyberpunkChat, stellarTrielink, ollamaMcpWrapper, memorySystemMcp, docucrewAiDocumentationGenerator, smartmatchResumeAdvisor, appwriteAiAssistant, n8nWorkflowGeneratorMcp, healthcareAIRural, energyGridOptimization, defenseCybersecurityAI };

// Export all projects as an array
export const allProjects: Project[] = [
  // Featured Professional Projects
  n8nWorkflowGeneratorMcp,
  appwriteAiAssistant,
  smartmatchResumeAdvisor,
  docucrewAiDocumentationGenerator,
  memorySystemMcp,
  stellarTrielink,
  ollamaMcpWrapper,
  mergerBalanceAutomation,
  vectorCodeLens,
  triepodKnowledgeBase,
  
  // Research Projects
  healthcareAIRural,
  energyGridOptimization,
  defenseCybersecurityAI,
  
  // Other Professional Projects
  disabilityRightsAI,
  directoryTreeAI,
  aiResearchEngine,
  claudeCliMcp,
  
  // Experimental Projects
  triepodEncoderRing,
  cyberpunkChat,
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

// Get professional projects (excluding experimental)
export const professionalProjects = allProjects.filter(project => project.category !== 'experimental');

// Get experimental projects
export const experimentalProjects = allProjects.filter(project => project.category === 'experimental');

// Projects page configuration
export const projectsPageData: ProjectsPageData = {
  hero: {
    title: 'Research & Innovation Portfolio',
    subtitle: 'Advancing AI for Mississippi\'s Key Industries',
    description: 'Explore our research projects and AI solutions focused on agriculture, healthcare, energy, and defense - supporting Mississippi\'s NVIDIA partnership goals.'
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
    },
    {
      value: 'experimental',
      label: 'Experimental',
      description: 'Creative and experimental projects with unique aesthetics'
    }
  ]
};
