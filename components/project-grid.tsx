import { Project } from '@/types/project';
import { ProjectCard } from './project-card';

interface ProjectGridProps {
  projects: Project[];
  columns?: 1 | 2 | 3 | 4;
}

export function ProjectGrid({ projects, columns = 3 }: ProjectGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  
  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
