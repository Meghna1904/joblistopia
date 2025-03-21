
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getJobById } from '@/data/jobs';
import { Job } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import { 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Calendar, 
  Clock, 
  ChevronLeft,
  Building,
  CheckCircle2,
  Info,
  Award,
  Share2
} from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!id) return;
    
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      const jobData = getJobById(id);
      setJob(jobData || null);
      setLoading(false);
      
      // For animation purposes
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }, 300);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="space-y-4 w-full max-w-3xl px-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse w-1/3"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse w-1/2"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-8 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse"></div>
              ))}
            </div>
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Job Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/jobs">Browse All Jobs</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate(-1)}
                className="flex items-center text-muted-foreground mb-4"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back to listings
              </Button>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl border shadow-sm overflow-hidden">
                {/* Job header */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-3">
                      {job.featured && (
                        <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                          Featured
                        </Badge>
                      )}
                      <h1 className="text-2xl md:text-3xl font-medium">{job.title}</h1>
                      <div className="flex items-center text-lg">
                        <Building className="h-5 w-5 text-muted-foreground mr-2" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    
                    <Button 
                      asChild 
                      size="lg"
                      className="md:self-start button-hover"
                    >
                      <Link to={`/apply/${job.id}`}>Apply Now</Link>
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm text-muted-foreground">Job Type</div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 text-muted-foreground mr-1" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm text-muted-foreground">Salary</div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                      <div className="text-sm text-muted-foreground">Posted</div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                        <span>{formatDate(job.posted)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                {/* Job content */}
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    <section className="space-y-4">
                      <h2 className="text-xl font-medium flex items-center gap-2">
                        <Info className="h-5 w-5 text-primary" />
                        Job Description
                      </h2>
                      <p className="text-base leading-relaxed">{job.description}</p>
                    </section>
                    
                    <section className="space-y-4">
                      <h2 className="text-xl font-medium flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Responsibilities
                      </h2>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    
                    <section className="space-y-4">
                      <h2 className="text-xl font-medium flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Requirements
                      </h2>
                      <ul className="space-y-2">
                        {job.requirements.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                    
                    <section className="space-y-4">
                      <h2 className="text-xl font-medium flex items-center gap-2">
                        <Gift className="h-5 w-5 text-primary" />
                        Benefits
                      </h2>
                      <ul className="space-y-2">
                        {job.benefits.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-secondary/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">Job Overview</h3>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Experience</span>
                          <span className="text-sm font-medium">{job.experience}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Category</span>
                          <span className="text-sm font-medium">{job.category}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Posted</span>
                          <span className="text-sm font-medium">{formatDate(job.posted)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/50 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">Required Skills</h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg space-y-4">
                      <h3 className="font-medium">Interested in this job?</h3>
                      <p className="text-sm text-muted-foreground">
                        Apply now and we'll help you get started with your application process.
                      </p>
                      <Button asChild className="w-full">
                        <Link to={`/apply/${job.id}`}>Apply Now</Link>
                      </Button>
                    </div>
                    
                    <div className="p-6 border rounded-lg space-y-4">
                      <h3 className="font-medium flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Share this job
                      </h3>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          LinkedIn
                        </Button>
                        <Button variant="outline" size="sm">
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm">
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

// Missing Gift icon - import it
const Gift = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 12 20 22 4 22 4 12"></polyline>
    <rect x="2" y="7" width="20" height="5"></rect>
    <line x1="12" y1="22" x2="12" y2="7"></line>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
  </svg>
);

export default JobDetail;
