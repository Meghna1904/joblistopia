
import { useState, useEffect } from 'react';
import { getFeaturedJobs } from '@/data/jobs';
import { Job } from '@/types';
import JobCard from './JobCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([]);
  
  useEffect(() => {
    const jobs = getFeaturedJobs();
    setFeaturedJobs(jobs);
  }, []);
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col mb-12 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-medium tracking-tight">Featured Jobs</h2>
          <p className="text-muted-foreground text-lg">Discover premium opportunities handpicked for you</p>
        </div>
        <Button asChild variant="ghost" className="group mt-4 md:mt-0">
          <Link to="/jobs" className="flex items-center gap-2">
            View all jobs 
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map((job) => (
          <div key={job.id} className="animate-fade-up" style={{animationDelay: '100ms'}}>
            <JobCard job={job} featured={true} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
