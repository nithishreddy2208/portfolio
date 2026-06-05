import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "JobHunt – AI-Powered Recruitment Platform",
      description: "A full-stack AI-powered recruitment ecosystem for job seekers and recruiters featuring AI resume analysis, interview preparation, cover letter generation, and job recommendations.",
      features: [
        "AI Resume Analysis with intelligent parsing and feedback",
        "AI Interview Preparation with personalized coaching",
        "AI Cover Letter Generation tailored to job descriptions",
        "AI Job Recommendations using advanced matching algorithms",
        "Recruiter AI Hiring Dashboard with candidate insights",
        "Candidate Match Scoring for optimal hiring decisions",
        "Resume Parsing with automatic data extraction",
        "Authentication & Authorization with role-based access",
        "Redis Caching for optimized performance",
        "BullMQ Background Jobs for async processing",
        "MongoDB Atlas for scalable data storage",
        "Cloudinary Integration for file management",
        "OpenRouter-based AI Features for intelligent automation"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "JWT", "Cloudinary", "OpenRouter", "Tailwind CSS"],
      year: "2025",
      featured: true,
      status: "Live",
      github: "https://github.com/nithishreddy2208",
      live: "https://jobhunt-frontend-three.vercel.app/"
    },
    {
      id: 2,
      title: "Heal-Sphere",
      description: "A comprehensive healthcare platform for medical consultations, appointment management, and patient care coordination with modern UI/UX.",
      features: [
        "Real-time appointment booking and management",
        "Patient profile and medical history tracking",
        "Doctor-patient communication system",
        "Prescription and medication management",
        "Responsive design for mobile and desktop",
        "Secure authentication and data protection"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      year: "2025",
      featured: false,
      status: "Live",
      github: "https://github.com/nithishreddy2208",
      live: "https://heal-sphere-blue.vercel.app/"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing my projects and skills with beautiful animations, glassmorphism design, and clean architecture.",
      features: [
        "Responsive design with modern UI/UX principles",
        "Built with React and TypeScript for type safety",
        "Tailwind CSS for beautiful styling and animations",
        "Glassmorphism card effects and smooth transitions",
        "Showcases projects, skills, and achievements",
        "Optimized for performance and SEO"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      year: "2025",
      featured: false,
      status: "Live",
      github: "https://github.com/nithishreddy2208/portfolio",
      live: "https://nithishreddy-portfolio.vercel.app/"
    },
    {
      id: 4,
      title: "Smart Attendance Management System",
      description: "A smart attendance management system using location-based validation with an intuitive frontend and secure backend architecture.",
      features: [
        "Geolocation-based attendance marking using latitude and longitude verification",
        "Responsive frontend with React.js for intuitive user interaction",
        "Secure backend with user authentication and attendance logs",
        "MongoDB for efficient attendance records and user data storage",
        "Real-time attendance tracking and reporting",
        "Admin dashboard for monitoring and analytics"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Geolocation API"],
      year: "2024",
      featured: false,
      status: "Completed",
      github: "https://github.com/nithishreddy2208/smart-attendence.git",
      live: null
    },
    {
      id: 5,
      title: "RideAway",
      description: "A car and bike rental platform for seamless vehicle bookings with secure payment integration and user-friendly interface.",
      features: [
        "Vehicle search and selection with advanced filters",
        "User-friendly interface with React.js",
        "Secure user authentication with JWT",
        "Booking management and payment processing",
        "MongoDB for user profiles, vehicle data, and bookings",
        "RESTful APIs for smooth frontend-backend communication",
        "Optimized queries for enhanced performance"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      year: "2024",
      featured: false,
      status: "Completed",
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
              className={`card-glow animate-slide-up group hover:scale-[1.02] transition-all duration-300 ${
                project.featured 
                  ? 'lg:col-span-2 bg-gradient-to-br from-card via-card to-secondary border-primary/30' 
                  : 'bg-card hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      {project.featured && (
                        <Star className="h-5 w-5 text-primary fill-primary" />
                      )}
                      <Badge variant="outline" className="text-xs">{project.year}</Badge>
                      <Badge 
                        variant={project.status === "Live" ? "default" : "secondary"}
                        className={`text-xs ${project.status === "Live" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 6).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {project.live ? (
                      <Button 
                        size="sm" 
                        className="flex-1 btn-primary" 
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="flex-1"
                        disabled
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Coming Soon
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