import { Project } from '@/types/project'

export const triepodKnowledgeBase: Project = {
  id: 'triepod-knowledge-base',
  slug: 'triepod-knowledge-base',
  title: 'Triepod.ai Knowledge Base Platform',
  tagline: 'Enterprise RAG system with vector database integration for semantic document search and AI-powered insights',
  description: 'A sophisticated knowledge management platform built with React and Node.js that combines PostgreSQL and Pinecone vector databases for advanced document processing and retrieval.',
  longDescription: 'The system features semantic search capabilities, Hugging Face model integration, and comprehensive document analysis with chunking, embedding generation, and intelligent tagging. Designed for enterprise environments requiring efficient knowledge discovery and AI-powered document insights.',
  category: 'ai-research',
  status: 'launched',
  featured: true,
  order: 1,
  
  technologies: [
    { name: 'React', category: 'framework' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Node.js', category: 'framework' },
    { name: 'Express.js', category: 'framework' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'Pinecone', category: 'service' },
    { name: 'OpenAI', category: 'service' },
    { name: 'Hugging Face', category: 'service' },
    { name: 'Supabase', category: 'service' },
    { name: 'Vite', category: 'tool' },
    { name: 'TailwindCSS', category: 'framework' }
  ],
  
  features: [
    {
      icon: 'Database',
      title: 'Hybrid Vector Database',
      description: 'Combines PostgreSQL for structured data with Pinecone for high-performance vector search and semantic similarity matching.'
    },
    {
      icon: 'Brain',
      title: 'Advanced Document Processing',
      description: 'Intelligent chunking with heading structure analysis, semantic tag extraction, and multi-language support.'
    },
    {
      icon: 'Zap',
      title: 'Real-time Search & RAG',
      description: 'Lightning-fast semantic search with retrieval-augmented generation for contextual AI responses.'
    },
    {
      icon: 'Code',
      title: 'Hugging Face Integration',
      description: 'Direct API integration with Hugging Face Spaces for text generation, summarization, and image processing.'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Secure API token management, rate limiting, and comprehensive logging for enterprise compliance.'
    },
    {
      icon: 'Sparkles',
      title: 'Intelligent Analytics',
      description: 'Token counting, processing metrics, and detailed analytics for cost optimization and performance insights.'
    }
  ],
  
  metrics: {
    performance: '95% search accuracy',
    costReduction: '60% token optimization',
    timeToValue: '2 hours setup',
    usageStats: 'Enterprise ready',
    successRate: '99.9% uptime',
    accuracy: 'Multi-language support'
  },
  
  links: {
    github: 'https://github.com/bryan308/triepod-knowledge-base',
    documentation: '/projects/triepod-knowledge-base/docs',
    demo: 'https://knowledge.triepod.ai'
  },
  
  images: {
    thumbnail: '/images/projects/triepod-knowledge-base/thumbnail.png',
    screenshots: [
      '/images/projects/triepod-knowledge-base/dashboard.png',
      '/images/projects/triepod-knowledge-base/vector-processing.png',
      '/images/projects/triepod-knowledge-base/search-interface.png'
    ]
  },
  
  seo: {
    title: 'Triepod.ai Knowledge Base Platform - Enterprise RAG System by Bryan Thompson',
    description: 'Advanced knowledge management platform with vector database integration, semantic search, and AI-powered document processing for enterprise environments.',
    keywords: ['AI', 'RAG', 'vector database', 'semantic search', 'knowledge management', 'enterprise', 'document processing', 'OpenAI', 'Pinecone']
  }
}