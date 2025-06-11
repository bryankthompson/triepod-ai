import { Project } from '@/types/project'

export const docucrewAiDocumentationGenerator: Project = {
  id: 'docucrew-ai-documentation-generator',
  slug: 'docucrew-ai-documentation-generator',
  title: 'DocuCrew - AI Documentation Generator',
  shortDescription: 'Multi-agent AI system that automatically generates comprehensive documentation for GitHub repositories',
  fullDescription: 'DocuCrew is an intelligent multi-agent system that revolutionizes software documentation by automatically generating comprehensive, professional-grade documentation for GitHub repositories. Using CrewAI&apos;s collaborative agent framework, five specialized AI agents work together to analyze code, document APIs, create usage examples, and produce polished documentation. The system features real-time progress tracking through a beautiful Next.js interface, allowing users to watch AI agents collaborate in real-time. With deep code analysis capabilities and pattern recognition, DocuCrew produces export-ready markdown documentation that saves development teams hours of manual work while ensuring consistent, high-quality documentation standards.',
  category: 'developer-tools',
  status: 'production',
  featured: true,
  
  technologies: [
    'CrewAI',
    'LangChain', 
    'FastAPI',
    'Python 3.11+',
    'Next.js 14',
    'TypeScript',
    'Tailwind CSS',
    'WebSocket',
    'OpenAI GPT-4'
  ],
  
  features: [
    {
      icon: 'Brain',
      title: 'Multi-Agent Collaboration',
      description: 'Five specialized AI agents work together: Code Analyzer, API Documenter, README Writer, Example Creator, and Editor for comprehensive documentation generation.'
    },
    {
      icon: 'Zap',
      title: 'Real-time Progress Tracking',
      description: 'Beautiful visualization of AI workflow with WebSocket-powered real-time updates showing each agent&apos;s progress and activities.'
    },
    {
      icon: 'Code',
      title: 'Deep Code Analysis',
      description: 'Advanced pattern recognition and repository structure analysis with GitHub API integration for both public and private repositories.'
    },
    {
      icon: 'Globe',
      title: 'Professional Output',
      description: 'Export-ready markdown documentation with consistent formatting, API references, usage examples, and comprehensive project overviews.'
    },
    {
      icon: 'Sparkles',
      title: 'Interactive Web Interface',
      description: 'Modern Next.js 14 frontend with TypeScript, featuring intuitive repository input and beautiful progress visualization.'
    }
  ],
  
  metrics: {
    timeToValue: '5 minutes',
    automation: '100% automated',
    coverage: 'Full documentation suite',
    compatibility: 'Any GitHub repository',
    performance: 'Real-time generation'
  },
  
  links: {
    github: 'https://github.com/triepod/docucrew-ai-documentation-generator',
    documentation: '/projects/docucrew-ai-documentation-generator/docs'
  },
  
  images: {
    thumbnail: '/images/projects/docucrew-ai-documentation-generator/thumbnail.png',
    screenshots: [
      '/images/projects/docucrew-ai-documentation-generator/screenshot-1.png',
      '/images/projects/docucrew-ai-documentation-generator/screenshot-2.png'
    ]
  },
  
  seo: {
    title: 'DocuCrew - AI Documentation Generator | Triepod.AI',
    description: 'Intelligent multi-agent system that automatically generates comprehensive documentation for GitHub repositories using CrewAI. Save hours with AI-powered documentation.',
    keywords: ['AI Documentation', 'CrewAI', 'Multi-Agent System', 'GitHub Integration', 'Automatic Documentation', 'Software Documentation', 'Developer Tools', 'Code Analysis']
  }
}