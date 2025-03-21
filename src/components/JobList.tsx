
import { useState, useEffect } from 'react';
import { getJobs, filterJobs } from '@/data/jobs';
import { Job, JobCategory, JobType, JobFilterOptions } from '@/types';
import JobCard from './JobCard';
import JobFilters from './JobFilters';

interface JobListProps {
  initialSearchQuery?: string;
}

const JobList = ({ initialSearchQuery = '' }: JobListProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<JobFilterOptions>({
    search: initialSearchQuery,
    categories: [],
    types: [],
    location: '',
    experienceLevel: ''
  });
  
  useEffect(() => {
    // Update search when initialSearchQuery changes
    setFilters(prev => ({
      ...prev,
      search: initialSearchQuery
    }));
  }, [initialSearchQuery]);
  
  useEffect(() => {
    // Simulate loading delay for animation purposes
    const fetchJobs = async () => {
      setLoading(true);
      const allJobs = getJobs();
      
      // Stagger loading for animation effect
      setTimeout(() => {
        setJobs(allJobs);
        setFilteredJobs(filterJobs(filters));
        setLoading(false);
      }, 300);
    };
    
    fetchJobs();
  }, [filters.search]);
  
  const handleFilter = (newFilters: JobFilterOptions) => {
    setLoading(true);
    setFilters(newFilters);
    
    setTimeout(() => {
      const filtered = filterJobs(newFilters);
      setFilteredJobs(filtered);
      setLoading(false);
    }, 300);
  };
  
  return (
    <div className="space-y-8">
      <JobFilters initialFilters={filters} onFilter={handleFilter} />
      
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
