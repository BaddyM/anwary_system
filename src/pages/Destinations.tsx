import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Plane,
  Camera,
  Mountain,
  Waves
} from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const destinations = [
  {
    id: 1,
    name: "Maldives Paradise",
    image: hero1,
    location: "Indian Ocean",
    duration: "7 Days",
    price: "$3,999",
    rating: 4.9,
    description: "Ultimate luxury in overwater villas with pristine beaches and world-class diving.",
    highlights: ["Overwater Villas", "Spa Treatments", "Snorkeling", "Sunset Cruises"],
    category: "Beach",
    icon: Waves
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    image: hero2,
    location: "Switzerland",
    duration: "10 Days",
    price: "$4,599", 
    rating: 4.8,
    description: "Breathtaking mountain scenery with luxury chalets and Alpine adventures.",
    highlights: ["Mountain Hiking", "Luxury Chalets", "Scenic Railways", "Alpine Cuisine"],
    category: "Mountains",
    icon: Mountain
  },
  {
    id: 3,
    name: "Angkor Wat Explorer",
    image: hero3,
    location: "Cambodia",
    duration: "8 Days",
    price: "$2,899",
    rating: 4.7,
    description: "Discover ancient temples and rich cultural heritage in Southeast Asia.",
    highlights: ["Temple Tours", "Cultural Immersion", "Local Cuisine", "Photography"],
    category: "Cultural",
    icon: Camera
  },
  {
    id: 4,
    name: "African Safari Expedition",
    image: gallery1,
    location: "Tanzania",
    duration: "12 Days",
    price: "$5,999",
    rating: 4.9,
    description: "Witness the Great Migration and stay in luxury safari lodges.",
    highlights: ["Game Drives", "Luxury Lodges", "Migration Season", "Bush Dinners"],
    category: "Wildlife",
    icon: Plane
  },
  {
    id: 5,
    name: "Santorini Romance",
    image: gallery2,
    location: "Greece",
    duration: "6 Days",
    price: "$2,499",
    rating: 4.8,
    description: "Romantic getaway with stunning sunsets and white-washed villages.",
    highlights: ["Sunset Views", "Wine Tasting", "Luxury Hotels", "Private Tours"],
    category: "Romance",
    icon: Waves
  },
  {
    id: 6,
    name: "Northern Lights Quest",
    image: gallery3,
    location: "Finland",
    duration: "5 Days", 
    price: "$3,299",
    rating: 4.6,
    description: "Chase the Aurora Borealis in luxury glass igloos and cozy lodges.",
    highlights: ["Aurora Viewing", "Glass Igloos", "Husky Sledding", "Ice Activities"],
    category: "Adventure",
    icon: Mountain
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-forest mb-6">
            Luxury Destinations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Handpicked destinations that offer the perfect blend of adventure, luxury, and cultural immersion. 
            Each journey is crafted to create memories that will last a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-emerald border-emerald">
              <MapPin className="w-4 h-4 mr-2" />
              150+ Destinations
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-emerald border-emerald">
              <Users className="w-4 h-4 mr-2" />
              Small Groups
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-emerald border-emerald">
              <Star className="w-4 h-4 mr-2" />
              Luxury Experience
            </Badge>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="group hover-lift travel-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 gradient-gold text-forest">
                      {destination.category}
                    </Badge>
                    <div className="absolute top-4 right-4 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-gold fill-current mr-1" />
                      <span className="text-white font-medium">{destination.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-xl font-semibold text-forest">
                        {destination.name}
                      </h3>
                      <destination.icon className="w-5 h-5 text-emerald" />
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="mr-4">{destination.location}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{destination.duration}</span>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {destination.highlights.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{destination.highlights.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-2xl font-bold text-emerald">{destination.price}</span>
                        <span className="text-muted-foreground text-sm ml-1">per person</span>
                      </div>
                      <Button 
                        className="gradient-hero text-white hover:opacity-90"
                        asChild
                      >
                        <Link to="/booking">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            What Makes Our Destinations Special?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Small Group Sizes</h3>
              <p className="text-white/90">
                Intimate experiences with maximum 12 travelers for personalized attention.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <Star className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Luxury Accommodations</h3>
              <p className="text-white/90">
                Handpicked 5-star hotels, resorts, and unique properties worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Expert Local Guides</h3>
              <p className="text-white/90">
                Passionate locals who share insider knowledge and hidden gems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pearl">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-forest mb-6">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our travel experts can create a completely customized itinerary 
            tailored to your preferences and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-hero text-white hover:opacity-90 px-8" asChild>
              <Link to="/contact">Plan Custom Trip</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8" asChild>
              <Link to="/booking">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;