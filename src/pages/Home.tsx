import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Compass, 
  Shield, 
  Clock, 
  Award,
  Star,
  MapPin,
  Users,
  Heart
} from "lucide-react";

const Home = () => {
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

      {/* Features Section */}
      <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-forest mb-4">
              Why Choose Anwary Travel?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We create extraordinary journeys that inspire, transform, and create memories to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-lift travel-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-emerald flex items-center justify-center shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-forest">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-forest mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real adventurers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift travel-card">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-bright text-gold-bright" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="text-sm">
                    <div className="font-semibold text-forest">{testimonial.name}</div>
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