
import { useState, useEffect } from 'react';
import { getCategories, getJobTypes, getLocations } from '@/data/jobs';
import { JobCategory, JobType } from '@/types';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X, Search, Filter } from 'lucide-react';

interface JobFiltersProps {
  onFilter: (filters: {
    search: string;
    categories: JobCategory[];
    types: JobType[];
    location: string;
    experienceLevel: string;
  }) => void;
}

const JobFilters = ({ onFilter }: JobFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<JobCategory[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<JobType[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [categories, setCategories] = useState<JobCategory[]>([]);
  const [jobTypes, setJobTypes] = useState<JobType[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  
  useEffect(() => {
    setCategories(getCategories());
    setJobTypes(getJobTypes());
    setLocations(getLocations());
  }, []);
  
  const applyFilters = () => {
    onFilter({
      search: searchTerm,
      categories: selectedCategories,
      types: selectedTypes,
      location: selectedLocation,
      experienceLevel,
    });
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedLocation('');
    setExperienceLevel('');
    
    onFilter({
      search: '',
      categories: [],
      types: [],
      location: '',
      experienceLevel: '',
    });
  };
  
  const toggleCategory = (category: JobCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const toggleType = (type: JobType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };
  
  const hasActiveFilters = selectedCategories.length > 0 || 
                          selectedTypes.length > 0 || 
                          selectedLocation !== '' || 
                          experienceLevel !== '';
  
  return (
    <div className="space-y-4">
      {/* Search form */}
      <form onSubmit={handleSearch} className="relative">
        <Input
          type="text"
          placeholder="Search jobs, companies, or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-16"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Button 
          type="submit" 
          variant="ghost" 
          size="sm" 
          className="absolute right-1 top-1/2 -translate-y-1/2 px-2"
        >
          Search
        </Button>
      </form>
      
      {/* Mobile filter toggle */}
      <div className="flex items-center justify-between md:hidden">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <Badge 
              variant="secondary" 
              className="ml-1 rounded-full h-5 min-w-5 p-0 flex items-center justify-center text-xs"
            >
              {selectedCategories.length + selectedTypes.length + 
               (selectedLocation ? 1 : 0) + (experienceLevel ? 1 : 0)}
            </Badge>
          )}
        </Button>
        
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="text-muted-foreground text-sm"
          >
            Clear all
          </Button>
        )}
      </div>
      
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${isFiltersVisible ? 'block' : 'hidden md:grid'}`}>
        {/* Categories */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategories.includes(category) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                {category}
                {selectedCategories.includes(category) && (
                  <X className="ml-1 h-3 w-3" />
                )}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Job Types */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Job Types</h3>
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => (
              <Badge
                key={type}
                variant={selectedTypes.includes(type) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleType(type)}
              >
                {type}
                {selectedTypes.includes(type) && (
                  <X className="ml-1 h-3 w-3" />
                )}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Location */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Location</h3>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Experience */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Experience</h3>
          <Select value={experienceLevel} onValueChange={setExperienceLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any experience</SelectItem>
              <SelectItem value="0+">Entry level</SelectItem>
              <SelectItem value="2+">Mid level (2+ years)</SelectItem>
              <SelectItem value="5+">Senior (5+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className={`flex flex-col sm:flex-row gap-2 justify-end ${isFiltersVisible ? 'block' : 'hidden md:flex'}`}>
        <Button variant="outline" onClick={clearFilters} className="w-full sm:w-auto" disabled={!hasActiveFilters}>
          Clear filters
        </Button>
        <Button onClick={applyFilters} className="w-full sm:w-auto">
          Apply filters
        </Button>
      </div>
    </div>
  );
};

export default JobFilters;
