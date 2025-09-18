import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Compass, 
  Shield, 
  Clock, 
  Award,
  Star,
  MapPin,
  Users,
  Heart,
  Camera,
  Plane,
  Mountain,
  Waves,
  TreePine,
  Building
} from "lucide-react";

const Home = () => {
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [destinationsRef, destinationsVisible] = useScrollAnimation();

  const features = [
    {
      icon: Compass,
      title: "Expert Guidance",
      description: "Local experts guide you to hidden gems and authentic experiences"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Travel with confidence knowing you're protected every step"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance wherever your journey takes you"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized excellence in luxury travel experiences"
    }
  ];

  const services = [
    {
      icon: Plane,
      title: "Luxury Flights",
      description: "First-class travel arrangements and premium airline partnerships",
      image: "/placeholder.svg"
    },
    {
      icon: Building,
      title: "Premium Hotels",
      description: "Handpicked luxury accommodations and exclusive resort access",
      image: "/placeholder.svg"
    },
    {
      icon: Camera,
      title: "Cultural Tours",
      description: "Authentic local experiences with expert cultural guides",
      image: "/placeholder.svg"
    },
    {
      icon: Mountain,
      title: "Adventure Expeditions",
      description: "Thrilling adventures for the bold and curious explorer",
      image: "/placeholder.svg"
    }
  ];

  const popularDestinations = [
    {
      name: "Santorini, Greece",
      description: "Stunning sunsets and pristine beaches",
      image: "/placeholder.svg",
      price: "From $2,499"
    },
    {
      name: "Kyoto, Japan",
      description: "Ancient temples and cherry blossoms",
      image: "/placeholder.svg",
      price: "From $3,299"
    },
    {
      name: "Patagonia, Chile",
      description: "Breathtaking landscapes and wildlife",
      image: "/placeholder.svg",
      price: "From $4,199"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York",
      rating: 5,
      text: "Absolutely magical experience! Every detail was perfectly planned."
    },
    {
      name: "Michael Chen",
      location: "Singapore", 
      rating: 5,
      text: "The most incredible adventure of our lives. Highly recommended!"
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona",
      rating: 5,
      text: "Luxury travel at its finest. Will definitely book again!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Luxury travel experience" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-12 h-12 text-forest" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-forest mb-6">
                Creating Dreams Since 2001
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Welcome to Anwary Travel, where extraordinary journeys begin. For over two decades, 
                  we've been crafting bespoke travel experiences that go beyond the ordinary, 
                  creating memories that last a lifetime.
                </p>
                <p>
                  Our passion lies in discovering the world's hidden gems and sharing them with 
                  adventurous souls who seek authentic, transformative experiences. From ancient 
                  temples to pristine beaches, bustling markets to serene mountains, we curate 
                  every detail to perfection.
                </p>
              </div>
              <Button className="mt-8 gradient-gold text-forest hover:opacity-90 px-8 shadow-lg" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-pearl">
        <div 
          ref={featuresRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`text-center mb-16 transition-all duration-1000 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-forest mb-4">
              Why Choose Anwary Travel?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We create extraordinary journeys that inspire, transform, and create memories to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`text-center hover-lift travel-card transition-all duration-1000 ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-emerald flex items-center justify-center shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-forest">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div 
          ref={servicesRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`text-center mb-16 transition-all duration-1000 ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-forest mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From luxury accommodations to authentic cultural experiences, we handle every detail of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover-lift travel-card transition-all duration-1000 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full gradient-emerald flex items-center justify-center mr-3">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-forest">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Preview */}
      <section className="py-20 bg-pearl">
        <div 
          ref={destinationsRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`text-center mb-16 transition-all duration-1000 ${
            destinationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-forest mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of our most sought-after destinations, each offering unique experiences and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {popularDestinations.map((destination, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover-lift travel-card transition-all duration-1000 ${
                  destinationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gold-bright text-forest px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-forest mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {destination.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="gradient-gold text-forest hover:opacity-90 px-8 shadow-lg" asChild>
              <Link to="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-gold-bright mr-2" />
                <span className="font-serif text-4xl font-bold">150+</span>
              </div>
              <p className="text-white/90">Destinations</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-gold-bright mr-2" />
                <span className="font-serif text-4xl font-bold">25K+</span>
              </div>
              <p className="text-white/90">Happy Travelers</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-gold-bright mr-2" />
                <span className="font-serif text-4xl font-bold">15+</span>
              </div>
              <p className="text-white/90">Awards Won</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 text-gold-bright mr-2" />
                <span className="font-serif text-4xl font-bold">98%</span>
              </div>
              <p className="text-white/90">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div 
          ref={testimonialsRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className={`text-center mb-16 transition-all duration-1000 ${
            testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-forest mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real adventurers who've journeyed with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`hover-lift travel-card transition-all duration-1000 ${
                  testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-bright text-gold-bright" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-forest text-base">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pearl">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-forest mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us create a personalized journey that exceeds your wildest dreams. 
            Your perfect adventure is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-gold text-forest hover:opacity-90 px-8 shadow-lg" asChild>
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-emerald-bright text-emerald-bright hover:bg-emerald-bright hover:text-white px-8" asChild>
              <Link to="/contact">Plan My Trip</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;