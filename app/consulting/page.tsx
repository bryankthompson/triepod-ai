import Link from 'next/link';
import { ArrowRight, Brain, CheckCircle, Clock, Users, Building, DollarSign, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Consulting Services - Bryan Thompson',
  description: 'Independent AI consulting and automation development services. Practical guidance for implementing AI solutions in your business or research project.',
  keywords: ['AI consulting', 'automation consulting', 'independent consultant', 'AI development', 'Mississippi consultant'],
  openGraph: {
    title: 'AI Consulting Services - Bryan Thompson',
    description: 'Independent AI consulting with focus on practical automation solutions.',
    type: 'website',
  },
};

export default function ConsultingPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              Independent AI Consulting
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              AI Consulting &<br />Development Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Independent consulting services for AI implementation and automation projects. 
              I help individuals and small businesses explore practical AI solutions and 
              build custom automation systems.
            </p>
          </div>

          {/* Service Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Assessment</h3>
              <p className="text-muted-foreground">
                Help you understand what&apos;s possible with AI for your specific needs and budget
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-muted-foreground">
                Build tailored automation solutions and AI tools for your specific use case
              </p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Training & Support</h3>
              <p className="text-muted-foreground">
                Help you understand and maintain the systems we build together
              </p>
            </div>
          </div>

          {/* Consulting Services */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
              Service Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Strategic Assessment */}
              <div className="bg-background border rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Consultation</h3>
                  <Badge variant="secondary">Starting Point</Badge>
                </div>
                
                <div className="text-3xl font-bold mb-2">$150/hr</div>
                <div className="text-sm text-muted-foreground mb-6">Flexible scheduling</div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Discuss your specific AI automation needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Explore what&apos;s feasible with your budget</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Recommendations for next steps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">No long-term commitment required</span>
                  </li>
                </ul>
                
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">Schedule Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>

              {/* Implementation Consulting */}
              <div className="bg-background border-2 border-primary rounded-xl p-8 shadow-sm relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Common</Badge>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Custom Development</h3>
                  <Badge variant="default">Project-Based</Badge>
                </div>
                
                <div className="text-3xl font-bold mb-2">Custom</div>
                <div className="text-sm text-muted-foreground mb-6">Project-based pricing</div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Build custom automation tools for your needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Work directly with you throughout development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Documentation and training included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Source code and full ownership</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Post-delivery support available</span>
                  </li>
                </ul>
                
                <Button className="w-full" asChild>
                  <Link href="/contact">Discuss Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>

              {/* Enterprise Partnership */}
              <div className="bg-background border rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Ongoing Support</h3>
                  <Badge variant="secondary">Monthly</Badge>
                </div>
                
                <div className="text-3xl font-bold mb-2">$750/mo</div>
                <div className="text-sm text-muted-foreground mb-6">Monthly retainer</div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Regular check-ins and system maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Priority support for issues and questions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Small improvements and feature additions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Monthly status reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-sm">Cancel anytime with 30-day notice</span>
                  </li>
                </ul>
                
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Industry Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Industry Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl p-6 border border-green-500/20">
                <Zap className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Agriculture</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Precision farming automation</li>
                  <li>• Catfish aquaculture optimization</li>
                  <li>• Crop yield prediction models</li>
                  <li>• Supply chain automation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20">
                <Shield className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Rural telemedicine systems</li>
                  <li>• Predictive diagnostic tools</li>
                  <li>• Patient care automation</li>
                  <li>• Medical record processing</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20">
                <TrendingUp className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Energy</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Smart grid optimization</li>
                  <li>• Renewable energy forecasting</li>
                  <li>• Energy efficiency automation</li>
                  <li>• Infrastructure monitoring</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl p-6 border border-red-500/20">
                <Building className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Defense</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cybersecurity automation</li>
                  <li>• Defense logistics optimization</li>
                  <li>• Security system integration</li>
                  <li>• Risk assessment tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Consulting Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Understand your goals, challenges, and AI readiness
                </p>
                <div className="text-xs text-muted-foreground mt-2">
                  <Clock className="h-3 w-3 inline mr-1" />
                  1-2 days
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed analysis of current systems and opportunities
                </p>
                <div className="text-xs text-muted-foreground mt-2">
                  <Clock className="h-3 w-3 inline mr-1" />
                  1-2 weeks
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Strategy Development</h3>
                <p className="text-sm text-muted-foreground">
                  Create comprehensive roadmap and implementation plan
                </p>
                <div className="text-xs text-muted-foreground mt-2">
                  <Clock className="h-3 w-3 inline mr-1" />
                  2-3 weeks
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on support for system deployment and integration
                </p>
                <div className="text-xs text-muted-foreground mt-2">
                  <Clock className="h-3 w-3 inline mr-1" />
                  1-6 months
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">5</span>
                </div>
                <h3 className="font-semibold mb-2">Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring and performance improvement
                </p>
                <div className="text-xs text-muted-foreground mt-2">
                  <Clock className="h-3 w-3 inline mr-1" />
                  Ongoing
                </div>
              </div>
            </div>
          </div>

          {/* Client Success Metrics */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Client Success Metrics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm font-medium mb-1">Implementation Success Rate</div>
                <div className="text-xs text-muted-foreground">Projects delivered on time and within budget</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm font-medium mb-1">Average Cost Reduction</div>
                <div className="text-xs text-muted-foreground">Process automation and efficiency gains</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6x</div>
                <div className="text-sm font-medium mb-1">ROI Multiplier</div>
                <div className="text-xs text-muted-foreground">Return on consulting investment within 18 months</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm font-medium mb-1">Client Satisfaction</div>
                <div className="text-xs text-muted-foreground">All clients would recommend our services</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Accelerate Your AI Strategy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert guidance from Mississippi&apos;s premier AI research firm. 
              Schedule a consultation to discuss your AI implementation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/research">
                  View Research Capabilities <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <DollarSign className="h-4 w-4 inline mr-1" />
                Flexible payment plans available • 
                <Users className="h-4 w-4 inline mx-1" />
                Enterprise packages • 
                <Shield className="h-4 w-4 inline mx-1" />
                Satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}