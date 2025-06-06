import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, allProjects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, FileText, Rocket, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  
  return {
    title: project.seoTitle || `${project.title} | Triepod.AI`,
    description: project.seoDescription || project.description,
    keywords: project.keywords,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Back Button */}
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="default" className="text-sm">
            {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </Badge>
          <Badge variant="outline" className="text-sm">
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {project.tagline}
        </p>        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.earlyAccessUrl && (
            <Button size="lg" className="glow" asChild>
              <Link href={project.earlyAccessUrl}>
                <Rocket className="mr-2 h-5 w-5" />
                Join Early Access
              </Link>
            </Button>
          )}
          {project.demoUrl && (
            <Button size="lg" variant="outline" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                View Demo <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="lg" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          )}
          {project.caseStudyUrl && (
            <Button size="lg" variant="outline" asChild>
              <Link href={project.caseStudyUrl}>
                <FileText className="mr-2 h-4 w-4" />
                Read Case Study
              </Link>
            </Button>
          )}
        </div>
        
        {/* Description */}
        {project.longDescription && (
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        )}
        
        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold mb-2 text-primary">
                    {metric.value}
                  </div>
                  <div className="text-lg font-medium mb-1">{metric.label}</div>
                  {metric.description && (
                    <div className="text-sm text-muted-foreground">
                      {metric.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => {
                const IconComponent = feature.icon ? (Icons as any)[feature.icon] : null;
                return (
                  <div key={index} className="flex gap-4">
                    {IconComponent && (
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                  {tech.name}
                </Badge>
              ))}
            </div>
            {project.architecture && (
              <p className="mt-4 text-muted-foreground">{project.architecture}</p>
            )}
          </div>
        )}
        
        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Results & Outcomes</h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
