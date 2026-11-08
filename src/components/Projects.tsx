import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "JobHunt – AI-Powered Recruitment Platform",
      description: "A full-stack AI-powered recruitment platform with dedicated Job Seeker and Recruiter dashboards, built on a RAG pipeline that grounds every AI feature in real candidate and job data.",
      features: [
        "Built a Retrieval-Augmented Generation (RAG) pipeline that embeds resumes and job descriptions as vectors and retrieves the most relevant context through semantic search",
        "AI resume analysis, interview preparation, cover-letter generation and personalized job recommendations on top of the RAG layer",
        "AI workloads run asynchronously on BullMQ background workers",
        "JWT authentication, role-based authorization and Redis caching",
        "Cloudinary file management, with document uploads secured by ClamAV malware scanning",
        "Recruiter hiring insights on job postings and applicants"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RAG", "Embeddings", "Redis", "BullMQ", "JWT", "Cloudinary", "OpenRouter"],
      year: "2026",
      featured: true,
      status: "Live",
      github: "https://github.com/nithishreddy2208/JobHunt",
      live: "https://jobhunt-frontend-three.vercel.app/"
    },
    {
      id: 2,
      title: "HelpDesk AI – Intelligent Customer Support Ticketing System",
      description: "A full-stack customer support ticketing system with AI-assisted support, built with Java, Spring Boot, PostgreSQL and React.",
      features: [
        "Spring Boot REST APIs and a React dashboard for customers, agents and admins",
        "Ticket creation, assignment, SLA tracking and resolution",
        "RAG pipeline over the knowledge base (PostgreSQL with pgvector) that suggests reply drafts",
        "Few-shot prompting that auto-classifies ticket category and priority",
        "SLA-based routing with a priority queue and round-robin agent assignment, with Redis caching",
        "Secured with Spring Security, JWT authentication and role-based access control"
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "pgvector", "Redis", "React", "LLM APIs"],
      year: "2026",
      featured: false,
      status: "In Progress",
      github: "https://github.com/nithishreddy2208",
      live: null
    },
    {
      id: 3,
      title: "HealSphere – Healthcare Management System",
      description: "A full-stack healthcare management platform with real-time video consultations for doctors, patients and administrators.",
      features: [
        "Appointment scheduling, prescriptions and patient record management",
        "Secure JWT authentication and role-based access control across three user roles",
        "WebRTC-based real-time video consultations between doctors and patients",
        "Scalable Node.js and Express.js REST APIs for appointments, prescriptions and records",
        "Optimized MongoDB schemas and query patterns for healthcare data"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "JWT"],
      year: "2025",
      featured: false,
      status: "Live",
      github: "https://github.com/nithishreddy2208/Heal-Sphere",
      live: "https://heal-sphere-blue.vercel.app/"
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
            Recent projects across full-stack development, Java and Spring Boot, and applied AI
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