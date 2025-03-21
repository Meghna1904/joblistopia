
import { Link } from 'react-router-dom';
import { Job } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Briefcase, DollarSign } from 'lucide-react';

interface JobCardProps {
  job: Job;
  featured?: boolean;
}

const JobCard = ({ job, featured = false }: JobCardProps) => {
  return (
    <Link to={`/jobs/${job.id}`} className="block">
      <Card className={`card-hover ${featured ? 'border-primary/30 bg-primary/5' : ''}`}>
        <CardContent className="p-5">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-lg leading-tight">{job.title}</h3>
                <div className="text-sm text-muted-foreground">{job.company}</div>
              </div>
              
              {featured && (
                <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                  Featured
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="h-3.5 w-3.5" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-3.5 w-3.5" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>Posted: {formatDate(job.posted)}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {job.skills.slice(0, 4).map((skill, index) => (
                <Badge key={index} variant="secondary" className="font-normal">
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 4 && (
                <Badge variant="secondary" className="font-normal">
                  +{job.skills.length - 4} more
                </Badge>
              )}
            </div>
            
            <p className="text-sm line-clamp-2">{job.description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default JobCard;
