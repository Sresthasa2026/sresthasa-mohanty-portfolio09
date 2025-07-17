import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === '#home' ? '#root' : href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">SM</span>
            </div>
            <span className="font-bold text-lg gradient-text">Sresthasa</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>)}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a href="https://github.com/Sresthasa2026" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/sresthasa-mohanty-383311276" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:mohanty.sresthasa8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            
            
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-lg">
            <div className="p-4 space-y-4">
              {navLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-2">
                  {link.name}
                </button>)}
              
              <div className="pt-4 border-t border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <a href="https://github.com/Sresthasa2026" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com/in/sresthasa-mohanty-383311276" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:mohanty.sresthasa8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <Button size="sm" className="btn-glow bg-gradient-to-r from-primary to-primary-glow">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;