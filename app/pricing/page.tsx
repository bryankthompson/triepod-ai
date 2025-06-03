import { Check, X, TrendingUp, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const plans = [
  {
    name: 'Individual Advocacy',
    price: '$497',
    period: 'per report',
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
    notIncluded: [
      'Multi-framework analysis',
      'State law integration',
      'Economic impact calculations',
      'Expert consultation'
    ],
    savings: 'Save $3,103 vs traditional legal research',
    cta: 'Start Your Report',
    href: '/services/research',
  },
  {
    name: 'Premium Research',
    price: '$1,497',
    period: 'per package',
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
    notIncluded: [
      'Expert witness referrals',
      'Court filing preparation',
      'Direct legal representation'
    ],
    savings: 'Save $9,303 vs traditional legal research',
    cta: 'Start Premium Package',
    href: '/services/research#premium',
    featured: true,
  },
  {
    name: 'Litigation-Ready',
    price: '$2,997',
    period: 'per case',
    description: 'Complete documentation package prepared for legal proceedings',
    icon: Building,
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
    notIncluded: [
      'Court appearances',
      'Direct legal representation'
    ],
    savings: 'Save $18,603 vs traditional legal prep',
    cta: 'Prepare Your Case',
    href: '/services/documentation',
  },
  {
    name: 'Enterprise Compliance',
    price: '$10,000+',
    period: 'per audit',
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
    enterprise: true,
    cta: 'Schedule Consultation',
    href: '/contact',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 glow-text">95% Less Than Traditional Legal Fees</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Professional disability rights research that delivers results
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">
            <Check className="h-4 w-4 mr-2" />
            85% of our reports achieve voluntary compliance without litigation
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-white/5 backdrop-blur-sm border-white/10 ${
                plan.featured ? 'ring-2 ring-primary transform scale-105' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <CardHeader>
                {plan.icon && (
                  <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                  )}
                </div>
                
                {plan.savings && (
                  <div className="mb-6 p-3 bg-green-500/10 text-green-500 rounded-lg text-sm font-medium">
                    {plan.savings}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">INCLUDED</h3>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.notIncluded && (
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-3">NOT INCLUDED</h3>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature) => (
                          <li key={feature} className="flex items-start text-sm text-muted-foreground">
                            <X className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl">Compare to Traditional Legal Costs</CardTitle>
              <CardDescription>
                See how our AI-powered research compares to traditional legal services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Traditional Legal Research</p>
                  <p className="text-3xl font-bold text-red-500">$3,600 - $21,600</p>
                  <p className="text-sm text-muted-foreground mt-2">40-120 hours @ $300/hr</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Our AI Research</p>
                  <p className="text-3xl font-bold text-green-500">$497 - $2,997</p>
                  <p className="text-sm text-muted-foreground mt-2">Delivered in 48 hours</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Your Savings</p>
                  <p className="text-3xl font-bold text-primary">Up to 95%</p>
                  <p className="text-sm text-muted-foreground mt-2">Same quality results</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              All services include our proven educational tone methodology that achieved an 85% voluntary compliance rate.
            </p>
            <p className="text-sm text-muted-foreground">
              Questions about pricing?{' '}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{' '}
              or{' '}
              <Link href="/demo" className="text-primary hover:underline">
                book a demo
              </Link>{' '}
              to see a sample report.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}