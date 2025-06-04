import Link from 'next/link';
import { ArrowRight, Check, Clock, FileText, Scale, Shield, Building, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Litigation-Ready Documentation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Complete Legal Documentation Package
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need for legal proceedings—comprehensive research, evidence organization, 
              and expert-level documentation worth $16,000+ in traditional legal services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/demo">
                  See Sample Package <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact?service=litigation">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Package Overview */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
              Litigation-Ready Package
            </h2>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="h-16 w-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-red-500" />
                </div>
                <CardTitle className="text-3xl">$2,997</CardTitle>
                <CardDescription className="text-lg">
                  Complete documentation package prepared for legal proceedings
                </CardDescription>
                <div className="mt-4 p-4 bg-green-500/10 text-green-500 rounded-lg font-medium">
                  Save $18,603 vs traditional legal preparation
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What&rsquo;s Included</h3>
                    <ul className="space-y-3">
                      {[
                        'Everything from Premium Research',
                        'Litigation timeline preparation',
                        'Evidence organization system',
                        'Expert witness recommendations',
                        'Damages calculation model',
                        'Opposing counsel research',
                        'Comprehensive case citations (30+)',
                        'Rush 12-hour delivery available'
                      ].map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Support & Revisions</h3>
                    <ul className="space-y-3">
                      {[
                        'Unlimited revisions for 30 days',
                        'Weekly strategy calls',
                        'Collaborative attorney access',
                        'Priority email/phone support',
                        'Document template library',
                        'Filing preparation assistance',
                        'Settlement negotiation support',
                        'Case status updates'
                      ].map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center pt-6 border-t border-white/10">
                  <Button size="lg" className="glow" asChild>
                    <Link href="/contact?service=litigation">
                      Prepare Your Case <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Documentation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 glow-text">
              Our Documentation Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Case Assessment</h3>
                <p className="text-sm text-muted-foreground">Comprehensive review and evidence inventory</p>
              </div>
              
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Legal Research</h3>
                <p className="text-sm text-muted-foreground">Extensive case law and precedent analysis</p>
              </div>
              
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">Complete package preparation</p>
              </div>
              
              <div className="text-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Review & Refine</h3>
                <p className="text-sm text-muted-foreground">Multiple revisions and attorney consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 glow-text">
              Ready for Litigation-Quality Documentation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the complete package that gives you everything needed for successful legal proceedings
            </p>
            <Button size="lg" className="glow" asChild>
              <Link href="/contact?service=litigation">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}