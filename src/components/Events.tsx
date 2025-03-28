
import { Calendar, MapPin, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'DevCon 2023',
      description: 'Une conférence annuelle pour les développeurs et professionnels IT, mettant en avant les dernières tendances et technologies.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Mai 2023',
      location: 'Paris, France',
      attendees: '350+',
      tags: ['Développement', 'IA', 'Blockchain', 'UX/UI'],
    },
    {
      id: 2,
      title: 'Women in Tech Meetup',
      description: 'Un événement de réseautage pour les femmes dans la technologie, avec des ateliers et des sessions de mentorat.',
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Mars 2023',
      location: 'Lyon, France',
      attendees: '120+',
      tags: ['Diversité', 'Networking', 'Leadership'],
    },
    {
      id: 3,
      title: 'Hackathon Innovation',
      description: 'Un hackathon de 48 heures où les équipes développent des solutions pour résoudre des défis du monde réel.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Octobre 2022',
      location: 'Bordeaux, France',
      attendees: '75+',
      tags: ['Innovation', 'Programmation', 'Collaboration'],
    },
  ];

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Événements Tech</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Voici une sélection d'événements technologiques que j'ai conçus et organisés pour connecter les professionnels et partager les connaissances.
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event) => (
            <div key={event.id} className="glass-card rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="aspect-auto md:aspect-square overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t md:from-black/50 md:to-transparent"></div>
                </div>
                
                <div className="p-6 md:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
                    <p className="text-white/80 mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-portfolio-purple" />
                        <span className="text-sm text-white/70">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-portfolio-purple" />
                        <span className="text-sm text-white/70">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} className="text-portfolio-purple" />
                        <span className="text-sm text-white/70">{event.attendees} participants</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} className="bg-portfolio-purple/20 text-portfolio-purple border-none text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
