import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (    <section className="relative bg-gradient-to-r from-emerald-800 to-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Welcome to Oxform International
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
            Cultivating global leaders through academic excellence, innovation, and international mindedness.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
            >
              <Link to="/admissions" className="flex items-center">
                Apply for Admission <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              <Link to="/academics/curriculum">Explore Academics</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-16 sm:h-20 md:h-24 text-white fill-current">
          <path d="M0,0 C300,100 800,100 1200,0 L1200,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
