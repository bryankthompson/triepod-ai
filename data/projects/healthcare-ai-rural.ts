import { Project } from '@/types/project';

export const healthcareAIRural: Project = {
  id: 'healthcare-ai-rural',
  slug: 'healthcare-ai-rural',
  
  title: 'Rural Healthcare AI Initiative',
  tagline: 'AI-driven solutions for Mississippi healthcare gaps',
  description: 'Research project developing AI tools for telemedicine, predictive diagnostics, and patient care automation in rural Mississippi communities.',
  longDescription: 'Comprehensive initiative addressing healthcare accessibility challenges in rural Mississippi through AI-powered telemedicine platforms, predictive health analytics, and automated patient monitoring systems.',
  
  category: 'ai-research',
  status: 'planning',
  featured: false,
  order: 3,
  
  technologies: [
    { name: 'Telemedicine AI', category: 'framework' },
    { name: 'Predictive Analytics', category: 'framework' },
    { name: 'Natural Language Processing', category: 'framework' },
    { name: 'Computer Vision', category: 'framework' },
    { name: 'Python', category: 'language' },
    { name: 'Healthcare APIs', category: 'service' }
  ],
  
  features: [
    {
      title: 'AI-Powered Telemedicine',
      description: 'Enhanced remote consultation tools with AI diagnostic assistance for rural healthcare providers',
      icon: 'Monitor'
    },
    {
      title: 'Predictive Health Analytics',
      description: 'Early warning systems for chronic disease management and health outcome prediction',
      icon: 'TrendingUp'
    },
    {
      title: 'Automated Patient Monitoring',
      description: 'Remote patient monitoring systems with AI-driven alert mechanisms for high-risk patients',
      icon: 'Heart'
    },
    {
      title: 'Healthcare Resource Optimization',
      description: 'AI tools to optimize healthcare resource allocation and improve care coordination',
      icon: 'Users'
    }
  ],
  
  metrics: [
    { label: 'Rural Counties', value: '45', description: 'Mississippi counties with healthcare gaps' },
    { label: 'Provider Shortage', value: '70%', description: 'Areas with physician shortages' },
    { label: 'Access Improvement', value: '40%', description: 'Projected care access increase' },
    { label: 'Cost Reduction', value: '25%', description: 'Healthcare delivery cost savings' }
  ],
  
  keyBenefits: [
    'Improved healthcare access in underserved areas',
    'Reduced healthcare delivery costs',
    'Enhanced diagnostic accuracy through AI',
    'Better chronic disease management',
    'Support for rural healthcare providers'
  ],
  
  outcomes: [
    'Partnership with Mississippi healthcare systems',
    'Pilot programs in rural clinics',
    'Training programs for healthcare providers',
    'Integration with existing healthcare infrastructure'
  ],
  
  startDate: '2025-07-01',
  lastUpdated: '2025-06-21',
  
  seoTitle: 'Rural Healthcare AI Research | Mississippi Healthcare Innovation',
  seoDescription: 'Research initiative developing AI solutions for rural Mississippi healthcare challenges, improving access and outcomes in underserved communities.',
  keywords: ['rural healthcare', 'AI diagnostics', 'telemedicine', 'Mississippi healthcare', 'healthcare automation']
};