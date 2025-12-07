import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      avatar: 'RK',
      rating: 5,
      text: 'SK Jangid & Associates transformed our dream home into reality. Their attention to detail and innovative design exceeded all expectations. The sustainable features they integrated have significantly reduced our energy costs!',
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      avatar: 'PS',
      rating: 5,
      text: 'Outstanding work on our commercial space! The team understood our brand vision perfectly and created an inspiring workspace. The project was delivered on time and within budget. Highly recommended!',
    },
    {
      name: 'Amit Patel',
      role: 'Developer',
      avatar: 'AP',
      rating: 5,
      text: 'We\'ve worked with many architects, but SK Jangid & Associates stands out. Their expertise in sustainable design and modern architecture is unmatched. Professional, creative, and reliable.',
    },
    {
      name: 'Sneha Reddy',
      role: 'Interior Designer',
      avatar: 'SR',
      rating: 5,
      text: 'Collaborating with this team was a pleasure. They bring fresh perspectives and innovative solutions to every project. Their commitment to excellence is evident in every detail.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-cyan-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 border-primary/20 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <Quote className="w-12 h-12 text-primary/20 mb-6" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-600">
                      <AvatarFallback className="bg-transparent text-white text-lg">
                        {testimonials[currentIndex].avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-2 hover:border-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-2 hover:border-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
