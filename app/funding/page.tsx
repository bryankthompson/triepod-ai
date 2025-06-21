import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Users, Building, Brain, Shield, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Funding & Investment Opportunities - Triepod AI Research',
  description: 'Investment opportunities in Mississippi&apos;s premier AI research firm. Strategic partnerships, research grants, and equity investment in agriculture, healthcare, energy, and defense AI research.',
  keywords: ['AI investment', 'research funding', 'Mississippi investment', 'NVIDIA partnership', 'AI startup funding', 'agriculture AI investment', 'healthcare AI funding'],
  openGraph: {
    title: 'Research Funding & Investment Opportunities - Triepod AI Research',
    description: 'Strategic investment opportunities in Mississippi&apos;s leading AI research firm positioned for the NVIDIA partnership.',
    type: 'website',
  },
};

export default function FundingPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Strategic Investment Opportunity
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Fund the Future of<br />Mississippi&apos;s AI Research
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Strategic investment opportunities in Mississippi&apos;s premier AI research firm. 
              Positioned to capitalize on the state&apos;s historic $9B NVIDIA partnership while advancing 
              critical research in agriculture, healthcare, energy, and defense automation.
            </p>
          </div>

          {/* Investment Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">$9B</div>
              <div className="text-sm text-muted-foreground">Mississippi-NVIDIA Partnership Value</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">5</div>
              <div className="text-sm text-muted-foreground">Strategic Research Pillars</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">First</div>
              <div className="text-sm text-muted-foreground">Mover Advantage Position</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Proven</div>
              <div className="text-sm text-muted-foreground">Technology Platform</div>
            </div>
          </div>

          {/* Investment Opportunities */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
              Investment Opportunities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Strategic Partnership */}
              <div className="bg-background border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Strategic Partnership</h3>
                    <Badge variant="secondary" className="mt-1">Equity Investment</Badge>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment Range:</span>
                    <span className="font-semibold">$100K - $500K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equity Stake:</span>
                    <span className="font-semibold">5% - 20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Term:</span>
                    <span className="font-semibold">3-5 Years</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Board seat or advisory position</li>
                  <li>• Quarterly progress reports</li>
                  <li>• Priority access to research outputs</li>
                  <li>• NVIDIA partnership collaboration opportunities</li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">
                    Discuss Partnership <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Research Grant Funding */}
              <div className="bg-background border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Research Grant Funding</h3>
                    <Badge variant="secondary" className="mt-1">Project-Based</Badge>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Grant Range:</span>
                    <span className="font-semibold">$50K - $250K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold">12-24 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus:</span>
                    <span className="font-semibold">Applied Research</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Specific research deliverables</li>
                  <li>• Academic publication opportunities</li>
                  <li>• Intellectual property rights</li>
                  <li>• Technology transfer potential</li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">
                    Submit Grant Proposal <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Research Focus Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Funded Research Priorities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/20">
                <Zap className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Agriculture AI</h3>
                <p className="text-sm text-muted-foreground">
                  Precision farming automation, catfish aquaculture optimization, and 
                  crop yield enhancement systems aligned with Mississippi&apos;s agricultural economy.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20">
                <Shield className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Healthcare AI</h3>
                <p className="text-sm text-muted-foreground">
                  Rural telemedicine solutions, predictive diagnostics, and automated 
                  patient care systems for underserved Mississippi communities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <TrendingUp className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Energy & Defense</h3>
                <p className="text-sm text-muted-foreground">
                  Smart grid optimization, renewable energy forecasting, and cybersecurity 
                  automation research supporting state infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* ROI & Impact Projections */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Projected Returns & Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <div className="text-sm font-medium mb-2">Projected 5-Year ROI</div>
                <div className="text-xs text-muted-foreground">
                  Based on NVIDIA partnership alignment and Mississippi&apos;s $9B AI initiative
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$50M</div>
                <div className="text-sm font-medium mb-2">Potential Market Capture</div>
                <div className="text-xs text-muted-foreground">
                  Agriculture and healthcare AI markets in Mississippi by 2030
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm font-medium mb-2">Jobs Created</div>
                <div className="text-xs text-muted-foreground">
                  Direct and indirect employment through AI workforce development
                </div>
              </div>
            </div>
          </div>

          {/* Investment Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Investment Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Discussion</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic conversation about investment goals and research priorities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Due Diligence</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive review of research capabilities and market positioning
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Term Negotiation</h3>
                <p className="text-sm text-muted-foreground">
                  Finalize investment structure, equity terms, and milestone agreements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Partnership Launch</h3>
                <p className="text-sm text-muted-foreground">
                  Begin collaborative research with regular progress reporting
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Fund Mississippi&apos;s AI Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in positioning Mississippi as a leader in AI research and development. 
              Strategic investment opportunities available for qualified partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule Investment Discussion <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/research">
                  Review Research Portfolio <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}