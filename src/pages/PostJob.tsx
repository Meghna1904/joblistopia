
import Navbar from '@/components/Navbar';
import PostJobForm from '@/components/PostJobForm';

const PostJob = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PostJobForm />
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

export default PostJob;
