import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { Leaf, MapPin, Calendar, ArrowLeft, X } from 'lucide-react';

export function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 1,
      title: 'Luxury Residential Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGhvdXNlfGVufDF8fHx8MTc2MDc5MzIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Mumbai, India',
      year: '2023',
      description: 'A stunning contemporary villa featuring open-plan living, floor-to-ceiling windows, and seamless indoor-outdoor integration.',
      sustainable: true,
      details: 'This 8,500 sq ft luxury residence combines modern aesthetics with sustainable features including solar panels, rainwater harvesting, and energy-efficient climate control systems.',
    },
    {
      id: 2,
      title: 'Corporate Headquarters',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1560922604-d08a31f8f7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjA3ODY5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Gurugram, India',
      year: '2024',
      description: 'Modern corporate office building with state-of-the-art facilities and sustainable design principles.',
      sustainable: true,
      details: 'A 12-story commercial complex featuring smart building technology, green terraces, and LEED Gold certification. The design maximizes natural light while minimizing energy consumption.',
    },
    {
      id: 3,
      title: 'Contemporary Interior Suite',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjA3NTA0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Delhi, India',
      year: '2023',
      description: 'Elegant interior design combining minimalist aesthetics with functional luxury and comfort.',
      sustainable: false,
      details: 'A sophisticated residential interior featuring custom furnishings, premium materials, and a neutral color palette that creates a serene, timeless atmosphere.',
    },
    {
      id: 4,
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1633177977329-a010820794d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjA4NjA2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Bangalore, India',
      year: '2024',
      description: 'Innovative workspace design promoting collaboration, creativity, and employee wellbeing.',
      sustainable: true,
      details: 'A tech-forward office building with flexible workspaces, biophilic design elements, and advanced sustainability features including green walls and solar power integration.',
    },
    {
      id: 5,
      title: 'Urban Residential Complex',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1654371404345-845d8aa147f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA3ODMyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Pune, India',
      year: '2022',
      description: 'Multi-family residential development with modern amenities and community-focused design.',
      sustainable: true,
      details: 'A 150-unit residential complex featuring rooftop gardens, community spaces, rainwater harvesting, and energy-efficient building systems.',
    },
    {
      id: 6,
      title: 'Luxury Penthouse Design',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1680538993040-63e1dbc523b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwODIwMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      location: 'Mumbai, India',
      year: '2023',
      description: 'Opulent penthouse interior with panoramic city views and bespoke design elements.',
      sustainable: false,
      details: 'A high-end interior showcasing premium materials, custom lighting design, and curated art pieces, creating an exclusive living experience with breathtaking views.',
    },
  ];

  const categories = ['all', 'Residential', 'Commercial', 'Interior'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const selectedProjectData = selectedProject !== null 
    ? projects.find(p => p.id === selectedProject)
    : null;

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary uppercase tracking-wider text-sm mb-4 block">Our Work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Portfolio of Excellence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse portfolio of architectural projects that showcase innovation, 
              craftsmanship, and attention to detail
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border bg-background/80 backdrop-blur-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Card 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/30"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      {project.sustainable && (
                        <Badge className="bg-green-600 text-white">
                          <Leaf className="w-3 h-3 mr-1" />
                          Eco-Friendly
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProjectData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-4 flex items-center justify-between z-10">
              <h3 className="text-xl">{selectedProjectData.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="secondary">{selectedProjectData.category}</Badge>
                {selectedProjectData.sustainable && (
                  <Badge className="bg-green-600 text-white">
                    <Leaf className="w-3 h-3 mr-1" />
                    Sustainable Design
                  </Badge>
                )}
                <Badge variant="outline">
                  <MapPin className="w-3 h-3 mr-1" />
                  {selectedProjectData.location}
                </Badge>
                <Badge variant="outline">
                  <Calendar className="w-3 h-3 mr-1" />
                  {selectedProjectData.year}
                </Badge>
              </div>

              <h4 className="text-lg mb-3">Project Overview</h4>
              <p className="text-muted-foreground mb-6">{selectedProjectData.description}</p>

              <h4 className="text-lg mb-3">Details</h4>
              <p className="text-muted-foreground">{selectedProjectData.details}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
