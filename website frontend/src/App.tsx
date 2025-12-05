import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { FloatingActions } from './components/FloatingActions';
import { ScrollProgress } from './components/ScrollProgress';
import { NewsletterPopup } from './components/NewsletterPopup';
import { BackToTop } from './components/BackToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'portfolio' | 'services' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <ThemeProvider>
      <LoadingScreen />
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ScrollProgress />
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>
          {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
          {currentPage === 'portfolio' && <PortfolioPage />}
          {currentPage === 'services' && <ServicesPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>
        <Footer onNavigate={setCurrentPage} />
        
        {/* Interactive Features */}
        <ChatBot />
        <FloatingActions />
        <BackToTop />
        <NewsletterPopup />
        <Toaster position="top-right" richColors />
      </div>
    </ThemeProvider>
  );
}
