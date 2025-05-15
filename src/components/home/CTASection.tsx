
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-secondary-light text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          Ready to Give Your Child the Best Education?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Join Vidya Bharati Academy family and provide your child with a holistic education that prepares them for future success. Admissions for the new academic year are now open.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-white font-medium"
          >
            <Link to="/admissions">Apply for Admission</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link to="/virtual-tour" className="flex items-center">
              Take a Virtual Tour
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-secondary-dark"
          >
            <Link to="/contact" className="flex items-center">
              <PhoneCall size={16} className="mr-2" /> Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
