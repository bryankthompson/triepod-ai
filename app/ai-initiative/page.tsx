import { TrendingUp, Target, Users, Zap, Shield, Award, Building, Lightbulb } from 'lucide-react';
import { ConsultationCTA } from '@/components/consultation-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State AI Initiative Positioning - Bryan Thompson AI Consultant',
  description: 'Position your organization for the $9 billion state AI initiative. Expert guidance from AI consultant with Fortune 500 experience. Ready to help your business capitalize on AI opportunities.',
  keywords: ['state AI initiative', 'AI government contracts', 'AI partnerships', 'state funding', 'AI consultant', 'enterprise AI'],
  openGraph: {
    title: 'State AI Initiative Positioning - Bryan Thompson AI Consultant',
    description: 'Capitalize on the $9B state AI initiative. Expert positioning and partnership guidance.',
    type: 'website',
  },
};

export default function AIInitiativePage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-6 animate-pulse">
          <TrendingUp className="h-4 w-4 mr-2" />
          $9 Billion State AI Initiative
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Position Your Organization for<br />
          <span className="text-primary">State AI Success</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Don&apos;t miss the opportunity of a generation. I help businesses strategically position themselves 
          to capitalize on the massive state AI initiative and secure partnerships that drive growth.
        </p>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-amber-700 font-medium">
            🚨 Early positioning is critical. Organizations that act now will have significant advantages 
            when opportunities become available.
          </p>
        </div>
      </div>

      {/* Opportunity Overview */}
      <div className="bg-card rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">The AI Initiative Opportunity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">$9 Billion Investment</h3>
            <p className="text-sm text-muted-foreground">
              Massive state investment in AI infrastructure, partnerships, and innovation programs
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Enterprise Partnerships</h3>
            <p className="text-sm text-muted-foreground">
              Direct collaboration opportunities with state agencies and major corporations
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="font-semibold text-lg mb-2">First-Mover Advantage</h3>
            <p className="text-sm text-muted-foreground">
              Organizations that position early will have preferential access to funding and partnerships
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Bryan Thompson */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Why I&apos;m Your Strategic Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Fortune 500 Experience</h3>
            </div>
            <p className="text-muted-foreground">
              Deep understanding of enterprise partnerships, government relations, and large-scale AI implementations. 
              I know how to position your organization for success at the highest levels.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Proven Results</h3>
            </div>
            <p className="text-muted-foreground">
              $16,000+ in validated business value with 85% project success rate. I deliver measurable results 
              that demonstrate your organization&apos;s AI readiness and capabilities.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Strategic Intelligence</h3>
            </div>
            <p className="text-muted-foreground">
              I monitor state AI initiatives, understand the competitive landscape, and know what decision-makers 
              are looking for in partnership candidates.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Network Access</h3>
            </div>
            <p className="text-muted-foreground">
              Connected with key stakeholders in the AI ecosystem, including government officials, enterprise leaders, 
              and technology partners.
            </p>
          </div>
        </div>
      </div>

      {/* Positioning Services */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">AI Initiative Positioning Services</h2>
        <div className="space-y-6">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Lightbulb className="h-5 w-5 text-primary mr-2" />
              Strategic Readiness Assessment
            </h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive evaluation of your organization&apos;s AI readiness and positioning for state initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">What We Analyze:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Current AI capabilities and infrastructure</li>
                  <li>• Partnership readiness and compliance status</li>
                  <li>• Competitive positioning and differentiation</li>
                  <li>• Government relations and proposal experience</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">You Receive:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Readiness assessment report with scoring</li>
                  <li>• Gap analysis and improvement recommendations</li>
                  <li>• Competitive landscape overview</li>
                  <li>• Action plan for positioning improvements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Target className="h-5 w-5 text-primary mr-2" />
              Partnership Strategy Development
            </h3>
            <p className="text-muted-foreground mb-4">
              Custom strategy to position your organization as an ideal partner for state AI initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Strategic Planning:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Partnership opportunity identification</li>
                  <li>• Value proposition development</li>
                  <li>• Stakeholder mapping and engagement strategy</li>
                  <li>• Proposal and presentation framework</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Implementation Support:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Partnership proposal templates</li>
                  <li>• Executive presentation materials</li>
                  <li>• Stakeholder introduction facilitation</li>
                  <li>• Ongoing strategic guidance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Zap className="h-5 w-5 text-primary mr-2" />
              Implementation Readiness Program
            </h3>
            <p className="text-muted-foreground mb-4">
              Accelerated program to demonstrate AI capabilities and prepare for immediate partnership opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Capability Building:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Quick-win AI implementation projects</li>
                  <li>• Team training and capability development</li>
                  <li>• Technology stack optimization</li>
                  <li>• Proof-of-concept development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Showcase Development:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Case study and success story creation</li>
                  <li>• Demo environment setup</li>
                  <li>• Executive briefing materials</li>
                  <li>• Partnership readiness certification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline and Investment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Timeline for Success</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium">Week 1-2: Assessment & Strategy</p>
                <p className="text-sm text-muted-foreground">Readiness evaluation and strategic planning</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium">Week 3-6: Implementation</p>
                <p className="text-sm text-muted-foreground">Capability building and positioning execution</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium">Week 7-8: Launch</p>
                <p className="text-sm text-muted-foreground">Partnership outreach and opportunity pursuit</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Investment & ROI</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Strategic Positioning Package</p>
              <p className="text-2xl font-bold text-primary">Starting at $25K</p>
              <p className="text-sm text-muted-foreground">Comprehensive positioning and readiness program</p>
            </div>
            <div className="border-t pt-4">
              <p className="font-medium">Potential Returns:</p>
              <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                <li>• Partnership contracts: $100K - $10M+</li>
                <li>• State funding opportunities: $50K - $5M+</li>
                <li>• Market positioning advantage: Invaluable</li>
                <li>• First-mover competitive edge: Significant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency Section */}
      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-700">Time-Sensitive Opportunity</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            The state AI initiative is moving fast. Organizations that begin positioning now will have significant 
            advantages over those who wait. Partnership opportunities are limited and will go to the most prepared candidates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">Limited</p>
              <p className="text-sm text-muted-foreground">Partnership slots available</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">Competitive</p>
              <p className="text-sm text-muted-foreground">Selection process expected</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">Early</p>
              <p className="text-sm text-muted-foreground">Advantage for prepared organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Position?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Don&apos;t let this opportunity pass by. Schedule a consultation to discuss how we can position 
          your organization for AI initiative success.
        </p>
      </div>

      <ConsultationCTA variant="primary" showBenefits={true} />
    </div>
  );
}