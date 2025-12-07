import image_8fc6484753414d15dd696d5856aa73b05c34c2e7 from 'figma:asset/8fc6484753414d15dd696d5856aa73b05c34c2e7.png';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import logo from 'figma:asset/8e04a80053d706c77457d64cf57f490b26dc482a.png';

interface FooterProps {
  onNavigate: (page: 'home' | 'portfolio' | 'services' | 'contact') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: 'home' | 'portfolio' | 'services' | 'contact') => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Residential Architecture', onClick: () => handleNavigation('services') },
        { name: 'Commercial Architecture', onClick: () => handleNavigation('services') },
        { name: 'Interior Design', onClick: () => handleNavigation('services') },
        { name: 'Space Planning', onClick: () => handleNavigation('services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', onClick: () => handleNavigation('home') },
        { name: 'Portfolio', onClick: () => handleNavigation('portfolio') },
        { name: 'Services', onClick: () => handleNavigation('services') },
        { name: 'Contact', onClick: () => handleNavigation('contact') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Project Gallery', onClick: () => handleNavigation('portfolio') },
        { name: 'Design Services', onClick: () => handleNavigation('services') },
        { name: 'Career Opportunities', onClick: () => handleNavigation('contact') },
        { name: 'Get in Touch', onClick: () => handleNavigation('contact') },
      ],
    },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={image_8fc6484753414d15dd696d5856aa73b05c34c2e7} alt="SK Jangid & Associates" className="h-29 mb-3 dark:invert dark:brightness-0 dark:contrast-200" />
            <p className="text-muted-foreground mb-6">
              Creating innovative architectural solutions that inspire and transform spaces with 
              excellence, sustainability, and thoughtful design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={link.onClick}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} SK Jangid & Associates. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}