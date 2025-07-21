import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Trophy, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "C", "HTML", "CSS"],
      color: "text-blue-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["React.js", "Node.js", "Express.js", "RESTful APIs"],
      color: "text-green-500"
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: ["MongoDB", "SQL", "Operating Systems", "Computer Networks", "DBMS"],
      color: "text-purple-500"
    },
    {
      icon: Brain,
      title: "Core Competencies",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Strong Analytical Abilities"],
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Communication", "Interpersonal Skills", "Team Collaboration"],
      color: "text-pink-500"
    },
    {
      icon: Trophy,
      title: "Adaptability",
      skills: ["Willing to Learn New Technologies", "Quick Learner", "Self-Motivated"],
      color: "text-yellow-500"
    }
  ];

  const certifications = [
    "Java: Basics Java, Advanced Java, Data Structures class certificates",
    "Web Development: HTML, CSS, JavaScript class certificates",
    "Oracle Certifications: Database Design, SQL, PL/SQL",
    "AICTE Generative AI Certification: Beginner to Advanced",
    "Competitive Programming: Participated in Codejam and CodeJam"
  ];

  const achievements = [
    "Qualified JEE Mains Exam: secured round to 2024",
    "Participant in Smart India Hackathon in 2024",
    "2nd Prize in Technical Quiz in 2023",
    "500+ Problems Solved on LeetCode"
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
                LeetCode Achievement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-lg font-semibold">Problems Solved</p>
                  <p className="text-3xl font-bold gradient-text">500+</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground">Profile Link</p>
                  <a 
                    href="https://leetcode.com/u/nithish_90301/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow underline transition-colors"
                  >
                    @nithish_90301
                  </a>
                </div>
              </div>
              <Progress value={85} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
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
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
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