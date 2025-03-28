
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Événements', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gradient">
          PortfolioTech
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => smoothScrollTo(e, link.href)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-portfolio-chocolate hover:bg-portfolio-light-chocolate text-white rounded-full">
            Télécharger CV
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <ScrollArea className="md:hidden glass-dark animate-fade-in max-h-[80vh]">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => smoothScrollTo(e, link.href)}
                className="text-white/80 hover:text-white py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-portfolio-chocolate hover:bg-portfolio-light-chocolate text-white w-full rounded-full">
              Télécharger CV
            </Button>
          </div>
        </ScrollArea>
      )}
    </header>
  );
};

export default Header;
