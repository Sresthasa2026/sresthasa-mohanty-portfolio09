import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "Deep Learning", level: 85 },
        { name: "CNN/RNN", level: 80 },
        { name: "NLP", level: 75 }
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      color: "secondary",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "C++", level: 70 },
        { name: "DSA", level: 75 }
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      color: "accent",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Database & Cloud",
      color: "primary",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "AWS", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "REST APIs", level: 80 }
      ]
    }
  ];

  const tools = [
    "TensorFlow", "Python", "React", "MongoDB", "AWS", "Java", 
    "Express.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS", 
    "JavaScript", "GitHub", "OpenCV", "Scikit-learn"
  ];

  const SkillMeter = ({ skill, delay = 0, color = "primary" }: { 
    skill: { name: string; level: number }; 
    delay?: number; 
    color?: string;
  }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, delay]);

    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{skill.name}</span>
          <span className="text-xs text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-${color} to-${color}-glow transition-all duration-1000 ease-out rounded-full`}
            style={{ 
              width: `${animatedLevel}%`,
              boxShadow: `0 0 10px hsl(var(--${color}) / 0.5)`
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 tech-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML and Full Stack Development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex} 
                className="project-card p-6 border-primary/20"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                      <IconComponent className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillMeter 
                        key={skillIndex}
                        skill={skill} 
                        delay={categoryIndex * 200 + skillIndex * 100}
                        color={category.color}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools Carousel */}
        <div className="bg-card/50 rounded-2xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Wrench className="h-6 w-6 text-secondary" />
              <h3 className="text-2xl font-semibold">Tools & Technologies</h3>
            </div>
            <p className="text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="mt-16 text-center">
          <Card className="project-card p-8 border-secondary/20 bg-gradient-to-r from-secondary/5 to-transparent max-w-4xl mx-auto">
            <CardContent>
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                I Collaborate On
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Machine Learning Projects</h4>
                  <p className="text-muted-foreground text-sm">
                    Deep learning models, computer vision systems, NLP applications, 
                    and AI-driven solutions for real-world problems.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Full Stack Web Applications</h4>
                  <p className="text-muted-foreground text-sm">
                    Modern web applications using MERN stack, responsive designs, 
                    and scalable backend architectures.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;