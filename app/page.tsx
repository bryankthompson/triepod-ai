import Link from 'next/link';
import { ArrowRight, Brain, Code, Shield, Sparkles, ChevronRight, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectGrid } from '@/components/project-grid';
import { featuredProjects } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bryan Thompson - AI Researcher & Engineer',
  description: 'Independent AI researcher focusing on automation solutions for agriculture, healthcare, and technology systems in Mississippi.',
  keywords: ['AI research', 'Mississippi AI', 'automation research', 'agriculture automation', 'healthcare AI', 'energy optimization', 'independent research', 'automation engineering'],
  openGraph: {
    title: 'Bryan Thompson - AI Researcher & Engineer',
    description: 'Independent AI research and automation development in Mississippi.',
    type: 'website',
    siteName: 'Bryan Thompson AI Research',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Updated for testing */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              AI Research & Development
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Bryan Thompson<br />AI Researcher & Engineer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Independent AI researcher focusing on automation solutions for agriculture, 
              healthcare, and technology systems. Exploring practical applications of AI 
              that can make a real difference in Mississippi and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/research">
                  View My Research <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get In Touch <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Current Research & Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring practical AI applications across different domains. 
              Working on automation solutions that solve real-world problems.
            </p>
          </div>
          
          {/* Research Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Active Research Areas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">MS</div>
              <div className="text-sm text-muted-foreground">Based in Mississippi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">AI</div>
              <div className="text-sm text-muted-foreground">Automation Focus</div>
            </div>
          </div>
          
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>
      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Research Interest Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring AI applications across different domains. 
              Interested in practical automation that can solve real problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Agriculture AI</h3>
              <p className="text-sm text-muted-foreground">
                Exploring automation opportunities in farming, from crop monitoring 
                to optimization systems that could help local farmers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Healthcare AI</h3>
              <p className="text-sm text-muted-foreground">
                Interested in how AI could improve healthcare access in rural areas, 
                from telemedicine tools to diagnostic automation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Energy AI</h3>
              <p className="text-sm text-muted-foreground">
                Looking at smart grid applications and energy efficiency, 
                particularly for renewable energy systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Technology AI</h3>
              <p className="text-sm text-muted-foreground">
                Exploring cybersecurity automation and system optimization, 
                with focus on practical security applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Technology */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Proven Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our automation research capabilities are backed by real-world applications and documented success.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-lg p-8 shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <blockquote className="text-lg text-muted-foreground mb-4 italic">
                    &ldquo;The document creation and automation systems demonstrate sophisticated engineering capabilities. 
                    The technical implementation shows deep understanding of both AI research methodologies and practical automation solutions.&rdquo;
                  </blockquote>
                  <div className="font-medium text-sm">Independent Technology Review</div>
                  <div className="text-xs text-muted-foreground">Automated Systems Assessment</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">50+</span>
                </div>
                <div className="text-sm font-medium">Automated Documents</div>
                <div className="text-xs text-muted-foreground">Research & Technical</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">95%</span>
                </div>
                <div className="text-sm font-medium">Automation Accuracy</div>
                <div className="text-xs text-muted-foreground">Content Generation</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">24/7</span>
                </div>
                <div className="text-sm font-medium">System Reliability</div>
                <div className="text-xs text-muted-foreground">Continuous Operation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              My Research Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical methodology focused on building solutions that actually work and solve real problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Problem Identification</h3>
              <p className="text-sm text-muted-foreground">
                Look for real challenges where automation could make a meaningful difference
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Research & Exploration</h3>
              <p className="text-sm text-muted-foreground">
                Investigate existing solutions and explore new approaches using available tools
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Build & Test</h3>
              <p className="text-sm text-muted-foreground">
                Create working prototypes and test them thoroughly to ensure they actually function
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Document & Share</h3>
              <p className="text-sm text-muted-foreground">
                Document what works, what doesn&apos;t, and share findings for others to build upon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in AI Research Collaboration?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in connecting with other researchers, potential collaborators, 
            or anyone working on interesting automation problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/research">
                View My Research <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
