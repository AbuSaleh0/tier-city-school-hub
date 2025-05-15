
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-primary py-2 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span className="text-xs sm:text-sm">+91 98765 43210</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <Mail size={14} />
              <span className="text-xs sm:text-sm">admissions@vidyabharati.edu</span>
            </div>
          </div>
          <div>
            <Button variant="outline" size="sm" className="bg-transparent text-white border-white hover:bg-primary-light">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">VB</div>
              <div>
                <h1 className="text-lg md:text-xl font-heading font-bold text-primary">Vidya Bharati</h1>
                <p className="text-xs text-neutral-dark">Academy</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <DropdownLink title="Academics" items={[
                { name: "Curriculum", path: "/academics/curriculum" },
                { name: "Faculty", path: "/academics/faculty" },
                { name: "Facilities", path: "/academics/facilities" }
              ]} />
              <NavLink to="/admissions">Admissions</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Button className="ml-2">Login</Button>
            </nav>

            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-white py-4 px-4 border-t">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About Us</MobileNavLink>
              
              <MobileDropdownLink title="Academics" items={[
                { name: "Curriculum", path: "/academics/curriculum" },
                { name: "Faculty", path: "/academics/faculty" },
                { name: "Facilities", path: "/academics/facilities" }
              ]} toggleMenu={toggleMenu} />
              
              <MobileNavLink to="/admissions" onClick={toggleMenu}>Admissions</MobileNavLink>
              <MobileNavLink to="/gallery" onClick={toggleMenu}>Gallery</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
              <Button className="w-full">Login</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <Link to={to} className="text-neutral-dark font-medium hover:text-primary transition-colors">
    {children}
  </Link>
);

const DropdownLink = ({ title, items }: { title: string; items: { name: string; path: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center text-neutral-dark font-medium hover:text-primary transition-colors">
        {title}
        <ChevronDown size={16} className="ml-1" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-10 animate-fade-in">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-sm hover:bg-neutral-light hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileNavLink = ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick: () => void }) => (
  <Link to={to} className="text-neutral-dark font-medium text-lg" onClick={onClick}>
    {children}
  </Link>
);

const MobileDropdownLink = ({ title, items, toggleMenu }: { title: string; items: { name: string; path: string }[]; toggleMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        className="flex items-center justify-between w-full text-neutral-dark font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pl-4 mt-2 border-l-2 border-neutral-medium space-y-2">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-1 text-sm hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
