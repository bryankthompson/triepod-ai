import Link from 'next/link';
import { Calendar, User, ExternalLink, FileText, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Publications | Triepod AI Research',
  description: 'Explore our published research on AI applications in agriculture, healthcare, energy, and defense. Academic papers, case studies, and industry analyses.',
  keywords: ['AI research publications', 'agriculture AI', 'Mississippi research', 'academic papers', 'industry analysis'],
};

interface Publication {
  id: string;
  title: string;
  authors: string[];
  type: 'research-paper' | 'case-study' | 'industry-analysis' | 'white-paper';
  category: 'agriculture' | 'healthcare' | 'energy' | 'defense' | 'general';
  date: string;
  abstract: string;
  url?: string;
  blogUrl?: string;
  featured: boolean;
  citations?: number;
}

const publications: Publication[] = [
  {
    id: 'catfish-profitability-crisis-ai',
    title: 'Solving Mississippi\'s Catfish Profitability Crisis with AI',
    authors: ['Triepod AI Research Team'],
    type: 'industry-analysis',
    category: 'agriculture',
    date: '2025-06-21',
    abstract: 'Comprehensive analysis of Mississippi\'s $230M catfish industry profitability crisis and how AI automation can help 150+ family farms return to sustainable profits through smart technology implementation.',
    blogUrl: '/blog/solving-mississippis-catfish-profitability-crisis-with-ai',
    featured: true
  },
  {
    id: 'thompson-family-story',
    title: 'From Farm to AI: A Thompson Family Story',
    authors: ['Bryan Thompson'],
    type: 'case-study',
    category: 'agriculture',
    date: '2025-06-21',
    abstract: 'Case study documenting the transformation from traditional catfish farming to AI innovation, highlighting the importance of authentic industry knowledge in developing practical agricultural technology solutions.',
    blogUrl: '/blog/from-farm-to-ai-a-thompson-family-story',
    featured: true
  },
  {
    id: 'ai-farm-automation-framework',
    title: 'AI-Driven Farm Automation Framework for Small-Scale Aquaculture',
    authors: ['Bryan Thompson', 'Triepod AI Research Team'],
    type: 'research-paper',
    category: 'agriculture',
    date: '2025-06-20',
    abstract: 'Technical framework for implementing AI automation in small to medium-sized catfish farming operations, focusing on cost-effective solutions that improve profitability and sustainability.',
    featured: false
  },
  {
    id: 'nvidia-partnership-opportunities',
    title: 'Mississippi-NVIDIA Partnership: Opportunities for Agricultural AI',
    authors: ['Triepod AI Research Team'],
    type: 'white-paper',
    category: 'general',
    date: '2025-06-19',
    abstract: 'Analysis of the Mississippi-NVIDIA partnership opportunities for advancing AI research and implementation in the state\'s key industries, with focus on agricultural technology development.',
    featured: false
  }
];

const typeLabels = {
  'research-paper': 'Research Paper',
  'case-study': 'Case Study',
  'industry-analysis': 'Industry Analysis',
  'white-paper': 'White Paper'
};

const categoryLabels = {
  'agriculture': 'Agriculture',
  'healthcare': 'Healthcare',
  'energy': 'Energy',
  'defense': 'Defense',
  'general': 'General'
};

const categoryColors = {
  'agriculture': 'bg-green-100 text-green-800',
  'healthcare': 'bg-blue-100 text-blue-800',
  'energy': 'bg-yellow-100 text-yellow-800',
  'defense': 'bg-red-100 text-red-800',
  'general': 'bg-gray-100 text-gray-800'
};

export default function PublicationsPage() {
  const featuredPublications = publications.filter(pub => pub.featured);
  const otherPublications = publications.filter(pub => !pub.featured);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
            Research Publications
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Advancing AI Knowledge for Mississippi&apos;s Key Industries
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our published research on AI applications in agriculture, healthcare, energy, and defense. 
            Our work combines academic rigor with practical industry experience.
          </p>
        </div>

        {/* Featured Publications */}
        {featuredPublications.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Publications</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPublications.map((publication) => (
                <Card key={publication.id} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-2">
                        <Badge variant="outline">
                          {typeLabels[publication.type]}
                        </Badge>
                        <Badge className={categoryColors[publication.category]}>
                          {categoryLabels[publication.category]}
                        </Badge>
                      </div>
                      <Badge variant="default" className="bg-amber-500">
                        <Award className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {publication.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{publication.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(publication.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {publication.abstract}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      {publication.blogUrl && (
                        <Button variant="default" size="sm" asChild className="flex-1">
                          <Link href={publication.blogUrl}>
                            <FileText className="h-4 w-4 mr-1" />
                            Read Full Article
                          </Link>
                        </Button>
                      )}
                      {publication.url && (
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <Link href={publication.url} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            External Link
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Publications */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">All Publications</h2>
          <div className="grid gap-6">
            {publications.map((publication) => (
              <Card key={publication.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">
                          {typeLabels[publication.type]}
                        </Badge>
                        <Badge className={categoryColors[publication.category]}>
                          {categoryLabels[publication.category]}
                        </Badge>
                        {publication.featured && (
                          <Badge variant="default" className="bg-amber-500">
                            <Award className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">
                        {publication.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{publication.authors.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(publication.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {publication.abstract}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 lg:min-w-[200px]">
                      {publication.blogUrl && (
                        <Button size="sm" asChild>
                          <Link href={publication.blogUrl}>
                            <FileText className="h-4 w-4 mr-1" />
                            Read Article
                          </Link>
                        </Button>
                      )}
                      {publication.url && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={publication.url} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            External Link
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Partnership CTA */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/5 to-green-500/5 rounded-lg p-8 border border-blue-200/20">
            <h3 className="text-2xl font-semibold mb-4">Research Collaboration</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in collaborating on research or discussing our publications? 
              We welcome partnerships with universities, industry leaders, and government agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact?research=collaboration">
                  Research Partnership
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/research">
                  View Research Areas
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}