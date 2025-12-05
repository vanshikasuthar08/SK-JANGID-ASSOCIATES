import { Home, Building2, Palette, Ruler, TreePine, Lightbulb, Wind, Sun, Droplet, Leaf, Factory, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';

interface ServicesProps {
  onServiceClick: (id: string) => void;
}

export function Services({ onServiceClick }: ServicesProps) {
  const services = [
    {
      id: 'green-residential',
      icon: Home,
      title: 'Green Residential Design',
      description: 'Sustainable home design with energy-efficient systems, passive solar, and eco-friendly materials.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'sustainable-commercial',
      icon: Building2,
      title: 'Sustainable Commercial',
      description: 'LEED-certified commercial spaces that reduce operational costs and environmental impact.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'biophilic-interior',
      icon: Palette,
      title: 'Biophilic Interior Design',
      description: 'Nature-inspired interiors with living walls, natural materials, and optimal daylighting.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'net-zero',
      icon: Zap,
      title: 'Net-Zero Planning',
      description: 'Design buildings that produce as much energy as they consume through renewable sources.',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 'green-infrastructure',
      icon: TreePine,
      title: 'Green Infrastructure',
      description: 'Green roofs, rain gardens, and urban forests that manage stormwater and improve air quality.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'renewable-integration',
      icon: Sun,
      title: 'Renewable Energy Integration',
      description: 'Solar, wind, and geothermal system design for maximum energy independence.',
      color: 'from-amber-500 to-red-600',
    },
    {
      id: 'water-conservation',
      icon: Droplet,
      title: 'Water Conservation Systems',
      description: 'Rainwater harvesting, greywater recycling, and efficient irrigation solutions.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 'passive-design',
      icon: Wind,
      title: 'Passive Design Strategies',
      description: 'Natural ventilation, thermal mass, and orientation for climate-responsive architecture.',
      color: 'from-cyan-500 to-teal-600',
    },
    {
      id: 'circular-architecture',
      icon: Factory,
      title: 'Circular Architecture',
      description: 'Design for disassembly and material reuse, minimizing waste and embodied carbon.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 'sustainability-consulting',
      icon: Lightbulb,
      title: 'Sustainability Consulting',
      description: 'Expert guidance on green certifications, energy modeling, and sustainable strategies.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      id: 'regenerative-design',
      icon: Leaf,
      title: 'Regenerative Design',
      description: 'Beyond sustainability - designs that actively restore and enhance the environment.',
      color: 'from-lime-500 to-green-600',
    },
    {
      id: 'smart-building',
      icon: Ruler,
      title: 'Smart Building Systems',
      description: 'IoT integration for optimized energy use, comfort, and building performance.',
      color: 'from-gray-500 to-slate-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary/30 to-green-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 mb-4">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">Sustainable Architecture Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Our Green Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive sustainable design services to bring your eco-friendly vision to life with innovation and environmental excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-2 border-transparent hover:border-green-500/30 bg-white/90 backdrop-blur-sm"
                onClick={() => onServiceClick(service.id)}
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-lg mb-3 group-hover:text-green-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{service.description}</p>
                  <motion.div 
                    className="mt-4 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    Learn more →
                  </motion.div>
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
          <p className="text-muted-foreground">Click on any service to explore detailed information and case studies</p>
        </motion.div>
      </div>
    </section>
  );
}
