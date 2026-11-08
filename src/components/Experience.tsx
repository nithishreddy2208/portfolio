import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const projects = [
    {
      title: "Tyfone – Harmony Admin Console (Client)",
      tech: ["React.js", "JavaScript", "Java", "Spring", "REST APIs"],
      points: [
        "Migrated a multi-tenant digital-banking Admin Console for credit unions from legacy JSP to React, delivering the Reporting, Member Management and Admin User modules on existing Java REST services.",
        "Usage Report: fixed a filter-contract mismatch where the UI sent display labels (Logout) instead of the event codes the backend expects (BANKING_LOGOUT), which returned empty reports; traced it through React vs. JSP payload diffs.",
        "Report Scheduling and Generated Reports: rebuilt scheduling date-validation rules and fixed CSV and Excel (.xlsx) download-format handling.",
        "Admin Users: added Enter-to-submit search and fixed pagination counts on empty and filtered results."
      ]
    },
    {
      title: "Healix – Agentic AI Platform for Autonomous Test Generation",
      tech: ["TypeScript", "Node.js", "React", "Electron", "SQLite", "Claude Code", "OpenAI Codex"],
      points: [
        "Built AI agents for Healix's agentic workflow: a test review agent that checks generated tests and sends weak ones back for repair, and triage and heal agents that classify and fix failing tests, using Claude Code and OpenAI Codex.",
        "Fixed a test-generation failure where the Claude Code agent returned plans instead of Playwright tests by switching it to a read-only toolset, raising test acceptance on a benchmark run from 10–62% to 98%.",
        "Fixed how test results are saved by matching them on spec file and test name instead of position, so run totals and status counts stay accurate.",
        "Improved the browser agent's element-locating fallbacks and added clear stop-reason logging to its exploration loop."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20" id="experience">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building full-stack and agentic AI software for enterprise clients
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="card-glow animate-slide-up bg-gradient-to-r from-card to-secondary border-primary/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <CardTitle className="flex items-center gap-3 text-2xl mb-2">
                    <Briefcase className="h-6 w-6 text-primary" />
                    Software Engineer I – Full Stack AI Engineer
                  </CardTitle>
                  <p className="text-lg font-medium">Zapcom Solutions Pvt. Ltd.</p>
                </div>
                <div className="space-y-1 text-muted-foreground md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2026 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {projects.map((project) => (
                <div key={project.title} className="border-t border-border pt-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{project.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {project.points.map((point) => (
                      <li key={point} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
