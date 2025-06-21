import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Users, Building, Brain, Shield, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support My Research - Bryan Thompson',
  description: 'Support independent AI research through Patreon, donations, and other funding options. Help fund practical automation projects and open research.',
  keywords: ['research support', 'Patreon', 'research funding', 'AI research donations', 'independent research', 'crowdfunding'],
  openGraph: {
    title: 'Support My Research - Bryan Thompson',
    description: 'Support independent AI research and automation projects through various funding options.',
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
              <Users className="h-4 w-4 mr-2" />
              Support Independent Research
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Support My<br />AI Research Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Help fund independent AI research and automation projects. Your support enables me to 
              explore practical AI applications, share open research, and build tools that can 
              make a real difference in people&apos;s lives.
            </p>
          </div>

          {/* Research Impact */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Open</div>
              <div className="text-sm text-muted-foreground">Research & Code Sharing</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Real</div>
              <div className="text-sm text-muted-foreground">Practical Applications</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">Community</div>
              <div className="text-sm text-muted-foreground">Driven Development</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Transparent Funding Use</div>
            </div>
          </div>

          {/* Support Options */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
              Ways to Support My Research
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Patreon Support */}
              <div className="bg-background border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Patreon</h3>
                    <Badge variant="secondary" className="mt-1">Monthly Support</Badge>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Starting at:</span>
                    <span className="font-semibold">$5/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Benefits:</span>
                    <span className="font-semibold">Early Access</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Monthly research updates</li>
                  <li>• Early access to new tools and projects</li>
                  <li>• Behind-the-scenes development insights</li>
                  <li>• Direct input on research priorities</li>
                  <li>• Discord community access</li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                  <Link href="#" target="_blank">
                    Support on Patreon <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* One-time Donations */}
              <div className="bg-background border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4">
                    <DollarSign className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">One-Time Support</h3>
                    <Badge variant="secondary" className="mt-1">Ko-fi & PayPal</Badge>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-semibold">Any amount</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platforms:</span>
                    <span className="font-semibold">Ko-fi, PayPal</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Support specific projects</li>
                  <li>• No ongoing commitment</li>
                  <li>• Public thank you (optional)</li>
                  <li>• Help fund hardware/software costs</li>
                </ul>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                    <Link href="#" target="_blank">
                      Donate via Ko-fi <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="#" target="_blank">
                      PayPal Donation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* GitHub Sponsors */}
              <div className="bg-background border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">GitHub Sponsors</h3>
                    <Badge variant="secondary" className="mt-1">Developer Focus</Badge>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Starting at:</span>
                    <span className="font-semibold">$10/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus:</span>
                    <span className="font-semibold">Open Source</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Priority issue responses</li>
                  <li>• Feature request consideration</li>
                  <li>• Open source project support</li>
                  <li>• Code review and collaboration</li>
                  <li>• GitHub profile badge</li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600" asChild>
                  <Link href="#" target="_blank">
                    Sponsor on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* What Your Support Funds */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Your Support Funds
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/20">
                <Zap className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Research Time</h3>
                <p className="text-sm text-muted-foreground">
                  Allows me to dedicate more time to research and development instead of 
                  taking on unrelated consulting work to pay the bills.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20">
                <Shield className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Tools & Hardware</h3>
                <p className="text-sm text-muted-foreground">
                  Computing resources, software licenses, cloud services, and hardware 
                  needed for AI development and testing.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <TrendingUp className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Open Sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Enables me to share research findings, code, and tools openly 
                  rather than keeping them proprietary for commercial clients.
                </p>
              </div>
            </div>
          </div>

          {/* Funding Transparency */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Funding Transparency
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm font-medium mb-2">Transparent Use</div>
                <div className="text-xs text-muted-foreground">
                  All funding goes directly to research, tools, and time - no overhead or salaries
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Monthly</div>
                <div className="text-sm font-medium mb-2">Updates</div>
                <div className="text-xs text-muted-foreground">
                  Regular updates on what I&apos;m working on and how funding is being used
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Open</div>
                <div className="text-sm font-medium mb-2">Source</div>
                <div className="text-xs text-muted-foreground">
                  Most research outcomes and tools will be shared openly with the community
                </div>
              </div>
            </div>
          </div>

          {/* How to Get Started */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Get Started
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Your Platform</h3>
                <p className="text-sm text-muted-foreground">
                  Pick the funding option that works best for you - monthly support or one-time contribution
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Set Your Amount</h3>
                <p className="text-sm text-muted-foreground">
                  Any amount helps - from $5/month to whatever feels right for you
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Stay Connected</h3>
                <p className="text-sm text-muted-foreground">
                  Get regular updates on research progress and early access to new projects
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Support Independent Research?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your support helps me focus on building practical AI solutions and sharing them openly 
              with the community. Every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="#" target="_blank">
                  Support on Patreon <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Get In Touch <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <Users className="h-4 w-4 inline mr-1" />
                Community-driven research • 
                <DollarSign className="h-4 w-4 inline mx-1" />
                100% transparent funding • 
                <Brain className="h-4 w-4 inline mx-1" />
                Open source results
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}