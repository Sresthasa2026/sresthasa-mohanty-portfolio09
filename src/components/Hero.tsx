import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import heroProfile from '@/assets/hero-profile.jpg';
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['AI Researcher', 'Deep Learning Explorer', 'Full Stack Developer', 'Problem Solver'];
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    let isDeleting = false;
    const typeEffect = setInterval(() => {
      if (!isDeleting && currentIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, currentIndex + 1));
        currentIndex++;
      } else if (!isDeleting && currentIndex === currentRole.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(currentRole.slice(0, currentIndex - 1));
        currentIndex--;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        clearInterval(typeEffect);
      }
    }, isDeleting ? 50 : 100);
    return () => clearInterval(typeEffect);
  }, [currentRoleIndex]);
  const generateParticles = () => {
    return Array.from({
      length: 50
    }, (_, i) => <div key={i} className="particle" style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 15}s`,
      animationDuration: `${15 + Math.random() * 10}s`
    }} />);
  };
  return <section className="relative min-h-screen flex items-center justify-center tech-bg overflow-hidden">
      {/* Animated background particles */}
      <div className="particles">
        {generateParticles()}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/10 rotate-12 animate-float" style={{
        animationDelay: '4s'
      }}></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 border border-accent/20 rotate-45 animate-float" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Sresthasa
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground h-12">
                <span className="typing">
                  {displayText}
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Machine Learning Sculptor | AI Enthusiast | Full Stack Developer
                <br />
                Passionate about creating intelligent systems that solve real-world problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-glow bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg">
                View My Work
              </Button>
              
              
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a href="https://github.com/Sresthasa2026" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/sresthasa-mohanty-383311276" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:mohanty.sresthasa8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-96 h-96 mx-auto lg:w-[500px] lg:h-[500px]">
              {/* Glowing background ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow"></div>
              
              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary/50 transition-all duration-500 float">
                <img src={heroProfile} alt="Sresthasa Mohanty - AI/ML Engineer" className="w-full h-full object-cover" />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10"></div>
              </div>
              
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-border animate-spin-slow opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;