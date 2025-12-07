import { X, Leaf, Award, Calendar, MapPin, Users, TrendingUp, Home } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

interface PortfolioDetailProps {
  projectId: number;
  onClose: () => void;
}

export function PortfolioDetail({ projectId, onClose }: PortfolioDetailProps) {
  const projects = {
    1: {
      title: 'EcoVista Residential Complex',
      category: 'Residential',
      mainImage: 'https://images.unsplash.com/photo-1630404991412-9504d094e8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYwODQ0NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'Green Living Communities',
      location: 'Portland, Oregon',
      year: '2023',
      size: '150,000 sq ft',
      certification: 'LEED Platinum',
      sustainabilityScore: '98%',
      description: 'EcoVista represents the pinnacle of sustainable residential design, featuring 120 net-zero energy units with integrated green roofs, solar panels, and advanced rainwater harvesting systems.',
      features: [
        'Net-zero energy consumption',
        'Green roofs on all buildings',
        'Solar panel integration (500kW)',
        'Rainwater harvesting system (50,000 gallon capacity)',
        'Geothermal heating and cooling',
        'Electric vehicle charging stations',
        'Community gardens and composting',
        'Native landscaping with zero irrigation',
      ],
      impact: {
        energySavings: '100%',
        waterReduction: '65%',
        carbonOffset: '450 tons/year',
        renewableEnergy: '500kW solar',
      },
      awards: [
        'AIA Sustainable Design Award 2024',
        'Green Building Excellence Award',
        'Community Impact Award',
      ],
    },
    2: {
      title: 'GreenTech Corporate Hub',
      category: 'Commercial',
      mainImage: 'https://images.unsplash.com/photo-1562914436-177840fc5c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY28lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwODQ5MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'TechVision Corp',
      location: 'San Francisco, California',
      year: '2023',
      size: '250,000 sq ft',
      certification: 'LEED Gold',
      sustainabilityScore: '95%',
      description: 'An innovative office complex that redefines workplace sustainability with biophilic design, living walls, and state-of-the-art energy management systems.',
      features: [
        'Biophilic design with 3,000+ plants',
        'Natural ventilation system',
        'Smart building automation',
        'Recycled and locally-sourced materials',
        'Green walls and interior gardens',
        'Daylight harvesting system',
        'Greywater recycling',
        '85% energy reduction vs. baseline',
      ],
      impact: {
        energySavings: '85%',
        waterReduction: '72%',
        carbonOffset: '680 tons/year',
        renewableEnergy: '750kW solar + wind',
      },
      awards: [
        'Commercial Green Building of the Year',
        'Innovation in Biophilic Design Award',
      ],
    },
    3: {
      title: 'Living Roof Sanctuary',
      category: 'Mixed-Use',
      mainImage: 'https://images.unsplash.com/photo-1677528521743-728fd1bbcf2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHJvb2YlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjA4NDkzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'Urban Green Developments',
      location: 'Seattle, Washington',
      year: '2022',
      size: '180,000 sq ft',
      certification: 'LEED Silver',
      sustainabilityScore: '92%',
      description: 'A pioneering mixed-use development featuring extensive green roof technology that creates urban biodiversity while providing natural insulation and stormwater management.',
      features: [
        '40,000 sq ft intensive green roof',
        'Urban biodiversity habitat',
        'Stormwater management system',
        'Natural insulation reducing HVAC needs',
        'Community rooftop gardens',
        'Native plant species (50+ varieties)',
        'Rooftop beekeeping program',
        'Educational nature trails',
      ],
      impact: {
        energySavings: '60%',
        waterReduction: '80%',
        carbonOffset: '320 tons/year',
        renewableEnergy: '300kW solar',
      },
      awards: [
        'Green Roof Excellence Award',
        'Urban Sustainability Innovation',
      ],
    },
    4: {
      title: 'Solar Pavilion Complex',
      category: 'Commercial',
      mainImage: 'https://images.unsplash.com/photo-1634412115855-46264464c6b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MDg0OTMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'SunPower Industries',
      location: 'Austin, Texas',
      year: '2024',
      size: '200,000 sq ft',
      certification: 'Net-Zero Certified',
      sustainabilityScore: '100%',
      description: 'A groundbreaking net-zero facility showcasing architectural integration of solar technology, generating 100% of its energy needs through innovative photovoltaic design.',
      features: [
        '1.2MW integrated solar array',
        'Building-integrated photovoltaics (BIPV)',
        'Energy storage system (2MWh)',
        'Smart grid connectivity',
        '100% renewable energy generation',
        'Zero fossil fuel consumption',
        'Advanced energy monitoring',
        'Educational solar exhibition',
      ],
      impact: {
        energySavings: '100%',
        waterReduction: '70%',
        carbonOffset: '800 tons/year',
        renewableEnergy: '1.2MW solar',
      },
      awards: [
        'Net-Zero Building Award 2024',
        'Solar Integration Excellence',
        'Energy Innovation Award',
      ],
    },
    5: {
      title: 'EcoLuxe Villa Collection',
      category: 'Residential',
      mainImage: 'https://images.unsplash.com/photo-1646877419384-98cbdde02d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NzIyOTg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'Luxury Green Living',
      location: 'Malibu, California',
      year: '2023',
      size: '12 villas, 30,000 sq ft total',
      certification: 'LEED Gold',
      sustainabilityScore: '94%',
      description: 'Luxury meets sustainability in this exclusive villa collection featuring passive solar design, natural materials, and sophisticated environmental systems.',
      features: [
        'Passive solar design orientation',
        'Natural cross-ventilation',
        'Reclaimed wood and stone materials',
        'Solar thermal hot water',
        'Greywater landscaping systems',
        'Native drought-resistant landscaping',
        'Smart home energy management',
        'Panoramic views with thermal performance',
      ],
      impact: {
        energySavings: '75%',
        waterReduction: '60%',
        carbonOffset: '180 tons/year',
        renewableEnergy: '400kW solar',
      },
      awards: [
        'Luxury Sustainable Home Award',
        'Passive Design Excellence',
      ],
    },
    6: {
      title: 'UrbanGreen Tower',
      category: 'High-Rise',
      mainImage: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTcyMTk3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      client: 'MetroGreen Development',
      location: 'New York City, New York',
      year: '2024',
      size: '450,000 sq ft, 35 floors',
      certification: 'LEED Platinum',
      sustainabilityScore: '96%',
      description: 'A vertical forest concept bringing nature to the urban skyline with integrated green spaces on every floor, creating a living building ecosystem.',
      features: [
        'Vertical forest design (10,000+ plants)',
        'Sky gardens on every 5th floor',
        'Wind turbine integration',
        'Rainwater collection system',
        'Green terraces and balconies',
        'Air purification through plants',
        'Community green spaces',
        'Reduced urban heat island effect',
      ],
      impact: {
        energySavings: '82%',
        waterReduction: '75%',
        carbonOffset: '950 tons/year',
        renewableEnergy: '900kW solar + wind',
      },
      awards: [
        'High-Rise Sustainability Award',
        'Vertical Garden Innovation Prize',
        'Urban Green Space Excellence',
      ],
    },
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-background"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Leaf className="w-6 h-6 text-green-600" />
            <h2 className="text-xl">SKJ Associates</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <ImageWithFallback
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge className="bg-green-600 text-white">{project.category}</Badge>
              <Badge className="bg-white text-black">{project.certification}</Badge>
              <Badge className="bg-yellow-600 text-white">
                Sustainability: {project.sustainabilityScore}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>{project.size}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl mb-4">Project Overview</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl mb-6">Sustainable Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 border border-green-100"
                  >
                    <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            {project.awards && project.awards.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl mb-6">Recognition & Awards</h3>
                <div className="space-y-3">
                  {project.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-yellow-50/50 border border-yellow-100"
                    >
                      <Award className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Metrics */}
            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <h4 className="text-lg">Environmental Impact</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm opacity-90 mb-1">Energy Savings</div>
                    <div className="text-2xl">{project.impact.energySavings}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Water Reduction</div>
                    <div className="text-2xl">{project.impact.waterReduction}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Carbon Offset</div>
                    <div className="text-2xl">{project.impact.carbonOffset}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90 mb-1">Renewable Energy</div>
                    <div className="text-lg">{project.impact.renewableEnergy}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="text-lg mb-3">Interested in a Similar Project?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss how we can bring sustainable design to your next project.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600"
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Start Your Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
