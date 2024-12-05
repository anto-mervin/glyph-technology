export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Analytics Dashboard",
    description: "A sophisticated analytics dashboard that leverages artificial intelligence to provide real-time insights and predictive analytics for business metrics.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
    demoUrl: "https://demo.example.com/analytics",
    githubUrl: "https://github.com/example/analytics"
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and featuring real-time inventory management, secure payments, and a responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: "3",
    title: "Smart Home IoT Dashboard",
    description: "An intuitive dashboard for managing smart home devices, featuring real-time device status updates and automated scheduling.",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827",
    technologies: ["React", "Node.js", "WebSocket", "MQTT"],
    demoUrl: "https://demo.example.com/smart-home",
    githubUrl: "https://github.com/example/smart-home"
  },
  {
    id: "4",
    title: "AI Content Generator",
    description: "A powerful content generation tool that uses advanced language models to create high-quality, context-aware content for various purposes.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    technologies: ["GPT-3", "React", "Node.js", "MongoDB"],
    demoUrl: "https://demo.example.com/ai-content",
    githubUrl: "https://github.com/example/ai-content"
  },
  {
    id: "5",
    title: "Virtual Event Platform",
    description: "A comprehensive platform for hosting virtual events, featuring live streaming, interactive sessions, and networking capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
    technologies: ["WebRTC", "React", "Node.js", "Redis"],
    demoUrl: "https://demo.example.com/virtual-events",
    githubUrl: "https://github.com/example/virtual-events"
  },
  {
    id: "6",
    title: "Blockchain Portfolio Tracker",
    description: "A real-time cryptocurrency portfolio tracker with advanced analytics, market insights, and automated trading capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    technologies: ["Web3.js", "React", "Node.js", "GraphQL"],
    demoUrl: "https://demo.example.com/crypto-tracker",
    githubUrl: "https://github.com/example/crypto-tracker"
  }
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | null {
  return projects.find(project => project.id === id) || null;
}