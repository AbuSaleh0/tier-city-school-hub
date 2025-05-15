
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold text-xl">
                VB
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold">Vidya Bharati</h2>
                <p className="text-xs opacity-80">Academy</p>
              </div>
            </div>
            <p className="mb-4 text-sm opacity-80">
              Empowering students with knowledge, values, and skills to become successful global citizens since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics/curriculum" className="hover:text-secondary transition-colors inline-block">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-secondary transition-colors inline-block">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-secondary transition-colors inline-block">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-secondary transition-colors inline-block">
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Important Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/notice-board" className="hover:text-secondary transition-colors inline-block">
                  Notice Board
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-secondary transition-colors inline-block">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="hover:text-secondary transition-colors inline-block">
                  Alumni Association
                </Link>
              </li>
              <li>
                <Link to="/policies" className="hover:text-secondary transition-colors inline-block">
                  School Policies
                </Link>
              </li>
              <li>
                <Link to="/academics/facilities" className="hover:text-secondary transition-colors inline-block">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/fee-structure" className="hover:text-secondary transition-colors inline-block">
                  Fee Structure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">Vidya Nagar, Civil Lines, Raipur, Chhattisgarh - 492001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm opacity-80">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm opacity-80">info@vidyabharati.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-6" />

        <div className="text-center text-sm opacity-70">
          <p>&copy; {currentYear} Vidya Bharati Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
