import { Github, Linkedin, Mail, Code, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-card/30">
      <div className="container mx-auto">
        <div className="text-center space-y-6">
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/nithishreddy2208" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors card-glow"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nama-nithish-reddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors card-glow"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:nithishreddynama@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors card-glow"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://leetcode.com/u/nithish_90301/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors card-glow"
            >
              <Code className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Nama Nithish Reddy
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} All rights reserved. Built with React, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground pt-4 border-t border-border">
            <span>CGPA: 94%</span>
            <span>•</span>
            <span>750+ LeetCode Problems</span>
            <span>•</span>
            <span>Full Stack Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;