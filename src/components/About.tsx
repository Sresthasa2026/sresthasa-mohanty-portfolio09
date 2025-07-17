import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, FileText, Heart } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "GIFT Autonomous, Bhubaneswar",
      period: "2022 - 2026",
      status: "Currently Pursuing"
    },
    {
      degree: "Intermediate (Science)",
      institution: "KMBB Jr. Science College, Cuttack",
      period: "2020 - 2022"
    },
    {
      degree: "High School",
      institution: "SSVM, Puri",
      period: "2018 - 2020"
    }
  ];

  const achievements = [
    "Published IEEE Research Paper on Autonomous Vehicles",
    "Winner at BPUT Tech Carnival 2023 - OdiaScribe OCR",
    "Deep Learning & CNN Specialist",
    "Full Stack MERN Developer"
  ];

  return (
    <section id="about" className="py-20 tech-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Puri to pioneering AI solutions - my journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-8 animate-fade-in">
            <Card className="project-card p-6 border-primary/20">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-semibold">What Drives Me</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate fresher from the beautiful coastal city of Puri, driven by an insatiable 
                  curiosity for Artificial Intelligence and Machine Learning. My journey began with a fascination 
                  for how machines can learn and think, leading me to dive deep into neural networks, computer 
                  vision, and natural language processing.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Beyond AI/ML, I'm equally passionate about Full Stack Web Development, particularly the MERN 
                  stack. I believe in creating end-to-end solutions that not only work intelligently but also 
                  provide exceptional user experiences. My recent IEEE publication on "Autonomous Vehicle 
                  Utilizing Deep Learning" reflects my commitment to pushing the boundaries of what's possible 
                  with AI.
                </p>

                <div className="pt-4">
                  <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Journey */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="project-card p-6 border-secondary/20">
              <CardContent>
                <div className="flex items-center space-x-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl font-semibold">Educational Journey</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index < education.length - 1 && (
                        <div className="absolute left-4 top-12 w-0.5 h-16 bg-secondary/30"></div>
                      )}
                      
                      <div className="flex space-x-4">
                        <div className="w-8 h-8 bg-secondary/20 border-2 border-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                            {edu.status && (
                              <Badge variant="secondary" className="text-xs">
                                {edu.status}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{edu.institution}</span>
                          </div>
                          
                          <div className="text-sm text-primary font-medium">
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* IEEE Publication Highlight */}
            <Card className="project-card p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Published Research</h3>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">
                    "Autonomous Vehicle Utilizing Deep Learning"
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Published in IEEE Xplore Digital Library
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This research explores advanced deep learning techniques for autonomous vehicle 
                    navigation, focusing on real-time object detection and path planning algorithms.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;