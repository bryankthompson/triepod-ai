import Link from 'next/link';
import { ArrowRight, Check, FileText, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Live Demo Available
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              See Our $16,000 Document in Action
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the actual research document that achieved voluntary employer compliance 
              and saved thousands in legal fees—now available as a replicable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/case-studies/16k-document">
                  View Full Case Study <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Request Custom Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 glow-text">
            What You&rsquo;ll See in Our Demo
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/5 border-white/10 hover-card">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Document Quality</CardTitle>
                <CardDescription>
                  Professional-grade legal research with 30+ case citations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Comprehensive case law analysis
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Multi-framework integration
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Educational tone optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover-card">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Proven Results</CardTitle>
                <CardDescription>
                  85% voluntary compliance rate vs 39% traditional approach
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Workplace accommodation achieved
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    No litigation required
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    $16,000 in legal value created
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover-card">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Cost Savings</CardTitle>
                <CardDescription>
                  95% reduction in costs compared to traditional legal services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    48-hour turnaround time
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    $497-$2,997 vs $8,000-$16,000
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Same quality outcomes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}