import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Code, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nithishreddynama@gmail.com",
      href: "mailto:nithishreddynama@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nithishreddy2208",
      href: "https://github.com/nithishreddy2208",
      color: "text-gray-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nama-nithish-reddy",
      href: "https://www.linkedin.com/in/nama-nithish-reddy/",
      color: "text-blue-500"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/nithish_90301",
      href: "https://leetcode.com/u/nithish_90301/",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-glow animate-slide-up bg-gradient-to-r from-card to-secondary border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">Let's Connect!</CardTitle>
              <div className="flex justify-center mb-4">
                <Badge variant="secondary" className="text-sm">
                  <MapPin className="h-3 w-3 mr-1" />
                  Hyderabad, Telangana, India
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Feel free to reach out through any of the platforms below. I'm always excited to 
                discuss technology, collaborate on projects, or explore new opportunities.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 card-glow">
                      <div className={`p-3 rounded-full bg-secondary ${contact.color}`}>
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {contact.label}
                        </h3>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="btn-primary"
                    onClick={() => window.open('mailto:nithishreddynama@gmail.com', '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://www.linkedin.com/in/nama-nithish-reddy/', '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Available for internships, full-time opportunities, and freelance projects
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;