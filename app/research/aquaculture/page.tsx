import Link from 'next/link';
import { ArrowRight, ArrowLeft, Fish, TrendingUp, AlertTriangle, Target, DollarSign, BarChart3, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aquaculture AI Research - Thompson Family Heritage in Mississippi Catfish Farming | Triepod AI',
  description: 'Leveraging authentic Thompson family catfish farming heritage to develop AI solutions for Mississippi\'s $230M aquaculture industry. From farm to AI innovation.',
  keywords: ['aquaculture AI', 'catfish farming', 'Mississippi aquaculture', 'Thompson family farm', 'AI automation', 'catfish industry research', 'farm profitability'],
  openGraph: {
    title: 'Aquaculture AI Research - Thompson Family Heritage | Triepod AI',
    description: 'From Pluto Plantation catfish farm to AI innovation. Authentic industry knowledge meets cutting-edge automation research.',
    type: 'website',
  },
};

export default function AquacultureResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          href="/research" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research Areas
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-green-500/10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-6">
              <Fish className="h-4 w-4 mr-2" />
              Thompson Family Heritage Research
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Aquaculture AI Research
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
              From Catfish Farm to AI Innovation
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Built on authentic Thompson family catfish farming heritage, our aquaculture AI research 
              addresses the real challenges facing Mississippi's $230M catfish industry—America's largest 
              aquaculture sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact?research=aquaculture">
                  Research Partnership <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#industry-challenge">
                  Industry Challenge
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Thompson Family Heritage */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
                🐟 Our Story: Pluto Plantation to AI Innovation
              </h2>
              <p className="text-lg text-muted-foreground">
                Authentic industry knowledge meets cutting-edge AI research
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/80 backdrop-blur border border-blue-200/50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Thompson Family Farm Heritage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Pluto Plantation</strong> - Multi-generational Thompson family catfish operation 
                    where our founder Bryan Thompson grew up learning the practical realities of Mississippi aquaculture.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Robert Thompson</strong> - Father and experienced catfish farmer</li>
                    <li>• <strong>Family Operation</strong> - Hands-on experience from childhood</li>
                    <li>• <strong>Operational Knowledge</strong> - Understanding real-world challenges</li>
                    <li>• <strong>Community Roots</strong> - Connected to local farming networks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur border border-green-200/50">
                <CardHeader>
                  <CardTitle className="text-green-800">From COVID Recovery to AI Innovation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    When COVID took Bryan's leg in 2021, he dedicated his recovery to learning AI—not as an 
                    outsider entering agriculture, but as a farmer's son building solutions for family and neighbors.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Personal Stakes</strong> - Family business success depends on industry health</li>
                    <li>• <strong>Insider Perspective</strong> - Understanding farmer pain points firsthand</li>
                    <li>• <strong>Community Impact</strong> - Solutions benefit neighbors and friends</li>
                    <li>• <strong>Legacy Motivation</strong> - Preserving family farming tradition</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-600/5 rounded-lg p-6 border border-blue-200/30">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Why This Heritage Matters</h3>
              <p className="text-muted-foreground">
                <strong>This isn't just technical expertise—it's personal investment.</strong> Every AI solution we develop 
                comes from genuine understanding of what Mississippi catfish farmers face daily. We don't just study 
                the industry; we've lived it, worked it, and have family counting on its success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenge */}
      <section className="py-20" id="industry-challenge">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
                Mississippi Catfish Industry: Crisis & Opportunity
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Understanding the profitability crisis facing 150+ family farms—and how AI can provide solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Industry Stats */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-700">🏆 Industry Leadership Position</h3>
                <div className="space-y-4">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Annual Industry Value</span>
                        <span className="text-xl font-bold text-green-700">$230M</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">National Market Share</span>
                        <span className="text-xl font-bold text-green-700">57%</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Active Farms</span>
                        <span className="text-xl font-bold text-green-700">205</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Production Acres</span>
                        <span className="text-xl font-bold text-green-700">29,900</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Profitability Crisis */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-700">⚠️ Profitability Crisis</h3>
                <div className="space-y-4">
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">Production Costs</span>
                          <span className="text-xl font-bold text-red-700">$1.12-$1.30/lb</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">Farm Prices</span>
                          <span className="text-xl font-bold text-red-700">$1.10-$1.15/lb</span>
                        </div>
                        <div className="text-sm text-red-600 font-medium bg-red-100 p-2 rounded">
                          Most farms operating at a LOSS
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Farm Size Distribution</h4>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• <strong>Large operations (700-2,000 acres):</strong> 1/3 of farms - Profitable</li>
                      <li>• <strong>Small/Medium (80-300 acres):</strong> 2/3 of farms - Struggling</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Success Story: Efficiency Gains</h4>
                    <p className="text-sm text-blue-700">
                      Industry yields improved from <strong>3,900 lbs/acre (2009)</strong> to 
                      <strong>7,200 lbs/acre (2023)</strong> - proving optimization works!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
                AI Solutions for Catfish Farming Profitability
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Helping small and medium farms achieve large-farm efficiency through intelligent automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Smart Pond Monitoring */}
              <Card className="bg-background border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>Smart Pond Monitoring</CardTitle>
                  <CardDescription>IoT sensors + computer vision systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-time water quality monitoring</li>
                    <li>• Automated oxygen level management</li>
                    <li>• Early disease detection systems</li>
                    <li>• Predictive maintenance alerts</li>
                  </ul>
                  <div className="bg-blue-500/5 rounded-lg p-3">
                    <p className="text-sm font-medium text-blue-700">
                      Target: 25% reduction in fish mortality
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Feed Optimization */}
              <Card className="bg-background border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-green-500" />
                  </div>
                  <CardTitle>AI Feed Optimization</CardTitle>
                  <CardDescription>Machine learning for feeding efficiency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automated feeding schedule optimization</li>
                    <li>• Weather-based feeding adjustments</li>
                    <li>• Feed conversion ratio improvement</li>
                    <li>• Waste reduction algorithms</li>
                  </ul>
                  <div className="bg-green-500/5 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-700">
                      Target: 15-20% reduction in feed costs
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Profitability Analytics */}
              <Card className="bg-background border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-amber-500" />
                  </div>
                  <CardTitle>Profitability Analytics</CardTitle>
                  <CardDescription>Economic optimization for small farms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cost per pound optimization</li>
                    <li>• Market timing predictions</li>
                    <li>• Resource allocation efficiency</li>
                    <li>• ROI analysis and planning</li>
                  </ul>
                  <div className="bg-amber-500/5 rounded-lg p-3">
                    <p className="text-sm font-medium text-amber-700">
                      Goal: Help small farms achieve profitability
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Disease Prevention */}
              <Card className="bg-background border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle>Disease Prevention AI</CardTitle>
                  <CardDescription>Early detection and intervention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Computer vision health monitoring</li>
                    <li>• Behavioral pattern analysis</li>
                    <li>• Predictive health analytics</li>
                    <li>• Automated treatment recommendations</li>
                  </ul>
                  <div className="bg-red-500/5 rounded-lg p-3">
                    <p className="text-sm font-medium text-red-700">
                      Target: 60% faster intervention times
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Environmental Controls */}
              <Card className="bg-background border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                  <CardTitle>Environmental Controls</CardTitle>
                  <CardDescription>Automated climate management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Temperature regulation systems</li>
                    <li>• Automated water circulation</li>
                    <li>• Weather response protocols</li>
                    <li>• Energy efficiency optimization</li>
                  </ul>
                  <div className="bg-purple-500/5 rounded-lg p-3">
                    <p className="text-sm font-medium text-purple-700">
                      Target: 30% improvement in yield consistency
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Community Impact */}
              <Card className="bg-background border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-indigo-500" />
                  </div>
                  <CardTitle>Community Network</CardTitle>
                  <CardDescription>Collaborative farming intelligence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Regional data sharing platforms</li>
                    <li>• Collaborative problem solving</li>
                    <li>• Best practices distribution</li>
                    <li>• Industry-wide optimization</li>
                  </ul>
                  <div className="bg-indigo-500/5 rounded-lg p-3">
                    <p className="text-sm font-medium text-indigo-700">
                      Vision: Elevate entire Mississippi industry
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
                Projected Research Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Measurable outcomes for Mississippi's catfish farming community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Economic Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Feed Cost Reduction</span>
                      <span className="font-bold text-green-700">15-20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mortality Reduction</span>
                      <span className="font-bold text-green-700">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Operational Efficiency</span>
                      <span className="font-bold text-green-700">30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Yield Consistency</span>
                      <span className="font-bold text-green-700">35%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">Industry Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• <strong>150+ family farms</strong> benefit from AI solutions</li>
                    <li>• <strong>Small/medium farms</strong> achieve large-farm efficiency</li>
                    <li>• <strong>Industry profitability</strong> restored through optimization</li>
                    <li>• <strong>Mississippi leadership</strong> in aquaculture innovation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-blue-600/5 to-green-500/5 rounded-lg p-8 border border-blue-200/20">
              <h3 className="text-2xl font-semibold mb-4 text-center">Our Commitment to the Industry</h3>
              <p className="text-lg text-muted-foreground text-center mb-6">
                <strong>This research isn't just academic—it's personal.</strong> Every breakthrough benefits our family, 
                our neighbors, and the industry that raised us. We're committed to practical solutions that real farms 
                can implement and afford.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="glow" asChild>
                  <Link href="/contact?research=aquaculture">
                    Partner with Our Research <ArrowRight className="ml-2 h-5 w-5" />
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
        </div>
      </section>
    </div>
  );
}