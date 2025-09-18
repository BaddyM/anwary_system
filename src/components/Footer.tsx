import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Plane,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ];

  const destinations = [
    "Maldives Paradise",
    "Swiss Alps Adventure", 
    "African Safari",
    "Santorini Romance",
    "Northern Lights",
    "Angkor Wat Explorer"
  ];

  const services = [
    "Luxury Travel Planning",
    "Group Travel",
    "Honeymoon Packages", 
    "Corporate Travel",
    "Travel Insurance",
    "24/7 Support"
  ];

  return (
    <footer className="bg-forest text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Stay Updated with Anwary Travel
            </h3>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for exclusive deals, travel tips, and destination inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold"
              />
              <Button className="gradient-gold text-forest hover:opacity-90 whitespace-nowrap shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-full gradient-hero">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-gradient-gold">Anwary</span>
                <span className="text-sm text-white/80 -mt-1">Travel</span>
              </div>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Creating extraordinary journeys and unforgettable memories across the globe. 
              Your dream destination awaits with our luxury travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-forest transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-forest transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-forest transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-forest transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-bright">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-bright">Popular Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <Link 
                    to="/destinations"
                    className="text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-bright">Our Services</h4>
            <ul className="space-y-3 mb-8">
              {services.slice(0, 4).map((service) => (
                <li key={service}>
                  <span className="text-white/80">{service}</span>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-bright" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-bright" />
                <span className="text-white/80">info@anwarytravel.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold-bright" />
                <span className="text-white/80">New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-white/80">
              <span>© 2024 Anwary Travel. Made with</span>
              <Heart className="w-4 h-4 text-gold-bright fill-current" />
              <span>for adventurers worldwide.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <Link to="#" className="hover:text-gold-bright transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-gold-bright transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-gold-bright transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;