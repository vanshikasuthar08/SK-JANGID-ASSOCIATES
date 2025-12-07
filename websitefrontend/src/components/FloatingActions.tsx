import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, X, Phone, Mail, Calculator, 
  Share2 
} from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { 
      icon: Phone, 
      label: 'Call Us', 
      onClick: () => {
        window.location.href = 'tel:+919876543210';
        toast.success('Opening phone dialer...');
      },
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      onClick: () => {
        window.location.href = 'mailto:info@skjangidassociates.com';
        toast.success('Opening email client...');
      },
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Calculator, 
      label: 'Cost Estimator', 
      onClick: () => {
        toast.info('Cost calculator feature coming soon!', {
          description: 'We\'re working on an interactive cost estimation tool.'
        });
      },
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: Share2, 
      label: 'Share', 
      onClick: () => {
        if (navigator.share) {
          navigator.share({
            title: 'SK Jangid & Associates',
            text: 'Check out this amazing architecture firm!',
            url: window.location.href
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          toast.success('Link copied to clipboard!');
        }
      },
      color: 'from-pink-500 to-pink-600'
    },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, x: -5 }}
              >
                <Button
                  onClick={() => {
                    action.onClick?.();
                    setIsOpen(false);
                  }}
                  className={`rounded-full shadow-lg bg-gradient-to-r ${action.color} text-white w-12 h-12 p-0 relative group`}
                  title={action.label}
                >
                  <action.icon className="w-5 h-5" />
                  <span className="absolute right-14 whitespace-nowrap bg-background text-foreground px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-sm border border-border">
                    {action.label}
                  </span>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-xl bg-gradient-to-br from-primary to-cyan-600 hover:shadow-primary/50 transition-all"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
}
