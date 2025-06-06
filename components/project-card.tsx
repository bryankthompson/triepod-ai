import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Rocket, Construction, CheckCircle, Beaker, Wrench } from 'lucide-react';
import { Project, ProjectStatus } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const statusConfig: Record<ProjectStatus, { label: string; icon: any; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  concept: { label: 'Concept', icon: Clock, variant: 'outline' },
  planning: { label: 'Planning', icon: Construction, variant: 'secondary' },
  development: { label: 'In Development', icon: Wrench, variant: 'secondary' },
  beta: { label: 'Beta', icon: Beaker, variant: 'default' },
  launched: { label: 'Launched', icon: CheckCircle, variant: 'default' },
  maintenance: { label: 'Maintenance', icon: Wrench, variant: 'outline' }
};

export function ProjectCard({ project }: ProjectCardProps) {
  const StatusIcon = statusConfig[project.status].icon;
  
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant={statusConfig[project.status].variant} className="flex items-center gap-1">
            <StatusIcon className="h-3 w-3" />
            {statusConfig[project.status].label}
          </Badge>
          {project.featured && (
            <Badge variant="default" className="bg-amber-500">
              <Rocket className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm">{project.tagline}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="text-center p-2 bg-muted rounded">
                <div className="text-lg font-bold">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech.name}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="ghost" className="w-full group" asChild>
          <Link href={`/projects/${project.slug}`}>
            Learn More 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
