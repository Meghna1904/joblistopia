
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Job, JobApplication } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitApplication } from '@/data/jobs';
import { useToast } from '@/components/ui/use-toast';
import { Briefcase, Upload, Loader2 } from 'lucide-react';

interface ApplyFormProps {
  job: Job;
}

const ApplyForm = ({ job }: ApplyFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Omit<JobApplication, 'jobId'>>({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const application: JobApplication = {
        jobId: job.id,
        ...formData,
      };
      
      const success = submitApplication(application);
      
      if (success) {
        toast({
          title: "Application submitted!",
          description: "We'll notify you once your application is reviewed.",
          duration: 5000,
        });
        
        // Redirect to jobs page after successful submission
        setTimeout(() => {
          navigate('/jobs');
        }, 2000);
      } else {
        toast({
          title: "Submission failed",
          description: "There was an error submitting your application. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
        setIsSubmitting(false);
      }
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-medium mb-2">Apply for {job.title}</h1>
        <p className="text-muted-foreground">{job.company} • {job.location}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone <span className="text-red-500">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="resume" className="text-sm font-medium">
                Resume <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                />
                <div className="border rounded-md px-3 py-2 flex items-center justify-between">
                  <span className="text-sm truncate">
                    {formData.resume ? formData.resume.name : "Upload your resume"}
                  </span>
                  <Upload className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                PDF, DOC, or DOCX (max 5MB)
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="coverLetter" className="text-sm font-medium">
              Cover Letter <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
              placeholder="Tell us why you're interested in this position"
              className="min-h-32"
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="portfolio" className="text-sm font-medium">
                Portfolio/Website
              </label>
              <Input
                id="portfolio"
                name="portfolio"
                type="url"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="https://yourportfolio.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="linkedin" className="text-sm font-medium">
                LinkedIn Profile
              </label>
              <Input
                id="linkedin"
                name="linkedin"
                type="url"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder="https://linkedin.com/in/yourusername"
              />
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <Button 
            type="submit" 
            className="w-full sm:w-auto" 
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
