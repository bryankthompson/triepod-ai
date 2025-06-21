import Link from 'next/link';
import { ArrowRight, Leaf, Heart, Zap, Shield, Fish, Brain, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Research Areas - Agriculture, Aquaculture, Healthcare, Energy & Defense | Triepod AI Research',
  description: 'Explore our cutting-edge AI research across Mississippi\'s key industries: agriculture automation, aquaculture AI, healthcare AI, energy optimization, and defense systems. Supporting the NVIDIA partnership initiative.',
  keywords: ['AI research', 'agriculture automation', 'healthcare AI', 'energy optimization', 'defense AI', 'Mississippi NVIDIA partnership', 'automation research'],
  openGraph: {
    title: 'AI Research Areas - Supporting Mississippi\'s NVIDIA Partnership',
    description: 'Advanced automation research across agriculture, healthcare, energy, and defense industries.',
    type: 'website',
  },
};

export default function ResearchAreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Target className="h-4 w-4 mr-2" />
              NVIDIA Partnership Research
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Five Pillars of AI Research
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advancing Mississippi&apos;s economic future through cutting-edge automation research 
              in agriculture, aquaculture, healthcare, energy, and defense. Supporting the state&apos;s historic 
              NVIDIA partnership for AI education and workforce development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact">
                  Research Partnership <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#research-areas">
                  Explore Research Areas
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="py-20 bg-muted/50" id="research-areas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Research Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each research area addresses critical challenges in Mississippi&apos;s key industries, 
              with practical automation solutions that drive economic growth and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Agriculture AI Research */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Agriculture AI</CardTitle>
                    <CardDescription>Precision farming and crop optimization</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Developing AI-driven automation systems for Mississippi&apos;s agricultural sector, 
                  focusing on cotton, soybean, and catfish farming optimization through precision agriculture technologies.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Current Research Projects:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automated crop monitoring using computer vision and IoT sensors</li>
                    <li>• Predictive yield optimization for cotton and soybean production</li>
                    <li>• Smart irrigation systems with water conservation algorithms</li>
                    <li>• Automated pest detection and precision treatment systems</li>
                    <li>• Supply chain optimization for agricultural products</li>
                  </ul>
                </div>

                <div className="bg-green-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">Impact Potential:</h4>
                  <p className="text-sm text-muted-foreground">
                    20% increase in crop yields, 30% reduction in water usage, 
                    15% decrease in operational costs for Mississippi farmers.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=agriculture">
                    Collaborate on Agriculture AI <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Aquaculture AI Research */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center">
                    <Fish className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Aquaculture AI</CardTitle>
                    <CardDescription>Thompson family heritage in catfish farming</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Leveraging deep family heritage in Mississippi catfish farming to develop AI solutions 
                  for the state&apos;s $230M aquaculture industry—America&apos;s largest catfish producer.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Current Research Projects:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Smart pond monitoring with IoT sensors and computer vision</li>
                    <li>• AI-driven feed optimization reducing costs by 15-20%</li>
                    <li>• Automated disease detection and early intervention systems</li>
                    <li>• Water quality management and automated environmental controls</li>
                    <li>• Profitability analysis helping small farms compete with large operations</li>
                  </ul>
                </div>

                <div className="bg-blue-600/5 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Industry Impact:</h4>
                  <p className="text-sm text-muted-foreground">
                    Mississippi leads US catfish production (57% of national output). 
                    Our research targets the profitability crisis affecting 150+ family farms.
                  </p>
                </div>

                <div className="bg-amber-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 mb-2">Family Heritage:</h4>
                  <p className="text-sm text-muted-foreground">
                    Built on authentic operational knowledge from the Thompson family catfish 
                    farming operation—bringing insider perspective to AI innovation.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=aquaculture">
                    Collaborate on Aquaculture AI <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Healthcare AI Research */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-8 w-8 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Healthcare AI</CardTitle>
                    <CardDescription>Rural healthcare and diagnostic automation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Creating AI solutions to improve healthcare access in rural Mississippi, 
                  focusing on telemedicine automation, predictive diagnostics, and patient care optimization.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Current Research Projects:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automated diagnostic systems for underserved communities</li>
                    <li>• Telemedicine platforms with AI-assisted consultations</li>
                    <li>• Predictive health analytics for chronic disease management</li>
                    <li>• Automated patient monitoring and alert systems</li>
                    <li>• Healthcare workflow optimization for rural clinics</li>
                  </ul>
                </div>

                <div className="bg-blue-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Impact Potential:</h4>
                  <p className="text-sm text-muted-foreground">
                    50% improvement in rural healthcare access, 25% faster diagnosis times, 
                    35% reduction in preventable complications.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=healthcare">
                    Collaborate on Healthcare AI <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Energy AI Research */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-8 w-8 text-yellow-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Energy AI</CardTitle>
                    <CardDescription>Smart grid and renewable optimization</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Advancing smart grid technologies and renewable energy systems through AI automation, 
                  supporting Mississippi&apos;s energy infrastructure modernization and sustainability goals.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Current Research Projects:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Smart grid management and automated load balancing</li>
                    <li>• Solar energy forecasting and optimization algorithms</li>
                    <li>• Energy efficiency automation for industrial facilities</li>
                    <li>• Predictive maintenance for power generation equipment</li>
                    <li>• Grid resilience and automated fault detection systems</li>
                  </ul>
                </div>

                <div className="bg-yellow-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Impact Potential:</h4>
                  <p className="text-sm text-muted-foreground">
                    40% improvement in grid efficiency, 25% increase in renewable integration, 
                    30% reduction in energy costs for consumers.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=energy">
                    Collaborate on Energy AI <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Defense AI Research */}
            <Card className="bg-background border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-8 w-8 text-red-500" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Defense AI</CardTitle>
                    <CardDescription>Security automation and logistics</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Developing advanced automation systems for defense applications, 
                  including cybersecurity, logistics optimization, and autonomous security systems.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Current Research Projects:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cybersecurity automation and threat detection systems</li>
                    <li>• Defense logistics optimization and supply chain automation</li>
                    <li>• Autonomous security monitoring and response systems</li>
                    <li>• Predictive maintenance for defense equipment</li>
                    <li>• Communication systems optimization and automation</li>
                  </ul>
                </div>

                <div className="bg-red-500/5 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2">Impact Potential:</h4>
                  <p className="text-sm text-muted-foreground">
                    60% faster threat response times, 45% improvement in logistics efficiency, 
                    50% reduction in security vulnerabilities.
                  </p>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact?research=defense">
                    Collaborate on Defense AI <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Our Research Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systematic approach ensuring practical impact and alignment with NVIDIA partnership goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Industry Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Deep dive into Mississippi&apos;s key sectors to identify automation opportunities and challenges
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Research Design</h3>
              <p className="text-sm text-muted-foreground">
                Develop frameworks aligned with NVIDIA partnership goals and state economic objectives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Prototype Development</h3>
              <p className="text-sm text-muted-foreground">
                Build and test automation solutions using cutting-edge AI technologies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Impact Validation</h3>
              <p className="text-sm text-muted-foreground">
                Measure outcomes, publish findings, and collaborate for real-world implementation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Collaborate with Mississippi&apos;s leading AI research firm to advance automation 
              research in your industry. Together, we&apos;ll drive innovation and economic growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-background border text-center">
                <CardHeader>
                  <CardTitle>Academic Partnerships</CardTitle>
                  <CardDescription>
                    Collaborate with universities and research institutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact?partnership=academic">
                      Partner with Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-background border text-center">
                <CardHeader>
                  <CardTitle>Industry Collaboration</CardTitle>
                  <CardDescription>
                    Work with leading companies in agriculture, healthcare, energy, and defense
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact?partnership=industry">
                      Collaborate Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-background border text-center">
                <CardHeader>
                  <CardTitle>Government Relations</CardTitle>
                  <CardDescription>
                    Support state initiatives and NVIDIA partnership programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact?partnership=government">
                      Get Involved
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact">
                  Start Research Partnership <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">
                  Read Our Research <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}