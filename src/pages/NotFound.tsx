
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[60vh] flex items-center justify-center bg-neutral-light py-20">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-heading font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-neutral-dark mb-8 max-w-md mx-auto">
            The page you're looking for doesn't seem to exist or may have been moved.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button asChild className="flex items-center">
              <Link to="/">
                <Home className="mr-2" size={18} />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
