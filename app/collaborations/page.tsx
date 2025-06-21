import Link from 'next/link';
import { ArrowRight, Users, Building, GraduationCap, Shield, Handshake, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Collaborations | Triepod AI Research',
  description: 'Partner with Triepod AI Research on cutting-edge AI projects in agriculture, healthcare, energy, and defense. Academic, industry, and government collaboration opportunities.',
  keywords: ['AI research collaboration', 'university partnerships', 'industry collaboration', 'NVIDIA partnership', 'Mississippi AI research'],
};

export default function CollaborationsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
            Research Collaborations
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Partnering for AI Innovation in Mississippi's Key Industries
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with universities, industry leaders, and government agencies to advance AI research 
            and support Mississippi's vision for technological leadership.
          </p>
        </div>

        {/* NVIDIA Partnership Highlight */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Badge className="bg-green-600 text-white px-4 py-2 text-lg">
                  <Award className="h-5 w-5 mr-2" />
                  Strategic Partnership
                </Badge>
              </div>
              <CardTitle className="text-3xl text-green-800">Mississippi-NVIDIA AI Partnership</CardTitle>
              <CardDescription className="text-lg">
                Aligned with the state's $9 billion AI initiative for education, workforce development, and economic growth
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Partnership Goals</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• AI research advancing Mississippi's key industries</li>
                    <li>• Educational programs for workforce development</li>
                    <li>• Economic development through technology innovation</li>
                    <li>• Position Mississippi as agricultural AI leader</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-3">Research Alignment</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Agriculture: Catfish farming AI automation</li>
                    <li>• Healthcare: Rural healthcare accessibility</li>
                    <li>• Energy: Smart grid optimization systems</li>
                    <li>• Defense: Cybersecurity and autonomous systems</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/contact?partnership=nvidia">
                    Partnership Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Collaboration Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Collaboration Opportunities</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Academic Partnerships */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Academic Institutions</CardTitle>
                <CardDescription>Universities and research organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Joint research projects and grants</li>
                  <li>• Student internship and research programs</li>
                  <li>• Faculty collaboration and knowledge exchange</li>
                  <li>• Curriculum development for AI education</li>
                  <li>• Conference presentations and publications</li>
                </ul>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-800 mb-2">Target Institutions</h4>
                  <p className="text-sm text-blue-700">
                    University of Mississippi, Mississippi State University, 
                    Jackson State University, Southern Miss
                  </p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact?collaboration=academic">
                    Academic Partnership <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Industry Partners */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Industry Leaders</CardTitle>
                <CardDescription>Companies and industry organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technology development partnerships</li>
                  <li>• Pilot program implementation</li>
                  <li>• Data sharing and collaborative research</li>
                  <li>• Product integration and testing</li>
                  <li>• Market validation and scaling</li>
                </ul>
                <div className="bg-green-50 rounded-lg p-3">
                  <h4 className="font-semibold text-green-800 mb-2">Focus Industries</h4>
                  <p className="text-sm text-green-700">
                    Agriculture, Healthcare, Energy, Manufacturing, 
                    Technology services
                  </p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact?collaboration=industry">
                    Industry Partnership <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Government Agencies */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Government Agencies</CardTitle>
                <CardDescription>Federal, state, and local government</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Policy development and analysis</li>
                  <li>• Grant-funded research projects</li>
                  <li>• Economic development initiatives</li>
                  <li>• Workforce training programs</li>
                  <li>• Technology assessment and evaluation</li>
                </ul>
                <div className="bg-purple-50 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-800 mb-2">Agency Focus</h4>
                  <p className="text-sm text-purple-700">
                    Mississippi Development Authority, USDA, DOE, 
                    Department of Defense
                  </p>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact?collaboration=government">
                    Government Partnership <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Collaborations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Collaborations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Mississippi Catfish Farmers</CardTitle>
                <CardDescription>Industry collaboration and research partnerships</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-green-700">
                  Working directly with family farms to develop and test AI automation solutions. 
                  Our Thompson family heritage provides authentic industry knowledge and community trust.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">Pilot Farms</span>
                    <span className="font-semibold text-green-800">5-10 operations</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">Research Focus</span>
                    <span className="font-semibold text-green-800">Profitability restoration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">NVIDIA AI Partnership</CardTitle>
                <CardDescription>State technology development initiative</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-blue-700">
                  Aligned with Mississippi's $9 billion NVIDIA partnership for AI education, 
                  workforce development, and economic growth in key industries.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Launch Date</span>
                    <span className="font-semibold text-blue-800">June 18, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Focus Areas</span>
                    <span className="font-semibold text-blue-800">4 key industries</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Partnership Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Partnership Framework</h2>
          <div className="grid lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-lg">1. Problem Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Identify real-world challenges in target industries through authentic experience and community collaboration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="text-lg">2. Collaborative Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Develop solutions through partnership with industry, academia, and government stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle className="text-lg">3. Practical Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Test and refine solutions in real-world environments with measurable impact metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-6 w-6 text-amber-500" />
                </div>
                <CardTitle className="text-lg">4. Knowledge Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Share findings through publications, presentations, and open collaboration with the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/5 to-green-500/5 rounded-lg p-8 border border-blue-200/20">
            <h3 className="text-3xl font-semibold mb-4">Ready to Collaborate?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Join us in advancing AI research for Mississippi's key industries. Whether you're from academia, 
              industry, or government, we welcome partnerships that create meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow" asChild>
                <Link href="/contact?collaboration=partnership">
                  Start a Partnership <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/research">
                  View Research Areas <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}