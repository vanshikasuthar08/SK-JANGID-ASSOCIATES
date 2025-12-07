import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { Leaf, MapPin, Calendar, X, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

// Define the shape of our Project data (Must match Backend)
interface Project {
  _id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
  description: string;
  details?: string;
  sustainable: boolean;
}

export function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // --- FETCH DATA FROM BACKEND ---
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        
        if (data.success) {
          setProjects(data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load projects", err);
        setError(true);
        toast.error("Could not load projects. Is the backend running?");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter Logic
  const categories = ['all', 'Residential', 'Commercial', 'Interior'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">Loading masterpieces...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4">
        <AlertCircle className="w-12 h-12 text-destructive mb-4" />
        <h2 className="text-xl font-bold mb-2">Unable to Load Portfolio</h2>
        <p className="text-muted-foreground mb-4">We couldn't connect to our server. Please try again later.</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

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
              craftsmanship, and attention to detail.
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
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                >
                  <Card 
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/30 h-full flex flex-col"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="h-full"
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
                          {project.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                          )}
                          {project.year && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{project.year}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 flex-grow">
                      <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground line-clamp-2">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
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
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="aspect-video mb-6 rounded-xl overflow-hidden bg-muted">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="secondary">{selectedProject.category}</Badge>
                {selectedProject.sustainable && (
                  <Badge className="bg-green-600 text-white">
                    <Leaf className="w-3 h-3 mr-1" />
                    Sustainable Design
                  </Badge>
                )}
                {selectedProject.location && (
                  <Badge variant="outline">
                    <MapPin className="w-3 h-3 mr-1" />
                    {selectedProject.location}
                  </Badge>
                )}
                {selectedProject.year && (
                  <Badge variant="outline">
                    <Calendar className="w-3 h-3 mr-1" />
                    {selectedProject.year}
                  </Badge>
                )}
              </div>

              <h4 className="text-lg font-semibold mb-3">Project Overview</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.description || "No description provided."}
              </p>

              {selectedProject.details && (
                <>
                  <h4 className="text-lg font-semibold mb-3">Additional Details</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.details}</p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
