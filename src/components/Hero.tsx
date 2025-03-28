
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in">
            IT Project Manager & <br /> Tech Event Organiser
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-slow">
            Transformation des idées en solutions technologiques concrètes. 
            Organisation d'événements tech qui inspirent l'innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-slow">
            <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-8 py-6 rounded-full">
              Voir mes projets
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full">
              Contacter moi
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white/60 hover:text-white transition-colors">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-portfolio-purple/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-portfolio-blue/20 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
