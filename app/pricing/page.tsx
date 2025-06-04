import { Check, TrendingUp, Users, Building, Sparkles, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const plans = [
  {
    name: 'Individual Advocacy',
    status: 'In Development',
    description: 'Comprehensive disability discrimination research for personal cases',
    icon: Users,
    features: [
      'Full case timeline analysis',
      'ADA compliance assessment',
      'Relevant case law citations',
      'Educational tone optimization',
      'Actionable recommendations',
      '48-hour turnaround',
      'One revision included',
      'Email support'
    ],
    targetAudience: 'Individuals facing workplace discrimination',
    marketValue: '$3,600 traditional cost',
  },
  {
    name: 'Premium Research',
    status: 'Beta Testing',
    description: 'Multi-framework legal analysis with comprehensive case law research',
    icon: TrendingUp,
    features: [
      'Everything in Individual, plus:',
      'Multi-framework analysis (ADA, FMLA, State)',
      'Jurisdiction-specific research',
      'Economic impact calculations',
      'Settlement benchmarking',
      'Priority 24-hour delivery',
      'Three revisions included',
      'Phone consultation (1 hour)',
      'Litigation risk assessment'
    ],
    targetAudience: 'Legal professionals & advocates',
    marketValue: '$10,800 traditional cost',
    featured: true,
  },
  {
    name: 'Litigation-Ready',
    status: 'Coming Q2 2025',
    description: 'Complete documentation package prepared for legal proceedings',
    icon: Shield,
    features: [
      'Everything in Premium, plus:',
      'Litigation timeline preparation',
      'Evidence organization system',
      'Expert witness recommendations',
      'Damages calculation model',
      'Opposing counsel research',
      'Rush 12-hour delivery available',
      'Unlimited revisions for 30 days',
      'Weekly strategy calls',
      'Collaborative attorney access'
    ],
    targetAudience: 'Law firms & litigation teams',
    marketValue: '$21,600 traditional cost',
  },
  {
    name: 'Enterprise Compliance',
    status: 'Partner Beta',
    description: 'Organization-wide ADA compliance audits and training programs',
    icon: Building,
    features: [
      'Full organizational ADA audit',
      'Department-specific assessments',
      'Policy recommendation framework',
      'Training program development',
      'Quarterly compliance reviews',
      'Executive reporting dashboard',
      'Dedicated account manager',
      'Custom integration options',
      'White-label reporting available',
      'Ongoing support included'
    ],
    targetAudience: 'Fortune 500 & large organizations',
    marketValue: '$100K+ traditional cost',
    enterprise: true,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 animate-pulse" variant="default">
            <Sparkles className="h-4 w-4 mr-1" />
            Product Roadmap
          </Badge>
          <h1 className="text-4xl font-bold mb-4 glow-text">Revolutionary Pricing Coming Soon</h1>
          <p className="text-xl text-muted-foreground mb-6">
            95% less than traditional legal fees with 85% success rate
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI technology has already proven it can create $16,000 worth of legal value. 
            Join our early access program to be first in line when we launch.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-sm border-white/10 ${
                plan.featured ? 'ring-2 ring-primary transform scale-105' : ''
              }`}
            >
              <Badge 
                className="absolute top-4 right-4" 
                variant={plan.featured ? "default" : "secondary"}
              >
                {plan.status}
              </Badge>
              
              <CardHeader className="pt-12">
                {plan.icon && (
                  <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary">Market Value</p>
                  <p className="text-lg font-semibold">{plan.marketValue}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    <Users className="inline h-4 w-4 mr-1" />
                    {plan.targetAudience}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">PLANNED FEATURES</h3>
                  <ul className="space-y-2">
                    {plan.features.slice(0, 5).map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.features.length > 5 && (
                      <li className="text-sm text-muted-foreground pl-6">
                        +{plan.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href="/early-access">
                    <Clock className="mr-2 h-4 w-4" />
                    Join Early Access
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl">Why We&apos;re Different</CardTitle>
              <CardDescription>
                Our proven methodology creates extraordinary value
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Traditional Legal Research</p>
                  <p className="text-3xl font-bold text-red-500">$3,600 - $100K+</p>
                  <p className="text-sm text-muted-foreground mt-2">Weeks to months</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Our AI Solution</p>
                  <p className="text-3xl font-bold text-green-500">95% Less</p>
                  <p className="text-sm text-muted-foreground mt-2">48 hours or less</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Success Rate</p>
                  <p className="text-3xl font-bold text-primary">85%</p>
                  <p className="text-sm text-muted-foreground mt-2">Voluntary compliance</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">The $16,000 Validation</h3>
                <p className="text-muted-foreground mb-4">
                  Our technology has already created a legal document that would have cost 
                  $16,000 in traditional legal fees. The result? Complete voluntary compliance 
                  without litigation.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/case-studies/16k-document">
                    Read the Case Study →
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Be Part of the Movement</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 500+ advocates, legal professionals, and organizations waiting for 
              access to technology that&apos;s democratizing disability rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/early-access">
                  Reserve Your Spot
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/investors">
                  Investment Opportunities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}