import Link from 'next/link';
import { ArrowRight, Brain, Code, Shield, Sparkles, ChevronRight, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectGrid } from '@/components/project-grid';
import { featuredProjects } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Triepod AI Research - Mississippi\'s Premier AI Research Firm',
  description: 'Mississippi\'s leading AI research firm specializing in agriculture, healthcare, energy, and defense automation. Supporting the state\'s historic NVIDIA partnership for AI education and workforce development.',
  keywords: ['AI research', 'Mississippi AI', 'NVIDIA partnership', 'agriculture automation', 'healthcare AI', 'energy optimization', 'defense research', 'automation engineering'],
  openGraph: {
    title: 'Triepod AI Research - Mississippi\'s Premier AI Research Firm',
    description: 'Cutting-edge AI research advancing Mississippi\'s key industries through the NVIDIA partnership initiative.',
    type: 'website',
    siteName: 'Triepod AI Research',
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
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Target className="h-4 w-4 mr-2" />
              Supporting Mississippi&apos;s Historic NVIDIA Partnership
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Mississippi&apos;s Premier<br />AI Research Firm
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Triepod AI Research drives cutting-edge automation research in agriculture, 
              healthcare, energy, and defense. Supporting Mississippi&apos;s NVIDIA partnership 
              for AI education, workforce development, and economic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/research">
                  Explore Our Research <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Collaboration Opportunities <ChevronRight className="ml-2 h-5 w-5" />
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
              Research Impact & Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge research delivering measurable impact across Mississippi&apos;s key industries.
              See how our automation research advances the state&apos;s economic future.
            </p>
          </div>
          
          {/* Research Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Key Research Areas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">NVIDIA</div>
              <div className="text-sm text-muted-foreground">Partnership Ready</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Automation</div>
              <div className="text-sm text-muted-foreground">Engineering Expertise</div>
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
              Four Pillars of AI Research
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced automation research across Mississippi&apos;s critical industries. 
              Supporting the NVIDIA partnership through cutting-edge research and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Agriculture AI</h3>
              <p className="text-sm text-muted-foreground">
                Precision farming automation, cotton & soybean optimization, 
                and smart agricultural systems for Mississippi farmers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Healthcare AI</h3>
              <p className="text-sm text-muted-foreground">
                Rural telemedicine solutions, predictive diagnostics, and 
                automated patient care for underserved communities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Energy AI</h3>
              <p className="text-sm text-muted-foreground">
                Smart grid optimization, renewable energy forecasting, and 
                automated energy efficiency systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Defense AI</h3>
              <p className="text-sm text-muted-foreground">
                Cybersecurity automation, defense logistics optimization, and 
                advanced security systems research
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
              Our Research Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systematic approach to automation research ensuring practical impact across Mississippi&apos;s key industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Industry Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Deep dive into Mississippi&apos;s agriculture, healthcare, energy, and defense sectors to identify automation opportunities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Research Design</h3>
              <p className="text-sm text-muted-foreground">
                Develop research frameworks aligned with NVIDIA partnership goals and state economic objectives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Prototype Development</h3>
              <p className="text-sm text-muted-foreground">
                Build and test automation solutions using cutting-edge AI technologies and engineering principles
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Impact Validation</h3>
              <p className="text-sm text-muted-foreground">
                Measure research outcomes, publish findings, and collaborate with industry partners for real-world implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Collaborate with Mississippi&apos;s AI Research Leaders
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to advance automation research across agriculture, healthcare, energy, and defense. 
            Together, we&apos;ll drive Mississippi&apos;s AI initiative forward through cutting-edge research and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Research Partnership <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/research">
                Explore Research Areas <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
