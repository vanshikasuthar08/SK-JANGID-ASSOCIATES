import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { motion } from 'motion/react';
import { Building2, Award, Users, Briefcase, Leaf, ArrowRight, CheckCircle, LocateFixedIcon } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';
import { Link } from 'react-router-dom';


interface HomePageProps {
  onNavigate: (page: 'portfolio' | 'services' | 'contact') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { icon: Building2, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: LocateFixedIcon, value: '7+', label: 'Cities Explored' },
    { icon: Briefcase, value: '10+', label: 'Years of Excellence' },
  ];

  const features = [
    {
      title: 'Innovative Design',
      description: 'Cutting-edge architectural solutions that blend aesthetics with functionality',
      icon: Building2,
    },
    {
      title: 'Sustainable Practice',
      description: 'Eco-friendly designs that minimize environmental impact',
      icon: Leaf,
    },
    {
      title: 'Client-Focused',
      description: 'Personalized service tailored to your unique vision and requirements',
      icon: Users,
    },
    {
      title: 'Excellent Execution',
      description: 'Recognized excellence in architectural design and execution',
      icon: Award,
    },
  ];

  const values = [
    'Excellence in every detail',
    'Sustainable and responsible design',
    'Innovation meets tradition',
    'Timely delivery and transparency',
    'Client satisfaction guaranteed',
    'Cutting-edge technology integration',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-black/60" />
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-base md:text-lg mb-6 shadow-lg">
              Designed by You • Built by Excellence
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting Architectural Spaces
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
              as Masterpiece
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            SK Jangid & Associates brings your dreams to life with innovative design,
            and unparalleled expertise with over 10 years of excellence in architecture.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {/* 1. Explore Button wrapped in Link */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg"
                >
                  Explore Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            
            {/* 2. Get Started Button wrapped in Link */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg backdrop-blur-sm bg-white/10"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <stat.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl mb-2 text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary uppercase tracking-wider text-sm mb-4 block">About Us</span>
              <h2 className="text-3xl md:text-4xl mb-6">
                Building Dreams, Creating Legacies
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                With over a decade of excellence in architectural design, SK Jangid & Associates 
                has established itself as a ground to earth in creating innovative, sustainable, and timeless 
                architectural solutions.
              </p>
              <p className="text-lg mb-8 text-muted-foreground">
                Our team of experienced architects and designers combines creative vision with technical 
                expertise to deliver projects that exceed expectations. From residential masterpieces 
                to commercial landmarks, we bring your vision to life with precision and passion.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{value}</span>
                  </motion.div>
                ))}
              </div>

              {/* FIXED: Wrapped in Link */}
              <Link to="/services">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1721244654394-36a7bc2da288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZGVzaWdufGVufDF8fHx8MTc2MDgxMTA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Architectural design"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating Element */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <div className="text-4xl mb-2">10+</div>
                <div className="text-sm">Years of<br />Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-wider text-sm mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl mb-4">DESIGNED BY YOU</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine innovation, sustainability, and expertise to create architectural solutions 
              that stand the test of time aligned with your vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                  <CardContent className="p-6">
                    <motion.div 
                      className="mb-4 inline-block p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your architectural vision to life. Contact us today for a consultation of your plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* FIXED: Wrapped in Link */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>

              {/* FIXED: Wrapped in Link */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/portfolio">
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-2 px-8 py-6 text-lg"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
