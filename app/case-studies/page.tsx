import Link from 'next/link';
import { ArrowRight, Check, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Real Results for Real People
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how our AI-powered disability rights research achieves voluntary compliance 
              and delivers exceptional value for our clients.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">
              <Check className="h-4 w-4 mr-2" />
              85% voluntary compliance rate across all cases
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 hover-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm font-medium">
                    Featured Case
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-500">$16,000</p>
                    <p className="text-sm text-muted-foreground">Value Created</p>
                  </div>
                </div>
                <CardTitle className="text-3xl">The $16,000 Document</CardTitle>
                <CardDescription className="text-lg">
                  How we created a legal research document worth $16,000 in traditional legal fees 
                  that achieved voluntary employer compliance in a workplace discrimination case.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold">95%</p>
                    <p className="text-sm text-muted-foreground">Cost Reduction</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold">48hrs</p>
                    <p className="text-sm text-muted-foreground">Delivery Time</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold">85%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/case-studies/16k-document">
                      Read Full Case Study <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}