import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-6" id="education">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational background and academic achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-glow animate-slide-up bg-gradient-to-r from-card to-secondary border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <GraduationCap className="h-6 w-6 text-primary" />
                Bachelor of Technology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Program Details</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <strong>Major:</strong> Computer Science and Engineering
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Specialization:</strong> Technology
                    </p>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        CGPA: 94%
                      </Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Institution</h3>
                  <div className="space-y-2">
                    <p className="font-medium">CVR College of Engineering</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Hyderabad, Telangana</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Expected May 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-lg mb-3">Academic Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Maintaining excellent academic performance with 94% CGPA
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Active participation in technical events and hackathons
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Strong foundation in computer science fundamentals
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Consistent academic excellence throughout the program
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;