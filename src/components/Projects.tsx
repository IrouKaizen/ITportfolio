
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Système de gestion de projet interne',
      description: 'Implémentation d\'un système de gestion de projet personnalisé pour améliorer la collaboration et le suivi des équipes internes.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Gestion de projet', 'React', 'Node.js', 'MongoDB'],
      links: {
        preview: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'Plateforme de billetterie événementielle',
      description: 'Développement d\'une plateforme de billetterie personnalisée pour gérer les inscriptions aux événements technologiques.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['E-commerce', 'Vue.js', 'Express', 'PostgreSQL'],
      links: {
        preview: '#',
        github: '#',
      },
    },
    {
      id: 3,
      title: 'Dashboard de suivi de performance',
      description: 'Création d\'un tableau de bord analytique pour suivre les KPIs des projets et visualiser les données en temps réel.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Business Intelligence', 'Data Viz', 'React', 'D3.js'],
      links: {
        preview: '#',
        github: '#',
      },
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Mes Projets</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Découvrez une sélection de projets IT que j'ai dirigés, de la conception à la livraison.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-2xl overflow-hidden hover-scale">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-portfolio-purple/30 text-portfolio-purple text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-end space-x-3">
                  <a href={project.links.github} className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                    <Github size={18} className="text-white" />
                  </a>
                  <a href={project.links.preview} className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                    <ExternalLink size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
