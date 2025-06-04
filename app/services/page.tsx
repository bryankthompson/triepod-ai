import Link from 'next/link';
import { ArrowRight, FileText, Scale, Shield, Building, Users, TrendingUp, Check, Sparkles, Clock, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 animate-pulse" variant="default">
              <Sparkles className="h-4 w-4 mr-1" />
              Technology Under Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              AI Research Technology for Disability Rights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Revolutionary legal research and documentation services coming soon. 
              Join the movement democratizing access to justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/early-access">
                  Join Early Access <Rocket className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies/16k-document">
                  See $16,000 Proof of Concept
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 glow-text">
            Services Coming Soon
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our AI-powered platform will offer multiple service levels to meet 
            every need—from individual advocacy to enterprise compliance
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hover-card rounded-xl p-6 gradient-animate relative">
              <Badge className="absolute top-4 right-4" variant="secondary">
                Coming Soon
              </Badge>
              <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Individual Advocacy</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive research reports for personal discrimination cases
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <Users className="inline h-4 w-4 mr-1" />
                For individuals facing discrimination
              </p>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/early-access">
                  Reserve Your Spot →
                </Link>
              </Button>
            </div>

            <div className="hover-card rounded-xl p-6 gradient-animate relative">
              <Badge className="absolute top-4 right-4" variant="default">
                Beta Testing
              </Badge>
              <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Research</h3>
              <p className="text-muted-foreground mb-4">
                Multi-framework analysis with case law citations
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <Users className="inline h-4 w-4 mr-1" />
                For legal professionals
              </p>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/early-access">
                  Join Beta Program →
                </Link>
              </Button>
            </div>

            <div className="hover-card rounded-xl p-6 gradient-animate relative">
              <Badge className="absolute top-4 right-4" variant="secondary">
                Q2 2025
              </Badge>
              <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Litigation-Ready</h3>
              <p className="text-muted-foreground mb-4">
                Complete documentation for legal proceedings
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <Users className="inline h-4 w-4 mr-1" />
                For law firms & litigation teams
              </p>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/early-access">
                  Get Early Access →
                </Link>
              </Button>
            </div>

            <div className="hover-card rounded-xl p-6 gradient-animate relative">
              <Badge className="absolute top-4 right-4" variant="secondary">
                Partner Beta
              </Badge>
              <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Organization-wide ADA compliance audits
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <Users className="inline h-4 w-4 mr-1" />
                For Fortune 500 companies
              </p>
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/contact">
                  Contact for Beta →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 gradient-animate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Revolutionary Approach, Proven Results
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our AI technology has already created $16,000 in validated legal value
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 rounded-xl p-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">85% Success Rate</h3>
                <p className="text-muted-foreground">
                  Voluntary compliance without litigation
                </p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">95% Cost Reduction</h3>
                <p className="text-muted-foreground">
                  Compared to traditional legal services
                </p>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">48-Hour Delivery</h3>
                <p className="text-muted-foreground">
                  What takes weeks, we&rsquo;ll do in days
                </p>
              </div>
            </div>

            <Button size="lg" className="glow" asChild>
              <Link href="/investors">
                Learn About Investment Opportunities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-12 text-center">
            <Badge className="mb-4 animate-pulse" variant="default">
              Limited Spots Available
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Be Among the First</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 500+ advocates, legal professionals, and organizations waiting 
              for access to revolutionary AI technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/early-access">
                  Join the Waitlist <Rocket className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies/16k-document">
                  View Success Story
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              <Users className="inline h-4 w-4 mr-1" />
              Only 1,000 early access spots available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}