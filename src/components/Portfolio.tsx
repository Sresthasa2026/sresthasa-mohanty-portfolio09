import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Car, Eye, MessageCircle, Type, Lightbulb, CreditCard } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Autonomous Vehicle with Deep Learning",
      description: "Advanced self-driving car simulation using NVIDIA's platform with deep neural networks for real-time decision making and path planning.",
      tech: ["Python", "TensorFlow", "OpenCV", "NVIDIA Simulator", "Deep Learning"],
      icon: Car,
      github: "https://github.com/Sresthasa2026",
      demo: "#",
      featured: true,
      color: "primary"
    },
    {
      title: "Face Recognition System",
      description: "Real-time face detection and recognition system using advanced computer vision techniques and deep learning models.",
      tech: ["Python", "OpenCV", "Deep Learning", "CNN", "Face Detection"],
      icon: Eye,
      github: "https://github.com/Sresthasa2026",
      demo: "#",
      color: "secondary"
    },
    {
      title: "NLP Chatbot",
      description: "Intelligent conversational AI using natural language processing and deep learning for contextual understanding.",
      tech: ["Python", "NLP", "TensorFlow", "Deep Learning", "NLTK"],
      icon: MessageCircle,
      github: "https://github.com/Sresthasa2026",
      demo: "#",
      color: "accent"
    },
    {
      title: "OdiaScribe - OCR System",
      description: "Award-winning OCR system for Odia script recognition at BPUT Tech Carnival 2023, enabling digital text extraction.",
      tech: ["Python", "OpenCV", "OCR", "Machine Learning", "Image Processing"],
      icon: Type,
      github: "https://github.com/Sresthasa2026",
      demo: "#",
      featured: true,
      color: "primary"
    },
    {
      title: "Idea App - CRUD Application",
      description: "Full-stack web application with complete CRUD functionality for idea management and collaboration.",
      tech: ["React", "Express.js", "MongoDB", "Node.js", "REST API"],
      icon: Lightbulb,
      github: "https://github.com/Sresthasa2026",
      demo: "#",
      color: "secondary"
    },
    {
      title: "ATM Simulation System",
      description: "Comprehensive ATM simulation developed in Java for OCAC project, featuring transaction management and security.",
      tech: ["Java", "OOP", "Database", "Swing", "Security"],
      icon: CreditCard,
      github: "https://github.com/Sresthasa2026",
      demo: "#",
      color: "accent"
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const IconComponent = project.icon;
    
    return (
      <Card 
        className={`project-card group ${project.featured ? 'lg:col-span-2' : ''} border-${project.color}/20 hover:border-${project.color}/40`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <CardContent className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg bg-${project.color}/10 group-hover:bg-${project.color}/20 transition-colors duration-300`}>
              <IconComponent className={`h-6 w-6 text-${project.color}`} />
            </div>
            
            {project.featured && (
              <Badge className={`bg-${project.color}/20 text-${project.color} border-${project.color}/30`}>
                Featured
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <Badge 
                  key={techIndex} 
                  variant="outline" 
                  className="text-xs border-muted hover:border-primary/50 transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4 mt-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 hover:bg-muted/50"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
            
            <Button 
              size="sm" 
              className={`flex-1 bg-${project.color}/20 hover:bg-${project.color}/30 text-${project.color} border-${project.color}/30`}
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="portfolio" className="py-20 tech-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative projects in AI/ML and Full Stack Development
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="project-card p-8 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent max-w-2xl mx-auto">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more projects and contributions to open source.
              </p>
              <Button 
                size="lg" 
                className="btn-glow bg-gradient-to-r from-primary to-primary-glow"
                asChild
              >
                <a href="https://github.com/Sresthasa2026" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;