import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Contact Bar */}
      <div className="gradient-navbar text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6 mb-1 sm:mb-0">
            <a 
              href="mailto:info@anwarytravel.com" 
              className="flex items-center space-x-2 hover:text-gold-light transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>anwaarytravel@gmail.com</span>
            </a>
            <a 
              href="tel:+15551234567" 
              className="flex items-center space-x-2 hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+256 782-808-261</span>
              <span>+256 702-029-143</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/80 text-xs">Follow Us:</span>
            <div className="flex items-center space-x-3">
              <a 
                href="#" 
                className="hover:text-gold-bright transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="hover:text-gold-bright transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="hover:text-gold-bright transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-emerald/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-3">
                <img src="/logo.jpg" className="w-10 h-10 rounded-full"/>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-gradient-gold">Anwaary</span>
                <span className="text-sm text-muted-foreground -mt-1">Travel</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-emerald font-semibold"
                        : "text-foreground hover:text-emerald"
                    } relative group`}
                  >
                    {item.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 gradient-gold transform transition-transform duration-300 ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="default" 
                className="gradient-gold text-forest hover:opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold px-6"
                asChild
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-emerald"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-emerald/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-emerald bg-emerald/10"
                      : "text-foreground hover:text-emerald hover:bg-emerald/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-3">
                <Button 
                  className="w-full gradient-gold text-forest font-semibold"
                  asChild
                >
                  <Link to="/booking" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;