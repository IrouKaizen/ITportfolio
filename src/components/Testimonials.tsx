
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Laurent',
      title: 'CTO, TechInnovate',
      quote: 'Un manager de projet exceptionnel qui a mené notre transformation numérique avec expertise et vision. Sa capacité à gérer des équipes multidisciplinaires tout en respectant les délais serrés était impressionnante.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marc Dubois',
      title: 'CEO, EventHub',
      quote: 'L\'organisation de notre conférence annuelle a été impeccable. Attention aux détails, communication fluide et gestion des imprévus - tout a été géré avec professionnalisme. Nous avons reçu d\'excellents retours des participants.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
    },
    {
      id: 3,
      name: 'Claire Martin',
      title: 'Product Manager, DevSolutions',
      quote: 'Un collaborateur stratégique qui comprend parfaitement comment aligner les objectifs technologiques avec les besoins business. Son approche méthodique et sa capacité à anticiper les risques ont été déterminantes pour notre succès.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Ce Qu'ils Disent</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Découvrez les témoignages des clients et partenaires avec qui j'ai eu le plaisir de collaborer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="flex flex-wrap items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-white/70">{testimonials[currentIndex].title}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg text-white/90 italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-white/20 text-white hover:bg-white/10" 
                  onClick={prev}
                >
                  <ChevronLeft size={20} />
                </Button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <span 
                      key={index} 
                      className={`block w-2.5 h-2.5 rounded-full ${
                        index === currentIndex ? 'bg-portfolio-purple' : 'bg-white/30'
                      }`}
                    ></span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-white/20 text-white hover:bg-white/10" 
                  onClick={next}
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-portfolio-blue/20 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Testimonials;
