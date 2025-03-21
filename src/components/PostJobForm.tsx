
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Job, JobCategory, JobType } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { addJob, getCategories, getJobTypes } from '@/data/jobs';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Plus, Trash2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const PostJobForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<Omit<Job, 'id' | 'posted'>>({
    title: '',
    company: '',
    location: '',
    salary: '',
    category: 'Technology',
    type: 'Full-time',
    experience: '',
    skills: [],
    description: '',
    responsibilities: [''],
    requirements: [''],
    benefits: [''],
    featured: false,
  });
  
  const [newSkill, setNewSkill] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      featured: checked,
    });
  };
  
  const handleListItemChange = (
    listName: 'responsibilities' | 'requirements' | 'benefits',
    index: number,
    value: string
  ) => {
    const newList = [...formData[listName]];
    newList[index] = value;
    
    setFormData({
      ...formData,
      [listName]: newList,
    });
  };
  
  const addListItem = (listName: 'responsibilities' | 'requirements' | 'benefits') => {
    setFormData({
      ...formData,
      [listName]: [...formData[listName], ''],
    });
  };
  
  const removeListItem = (listName: 'responsibilities' | 'requirements' | 'benefits', index: number) => {
    if (formData[listName].length <= 1) return;
    
    const newList = formData[listName].filter((_, i) => i !== index);
    
    setFormData({
      ...formData,
      [listName]: newList,
    });
  };
  
  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };
  
  const removeSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(s => s !== skill),
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate lists to ensure no empty items
    const responsibilities = formData.responsibilities.filter(item => item.trim());
    const requirements = formData.requirements.filter(item => item.trim());
    const benefits = formData.benefits.filter(item => item.trim());
    
    const finalFormData = {
      ...formData,
      responsibilities,
      requirements,
      benefits,
    };
    
    // Simulate API call with timeout
    setTimeout(() => {
      try {
        const newJob = addJob(finalFormData);
        
        toast({
          title: "Job posted successfully!",
          description: "Your job listing is now live and visible to candidates.",
          duration: 5000,
        });
        
        // Redirect to job detail page
        setTimeout(() => {
          navigate(`/jobs/${newJob.id}`);
        }, 2000);
      } catch (error) {
        toast({
          title: "Submission failed",
          description: "There was an error posting your job. Please try again.",
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
        <h1 className="text-2xl font-medium mb-2">Post a New Job</h1>
        <p className="text-muted-foreground">Reach thousands of qualified candidates</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Basic Information</h2>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Frontend Developer"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Acme Inc."
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  Location <span className="text-red-500">*</span>
                </label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. San Francisco, CA or Remote"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="salary" className="text-sm font-medium">
                  Salary Range <span className="text-red-500">*</span>
                </label>
                <Input
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. $80,000 - $100,000"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category <span className="text-red-500">*</span>
                </label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => handleSelectChange('category', value as JobCategory)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {getCategories().map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">
                  Job Type <span className="text-red-500">*</span>
                </label>
                <Select 
                  value={formData.type} 
                  onValueChange={(value) => handleSelectChange('type', value as JobType)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    {getJobTypes().map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">
                Experience Required <span className="text-red-500">*</span>
              </label>
              <Input
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                placeholder="e.g. 2+ years"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Skills Required <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="e.g. React"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                />
                <Button 
                  type="button" 
                  onClick={addSkill}
                  variant="outline"
                >
                  Add
                </Button>
              </div>
              
              {formData.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                    >
                      {skill}
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                        onClick={() => removeSkill(skill)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Job Details</h2>
            
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Job Description <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder="Provide a detailed description of the job"
                className="min-h-32"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Responsibilities <span className="text-red-500">*</span>
                </label>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => addListItem('responsibilities')}
                  className="h-8 px-2 text-xs"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>
              
              {formData.responsibilities.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) => handleListItemChange('responsibilities', index, e.target.value)}
                    placeholder={`Responsibility ${index + 1}`}
                    required
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    size="icon"
                    onClick={() => removeListItem('responsibilities', index)}
                    disabled={formData.responsibilities.length <= 1}
                    className="shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Requirements <span className="text-red-500">*</span>
                </label>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => addListItem('requirements')}
                  className="h-8 px-2 text-xs"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>
              
              {formData.requirements.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) => handleListItemChange('requirements', index, e.target.value)}
                    placeholder={`Requirement ${index + 1}`}
                    required
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    size="icon"
                    onClick={() => removeListItem('requirements', index)}
                    disabled={formData.requirements.length <= 1}
                    className="shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Benefits <span className="text-red-500">*</span>
                </label>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  onClick={() => addListItem('benefits')}
                  className="h-8 px-2 text-xs"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>
              
              {formData.benefits.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) => handleListItemChange('benefits', index, e.target.value)}
                    placeholder={`Benefit ${index + 1}`}
                    required
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    size="icon"
                    onClick={() => removeListItem('benefits', index)}
                    disabled={formData.benefits.length <= 1}
                    className="shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="featured" 
                checked={formData.featured}
                onCheckedChange={handleCheckboxChange}
              />
              <label
                htmlFor="featured"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mark as featured job (highlights in search results)
              </label>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t flex justify-end">
          <Button 
            type="submit" 
            className="w-full sm:w-auto" 
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Posting...
              </>
            ) : (
              "Post Job"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;
