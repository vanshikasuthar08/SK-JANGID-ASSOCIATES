import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Building, Leaf, Wind, Droplet, Sun, Recycle } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const stats = [
    { icon: Building, value: '200+', label: 'Green Projects', color: 'text-green-600' },
    { icon: Users, value: '75+', label: 'Sustainability Experts', color: 'text-blue-600' },
    { icon: Award, value: '35+', label: 'LEED Certifications', color: 'text-yellow-600' },
    { icon: Leaf, value: '20+', label: 'Years Leading Green Design', color: 'text-emerald-600' },
  ];

  const sustainabilityFeatures = [
    { icon: Wind, label: 'Natural Ventilation', color: 'text-cyan-600' },
    { icon: Sun, label: 'Solar Integration', color: 'text-orange-600' },
    { icon: Droplet, label: 'Water Conservation', color: 'text-blue-600' },
    { icon: Recycle, label: 'Recycled Materials', color: 'text-green-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-green-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 mb-6">
              <Leaf className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700">Certified Green Architecture</span>
            </div>

            <h2 className="text-3xl md:text-4xl mb-6">
              About <span className="text-green-600">SKJ Associates</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              We are pioneers in sustainable architecture, creating eco-friendly spaces that blend 
              innovative design with environmental responsibility. Our expertise in green building 
              practices has transformed the way communities live, work, and thrive.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              From net-zero energy homes to LEED Platinum commercial complexes, we approach each 
              project with a commitment to reducing carbon footprints while maximizing aesthetic 
              excellence and functionality.
            </p>

            {/* Sustainability Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {sustainabilityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-border/50 shadow-sm"
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <span className="text-sm">{feature.label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-border/50"
                >
                  <div className="flex justify-center mb-3">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1562914436-177840fc5c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY28lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwODQ5MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Eco-friendly architectural design"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-600 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-3xl mb-1">100%</div>
                <div className="text-sm">Sustainable<br/>Projects</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
