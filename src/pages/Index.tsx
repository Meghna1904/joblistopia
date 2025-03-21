
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import FeaturedJobs from '@/components/FeaturedJobs';
import { ArrowRight, BriefcaseBusiness, Building2, Users, Star, Search } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Star className="h-3.5 w-3.5" />
              <span>The #1 job listing platform for professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight md:leading-tight mb-6 animate-fade-up" style={{animationDelay: '100ms'}}>
              Find Your <span className="text-primary">Perfect Job</span><br />Match Today
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-up" style={{animationDelay: '200ms'}}>
              Discover thousands of job opportunities from top companies around the world. 
              Whether you're looking for remote work or local positions, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{animationDelay: '300ms'}}>
              <Button asChild size="lg" className="min-w-36 button-hover">
                <Link to="/jobs">Find Jobs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-36 button-hover">
                <Link to="/post-job">Post a Job</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats section */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-muted-foreground">Job Listings</div>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-up" style={{animationDelay: '300ms'}}>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="flex flex-col items-center text-center animate-fade-up" style={{animationDelay: '400ms'}}>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-muted-foreground">Locations</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes it easy to find the perfect job or the ideal candidate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm border animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Search Jobs</h3>
              <p className="text-muted-foreground">
                Browse thousands of job listings across multiple categories and locations.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm border animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Apply With Ease</h3>
              <p className="text-muted-foreground">
                Quick and streamlined application process so you can apply for jobs in minutes.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm border animate-fade-up" style={{animationDelay: '300ms'}}>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Post Jobs</h3>
              <p className="text-muted-foreground">
                Employers can easily post job listings and find the perfect candidates.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured jobs section */}
      <FeaturedJobs />
      
      {/* CTA section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 p-8 md:p-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm border">
            <div className="space-y-4 md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-medium">Ready to find your dream job?</h2>
              <p className="text-muted-foreground text-lg">
                Browse our extensive job listings and apply today.
              </p>
            </div>
            
            <Button asChild size="lg" className="md:min-w-44 button-hover">
              <Link to="/jobs" className="flex items-center gap-2">
                Browse Jobs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">JobHub</span>
              </div>
              <p className="text-muted-foreground">
                Connecting talent with opportunity. The premier platform for finding your next career move.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Browse Jobs</Link>
                </li>
                <li>
                  <Link to="/post-job" className="text-muted-foreground hover:text-primary transition-colors">Post a Job</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: contact@jobhub.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Job Street, San Francisco, CA 94107</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JobHub. All rights reserved.
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
