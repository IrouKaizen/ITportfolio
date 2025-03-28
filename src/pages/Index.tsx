
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animation on scroll logic
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col smooth-transition overflow-hidden">
      <Header />
      <main className="smooth-transition">
        <Hero />
        <div className="animate-on-scroll">
          <About />
        </div>
        <div className="animate-on-scroll">
          <Projects />
        </div>
        <div className="animate-on-scroll">
          <Events />
        </div>
        <div className="animate-on-scroll">
          <Testimonials />
        </div>
        <div className="animate-on-scroll">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
