import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-pearl pt-20">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="font-serif text-6xl font-bold text-forest mb-4">404</h1>
          <h2 className="font-serif text-2xl font-semibold text-emerald mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>
        <div className="space-y-4">
          <Button 
            size="lg"
            className="gradient-hero text-white hover:opacity-90 w-full"
            asChild
          >
            <Link to="/">
              Return to Home
            </Link>
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-emerald text-emerald hover:bg-emerald hover:text-white w-full"
            asChild
          >
            <Link to="/destinations">
              Explore Destinations
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
