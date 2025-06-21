import { Project } from '@/types/project';

export const energyGridOptimization: Project = {
  id: 'energy-grid-optimization',
  slug: 'energy-grid-optimization',
  
  title: 'Smart Grid Optimization AI',
  tagline: 'Intelligent energy systems for Mississippi infrastructure',
  description: 'AI research for optimizing Mississippi\'s energy grid through predictive analytics, renewable integration, and smart distribution systems.',
  longDescription: 'Advanced research project developing AI-driven solutions for Mississippi\'s electrical grid optimization, focusing on renewable energy integration, demand prediction, and infrastructure efficiency improvements.',
  
  category: 'ai-research',
  status: 'concept',
  featured: false,
  order: 4,
  
  technologies: [
    { name: 'Grid Analytics', category: 'framework' },
    { name: 'Machine Learning', category: 'framework' },
    { name: 'IoT Integration', category: 'tool' },
    { name: 'Renewable Energy AI', category: 'framework' },
    { name: 'Python', category: 'language' },
    { name: 'Energy Modeling', category: 'tool' }
  ],
  
  features: [
    {
      title: 'Demand Prediction',
      description: 'AI models to predict energy demand patterns and optimize grid distribution across Mississippi',
      icon: 'BarChart3'
    },
    {
      title: 'Renewable Integration',
      description: 'Smart systems for integrating solar and wind energy sources into the existing grid infrastructure',
      icon: 'Sun'
    },
    {
      title: 'Grid Resilience',
      description: 'AI-powered early warning systems for grid failures and automated response protocols',
      icon: 'Shield'
    },
    {
      title: 'Energy Efficiency',
      description: 'Optimization algorithms to reduce energy waste and improve overall grid efficiency',
      icon: 'Zap'
    }
  ],
  
  metrics: [
    { label: 'Efficiency Gain', value: '15%', description: 'Projected grid efficiency improvement' },
    { label: 'Renewable Integration', value: '35%', description: 'Increased renewable capacity' },
    { label: 'Cost Savings', value: '$50M', description: 'Annual state energy cost reduction' },
    { label: 'Reliability', value: '99.5%', description: 'Target grid uptime percentage' }
  ],
  
  keyBenefits: [
    'Improved energy grid reliability and efficiency',
    'Enhanced renewable energy integration',
    'Reduced energy costs for Mississippi residents',
    'Support for state economic development goals',
    'Environmental sustainability improvements'
  ],
  
  outcomes: [
    'Collaboration with Mississippi energy utilities',
    'Pilot programs for smart grid technologies',
    'Research partnerships with engineering universities',
    'Policy recommendations for energy infrastructure'
  ],
  
  startDate: '2026-01-01',
  lastUpdated: '2025-06-21',
  
  seoTitle: 'Smart Grid AI Research | Mississippi Energy Infrastructure Innovation',
  seoDescription: 'Research project developing AI solutions for Mississippi energy grid optimization, renewable integration, and infrastructure efficiency.',
  keywords: ['smart grid', 'energy AI', 'renewable integration', 'Mississippi energy', 'grid optimization']
};