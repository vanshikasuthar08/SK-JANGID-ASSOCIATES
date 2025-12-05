import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Briefcase, UserPlus, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { motion } from 'motion/react';

export function Contact() {
  const [formType, setFormType] = useState<'contact' | 'hiring'>('contact');

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 789-0123',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@skjassociates.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '456 Green Avenue, EcoCity, EC 54321',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-green-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 mb-4">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">Connect With Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your sustainable project or join our team of environmental design experts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-200 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-green-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-green-100">
                          <info.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <h4>{info.title}</h4>
                      </div>
                      <p className="text-muted-foreground">{info.details}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0">
              <CardContent className="p-8">
                <h4 className="text-xl mb-4">Why Choose SKJ Associates?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Award-winning sustainable design experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>35+ LEED certifications and net-zero projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Innovative green technology integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Personalized sustainable solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Competitive pricing with environmental focus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact/Hiring Forms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-green-500/20">
              <CardContent className="p-8">
                <Tabs defaultValue="contact" onValueChange={(value) => setFormType(value as 'contact' | 'hiring')}>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="contact" className="flex items-center gap-2">
                      <UserPlus className="w-4 h-4" />
                      Contact Us
                    </TabsTrigger>
                    <TabsTrigger value="hiring" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Join Our Team
                    </TabsTrigger>
                  </TabsList>

                  {/* Contact Form */}
                  <TabsContent value="contact">
                    <h3 className="text-2xl mb-6">Start Your Green Project</h3>
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block mb-2">First Name *</label>
                          <Input id="firstName" placeholder="Your first name" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block mb-2">Last Name *</label>
                          <Input id="lastName" placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2">Email *</label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block mb-2">Phone</label>
                        <Input id="phone" type="tel" placeholder="Your phone number" />
                      </div>
                      
                      <div>
                        <label htmlFor="project" className="block mb-2">Project Type *</label>
                        <select 
                          id="project" 
                          className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">Select project type</option>
                          <option value="green-residential">Green Residential Design</option>
                          <option value="sustainable-commercial">Sustainable Commercial</option>
                          <option value="net-zero">Net-Zero Planning</option>
                          <option value="renovation">Green Renovation</option>
                          <option value="consultation">Sustainability Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block mb-2">Project Details *</label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your sustainable project vision..." 
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                        Send Message
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Hiring Form */}
                  <TabsContent value="hiring">
                    <h3 className="text-2xl mb-6">Join SKJ Associates</h3>
                    <form className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="hireFirstName" className="block mb-2">First Name *</label>
                          <Input id="hireFirstName" placeholder="Your first name" />
                        </div>
                        <div>
                          <label htmlFor="hireLastName" className="block mb-2">Last Name *</label>
                          <Input id="hireLastName" placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="hireEmail" className="block mb-2">Email *</label>
                        <Input id="hireEmail" type="email" placeholder="your.email@example.com" />
                      </div>
                      
                      <div>
                        <label htmlFor="hirePhone" className="block mb-2">Phone *</label>
                        <Input id="hirePhone" type="tel" placeholder="Your phone number" />
                      </div>
                      
                      <div>
                        <label htmlFor="position" className="block mb-2">Position Interested In *</label>
                        <select 
                          id="position" 
                          className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">Select position</option>
                          <option value="architect">Sustainable Architect</option>
                          <option value="designer">Green Building Designer</option>
                          <option value="engineer">Environmental Engineer</option>
                          <option value="consultant">Sustainability Consultant</option>
                          <option value="project-manager">Green Project Manager</option>
                          <option value="intern">Internship</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="experience" className="block mb-2">Years of Experience</label>
                        <Input id="experience" type="number" placeholder="Years in sustainable architecture" />
                      </div>

                      <div>
                        <label htmlFor="portfolio" className="block mb-2">Portfolio/LinkedIn URL</label>
                        <Input id="portfolio" type="url" placeholder="https://..." />
                      </div>
                      
                      <div>
                        <label htmlFor="coverLetter" className="block mb-2">Why SKJ Associates? *</label>
                        <Textarea 
                          id="coverLetter" 
                          placeholder="Tell us why you want to join our sustainable architecture team..." 
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="text-sm text-muted-foreground">
                        <p>* Please attach your resume/CV via email to: careers@skjassociates.com</p>
                      </div>
                      
                      <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                        Submit Application
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
