import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Briefcase, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner'; // Ensure this import matches your package

export function ContactPage() {
  const [formType, setFormType] = useState<'contact' | 'hiring'>('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9920563251',
      link: 'tel:+919876543210',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'arshyam05@gmail.com',
      link: 'mailto:info@skjangidassociates.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Bhilwara, Rajasthan, India',
      link: 'https://maps.app.goo.gl/KGdpq4RdMSnw5VDQA',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 9:00 AM - 7:00 PM',
      link: null,
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
            <span className="text-primary uppercase tracking-wider text-sm mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Let's Create Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or interested in joining our team? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl mb-8">Contact Information</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-primary/30">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h4>{info.title}</h4>
                        </div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.details}</p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              {/* Replace the Map Placeholder with this */}
            <Card className="overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8230602785825!2d74.6243456!3d25.3437178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2476bf3f78f%3A0x4490b74159a8974a!2sGovindam%20Commercial%20Hub!5e0!3m2!1sen!2sin!4v1765081252096!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Our location on Google Maps"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-4 text-center">
                <a
                  href="https://maps.app.goo.gl/KGdpq4RdMSnw5VDQA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                >
                  Open in Maps
                </a>
              </div>
            </Card>
            </motion.div>

            {/* Contact/Hiring Forms */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                    <Tabs defaultValue="contact" onValueChange={(value: string) => setFormType(value as 'contact' | 'hiring')}>
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                      <TabsTrigger value="contact" className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Contact Us
                      </TabsTrigger>
                      <TabsTrigger value="hiring" className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Join Our Team
                      </TabsTrigger>
                    </TabsList>

                    {/* Contact Form */}
                    <TabsContent value="contact">
                      <h3 className="text-2xl mb-6">Send Us a Message</h3>
                      
                      {/* --- START: UPDATED BACKEND CONNECTION --- */}
                      <form className="space-y-6" onSubmit={async (e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        
                        // 1. Gather Data
                        const formData = {
                          firstName: (document.getElementById('firstName') as HTMLInputElement).value,
                          lastName: (document.getElementById('lastName') as HTMLInputElement).value,
                          email: (document.getElementById('email') as HTMLInputElement).value,
                          phone: (document.getElementById('phone') as HTMLInputElement).value,
                          projectType: (document.getElementById('project') as HTMLSelectElement).value,
                          message: (document.getElementById('message') as HTMLTextAreaElement).value,
                        };

                        try {
                          // 2. Send to Backend
                          const response = await fetch('http://localhost:5000/api/contact', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(formData),
                          });

                          const data = await response.json();

                          if (data.success) {
                            // 3. Success
                            setIsSubmitting(false);
                            setIsSubmitted(true);
                            toast.success('Message sent successfully!', {
                              description: 'We have received your details in our database.'
                            });
                            
                            // Clear form
                            (e.target as HTMLFormElement).reset();
                            
                            setTimeout(() => setIsSubmitted(false), 3000);
                          } else {
                            throw new Error(data.message || 'Something went wrong');
                          }
                        } catch (error) {
                          setIsSubmitting(false);
                          toast.error('Failed to send message', {
                            description: 'Please ensure the backend server is running.'
                          });
                          console.error(error);
                        }
                      }}>
                      {/* --- END: UPDATED BACKEND CONNECTION --- */}

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block mb-2 text-sm">First Name *</label>
                            <Input id="firstName" placeholder="John" required />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm">Last Name *</label>
                            <Input id="lastName" placeholder="Doe" required />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm">Email *</label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block mb-2 text-sm">Phone</label>
                          <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                        </div>
                        
                        <div>
                          <label htmlFor="project" className="block mb-2 text-sm">Project Type *</label>
                          <select 
                            id="project" 
                            className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            required
                          >
                            <option value="">Select project type</option>
                            <option value="residential">Residential Design</option>
                            <option value="commercial">Commercial Architecture</option>
                            <option value="interior">Interior Design</option>
                            <option value="renovation">Renovation</option>
                            <option value="consultation">Design Consultation</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block mb-2 text-sm">Message *</label>
                          <Textarea 
                            id="message" 
                            placeholder="Tell us about your project..." 
                            className="min-h-[150px]"
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 relative" 
                          size="lg"
                          disabled={isSubmitting || isSubmitted}
                        >
                          <AnimatePresence mode="wait">
                            {isSubmitting ? (
                              <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center"
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                                />
                                Sending...
                              </motion.div>
                            ) : isSubmitted ? (
                              <motion.div
                                key="success"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center"
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Sent!
                              </motion.div>
                            ) : (
                              <motion.div
                                key="send"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center"
                              >
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Button>
                      </form>
                    </TabsContent>

                    {/* Hiring Form - (Currently just simulation, we can wire this up later!) */}
                    <TabsContent value="hiring">
                      <h3 className="text-2xl mb-6">Career Application</h3>
                      <form className="space-y-6" onSubmit={(e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        setTimeout(() => {
                          setIsSubmitting(false);
                          setIsSubmitted(true);
                          toast.success('Application submitted successfully!', {
                            description: 'We\'ll review your application and get back to you soon.'
                          });
                          setTimeout(() => setIsSubmitted(false), 3000);
                        }, 1500);
                      }}>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="hireFirstName" className="block mb-2 text-sm">First Name *</label>
                            <Input id="hireFirstName" placeholder="John" required />
                          </div>
                          <div>
                            <label htmlFor="hireLastName" className="block mb-2 text-sm">Last Name *</label>
                            <Input id="hireLastName" placeholder="Doe" required />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="hireEmail" className="block mb-2 text-sm">Email *</label>
                          <Input id="hireEmail" type="email" placeholder="john@example.com" required />
                        </div>
                        
                        <div>
                          <label htmlFor="hirePhone" className="block mb-2 text-sm">Phone *</label>
                          <Input id="hirePhone" type="tel" placeholder="+91 98765 43210" required />
                        </div>
                        
                        <div>
                          <label htmlFor="position" className="block mb-2 text-sm">Position *</label>
                          <select 
                            id="position" 
                            className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            required
                          >
                            <option value="">Select position</option>
                            <option value="architect">Architect</option>
                            <option value="designer">Interior Designer</option>
                            <option value="engineer">Structural Engineer</option>
                            <option value="project-manager">Project Manager</option>
                            <option value="draftsman">Draftsman</option>
                            <option value="intern">Internship</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="experience" className="block mb-2 text-sm">Years of Experience</label>
                          <Input id="experience" type="number" placeholder="5" min="0" />
                        </div>

                        <div>
                          <label htmlFor="portfolio" className="block mb-2 text-sm">Portfolio/LinkedIn URL</label>
                          <Input id="portfolio" type="url" placeholder="https://..." />
                        </div>
                        
                        <div>
                          <label htmlFor="coverLetter" className="block mb-2 text-sm">Why do you want to join us? *</label>
                          <Textarea 
                            id="coverLetter" 
                            placeholder="Tell us about yourself and why you're interested in this position..." 
                            className="min-h-[150px]"
                            required
                          />
                        </div>

                        <div className="text-sm text-muted-foreground bg-secondary/30 p-4 rounded-lg">
                          <p className="mb-2">Please attach your resume/CV and portfolio by emailing to:</p>
                          <a href="mailto:careers@skjangidassociates.com" className="text-primary hover:underline">
                            careers@skjangidassociates.com
                          </a>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90" 
                          size="lg"
                          disabled={isSubmitting || isSubmitted}
                        >
                          <AnimatePresence mode="wait">
                            {isSubmitting ? (
                              <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center"
                              >
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                                />
                                Submitting...
                              </motion.div>
                            ) : isSubmitted ? (
                              <motion.div
                                key="success"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center"
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Submitted!
                              </motion.div>
                            ) : (
                              <motion.div
                                key="send"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center"
                              >
                                <Briefcase className="w-4 h-4 mr-2" />
                                Submit Application
                              </motion.div>
                            )}
                          </AnimatePresence>
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

      {/* Additional Info */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="text-lg mb-3">Fast Response</h4>
              <p className="text-muted-foreground">
                We typically respond to inquiries within 24 hours
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h4 className="text-lg mb-3">Free Consultation</h4>
              <p className="text-muted-foreground">
                Initial consultation to discuss your project is complimentary
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h4 className="text-lg mb-3">Flexible Meetings</h4>
              <p className="text-muted-foreground">
                We offer in-person, virtual, and on-site consultations
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}