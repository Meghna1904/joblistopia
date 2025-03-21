
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-primary font-medium text-xl transition-all duration-200 hover:opacity-80"
            >
              <Briefcase className="w-5 h-5" />
              <span>JobHub</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex md:space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/jobs" label="Find Jobs" />
            <NavLink to="/post-job" label="Post a Job" />
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="button-hover">
              <Link to="/jobs">Browse Jobs</Link>
            </Button>
            <Button asChild className="button-hover">
              <Link to="/post-job">Post a Job</Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 rounded-md transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-morphism animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/jobs" label="Find Jobs" />
            <MobileNavLink to="/post-job" label="Post a Job" />
          </div>
          <div className="px-5 py-4 flex flex-col space-y-3">
            <Button asChild variant="outline" className="w-full">
              <Link to="/jobs">Browse Jobs</Link>
            </Button>
            <Button asChild className="w-full">
              <Link to="/post-job">Post a Job</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive 
          ? 'text-primary' 
          : 'text-gray-700 dark:text-gray-200 hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`block px-3 py-3 text-base font-medium rounded-md transition-colors duration-200 ${
        isActive 
          ? 'bg-primary/10 text-primary' 
          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
