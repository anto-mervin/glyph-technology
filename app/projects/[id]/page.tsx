import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { getProjectById, getProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: 'Project Not Found - Glyph Technologies',
    };
  }

  return {
    title: `${project.title} - Glyph Technologies Projects`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-20 min-h-screen bg-background">
      <div className="container max-w-4xl">
        <Link href="/projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold font-raleway">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground text-lg">{project.description}</p>

          <div className="flex items-center gap-4">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}