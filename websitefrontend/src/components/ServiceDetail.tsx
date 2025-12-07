import { X, Leaf, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface ServiceDetailProps {
  serviceId: string;
  onClose: () => void;
}

export function ServiceDetail({ serviceId, onClose }: ServiceDetailProps) {
  const services = {
    'green-residential': {
      title: 'Green Residential Design',
      tagline: 'Sustainable Homes for Modern Living',
      description: 'Transform your living space into an eco-friendly haven with our comprehensive green residential design services. We create homes that are not only beautiful but also energy-efficient, healthy, and environmentally responsible.',
      benefits: [
        'Up to 75% reduction in energy costs',
        'Improved indoor air quality and health',
        'Increased property value (15-20% premium)',
        'Lower maintenance costs over time',
        'Reduced carbon footprint',
        'Enhanced natural lighting and ventilation',
      ],
      process: [
        { title: 'Initial Consultation', description: 'Discuss your vision, budget, and sustainability goals' },
        { title: 'Site Analysis', description: 'Evaluate solar orientation, climate, and environmental factors' },
        { title: 'Design Development', description: 'Create custom green design with energy modeling' },
        { title: 'Material Selection', description: 'Choose sustainable, non-toxic, locally-sourced materials' },
        { title: 'Construction Documentation', description: 'Detailed plans ensuring sustainable implementation' },
        { title: 'Construction Support', description: 'On-site guidance to maintain green standards' },
      ],
      features: [
        'Passive solar design',
        'Solar panel integration',
        'High-performance insulation',
        'Energy-efficient HVAC systems',
        'Sustainable building materials',
        'Water conservation systems',
        'Green/cool roof options',
        'Smart home integration',
      ],
      caseStudyStats: {
        projectsCompleted: '85+',
        averageEnergySavings: '68%',
        certifications: '42 LEED Certified',
        clientSatisfaction: '98%',
      },
    },
    'sustainable-commercial': {
      title: 'Sustainable Commercial Architecture',
      tagline: 'Green Buildings That Drive Business Success',
      description: 'Design LEED-certified commercial spaces that attract tenants, reduce operational costs, and demonstrate environmental leadership. Our sustainable commercial solutions deliver measurable ROI while protecting the planet.',
      benefits: [
        'Up to 40% operational cost reduction',
        'Enhanced employee productivity (15%+)',
        'Higher tenant retention and satisfaction',
        'Premium rental rates (7-17% increase)',
        'Corporate sustainability credentials',
        'Faster permitting and incentives',
      ],
      process: [
        { title: 'Pre-Design Analysis', description: 'Assess site, zoning, and sustainability opportunities' },
        { title: 'Certification Planning', description: 'Determine LEED, WELL, or other green certification targets' },
        { title: 'Integrated Design', description: 'Collaborative approach with all stakeholders' },
        { title: 'Energy Modeling', description: 'Advanced simulations to optimize performance' },
        { title: 'Construction Administration', description: 'Ensure green standards throughout build' },
        { title: 'Commissioning', description: 'Verify all systems perform to design specifications' },
      ],
      features: [
        'LEED certification support',
        'Energy management systems',
        'Biophilic design elements',
        'Daylighting strategies',
        'Green building materials',
        'Water-efficient fixtures',
        'EV charging infrastructure',
        'Waste reduction programs',
      ],
      caseStudyStats: {
        projectsCompleted: '62+',
        averageEnergySavings: '73%',
        certifications: '35 LEED Certified',
        clientSatisfaction: '97%',
      },
    },
    'biophilic-interior': {
      title: 'Biophilic Interior Design',
      tagline: 'Bringing Nature Indoors',
      description: 'Create interior spaces that connect occupants with nature through living walls, natural materials, water features, and optimal access to natural light. Our biophilic designs improve wellbeing and productivity.',
      benefits: [
        'Improved mental health and wellbeing',
        '15% increase in productivity',
        'Enhanced creativity and focus',
        'Reduced stress levels',
        'Better air quality',
        'Increased occupant satisfaction',
      ],
      process: [
        { title: 'Wellness Assessment', description: 'Understand occupant needs and wellness goals' },
        { title: 'Biophilic Strategy', description: 'Develop nature connection opportunities' },
        { title: 'Plant Selection', description: 'Choose appropriate species for indoor conditions' },
        { title: 'Natural Material Sourcing', description: 'Select sustainable wood, stone, and textiles' },
        { title: 'Installation & Integration', description: 'Implement living walls and natural elements' },
        { title: 'Maintenance Planning', description: 'Ensure long-term health of biophilic elements' },
      ],
      features: [
        'Living walls and green installations',
        'Natural material palettes',
        'Water features and aquatic elements',
        'Maximize natural daylighting',
        'Organic forms and patterns',
        'Natural ventilation strategies',
        'Seasonal color variations',
        'Nature views and connections',
      ],
      caseStudyStats: {
        projectsCompleted: '120+',
        averageWellbeingImprovement: '87%',
        certifications: 'WELL Certified',
        clientSatisfaction: '99%',
      },
    },
    'net-zero': {
      title: 'Net-Zero Energy Planning',
      tagline: 'Buildings That Produce Their Own Energy',
      description: 'Design buildings that produce as much renewable energy as they consume annually. Our net-zero approach combines energy efficiency, renewable generation, and smart technology for complete energy independence.',
      benefits: [
        '100% elimination of energy costs',
        'Protection from utility rate increases',
        'Highest level of sustainability',
        'Significant carbon footprint reduction',
        'Eligible for maximum incentives',
        'Future-proof investment',
      ],
      process: [
        { title: 'Energy Goal Setting', description: 'Define net-zero targets and timeline' },
        { title: 'Energy Use Reduction', description: 'Minimize demand through efficient design' },
        { title: 'Renewable Integration', description: 'Solar, wind, and geothermal sizing' },
        { title: 'Storage Solutions', description: 'Battery systems for energy independence' },
        { title: 'Performance Verification', description: 'Monitor and verify net-zero achievement' },
        { title: 'Ongoing Optimization', description: 'Continuous improvement for peak performance' },
      ],
      features: [
        'Comprehensive energy modeling',
        'Ultra-efficient building envelope',
        'Solar PV system design',
        'Energy storage systems',
        'Geothermal heat pumps',
        'LED lighting throughout',
        'Energy monitoring dashboards',
        'Grid-interactive capabilities',
      ],
      caseStudyStats: {
        projectsCompleted: '28+',
        averageEnergySavings: '100%',
        certifications: 'Net-Zero Certified',
        clientSatisfaction: '100%',
      },
    },
    'green-infrastructure': {
      title: 'Green Infrastructure Solutions',
      tagline: 'Nature-Based Urban Solutions',
      description: 'Implement green roofs, rain gardens, bioswales, and urban forests that manage stormwater, reduce urban heat islands, and create beautiful, functional outdoor spaces.',
      benefits: [
        'Effective stormwater management',
        'Reduced urban heat island effect',
        'Improved air quality',
        'Urban biodiversity habitat',
        'Aesthetic enhancement',
        'Extended roof life (2-3x)',
      ],
      process: [
        { title: 'Site Assessment', description: 'Evaluate drainage, soil, and climate conditions' },
        { title: 'Green Infrastructure Plan', description: 'Design integrated water management systems' },
        { title: 'Plant & Material Selection', description: 'Choose native, adaptive species' },
        { title: 'Engineering Design', description: 'Structural and waterproofing details' },
        { title: 'Installation Supervision', description: 'Ensure proper implementation' },
        { title: 'Maintenance Program', description: 'Long-term care and monitoring' },
      ],
      features: [
        'Extensive and intensive green roofs',
        'Rain gardens and bioswales',
        'Permeable paving systems',
        'Urban tree canopy design',
        'Living shorelines',
        'Pollinator habitats',
        'Native plant landscaping',
        'Rainwater harvesting integration',
      ],
      caseStudyStats: {
        projectsCompleted: '95+',
        stormwaterManaged: '5M+ gallons/year',
        certifications: 'Green Roof Certified',
        clientSatisfaction: '96%',
      },
    },
    'renewable-integration': {
      title: 'Renewable Energy Integration',
      tagline: 'Harnessing Clean Energy',
      description: 'Expert design and integration of solar, wind, and geothermal systems that maximize energy production while complementing architectural aesthetics.',
      benefits: [
        '80-100% energy cost reduction',
        '25-year system warranties',
        'Significant tax incentives and rebates',
        'Energy independence',
        'Hedge against rate increases',
        'Reduced carbon emissions',
      ],
      process: [
        { title: 'Energy Assessment', description: 'Analyze current usage and potential' },
        { title: 'System Design', description: 'Optimize solar, wind, or geothermal solutions' },
        { title: 'Financial Analysis', description: 'ROI, incentives, and financing options' },
        { title: 'Aesthetic Integration', description: 'Architectural harmony and curb appeal' },
        { title: 'Installation Coordination', description: 'Work with certified installers' },
        { title: 'Performance Monitoring', description: 'Track production and optimize output' },
      ],
      features: [
        'Rooftop solar array design',
        'Building-integrated photovoltaics',
        'Solar thermal systems',
        'Small wind turbine integration',
        'Geothermal heat pump systems',
        'Battery storage solutions',
        'Smart inverter technology',
        'Grid-tie and off-grid options',
      ],
      caseStudyStats: {
        projectsCompleted: '150+',
        renewableEnergyGenerated: '12MW+',
        certifications: 'Solar PV Certified',
        clientSatisfaction: '98%',
      },
    },
    'water-conservation': {
      title: 'Water Conservation Systems',
      tagline: 'Every Drop Counts',
      description: 'Design comprehensive water management systems including rainwater harvesting, greywater recycling, and efficient irrigation that reduce consumption by 60-80%.',
      benefits: [
        'Up to 80% water bill reduction',
        'Drought resilience',
        'Reduced strain on municipal systems',
        'Healthier landscapes',
        'LEED point contribution',
        'Long-term cost savings',
      ],
      process: [
        { title: 'Water Audit', description: 'Assess current usage and waste' },
        { title: 'Conservation Strategy', description: 'Identify reduction opportunities' },
        { title: 'System Design', description: 'Rainwater, greywater, and irrigation systems' },
        { title: 'Fixture Selection', description: 'High-efficiency plumbing fixtures' },
        { title: 'Installation Support', description: 'Ensure proper system implementation' },
        { title: 'User Training', description: 'Educate on system operation and maintenance' },
      ],
      features: [
        'Rainwater harvesting systems',
        'Greywater recycling',
        'High-efficiency fixtures',
        'Drip irrigation systems',
        'Smart irrigation controllers',
        'Drought-tolerant landscaping',
        'Water monitoring systems',
        'Cistern and tank design',
      ],
      caseStudyStats: {
        projectsCompleted: '110+',
        waterSaved: '50M+ gallons/year',
        certifications: 'WaterSense Certified',
        clientSatisfaction: '97%',
      },
    },
    'passive-design': {
      title: 'Passive Design Strategies',
      tagline: 'Working With Nature, Not Against It',
      description: 'Harness natural forces for heating, cooling, and ventilation through strategic orientation, thermal mass, shading, and natural ventilation.',
      benefits: [
        'Minimal mechanical system needs',
        'Year-round comfort naturally',
        'Lowest lifecycle costs',
        'Enhanced indoor air quality',
        'Resilient during power outages',
        'Timeless design principles',
      ],
      process: [
        { title: 'Climate Analysis', description: 'Study local weather patterns and sun paths' },
        { title: 'Site Orientation', description: 'Optimize building placement and orientation' },
        { title: 'Passive Strategies', description: 'Design thermal mass, shading, ventilation' },
        { title: 'Energy Modeling', description: 'Simulate passive performance' },
        { title: 'Detail Design', description: 'Implement passive features effectively' },
        { title: 'Post-Occupancy', description: 'Monitor and optimize performance' },
      ],
      features: [
        'Solar orientation optimization',
        'Thermal mass integration',
        'Natural cross-ventilation',
        'Shading devices and overhangs',
        'Stack effect ventilation',
        'Night cooling strategies',
        'Daylighting design',
        'Climate-responsive forms',
      ],
      caseStudyStats: {
        projectsCompleted: '75+',
        averageEnergySavings: '65%',
        certifications: 'Passive House',
        clientSatisfaction: '99%',
      },
    },
    'circular-architecture': {
      title: 'Circular Architecture',
      tagline: 'Design for Disassembly and Reuse',
      description: 'Create buildings designed for long life, adaptability, and eventual material recovery. Minimize embodied carbon and waste through circular design principles.',
      benefits: [
        'Reduced embodied carbon (40-60%)',
        'Material cost savings',
        'Future adaptability',
        'Waste minimization',
        'Resource efficiency',
        'Circular economy leadership',
      ],
      process: [
        { title: 'Material Life Cycle', description: 'Assess embodied carbon and recyclability' },
        { title: 'Design for Disassembly', description: 'Reversible connections and modular design' },
        { title: 'Material Passports', description: 'Document materials for future recovery' },
        { title: 'Adaptable Systems', description: 'Flexible spaces for changing needs' },
        { title: 'Waste Planning', description: 'Construction waste diversion strategies' },
        { title: 'End-of-Life Strategy', description: 'Plan for deconstruction and reuse' },
      ],
      features: [
        'Modular construction methods',
        'Reversible connections',
        'Material health assessments',
        'Reclaimed and recycled materials',
        'Material passports',
        'Long-life, low-impact materials',
        'Adaptable floor plans',
        'Deconstruction planning',
      ],
      caseStudyStats: {
        projectsCompleted: '35+',
        embodiedCarbonReduction: '55%',
        certifications: 'Cradle to Cradle',
        clientSatisfaction: '96%',
      },
    },
    'sustainability-consulting': {
      title: 'Sustainability Consulting',
      tagline: 'Expert Guidance for Green Success',
      description: 'Comprehensive consulting services for LEED certification, energy modeling, green material selection, and sustainability strategy development.',
      benefits: [
        'Achieve certification goals',
        'Avoid costly mistakes',
        'Maximize incentives and rebates',
        'Expert third-party validation',
        'Streamlined approval process',
        'Long-term performance assurance',
      ],
      process: [
        { title: 'Project Assessment', description: 'Evaluate sustainability goals and constraints' },
        { title: 'Certification Roadmap', description: 'Develop path to LEED, WELL, or other certs' },
        { title: 'Team Coordination', description: 'Facilitate integrated design process' },
        { title: 'Documentation Support', description: 'Manage certification paperwork' },
        { title: 'Verification & Review', description: 'Ensure compliance and performance' },
        { title: 'Certification Submission', description: 'Guide through certification process' },
      ],
      features: [
        'LEED certification consulting',
        'WELL Building Standard',
        'Living Building Challenge',
        'Energy modeling and analysis',
        'Life cycle assessments',
        'Green product research',
        'Sustainability reporting',
        'Policy and compliance guidance',
      ],
      caseStudyStats: {
        projectsCompleted: '180+',
        certificationsAchieved: '95%',
        certifications: 'LEED AP Certified',
        clientSatisfaction: '98%',
      },
    },
    'regenerative-design': {
      title: 'Regenerative Design',
      tagline: 'Beyond Sustainable - Actively Restorative',
      description: 'Go beyond sustainability to create buildings and landscapes that actively restore and enhance the environment, producing more resources than they consume.',
      benefits: [
        'Net-positive environmental impact',
        'Ecosystem restoration',
        'Enhanced biodiversity',
        'Carbon sequestration',
        'Water quality improvement',
        'Community resilience',
      ],
      process: [
        { title: 'Place-Based Analysis', description: 'Deep understanding of local ecosystem' },
        { title: 'Regenerative Vision', description: 'Define restorative goals and metrics' },
        { title: 'Living Systems Design', description: 'Integrate natural processes' },
        { title: 'Ecological Implementation', description: 'Restore native habitats and functions' },
        { title: 'Monitoring & Adaptation', description: 'Track ecosystem health improvements' },
        { title: 'Community Engagement', description: 'Involve stakeholders in stewardship' },
      ],
      features: [
        'Ecosystem restoration',
        'Carbon-positive design',
        'Water purification systems',
        'Soil regeneration',
        'Native habitat creation',
        'Food production integration',
        'Community resilience building',
        'Biomimicry applications',
      ],
      caseStudyStats: {
        projectsCompleted: '18+',
        ecosystemsRestored: '25 acres',
        certifications: 'Living Building',
        clientSatisfaction: '100%',
      },
    },
    'smart-building': {
      title: 'Smart Building Systems',
      tagline: 'Intelligent Buildings for Peak Performance',
      description: 'Integrate IoT sensors, AI, and automation to optimize energy use, comfort, and building performance while providing real-time insights and control.',
      benefits: [
        '30-40% additional energy savings',
        'Predictive maintenance',
        'Optimized comfort and productivity',
        'Real-time performance monitoring',
        'Lower operational costs',
        'Data-driven decision making',
      ],
      process: [
        { title: 'System Assessment', description: 'Evaluate existing systems and opportunities' },
        { title: 'Smart Strategy', description: 'Design integrated automation approach' },
        { title: 'Technology Selection', description: 'Choose appropriate IoT and controls' },
        { title: 'Integration Design', description: 'Coordinate all building systems' },
        { title: 'Installation & Configuration', description: 'Deploy and program smart systems' },
        { title: 'Training & Optimization', description: 'User education and ongoing tuning' },
      ],
      features: [
        'Building automation systems',
        'IoT sensor networks',
        'AI-powered optimization',
        'Energy management platforms',
        'Occupancy-based controls',
        'Predictive analytics',
        'Mobile app control',
        'Data visualization dashboards',
      ],
      caseStudyStats: {
        projectsCompleted: '88+',
        averageEnergySavings: '38%',
        certifications: 'Smart Certified',
        clientSatisfaction: '97%',
      },
    },
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) return null;

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

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-white/20 text-white mb-4 border-white/30">
              Sustainable Service
            </Badge>
            <h1 className="text-4xl md:text-5xl mb-4">{service.title}</h1>
            <p className="text-2xl opacity-90 mb-6">{service.tagline}</p>
            <p className="text-lg opacity-80 max-w-3xl">{service.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl mb-6">Key Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-green-50/50 border border-green-100"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl mb-6">Our Process</h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 rounded-lg bg-white border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl mb-6">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30"
                  >
                    <ArrowRight className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <h4 className="text-lg">Track Record</h4>
                </div>
                <div className="space-y-4">
                  {Object.entries(service.caseStudyStats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-sm opacity-90 mb-1">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                      </div>
                      <div className="text-2xl">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="p-6 text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg mb-3">Ready to Get Started?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's discuss how this service can transform your project.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 mb-3"
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={onClose}
                >
                  View All Services
                </Button>
              </CardContent>
            </Card>

            {/* Related Info */}
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-4">Related Certifications</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• LEED Accreditation</p>
                  <p>• WELL AP Certification</p>
                  <p>• Passive House Designer</p>
                  <p>• Living Future Accredited</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
