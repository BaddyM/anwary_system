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
  Waves,
} from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { baseUrl, useGetDestinationsQuery } from "@/api/apiSlice";
import { useState } from "react";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { Destination } from "./Home";

function getDaysBetween(date1, date2) {
  // Convert to Date objects (in case strings are passed)
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Get difference in milliseconds
  const diffMs = Math.abs(d1 - d2);

  // Convert ms → days
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

const Destinations = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const {
    data: destinationData,
    isLoading,
    isSuccess,
    isError,
  } = useGetDestinationsQuery({ page, limit });
  const [containerRef, visibleItems] = useStaggeredAnimation(
    destinationData ? destinationData.data.length : 0,
    150
  );

  const getAnimationClass = (index: number) => {
    if (visibleItems.includes(index)) {
      return "animate-slide-up";
    }
    return "opacity-0 translate-y-8";
  };

  if (isError) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    const destinations:Destination[] = destinationData.data;
    return (
      <div className="min-h-screen pt-24">
        {/* Header */}
        <section className="py-16 bg-pearl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl font-bold text-forest mb-6 animate-fade-in">
              Luxury Destinations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
              Handpicked destinations that offer the perfect blend of adventure,
              luxury, and cultural immersion. Each journey is crafted to create
              memories that will last a lifetime.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-bounce-in">
              <Badge
                variant="outline"
                className="px-4 py-2 text-emerald border-emerald"
              >
                <MapPin className="w-4 h-4 mr-2" />
                150+ Destinations
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-emerald border-emerald"
              >
                <Users className="w-4 h-4 mr-2" />
                Small Groups
              </Badge>
              <Badge
                variant="outline"
                className="px-4 py-2 text-emerald border-emerald"
              >
                <Star className="w-4 h-4 mr-2" />
                Luxury Experience
              </Badge>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={containerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {destinations.map((destination:Destination, index:number) => (
                <Card
                  key={destination.id}
                  className={`group hover-lift travel-card overflow-hidden transition-all duration-500 ${getAnimationClass(
                    index
                  )}`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={`${baseUrl}/${destination.image.split(",")[0]}`}
                        alt={destination.title}
                        className="w-full h-64 object-cover card-image-hover"
                      />
                      <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Badge className="absolute top-4 left-4 gradient-gold text-forest animate-float">
                        {"active"}
                      </Badge>
                      <div className="absolute top-4 right-4 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-300 group-hover:bg-white/30">
                        <Star className="w-4 h-4 text-gold-bright fill-current mr-1" />
                        <span className="text-white font-medium">
                          {destination.rating}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-serif text-xl font-semibold text-forest group-hover:text-emerald transition-colors duration-300">
                          {destination.title}
                        </h3>
                        {/* <destination.icon className="w-5 h-5 text-emerald group-hover:scale-110 transition-transform duration-300" /> */}
                      </div>

                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin className="w-4 h-4 mr-2 text-gold" />
                        <span className="mr-4">{destination.location}</span>
                        <Calendar className="w-4 h-4 mr-2 text-gold" />
                        <span>{getDaysBetween(destination.checkOutDate, destination.checkInDate)}</span>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {destination.description}
                      </p>

                      {/* Highlights */}
                      {/* <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {destination.highlights
                            .slice(0, 3)
                            .map((highlight, highlightIndex) => (
                              <Badge
                                key={highlightIndex}
                                variant="secondary"
                                className="text-xs transition-all duration-300 hover:bg-emerald hover:text-white"
                              >
                                {highlight}
                              </Badge>
                            ))}
                          {destination.highlights.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{destination.highlights.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div> */}

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="group-hover:scale-105 transition-transform duration-300">
                          <span className="text-2xl font-bold text-emerald">
                            {Intl.NumberFormat("en-US",{
                                style:"currency",
                                currency:"USD"
                            }).format(destination.price)}
                          </span>
                          <span className="text-muted-foreground text-sm ml-1">
                            per person
                          </span>
                        </div>
                        <Button
                          className="gradient-gold text-forest hover:opacity-90 transition-all duration-300 hover:scale-105"
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
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Small Group Sizes
                </h3>
                <p className="text-white/90">
                  Intimate experiences with maximum 12 travelers for
                  personalized attention.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Star className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Luxury Accommodations
                </h3>
                <p className="text-white/90">
                  Handpicked 5-star hotels, resorts, and unique properties
                  worldwide.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Expert Local Guides
                </h3>
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
              <Button
                size="lg"
                className="gradient-hero text-white hover:opacity-90 px-8"
                asChild
              >
                <Link to="/contact">Plan Custom Trip</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-emerald text-emerald hover:bg-emerald hover:text-white px-8"
                asChild
              >
                <Link to="/booking">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Destinations;
