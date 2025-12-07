import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext'; 

// Layout Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { FloatingActions } from './components/FloatingActions';
import { ScrollProgress } from './components/ScrollProgress';
import { NewsletterPopup } from './components/NewsletterPopup';
import { DoodleGame } from './components/DoodleGame'; // <--- NEW IMPORT
import { BackToTop } from './components/BackToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { Toaster } from './components/ui/sonner';

// Pages
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  const location = useLocation();
  
  // Check if we are on the login page
  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider>
      <AuthProvider>
        <LoadingScreen />
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
          {!isLoginPage && <ScrollProgress />}
          
          {/* Only show Header if NOT on login page */}
          {!isLoginPage && (
            <Header 
              currentPage={location.pathname === '/' ? 'home' : location.pathname.substring(1)} 
              onNavigate={() => {}} // Legacy prop, kept to avoid TS errors if component expects it
            /> 
          )}
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />

              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>

          {/* Only show Footer/Extras if NOT on login page */}
          {!isLoginPage && <Footer onNavigate={() => {}} />}
          
          {!isLoginPage && (
            <>
              <ChatBot />
              <FloatingActions />
              <BackToTop />
              <NewsletterPopup />
              <DoodleGame /> {/* <--- ADDED HERE */}
            </>
          )}
          <Toaster position="top-right" richColors />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
