import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';
import { Loader2, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const payload = isLogin ? { email, password } : { name, email, password, role: 'admin' };

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(isLogin ? 'Welcome back, Architect.' : 'Admin Account Created.');
        
        login(data.token, { 
          id: data.token,
          name: data.name || name, 
          role: data.role || 'admin' 
        });

        // CHANGED: Redirect to Admin Dashboard instead of Home
        navigate('/admin');
      } 
      else {
        toast.error(data.message || 'Authentication failed');
      }
    } catch (error) {
      toast.error('Unable to connect to server.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // CHANGED: lg:grid-cols-2 -> md:grid-cols-2 (Shows split screen on laptops)
    <div className="fixed inset-0 w-full h-full grid md:grid-cols-2 overflow-hidden z-50 bg-background">
      
      {/* Left Side - Visual & Branding */}
      {/* CHANGED: hidden lg:flex -> hidden md:flex (Shows image on laptops) */}
      <div className="hidden md:flex flex-col relative bg-zinc-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Skyscraper" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
        
        {/* Content over image */}
        <div className="relative z-20 flex flex-col justify-between h-full p-12">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-xl tracking-tight">SK Jangid & Associates</span>
          </div>
          
          <div className="space-y-8">
            <blockquote className="space-y-4">
              <p className="text-3xl font-light leading-normal text-white/90">
                "Architecture starts when you carefully put two bricks together. There it begins."
              </p>
              <footer className="flex items-center gap-4 text-sm font-medium text-white/60">
                <span className="h-px w-8 bg-white/40"></span>
                Ludwig Mies van der Rohe
              </footer>
            </blockquote>
            
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm text-white/80 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Admin Dashboard</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Secure Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login "Dialog Box" Area */}
      <div className="flex items-center justify-center p-4 lg:p-8 bg-muted/30 relative">
        {/* Subtle pattern background for right side */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        {/* The Dialog Box / Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-[420px] bg-background rounded-2xl shadow-2xl border border-border/50 p-8 relative z-10"
        >
          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center mb-6">
             <div className="p-3 bg-primary/10 rounded-xl">
               <Building2 className="w-8 h-8 text-primary" />
             </div>
          </div>

          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight">
              {isLogin ? 'Welcome Back' : 'Create Admin Account'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isLogin ? 'Enter your credentials to manage the platform' : 'Set up your workspace admin access'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Full Name
                  </label>
                  <Input 
                    placeholder="Ar. John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="h-10"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email Address
              </label>
              <Input 
                type="email" 
                placeholder="admin@skjangid.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                {isLogin && (
                  <Link to="#" className="text-xs text-primary hover:underline">
                    Forgot password?
                  </Link>
                )}
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="h-10"
              />
            </div>

            <Button type="submit" className="w-full h-10 mt-2" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Sign In to Dashboard' : 'Create Account'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <div className="text-center">
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary font-medium hover:underline underline-offset-4"
            >
              {isLogin ? "Need an account? Sign Up" : "Have an account? Login"}
            </button>
          </div>
        </motion.div>
        
        <div className="absolute bottom-6 text-center w-full text-xs text-muted-foreground">
          © {new Date().getFullYear()} SK Jangid & Associates. Secure Portal.
        </div>
      </div>
    </div>
  );
}
