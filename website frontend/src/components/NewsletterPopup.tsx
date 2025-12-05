import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenNewsletter = localStorage.getItem('hasSeenNewsletter');
    const hasSubscribed = localStorage.getItem('newsletterSubscribed');
    
    if (!hasSeenNewsletter && !hasSubscribed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasSeenNewsletter', 'true');
      }, 15000); // Show after 15 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('newsletterSubscribed', 'true');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="w-full max-w-lg border-2 border-primary/30 shadow-2xl overflow-hidden">
              <div className="relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-cyan-500/20 to-blue-600/20" />
                
                <CardContent className="relative p-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </Button>

                  {!isSubmitted ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                        className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Gift className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-2xl md:text-3xl text-center mb-3">
                        Get Design Inspiration!
                      </h3>
                      <p className="text-center text-muted-foreground mb-6">
                        Subscribe to our newsletter and get exclusive architectural tips, 
                        project updates, and design trends delivered to your inbox.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 h-12"
                            required
                          />
                        </div>
                        <Button 
                          type="submit"
                          className="w-full h-12 bg-gradient-to-r from-primary to-cyan-600 hover:opacity-90 transition-all"
                          size="lg"
                        >
                          Subscribe Now
                        </Button>
                      </form>

                      <p className="text-xs text-center text-muted-foreground mt-4">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', bounce: 0.6 }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <h3 className="text-2xl mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        You've successfully subscribed to our newsletter.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
