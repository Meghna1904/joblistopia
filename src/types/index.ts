
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: JobCategory;
  type: JobType;
  experience: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
  logo?: string;
}

export type JobCategory = 
  | "Technology"
  | "Design"
  | "Marketing"
  | "Finance"
  | "Healthcare"
  | "Education"
  | "Engineering"
  | "Customer Service"
  | "Sales"
  | "Administration";

export type JobType = 
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Freelance"
  | "Internship"
  | "Remote";

export interface JobApplication {
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
  portfolio?: string;
  linkedin?: string;
}

export interface JobFilterOptions {
  search: string;
  categories: JobCategory[];
  types: JobType[];
  location: string;
  experienceLevel: string;
}
