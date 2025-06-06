'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Shield, Brain, TrendingUp, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export default function DisabilityRightsAIEarlyAccessPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
    toast.success('Successfully joined the waitlist!');
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">You&apos;re on the List!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for joining our early access program for the Disability Rights AI Assistant. 
            You&apos;re now among the first to experience revolutionary AI technology for disability rights advocacy.
          </p>
          <div className="bg-white/5 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
            <div className="text-left space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <p className="text-muted-foreground">
                  We&apos;ll send you exclusive updates on our development progress
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <p className="text-muted-foreground">
                  You&apos;ll be first to access our beta when it launches
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <p className="text-muted-foreground">
                  Early access members receive special founding member pricing
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/projects/disability-rights-ai">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Project
              </Link>
            </Button>
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/projects/disability-rights-ai">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Disability Rights AI
          </Link>
        </Button>
        
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 animate-pulse" variant="default">
              Limited Early Access
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Join the Disability Rights AI Early Access
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be among the first to access revolutionary AI technology that&apos;s 
              democratizing disability rights advocacy
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Early Access Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">First Access to Platform</p>
                    <p className="text-sm text-muted-foreground">
                      Be among the first 1,000 users when we launch
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Founding Member Pricing</p>
                    <p className="text-sm text-muted-foreground">
                      Exclusive lifetime discount for early supporters
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Direct Feedback Channel</p>
                    <p className="text-sm text-muted-foreground">
                      Shape the product with your input and needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Priority Support</p>
                    <p className="text-sm text-muted-foreground">
                      Dedicated support from our founding team
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Signup Form */}
            <div className="bg-white/5 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Reserve Your Spot</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input 
                    id="organization" 
                    type="text" 
                    placeholder="Your company or organization"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="use-case">Primary Use Case</Label>
                  <select 
                    id="use-case" 
                    required
                    className="w-full px-3 py-2 bg-background border border-input rounded-md"
                  >
                    <option value="">Select your primary interest</option>
                    <option value="individual">Individual Advocacy</option>
                    <option value="legal">Legal Professional</option>
                    <option value="enterprise">Enterprise Compliance</option>
                    <option value="nonprofit">Nonprofit Organization</option>
                    <option value="investor">Investment Interest</option>
                  </select>
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? 'Joining...' : 'Join Early Access'} 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By joining, you agree to receive updates about our progress. 
                  No spam, unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
          {/* Stats */}
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">523</p>
                <p className="text-sm text-muted-foreground">People on Waitlist</p>
              </div>
              <div>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div>
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">$16K</p>
                <p className="text-sm text-muted-foreground">Value Created</p>
              </div>
              <div>
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">$27B</p>
                <p className="text-sm text-muted-foreground">Market Size</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">When will the platform launch?</h3>
                <p className="text-muted-foreground">
                  We&apos;re targeting Q2 2025 for our beta launch. Early access members 
                  will get first access as we roll out features.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">How much will it cost?</h3>
                <p className="text-muted-foreground">
                  Early access members will receive exclusive founding member pricing, 
                  significantly discounted from standard rates. Final pricing will be 
                  announced before launch.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">What makes this different?</h3>
                <p className="text-muted-foreground">
                  Our AI technology has already proven it can create legal documents worth 
                  $16,000 that achieve 85% voluntary compliance—without litigation. We&apos;re 
                  the first to apply this approach specifically to disability rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}