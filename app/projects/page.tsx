import { Metadata } from 'next';
import { getProjects } from '@/lib/projects';
import { ProjectCard } from '@/components/project-card';

export const metadata: Metadata = {
  title: 'Projects - Glyph Technologies',
  description: 'Explore our portfolio of innovative web development and AI projects.',
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <section className="py-20 min-h-screen bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-raleway mb-4">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative web development, design, and AI projects that showcase our expertise and creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}