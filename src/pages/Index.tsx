import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Compass, Shield, Users, Heart, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const Index = () => {
  const services = [
    {
      icon: <Compass className="h-8 w-8 text-emerald" />,
      title: "Custom Itineraries",
      description: "Personalized travel plans crafted to match your unique interests and preferences."
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance wherever you are in the world, ensuring peace of mind."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald" />,
      title: "Expert Guides",
      description: "Local experts and certified guides who bring destinations to life with insider knowledge."
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald" />,
      title: "Luxury Experiences",
      description: "Exclusive access to premium accommodations, dining, and once-in-a-lifetime experiences."
    }
  ];

  const testimonials = [
    {
      name: "Bashir Anwary",
      location: "Kampala",
      rating: 5,
      text: "Anwary Travels transformed our honeymoon into a magical experience. Every detail was perfect, from the overwater villa in Maldives to the private sunset cruise."
    },
    {
      name: "Matovu Ibrahim",
      location: "Kira",
      rating: 5,
      text: "The Swiss Alps adventure was beyond our wildest dreams. The luxury chalet, helicopter tours, and personalized service made it truly unforgettable."
    },
    {
      name: "Abdallah Aziz",
      location: "Namugongo",
      rating: 5,
      text: "Our African safari was expertly planned. The luxury tented camp, incredible wildlife sightings, and cultural experiences exceeded all expectations."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Travelers" },
    { number: "150+", label: "Destinations" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-dark/80 via-emerald/70 to-emerald-dark/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge variant="secondary" className="mb-6 px-6 py-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Luxury Travel Experiences Since 2003
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Anwary Travel
              <span className="block text-gold">A journey of a lifetime</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Experience extraordinary journeys crafted by travel experts who understand 
              that every moment matters. Let us turn your dream destinations into unforgettable memories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold to-gold/90 text-emerald-dark hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link to="/booking">
                   Book Sacred Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="default" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">Plan My Trip</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-emerald text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="text-emerald">Anwary Travels</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We go beyond ordinary travel planning to create extraordinary experiences 
                that exceed your expectations at every turn.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-background group">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-emerald/10 rounded-full w-fit group-hover:bg-emerald/20 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-20 bg-muted/50 hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Popular <span className="text-emerald">Destinations</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover some of our most beloved destinations, each offering unique experiences 
                and unforgettable memories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { name: "Maldives Paradise", price: "$3,499", image: "🏝️", description: "Overwater villas & pristine beaches" },
                { name: "Swiss Alps Adventure", price: "$4,299", image: "🏔️", description: "Luxury chalets & mountain views" },
                { name: "Safari Experience", price: "$5,199", image: "🦁", description: "Luxury camps & wildlife encounters" }
              ].map((destination, index) => (
                <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-background overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-emerald/20 to-gold/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {destination.image}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="group-hover:text-emerald transition-colors">{destination.name}</CardTitle>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald">{destination.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                    <CardDescription>{destination.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald to-emerald-light hover:shadow-lg transition-all duration-300" asChild>
                <Link to="/destinations">View All Destinations</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What Our <span className="text-emerald">Travelers Say</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Read genuine reviews from travelers who've experienced our exceptional service
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 bg-muted/50 relative">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-emerald mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald to-emerald-dark text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald/90 to-emerald-dark/80"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-gold">Adventure?</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Let our travel experts create a personalized itinerary that exceeds your expectations. 
              Your dream journey is just a conversation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold to-gold/90 text-emerald-dark hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/booking">🌙 Begin Your Journey</Link>
              </Button>
              <Button 
                size="lg" 
                variant="default" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
                asChild
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;