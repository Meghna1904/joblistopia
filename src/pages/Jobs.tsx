
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import JobList from '@/components/JobList';
import { Search } from 'lucide-react';

const Jobs = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`space-y-8 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-3xl font-medium">Browse Jobs</h1>
                <p className="text-muted-foreground">
                  Find your next opportunity from our extensive job listings
                </p>
              </div>
            </div>
            
            <JobList />
          </div>
        </div>
      </main>
      
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-background border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JobHub. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Jobs;
