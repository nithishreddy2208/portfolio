import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Med Nexus",
      description: "A comprehensive Healthcare Appointment Management System built with MERN stack, featuring real-time video consultations, prescription management, and secure patient data handling.",
      features: [
        "Built a web application for managing doctor-patient appointments, prescriptions, and video consultations",
        "Developed React.js frontend with React Router for seamless UI navigation",
        "Implemented secure user authentication and authorization with session management",
        "Integrated WebRTC for real-time video consultations between doctors and patients",
        "Enhanced user experience with appointment status tracking and prescription management"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC"],
      year: "2025",
      featured: true,
      github: "https://github.com/nithishreddy2208/Med-Nexus.git",
      live: null
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing my projects and skills with beautiful animations and clean design.",
      features: [
        "Responsive design with modern UI/UX principles",
        "Built with React and TypeScript for type safety",
        "Tailwind CSS for beautiful styling and animations",
        "Showcases projects, skills, and achievements"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      year: "2025",
      featured: false,
      github: "https://github.com/nithishreddy2208/portfolio",
      live: null
    },
    {
      id: 3,
      title: "Smart Attendance",
      description: "A smart attendance management system using location-based validation with an intuitive frontend and secure backend architecture.",
      features: [
        "Developed a smart attendance management system using location-based validation",
        "Implemented geolocation-based attendance marking using latitude and longitude verification",
        "Designed a responsive frontend with React.js for intuitive user interaction",
        "Created secure and reliable backends with user authentication and attendance logs",
        "Utilized MongoDB to store attendance records and user data efficiently",
        "Ensured secure and reliable connectivity for end-to-end communication"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
      year: "2024",
      featured: false,
      github: "https://github.com/nithishreddy2208/smart-attendence.git",
      live: null
    },
    {
      id: 4,
      title: "RideAway",
      description: "A car and bike rental platform for seamless vehicle bookings with secure payment integration and user-friendly interface.",
      features: [
        "Developed a car and bike rental platform for seamless vehicle bookings",
        "Designed a user-friendly interface with React.js for easy vehicle search and selection",
        "Backend with Node.js and Express.js for user authentication, bookings, and payments",
        "MongoDB for storing user profiles, vehicle data, and bookings",
        "RESTful APIs for smooth frontend-backend communication",
        "Enhanced performance and security with optimized queries and JWT authentication"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      year: "2024",
      featured: false,
      github: "https://github.com/nithishreddy2208/RideAway.git",
      live: null
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`card-glow animate-slide-up ${
                project.featured 
                  ? 'lg:col-span-2 bg-gradient-to-r from-card to-secondary border-primary/20' 
                  : 'bg-card'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      {project.featured && (
                        <Star className="h-5 w-5 text-primary fill-primary" />
                      )}
                      <Badge variant="outline">{project.year}</Badge>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button size="sm" className="flex-1 btn-primary" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;