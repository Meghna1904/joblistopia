
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById } from '@/data/jobs';
import { Job } from '@/types';
import Navbar from '@/components/Navbar';
import ApplyForm from '@/components/ApplyForm';

const Apply = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!id) {
      setError("No job ID provided");
      setLoading(false);
      return;
    }
    
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const jobData = getJobById(id);
      
      if (jobData) {
        setJob(jobData);
        setError(null);
      } else {
        setError("Job not found");
        setTimeout(() => {
          navigate('/jobs');
        }, 3000);
      }
      
      setLoading(false);
    }, 500);
  }, [id, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="animate-pulse space-y-8 w-full max-w-xl px-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-md w-3/4 mx-auto"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
              <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Error</h1>
            <p className="text-muted-foreground mb-2">{error || "Something went wrong"}</p>
            <p className="text-sm text-muted-foreground">Redirecting to jobs page...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ApplyForm job={job} />
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

export default Apply;
