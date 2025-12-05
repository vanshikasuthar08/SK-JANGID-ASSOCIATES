import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { Leaf, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  onProjectClick: (id: number) => void;
}

export function Portfolio({ onProjectClick }: PortfolioProps) {
  const projects = [
    {
      id: 1,
      title: 'EcoVista Residential Complex',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1630404991412-9504d094e8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYwODQ0NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Net-zero energy residential development with green roofs and solar integration.',
      sustainabilityScore: '98%',
      certification: 'LEED Platinum',
    },
    {
      id: 2,
      title: 'GreenTech Corporate Hub',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1562914436-177840fc5c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY28lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwODQ5MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Award-winning sustainable office space with biophilic design and rainwater harvesting.',
      sustainabilityScore: '95%',
      certification: 'LEED Gold',
    },
    {
      id: 3,
      title: 'Living Roof Sanctuary',
      category: 'Mixed-Use',
      image: 'https://images.unsplash.com/photo-1677528521743-728fd1bbcf2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHJvb2YlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA4NDkzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Innovative green roof technology creating urban biodiversity and natural insulation.',
      sustainabilityScore: '92%',
      certification: 'LEED Silver',
    },
    {
      id: 4,
      title: 'Solar Pavilion Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1634412115855-46264464c6b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDg0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'State-of-the-art solar integration generating 100% renewable energy on-site.',
      sustainabilityScore: '100%',
      certification: 'Net-Zero Certified',
    },
    {
      id: 5,
      title: 'EcoLuxe Villa Collection',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NzIyOTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Luxury sustainable villas featuring passive solar design and natural ventilation.',
      sustainabilityScore: '94%',
      certification: 'LEED Gold',
    },
    {
      id: 6,
      title: 'UrbanGreen Tower',
      category: 'High-Rise',
      image: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTcyMTk3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Vertical forest concept with integrated green spaces throughout the building.',
      sustainabilityScore: '96%',
      certification: 'LEED Platinum',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(34 197 94) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 mb-4">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">Green Architecture Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Sustainable Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative sustainable solutions that have transformed communities and set new standards in green architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-500/30 bg-white/80 backdrop-blur-sm"
                onClick={() => onProjectClick(project.id)}
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                    <Badge className="bg-green-600 text-white">
                      {project.sustainabilityScore}
                    </Badge>
                  </div>

                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                      <ExternalLink className="w-6 h-6 text-green-600" />
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl group-hover:text-green-600 transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Leaf className="w-4 h-4" />
                    <span>{project.certification}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">Click on any project to learn more about our sustainable solutions</p>
        </motion.div>
      </div>
    </section>
  );
}
