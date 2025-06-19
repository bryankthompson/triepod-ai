import { Brain, Code, TrendingUp, Shield, Target, Lightbulb } from 'lucide-react';
import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consulting Services - Bryan Thompson Business Solutions',
  description: 'Comprehensive AI consulting services for enterprise transformation. AI strategy, custom development, implementation support, and state initiative positioning from experienced consultant.',
  keywords: ['AI consulting services', 'AI strategy', 'custom AI development', 'enterprise AI', 'AI implementation', 'business transformation'],
  openGraph: {
    title: 'AI Consulting Services - Bryan Thompson Business Solutions',
    description: 'Transform your business with comprehensive AI consulting services. Strategy to implementation.',
    type: 'website',
  },
};

interface ServiceProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  investment: string;
}

function ServiceCard({ icon: Icon, title, description, features, deliverables, timeline, investment }: ServiceProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">What You Get:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Deliverables:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <p className="text-sm font-medium">Timeline</p>
            <p className="text-sm text-muted-foreground">{timeline}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Investment</p>
            <p className="text-sm text-muted-foreground">{investment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const services: ServiceProps[] = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmapping",
      description: "Comprehensive AI assessment and strategic planning to align AI capabilities with your business objectives.",
      features: [
        "Current state AI readiness assessment",
        "Competitive landscape analysis",
        "Custom AI roadmap development",
        "ROI projections and success metrics",
        "Risk assessment and mitigation strategies"
      ],
      deliverables: [
        "AI Readiness Assessment Report",
        "Strategic AI Implementation Roadmap",
        "Technology Stack Recommendations",
        "Budget Planning Guide",
        "Executive Presentation Deck"
      ],
      timeline: "2-3 weeks",
      investment: "Contact for quote"
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "End-to-end AI solution development tailored to your specific business needs and existing infrastructure.",
      features: [
        "Requirements analysis and solution design",
        "Custom AI model development",
        "Integration with existing systems",
        "Testing and quality assurance",
        "Deployment and monitoring setup"
      ],
      deliverables: [
        "Production-ready AI solution",
        "Integration documentation",
        "User training materials",
        "Monitoring and maintenance guides",
        "Knowledge transfer sessions"
      ],
      timeline: "6-12 weeks",
      investment: "Project-based"
    },
    {
      icon: TrendingUp,
      title: "AI Initiative Positioning",
      description: "Position your organization for state AI initiatives and enterprise partnerships with proven frameworks.",
      features: [
        "State AI initiative analysis",
        "Partnership readiness assessment",
        "Proposal development support",
        "Competitive positioning strategy",
        "Government relations guidance"
      ],
      deliverables: [
        "Initiative Positioning Strategy",
        "Partnership Readiness Report",
        "Proposal Template Library",
        "Executive Brief on Opportunities",
        "Action Plan for Engagement"
      ],
      timeline: "3-4 weeks",
      investment: "Strategic retainer"
    },
    {
      icon: Shield,
      title: "AI Implementation Support",
      description: "Hands-on support for AI deployment, change management, and team training to ensure successful adoption.",
      features: [
        "Implementation project management",
        "Team training and workshops",
        "Change management support",
        "Performance optimization",
        "Ongoing technical support"
      ],
      deliverables: [
        "Implementation Project Plan",
        "Training Program Materials",
        "Change Management Framework",
        "Performance Monitoring Setup",
        "Support Documentation"
      ],
      timeline: "4-8 weeks",
      investment: "Monthly retainer"
    },
    {
      icon: Target,
      title: "AI Technology Assessment",
      description: "Evaluate AI tools, platforms, and vendors to make informed technology decisions that align with your goals.",
      features: [
        "Technology landscape analysis",
        "Vendor evaluation and comparison",
        "POC planning and execution",
        "Cost-benefit analysis",
        "Integration feasibility assessment"
      ],
      deliverables: [
        "Technology Assessment Report",
        "Vendor Comparison Matrix",
        "POC Results and Recommendations",
        "Total Cost of Ownership Analysis",
        "Implementation Risk Assessment"
      ],
      timeline: "2-4 weeks",
      investment: "Fixed fee"
    },
    {
      icon: Lightbulb,
      title: "AI Innovation Workshops",
      description: "Interactive workshops to identify AI opportunities, generate ideas, and build internal AI capabilities.",
      features: [
        "Executive AI education sessions",
        "Use case identification workshops",
        "Innovation brainstorming sessions",
        "Team capability assessment",
        "Quick wins identification"
      ],
      deliverables: [
        "Workshop Summary Reports",
        "Use Case Opportunity Matrix",
        "Innovation Pipeline",
        "Team Development Plan",
        "Quick Wins Implementation Guide"
      ],
      timeline: "1-2 weeks",
      investment: "Per workshop"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Consulting Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive AI solutions designed to transform your business and position you for success 
          in the AI-driven economy. From strategy to implementation, I deliver results that drive growth.
        </p>
      </div>

      {/* Success Metrics */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Proven Results</h2>
          <p className="text-muted-foreground">Track record of delivering measurable business value</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$16K+</div>
            <div className="text-sm text-muted-foreground">Validated Value Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Project Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Fortune 500</div>
            <div className="text-sm text-muted-foreground">Enterprise Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-card rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">My Consulting Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-medium mb-2">Discovery</h3>
            <p className="text-sm text-muted-foreground">Understand your business, challenges, and AI goals</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-medium mb-2">Strategy</h3>
            <p className="text-sm text-muted-foreground">Develop custom AI strategy and implementation plan</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-medium mb-2">Execute</h3>
            <p className="text-sm text-muted-foreground">Implement solutions with ongoing support and guidance</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-medium mb-2">Optimize</h3>
            <p className="text-sm text-muted-foreground">Measure results and continuously improve performance</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <ConsultationCTA variant="primary" showBenefits={true} />
    </div>
  );
}