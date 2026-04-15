import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import ThemeToggle from '../../../components/ui/ThemeToggle';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-time-leaderBoard",
      description: "Real-time analytics platform processing 1M+ daily transactions with advanced data visualization and predictive insights.",
      image: "https://github.com/user-attachments/assets/e20f5144-aa12-4b50-896c-d52fc663fb94",
      techStack: ["React", "Node.js", "WebSockets", "Redis", "TailwindCSS"],
      metrics: {
        performance: "99.9% uptime",
        users: "50K+ active users",
        impact: "35% revenue increase"
      },
      liveUrl: "https://harshrealtimeleaderboard.magicloops.app/",
      githubUrl: "https://github.com/harsh7editor/Real-time-leaderBoard-"
    },
    {
      id: 2,
      title: "GTA VI",
      description: "A visually rich, scroll-driven cinematic website clone of GTA VI, built with cutting-edge web technologies like React, Tailwind CSS, and GSAP",
      image: "https://github.com/user-attachments/assets/50c14d78-e2e2-45e3-91e6-1285ea728d94",
      techStack: ["HTML", "CSS3", "JavaScript", "React", "Node.js", "Vite", "GSAP",],
      metrics: {
        performance: "2.3s avg response",
        users: "10K+ content pieces",
        impact: "80% time savings"
      },
      liveUrl: "https://gta-vi-tawny.vercel.app/",
      githubUrl: "https://github.com/harsh7editor/GTA--VI-"
    },
    {
      id: 3,
      title: "React Weather App",
      description: "This is a web app developed as a final project for SheCodes React using React.js. It allows users to search for the weather conditions of any city in the world and provides current weather information",
      image: "https://repository-images.githubusercontent.com/436266987/44be15b9-0df7-4365-aedb-4f6585f9f422",
      techStack: ["React.js", "JavaScript", "SheCodes React", "Node.js", "HTML"],
      metrics: {
        performance: "10K+ req/sec",
        users: "99.99% availability",
        impact: "60% cost reduction"
      },
      liveUrl: "https://react-weather-app-shemmee.netlify.app/",
      githubUrl: "https://github.com/harsh7editor/React---Weather.API"
    }
  ];

  return (
    <div className="py-16 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="text-center flex-1">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate technical excellence and real-world impact
            </p>
          </div>
          <div className="ml-8">
            <ThemeToggle variant="default" size="md" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div key={project?.id} className="bg-card dark:bg-card rounded-xl shadow-lg dark:shadow-xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-border">
              <div className="relative overflow-hidden">
                <Image 
                  src={project?.image} 
                  alt={project?.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a href={project?.liveUrl} className="p-2 bg-card dark:bg-card rounded-lg shadow-md hover:bg-accent dark:hover:bg-accent transition-colors border border-border">
                    <Icon name="ExternalLink" size={16} className="text-primary" />
                  </a>
                  <a href={project?.githubUrl} className="p-2 bg-card dark:bg-card rounded-lg shadow-md hover:bg-accent dark:hover:bg-accent transition-colors border border-border">
                    <Icon name="Github" size={16} className="text-foreground" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3">{project?.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project?.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project?.techStack?.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 mb-6">
                  {Object.entries(project?.metrics)?.map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground capitalize">{key}:</span>
                      <span className="font-medium text-card-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="default" size="sm" iconName="Eye" iconPosition="left" className="flex-1">
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" iconName="Code" iconPosition="left" className="flex-1">
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-x-4">
          <Button variant="outline" size="lg" iconName="ArrowRight" iconPosition="right">
            View All Projects
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            iconName="Palette" 
            iconPosition="left"
            onClick={() => window.location.href = '/dark-mode-demo'}
          >
            Dark Mode Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;