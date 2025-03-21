
import { useState, useEffect } from 'react';
import { getCategories, getJobTypes, getLocations } from '@/data/jobs';
import { JobCategory, JobType, JobFilterOptions } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowDownAZ, SlidersHorizontal, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';

interface JobFiltersProps {
  onFilter: (filters: JobFilterOptions) => void;
  initialFilters?: JobFilterOptions;
}

const JobFilters = ({ onFilter, initialFilters }: JobFiltersProps) => {
  const categories = getCategories();
  const jobTypes = getJobTypes();
  const locations = getLocations();
  
  const [filters, setFilters] = useState<JobFilterOptions>({
    search: '',
    categories: [],
    types: [],
    location: '',
    experienceLevel: ''
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Initialize filters with initialFilters if provided
  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };
  
  const handleCategoryToggle = (category: JobCategory) => {
    setFilters(prev => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      
      return { ...prev, categories: newCategories };
    });
  };
  
  const handleTypeToggle = (type: JobType) => {
    setFilters(prev => {
      const newTypes = prev.types.includes(type)
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type];
      
      return { ...prev, types: newTypes };
    });
  };
  
  const handleLocationChange = (value: string) => {
    setFilters({ ...filters, location: value });
  };
  
  const handleExperienceChange = (value: string) => {
    setFilters({ ...filters, experienceLevel: value });
  };
  
  const handleApplyFilters = () => {
    onFilter(filters);
    setIsDialogOpen(false);
  };
  
  const handleClearFilters = () => {
    const clearedFilters = {
      search: filters.search, // Keep search term
      categories: [],
      types: [],
      location: '',
      experienceLevel: ''
    };
    
    setFilters(clearedFilters);
    onFilter(clearedFilters);
    setIsDialogOpen(false);
  };
  
  const handleRemoveFilter = (type: 'category' | 'jobType' | 'location' | 'experience', value?: string) => {
    if (type === 'category' && value) {
      setFilters(prev => {
        const newFilters = {
          ...prev,
          categories: prev.categories.filter(c => c !== value as JobCategory)
        };
        onFilter(newFilters);
        return newFilters;
      });
    } else if (type === 'jobType' && value) {
      setFilters(prev => {
        const newFilters = {
          ...prev,
          types: prev.types.filter(t => t !== value as JobType)
        };
        onFilter(newFilters);
        return newFilters;
      });
    } else if (type === 'location') {
      setFilters(prev => {
        const newFilters = { ...prev, location: '' };
        onFilter(newFilters);
        return newFilters;
      });
    } else if (type === 'experience') {
      setFilters(prev => {
        const newFilters = { ...prev, experienceLevel: '' };
        onFilter(newFilters);
        return newFilters;
      });
    }
  };
  
  // Count active filters
  const activeFilterCount = 
    filters.categories.length + 
    filters.types.length + 
    (filters.location ? 1 : 0) + 
    (filters.experienceLevel ? 1 : 0);
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search by title, company, or keywords..."
            value={filters.search}
            onChange={handleSearchChange}
            className="w-full"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onFilter(filters);
              }
            }}
          />
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogTitle>Filter Jobs</DialogTitle>
            
            <div className="space-y-6 pt-4">
              <div className="space-y-3">
                <h3 className="font-medium">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${category}`}
                        checked={filters.categories.includes(category)}
                        onCheckedChange={() => handleCategoryToggle(category)}
                      />
                      <Label 
                        htmlFor={`category-${category}`}
                        className="text-sm cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Job Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  {jobTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`type-${type}`}
                        checked={filters.types.includes(type)}
                        onCheckedChange={() => handleTypeToggle(type)}
                      />
                      <Label 
                        htmlFor={`type-${type}`}
                        className="text-sm cursor-pointer"
                      >
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Location</h3>
                <Select 
                  value={filters.location} 
                  onValueChange={handleLocationChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Any location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any location</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Experience Level</h3>
                <Select 
                  value={filters.experienceLevel} 
                  onValueChange={handleExperienceChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Any experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any experience</SelectItem>
                    <SelectItem value="1+">1+ years</SelectItem>
                    <SelectItem value="2+">2+ years</SelectItem>
                    <SelectItem value="3+">3+ years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-between pt-2">
                <Button variant="outline" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
                <Button onClick={handleApplyFilters}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => {
            // Implement sort functionality here
          }}
        >
          <ArrowDownAZ className="h-4 w-4" />
          Sort
        </Button>
      </div>
      
      {/* Active filters display */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {filters.categories.map((category) => (
            <Badge key={`badge-${category}`} variant="secondary" className="pl-2">
              {category}
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 ml-1"
                onClick={() => handleRemoveFilter('category', category)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {category} filter</span>
              </Button>
            </Badge>
          ))}
          
          {filters.types.map((type) => (
            <Badge key={`badge-${type}`} variant="secondary" className="pl-2">
              {type}
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 ml-1"
                onClick={() => handleRemoveFilter('jobType', type)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {type} filter</span>
              </Button>
            </Badge>
          ))}
          
          {filters.location && (
            <Badge variant="secondary" className="pl-2">
              {filters.location}
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 ml-1"
                onClick={() => handleRemoveFilter('location')}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove location filter</span>
              </Button>
            </Badge>
          )}
          
          {filters.experienceLevel && (
            <Badge variant="secondary" className="pl-2">
              {filters.experienceLevel} years experience
              <Button
                variant="ghost"
                size="sm"
                className="h-5 w-5 p-0 ml-1"
                onClick={() => handleRemoveFilter('experience')}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove experience filter</span>
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default JobFilters;
