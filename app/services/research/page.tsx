import Link from 'next/link';
import { ArrowRight, Check, Clock, FileText, Scale, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-6">
              <Check className="h-4 w-4 mr-2" />
              85% Voluntary Compliance Rate
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Disability Rights Research That Gets Results
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional-grade legal research documents that achieve voluntary compliance 
              without the $8,000-$16,000 cost of traditional legal services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/demo">
                  See Sample Report <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#packages">
                  Choose Your Package
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
              Our Proven Research Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Document Analysis</h3>
                <p className="text-muted-foreground">
                  Comprehensive review of your case materials, communications, and timeline
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Legal Research</h3>
                <p className="text-muted-foreground">
                  Identification of relevant case law, statutes, and regulatory guidance
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Framework Integration</h3>
                <p className="text-muted-foreground">
                  Multi-framework analysis combining ADA, FMLA, and applicable state laws
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Educational Documentation</h3>
                <p className="text-muted-foreground">
                  Professional document creation using our collaborative tone methodology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Packages */}
      <section className="py-20" id="packages">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
            Choose Your Research Package
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Individual Advocacy */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover-card">
              <CardHeader>
                <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Individual Advocacy</CardTitle>
                <CardDescription>
                  Comprehensive disability discrimination research for personal cases
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$497</span>
                  <span className="text-muted-foreground text-sm ml-2">per report</span>
                </div>
                <div className="mt-2 p-3 bg-green-500/10 text-green-500 rounded-lg text-sm font-medium">
                  Save $3,103 vs traditional legal research
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">WHAT&apos;S INCLUDED</h3>
                  <ul className="space-y-2">
                    {[
                      'Full case timeline analysis',
                      'ADA compliance assessment', 
                      'Relevant case law citations (10-15)',
                      'Educational tone optimization',
                      'Actionable recommendations',
                      '48-hour turnaround',
                      'One revision included',
                      'Email support'
                    ].map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Perfect For:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Workplace accommodation requests</li>
                    <li>• Housing discrimination cases</li>
                    <li>• Public access violations</li>
                    <li>• Educational institution issues</li>
                  </ul>
                </div>
                
                <Button className="w-full" asChild>
                  <Link href="/contact?service=individual">
                    Start Individual Report <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Research */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover-card ring-2 ring-primary relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-bl-lg">
                Most Popular
              </div>
              
              <CardHeader>
                <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Premium Research</CardTitle>
                <CardDescription>
                  Multi-framework legal analysis with comprehensive case law research
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$1,497</span>
                  <span className="text-muted-foreground text-sm ml-2">per package</span>
                </div>
                <div className="mt-2 p-3 bg-green-500/10 text-green-500 rounded-lg text-sm font-medium">
                  Save $9,303 vs traditional legal research
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">EVERYTHING IN INDIVIDUAL, PLUS:</h3>
                  <ul className="space-y-2">
                    {[
                      'Multi-framework analysis (ADA, FMLA, State)',
                      'Jurisdiction-specific research',
                      'Economic impact calculations',
                      'Settlement benchmarking',
                      'Extensive case citations (20-30)',
                      'Priority 24-hour delivery',
                      'Three revisions included',
                      'Phone consultation (1 hour)',
                      'Litigation risk assessment'
                    ].map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Perfect For:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complex discrimination cases</li>
                    <li>• Multiple legal framework overlap</li>
                    <li>• High-stakes workplace issues</li>
                    <li>• Preparation for attorney consultation</li>
                  </ul>
                </div>
                
                <Button className="w-full" asChild>
                  <Link href="/contact?service=premium">
                    Start Premium Package <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Research Timeline
                </CardTitle>
                <CardDescription>
                  What happens after you submit your case materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">24 Hours</div>
                    <p className="text-sm text-muted-foreground">Case analysis and research plan development</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">24-48 Hours</div>
                    <p className="text-sm text-muted-foreground">Legal research, citation gathering, and document drafting</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">48-72 Hours</div>
                    <p className="text-sm text-muted-foreground">Final review, optimization, and delivery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Reports */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              See What You Get
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Review sample reports and see the quality of research that achieves results
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 hover-card">
                <CardHeader>
                  <CardTitle>The $16K Document</CardTitle>
                  <CardDescription>
                    See the actual research document that created $16,000 in legal value
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/case-studies/16k-document">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 hover-card">
                <CardHeader>
                  <CardTitle>Interactive Demo</CardTitle>
                  <CardDescription>
                    See how our research process works with a sample case
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="/demo">
                      Try Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Ready to Start Your Research?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get professional disability rights research that achieves results—without the legal bills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">
                  Compare All Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}