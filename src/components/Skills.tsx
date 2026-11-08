import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Trophy, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java (Core & Advanced)", "JavaScript (ES6+)", "TypeScript", "Python", "SQL", "C"],
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Spring Boot", "Spring Security", "Microservices", "RESTful APIs", "Node.js", "Express.js", "JWT Authentication", "Role-Based Access Control"],
      color: "text-purple-500"
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React.js", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Electron", "Responsive Design"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "MongoDB Atlas", "SQLite", "Indexing"],
      color: "text-cyan-500"
    },
    {
      icon: Brain,
      title: "AI & LLM Engineering",
      skills: ["RAG", "Embeddings", "Vector & Semantic Search", "Prompt Engineering (Few-Shot, One-Shot, Chain-of-Thought)", "OpenAI & Anthropic APIs", "OpenRouter", "Gemini", "Ollama"],
      color: "text-orange-500"
    },
    {
      icon: Brain,
      title: "Agentic AI & AI Tools",
      skills: ["AI Agents", "Agentic Workflows", "Model Context Protocol (MCP)", "Claude Code", "OpenAI Codex", "Cursor"],
      color: "text-pink-500"
    },
    {
      icon: Trophy,
      title: "System Design & Architecture",
      skills: ["Redis Caching", "BullMQ", "Queue-Based Processing", "Background Workers", "Scalable API Design", "Database Replication", "Caching Strategies"],
      color: "text-yellow-500"
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      skills: ["Git", "GitHub", "Azure DevOps (Repos, Boards, Pipelines)", "CI/CD", "Vercel", "Render", "Cloudinary", "Postman"],
      color: "text-indigo-500"
    },
    {
      icon: Users,
      title: "Testing & Practices",
      skills: ["Unit & End-to-End Testing", "Playwright", "Code Review", "Agile/Scrum", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
      color: "text-gray-400"
    }
  ];

  const certifications = [
    "Claude 101 – Anthropic",
    "Claude Code 101 – Anthropic",
    "AICTE Generative AI Certification: Beginner to Advanced",
    "Oracle Certifications: Database Design, SQL, PL/SQL",
    "Java: Basics Java, Advanced Java, Data Structures class certificates",
    "Web Development: HTML, CSS, JavaScript class certificates"
  ];

  const achievements = [
    "Solved 800+ Data Structures and Algorithms problems on LeetCode and other competitive programming platforms",
    "Highest LeetCode contest rating of 1600",
    "Participant – Healix Bug Bash Hackathon 2026",
    "Participant – Smart India Hackathon 2024"
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, certifications, and achievements
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-glow animate-slide-up bg-card border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* LeetCode Achievement */}
        <div className="mb-16 animate-fade-in">
          <Card className="card-glow bg-gradient-to-r from-card to-secondary border-primary/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Trophy className="h-6 w-6 text-primary" />
                LeetCode Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-lg font-semibold text-muted-foreground">Problems Solved</p>
                  <p className="text-4xl font-bold gradient-text">800+</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-lg font-semibold text-muted-foreground">Highest Rating</p>
                  <p className="text-4xl font-bold gradient-text">1600</p>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <p className="text-lg font-semibold text-muted-foreground">Profile</p>
                  <a 
                    href="https://leetcode.com/u/nithish_90301/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow underline transition-colors text-xl font-medium"
                  >
                    @nithish_90301
                  </a>
                </div>
              </div>
              <Progress value={90} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Consistently solving problems to improve algorithmic thinking and problem-solving skills
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="card-glow animate-slide-up bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="card-glow animate-slide-up bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary" />
                Achievements & Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;