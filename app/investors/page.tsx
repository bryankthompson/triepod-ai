'use client';

import { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Shield, Brain, CheckCircle, DollarSign, Target, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Link from 'next/link';

export default function InvestorsPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
    toast.success('Investment inquiry received. We\'ll be in touch within 24 hours.');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge className="mb-4" variant="default">
            Investment Opportunity
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            First-Mover Advantage in<br />$27B Legal Tech Market
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join us in democratizing disability rights advocacy with proven AI technology 
            that&apos;s already created $16,000 in validated value
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">$65B</p>
              <p className="text-sm text-muted-foreground">Market by 2030</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">85%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">95%</p>
              <p className="text-sm text-muted-foreground">Cost Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">Zero</p>
              <p className="text-sm text-muted-foreground">Direct Competition</p>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <CardHeader>
              <CardTitle className="text-3xl">The $27 Billion Opportunity</CardTitle>
              <CardDescription className="text-lg">
                Legal tech adoption jumped from 19% to 79% in just two years
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Market Dynamics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">61 Million Americans with Disabilities</p>
                        <p className="text-sm text-muted-foreground">
                          Largest minority group facing systemic discrimination
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">39% Traditional Legal Success Rate</p>
                        <p className="text-sm text-muted-foreground">
                          Our 85% rate proves the market is ready for disruption
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">$300-600/hour Legal Fees</p>
                        <p className="text-sm text-muted-foreground">
                          Creating massive barrier to justice access
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Growth Projections</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">2025</span>
                        <span className="font-semibold">$500K ARR</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '10%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">2026</span>
                        <span className="font-semibold">$5M ARR</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">2027</span>
                        <span className="font-semibold">$25M ARR</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">2028</span>
                        <span className="font-semibold">$100M ARR</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Proof of Concept */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            Proven Product-Market Fit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>The $16,000 Document</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our AI technology created a legal research document worth $16,000 
                  in traditional fees. Result: Complete voluntary compliance.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/case-studies/16k-document">
                    View Case Study →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/5">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>85% vs 39%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our educational approach achieves 85% voluntary compliance compared 
                  to 39% for traditional adversarial legal methods.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>48-Hour Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  What takes lawyers weeks, our AI completes in 48 hours—maintaining 
                  quality while dramatically reducing costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Business Model */}
        <section className="mb-16">
          <Card className="bg-white/5">
            <CardHeader>
              <CardTitle className="text-3xl">Scalable SaaS Business Model</CardTitle>
              <CardDescription className="text-lg">
                Multiple revenue streams with 90%+ gross margins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Revenue Streams</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Individual Advocacy ($497/report)</p>
                        <p className="text-sm text-muted-foreground">
                          B2C self-service platform for discrimination cases
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Legal Professional Plans ($1,497-2,997)</p>
                        <p className="text-sm text-muted-foreground">
                          B2B subscriptions for law firms and advocates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Enterprise Compliance ($10K-100K+)</p>
                        <p className="text-sm text-muted-foreground">
                          Annual contracts for Fortune 500 companies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Competitive Advantages</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Proprietary Educational Methodology</p>
                        <p className="text-sm text-muted-foreground">
                          Unique approach that drives 85% compliance rate
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Brain className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">AI-Powered Multi-Framework Analysis</p>
                        <p className="text-sm text-muted-foreground">
                          Integrates ADA, FMLA, and state laws automatically
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Founder&apos;s Story & Mission</p>
                        <p className="text-sm text-muted-foreground">
                          Authentic connection to disability community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Investment Terms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            Investment Opportunity
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/5">
              <CardHeader>
                <CardTitle>Seed Round Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Target Raise</span>
                    <span className="font-semibold">$2.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Use of Funds</span>
                    <span className="font-semibold">Product & GTM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Close</span>
                    <span className="font-semibold">Q1 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lead Investor</span>
                    <span className="font-semibold">In Discussion</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5">
              <CardHeader>
                <CardTitle>Use of Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Product Development</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sales & Marketing</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Expansion</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Operations</span>
                    <span className="font-semibold">10%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto">
          <Card className="bg-white/5">
            <CardHeader>
              <CardTitle className="text-2xl">Schedule Investment Discussion</CardTitle>
              <CardDescription>
                Connect with our founding team to learn more about this opportunity
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="john@investmentfirm.com"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="firm">Investment Firm / Organization</Label>
                    <Input 
                      id="firm" 
                      type="text" 
                      required 
                      placeholder="Venture Capital Partners"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Investment Type</Label>
                    <select 
                      id="type" 
                      required
                      className="w-full px-3 py-2 bg-background border border-input rounded-md"
                    >
                      <option value="">Select investment type</option>
                      <option value="angel">Angel Investor</option>
                      <option value="vc">Venture Capital</option>
                      <option value="strategic">Strategic Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your interest in Triepod.ai"
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Request Meeting'} 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You for Your Interest</h3>
                  <p className="text-muted-foreground">
                    We&apos;ll be in touch within 24 hours to schedule a discussion.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}