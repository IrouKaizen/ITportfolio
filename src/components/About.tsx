
import { Award, Briefcase, Calendar, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '8+', label: 'Années d\'expérience', icon: <Briefcase className="w-5 h-5 text-portfolio-purple" /> },
    { value: '30+', label: 'Projets complétés', icon: <Award className="w-5 h-5 text-portfolio-purple" /> },
    { value: '12+', label: 'Événements organisés', icon: <Calendar className="w-5 h-5 text-portfolio-purple" /> },
    { value: '500+', label: 'Participants', icon: <Users className="w-5 h-5 text-portfolio-purple" /> },
  ];

  const skills = [
    { category: 'Gestion de projet', items: ['Méthodologies Agile (Scrum)', 'Gestion des risques', 'Planification stratégique', 'Budgétisation'] },
    { category: 'Organisation d\'événements', items: ['Planification logistique', 'Coordination des intervenants', 'Marketing d\'événement', 'Expérience utilisateur'] },
    { category: 'Compétences techniques', items: ['Microsoft Project', 'Jira', 'Asana', 'Notion', 'G Suite', 'Slack'] },
    { category: 'Compétences personnelles', items: ['Communication', 'Leadership', 'Résolution de problèmes', 'Adaptabilité'] },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">À propos de moi</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Passionné par la gestion de projets IT et l'organisation d'événements technologiques qui rassemblent les communautés et favorisent l'innovation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 flex flex-col items-center text-center hover-scale">
              <div className="rounded-full glass p-3 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1 text-white">{stat.value}</h3>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="glass-card p-8 rounded-2xl order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-white">Mon parcours</h3>
            <p className="text-white/80 mb-4">
              Avec plus de 8 ans d'expérience dans le management de projets IT et l'organisation d'événements tech, j'ai développé une expertise dans la fusion de ces deux domaines pour créer des expériences mémorables et des solutions efficaces.
            </p>
            <p className="text-white/80">
              Ma passion est de transformer les visions en réalité, en gérant les équipes et les ressources pour livrer des projets à temps et dans le budget, tout en créant des événements qui connectent les professionnels du secteur et stimulent l'innovation.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Workspace" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-portfolio-purple/30 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Compétences</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-3 text-portfolio-purple">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-white/80 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
