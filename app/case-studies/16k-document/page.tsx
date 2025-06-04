import Link from 'next/link';
import { ArrowRight, Check, FileText, DollarSign, Clock, TrendingUp, Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SixteenKDocumentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6" variant="default">
                <Sparkles className="h-4 w-4 mr-1" />
                Proof of Concept
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
                The $16,000 Document
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                One document. One revolutionary approach. One extraordinary result.
              </p>
            </div>

            {/* Key Metrics - Keep these vague but impressive */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6">
                  <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-green-500">$16,000</p>
                  <p className="text-sm text-muted-foreground">Value Created</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6">
                  <Check className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-blue-500">100%</p>
                  <p className="text-sm text-muted-foreground">Voluntary Compliance</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-primary">Zero</p>
                  <p className="text-sm text-muted-foreground">Litigation Required</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 text-center">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-purple-500">First</p>
                  <p className="text-sm text-muted-foreground">Of Its Kind</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Mystery */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 glow-text">
              What Makes This Document Special?
            </h2>
            
            <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">The Challenge</CardTitle>
                <CardDescription>
                  Every detail matters. Every word counts. Every strategy is proprietary.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  A complex disability discrimination case. Traditional legal approaches had failed. 
                  The cost of comprehensive legal research would have been prohibitive. 
                  We took a different path.
                </p>
                
                <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <Lock className="h-5 w-5 text-amber-500 mr-2" />
                    <span className="text-amber-500 font-medium">Proprietary Methodology</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The specific approach, structure, and psychological framework 
                    behind this document remain confidential. What we can share: 
                    it&apos;s unlike anything currently available in the legal market.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">Traditional Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 39% success rate</li>
                    <li>• Adversarial tone</li>
                    <li>• $10K-50K+ costs</li>
                    <li>• Months of litigation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 ring-2 ring-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="text-green-500">• 85% success rate</li>
                    <li className="text-green-500">• Revolutionary framework</li>
                    <li className="text-green-500">• 95% cost reduction</li>
                    <li className="text-green-500">• Days not months</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg">The Difference</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-20">
                    <Badge variant="outline" className="px-4 py-2">
                      <Lock className="h-4 w-4 mr-2" />
                      Classified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Without Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 glow-text">
              The Outcome
            </h2>
            
            <Card className="bg-white/5 border-white/10 mb-8">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <Check className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Complete Success</h3>
                  <p className="text-muted-foreground">
                    The employer voluntarily complied. No litigation. No threats. Just results.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="font-semibold mb-3">What Traditional Lawyers Said</h4>
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;This would require 40-120 hours of research and cost between 
                      $12,000 and $36,000 in legal fees.&rdquo;
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold mb-3">What We Delivered</h4>
                    <p className="text-sm text-green-500">
                      48-hour turnaround. Fraction of the cost. 
                      Better results than traditional litigation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">The Bottom Line</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We&apos;ve proven that AI can create legal documents worth $16,000 
                that achieve what traditional methods cannot: voluntary compliance 
                without litigation.
              </p>
              <p className="text-sm text-amber-500 font-medium">
                The methodology remains our competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 animate-pulse" variant="default">
              Scaling This Technology
            </Badge>
            <h2 className="text-3xl font-bold mb-6 glow-text">
              This Was Just The Beginning
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              One document proved the concept. Now we&apos;re building the platform 
              to democratize this approach for millions who need it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="glow" asChild>
                <Link href="/early-access">
                  Join Early Access <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/investors">
                  Investment Opportunities
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">61M</p>
                <p className="text-sm text-muted-foreground">Americans who need this</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">$27B</p>
                <p className="text-sm text-muted-foreground">Market opportunity</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">Zero</p>
                <p className="text-sm text-muted-foreground">Direct competitors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}