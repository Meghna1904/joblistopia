
import { useState, useEffect } from 'react';
import { getJobs, filterJobs } from '@/data/jobs';
import { Job, JobCategory, JobType } from '@/types';
import JobCard from './JobCard';
import JobFilters from './JobFilters';

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay for animation purposes
    const fetchJobs = async () => {
      setLoading(true);
      const allJobs = getJobs();
      
      // Stagger loading for animation effect
      setTimeout(() => {
        setJobs(allJobs);
        setFilteredJobs(allJobs);
        setLoading(false);
      }, 300);
    };
    
    fetchJobs();
  }, []);
  
  const handleFilter = (filters: {
    search: string;
    categories: JobCategory[];
    types: JobType[];
    location: string;
    experienceLevel: string;
  }) => {
    setLoading(true);
    
    setTimeout(() => {
      const filtered = filterJobs(filters);
      setFilteredJobs(filtered);
      setLoading(false);
    }, 300);
  };
  
  return (
    <div className="space-y-8">
      <JobFilters onFilter={handleFilter} />
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">{filteredJobs.length} Jobs Found</h2>
        </div>
        
        {loading ? (
          // Loading skeleton
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="h-40 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse"
              />
            ))}
          </div>
        ) : filteredJobs.length === 0 ? (
          // No results
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No jobs found</h3>
            <p className="text-muted-foreground mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          // Job results
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <div 
                key={job.id} 
                className="animate-fade-up" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <JobCard job={job} featured={job.featured} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
