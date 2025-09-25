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
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

interface NewsLetter {
  id: string;
  email: string;
}

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<NewsLetter>();
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ];

  const destinations = ["Makkah", "Madina"];

  const services = [
    "Luxury Travel Planning",
    "Group Travel",
    "Visa issuance",
    "Hotel Booking",
    "Travel Insurance",
    "24/7 Support",
  ];

  return (
    <footer className="bg-forest text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Stay Updated with Anwaary Travel
            </h3>
            <p className="text-white/80 mb-6">
              Subscribe to our newsletter for exclusive deals, travel tips, and
              destination inspiration.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (formData.email) {
                  toast({
                    title: "Success",
                    description: "Subscribed to newsletter successfully",
                  });
                  setFormData(null);
                }
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold"
                />
                <Button
                  type="submit"
                  className="gradient-gold text-forest hover:opacity-90 whitespace-nowrap shadow-lg"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-3">
                <img src="/logo.jpg" className="w-10 h-10 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-gradient-gold">
                  Anwaary
                </span>
                <span className="text-sm text-white/80 -mt-1">Travel</span>
              </div>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Creating extraordinary journeys and unforgettable memories across
              the globe. Your dream destination awaits with our luxury travel
              experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-forest transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-forest transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-forest transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-forest transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-bright">
              Quick Links
            </h4>
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
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-bright">
              Popular Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <Link
                    to="/destinations"
                    className="text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gold-bright" />{" "}
                      {destination}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-bright">
              Our Services
            </h4>
            <ul className="space-y-3 mb-8">
              {services.slice(0, 4).map((service) => (
                <li key={service}>
                  <span className="text-white/80">{service}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <div className="items-center space-x-1">
                <div className="flex gap-2 items-center mb-2">
                  <Phone className="w-4 h-4 text-gold-bright" />
                  <a href="tel:+256 782-808-261">
                    <span className="text-white/80">+256 782-808-261</span>
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 text-gold-bright" />
                  <a href="tel:+256 702-029-143">
                    <span className="text-white/80">+256 702-029-143</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-bright" />
                <span className="text-white/80">anwaarytravel@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-7 h-7 text-gold-bright" />
                <span className="text-white/80">
                  AHA Towers, Ground Floor, Plot 7 Lourdel Road Nakasero, Kampala
                </span>
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
              <span>© {new Date().getFullYear()} Anwaary Travel.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <Link
                to="/privacy"
                className="hover:text-gold-bright transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-gold-bright transition-colors"
              >
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-gold-bright transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
