import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { 
  Home, Building2, Palette, Ruler, TreePine, Lightbulb,
  CheckCircle, ArrowRight, Leaf
} from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'residential',
      icon: Home,
      title: 'Residential Architecture',
      description: 'Custom home design and renovation services tailored to your lifestyle and preferences.',
      features: [
        'Custom home design',
        'Residential renovations',
        'Space optimization',
        'Luxury villa design',
        '3D visualization',
        'Interior planning',
      ],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'commercial',
      icon: Building2,
      title: 'Commercial Architecture',
      description: 'Innovative commercial spaces that enhance productivity and reflect your brand identity.',
      features: [
        'Office buildings',
        'Retail spaces',
        'Corporate headquarters',
        'Mixed-use developments',
        'Workplace strategy',
        'Brand integration',
      ],
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'interior',
      icon: Palette,
      title: 'Interior Design',
      description: 'Complete interior design solutions from concept to completion with attention to detail.',
      features: [
        'Residential interiors',
        'Commercial interiors',
        'Furniture selection',
        'Lighting design',
        'Material sourcing',
        'Turnkey solutions',
      ],
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'planning',
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimize your space with strategic planning and efficient layout design.',
      features: [
        'Layout optimization',
        'Traffic flow analysis',
        'Functional zoning',
        'Furniture placement',
        'Accessibility design',
        'Code compliance',
      ],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'sustainable',
      icon: TreePine,
      title: 'Sustainable Design',
      description: 'Eco-friendly architectural solutions that minimize environmental impact.',
      features: [
        'Green building certification',
        'Energy-efficient design',
        'Solar integration',
        'Rainwater harvesting',
        'Sustainable materials',
        'Carbon footprint reduction',
      ],
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'consultation',
      icon: Lightbulb,
      title: 'Design Consultation',
      description: 'Expert advice and consultation for your architectural and design projects.',
      features: [
        'Initial concept development',
        'Feasibility studies',
        'Budget planning',
        'Permit assistance',
        'Contractor coordination',
        'Project management',
      ],
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We meet to understand your vision, requirements, and budget',
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Our team creates initial design concepts and 3D visualizations',
    },
    {
      step: '03',
      title: 'Design Refinement',
      description: 'We refine the design based on your feedback and preferences',
    },
    {
      step: '04',
      title: 'Documentation',
      description: 'Detailed drawings and specifications for construction',
    },
    {
      step: '05',
      title: 'Construction Support',
      description: 'Ongoing support during construction to ensure quality',
    },
    {
      step: '06',
      title: 'Project Completion',
      description: 'Final walkthrough and handover of your completed project',
    },
  ];

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
            <span className="text-primary uppercase tracking-wider text-sm mb-4 block">What We Offer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive architectural and design services to bring your vision to life 
              with excellence and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-6">
                    <motion.div 
                      className="mb-4 inline-block"
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-wider text-sm mb-4 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined process designed to deliver exceptional results from concept to completion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-5xl bg-gradient-to-br from-primary to-cyan-600 bg-clip-text text-transparent mb-4">
                      {item.step}
                    </div>
                    <h4 className="text-lg mb-3">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm text-green-700 dark:text-green-300">Sustainable Architecture</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl mb-6">
                Building a Greener Future
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                We integrate sustainable design principles into every project, reducing environmental 
                impact while creating healthier, more efficient spaces.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Energy-efficient building systems',
                  'Renewable energy integration',
                  'Water conservation strategies',
                  'Sustainable material selection',
                  'Indoor air quality optimization',
                  'Green building certifications',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl text-green-600 dark:text-green-400 mb-2">30%</div>
                      <div className="text-sm text-muted-foreground">Energy Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl text-green-600 dark:text-green-400 mb-2">50%</div>
                      <div className="text-sm text-muted-foreground">Water Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl text-green-600 dark:text-green-400 mb-2">25+</div>
                      <div className="text-sm text-muted-foreground">Green Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl text-green-600 dark:text-green-400 mb-2">100+</div>
                      <div className="text-sm text-muted-foreground">Sustainable Projects</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Let's Discuss Your Project</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to start your architectural journey? Contact us today for a consultation.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
