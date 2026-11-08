import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/Pass Photo edited.png";
// Using direct upload URL for profile photo

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-variant/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary/20 flex justify-center items-center">
            <img 
              src={profilePhoto} 
              alt="Nama Nithish Reddy" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <Badge variant="secondary" className="mb-4 text-sm">
            Available for Opportunities
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Nama Nithish Reddy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Full Stack AI Engineer building end-to-end applications with Java, Spring Boot, Node.js and React, and the AI that powers them
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Software Engineer I at Zapcom, shipping agentic AI features, RAG pipelines and scalable REST APIs.
            B.Tech in Computer Science from CVR College of Engineering (CGPA 9.38) with 800+ LeetCode problems solved.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="btn-primary group">
              <a href="#projects">
                View My Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:bg-secondary">
              <a href="/Nithish_Resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:bg-secondary">
              <a href="/Nithish_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/nithishreddy2208" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors card-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nama-nithish-reddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors card-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:nithishreddynama@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors card-glow"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;