import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users } from "lucide-react";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Maldives Paradise",
      location: "Indian Ocean",
      duration: "7 Days",
      price: "$3,499",
      rating: 4.9,
      reviews: 142,
      image: "🏝️",
      description: "Luxurious overwater villas with crystal-clear waters and pristine beaches.",
      highlights: ["Overwater Villa", "Private Beach", "Spa Treatments"]
    },
    {
      id: 2,
      name: "Swiss Alpine Adventure",
      location: "Swiss Alps",
      duration: "10 Days",
      price: "$4,299",
      rating: 4.8,
      reviews: 98,
      image: "🏔️",
      description: "Breathtaking mountain scenery with luxury chalets and world-class skiing.",
      highlights: ["Mountain Chalet", "Helicopter Tours", "Gourmet Dining"]
    },
    {
      id: 3,
      name: "Safari & Serenity",
      location: "Kenya & Tanzania",
      duration: "12 Days",
      price: "$5,199",
      rating: 4.9,
      reviews: 203,
      image: "🦁",
      description: "Epic wildlife encounters in luxury tented camps with expert guides.",
      highlights: ["Big Five Safari", "Luxury Camps", "Cultural Experiences"]
    },
    {
      id: 4,
      name: "Japanese Cultural Journey",
      location: "Japan",
      duration: "14 Days",
      price: "$4,899",
      rating: 4.7,
      reviews: 156,
      image: "🏯",
      description: "Immerse in ancient traditions while enjoying modern luxury accommodations.",
      highlights: ["Traditional Ryokans", "Temple Visits", "Bullet Train"]
    },
    {
      id: 5,
      name: "Mediterranean Yacht Charter",
      location: "Greek Islands",
      duration: "8 Days",
      price: "$6,799",
      rating: 5.0,
      reviews: 89,
      image: "⛵",
      description: "Explore hidden coves and ancient islands aboard a luxury yacht.",
      highlights: ["Private Yacht", "Island Hopping", "Michelin Dining"]
    },
    {
      id: 6,
      name: "Amazon Rainforest Expedition",
      location: "Ecuador & Peru",
      duration: "9 Days",
      price: "$3,899",
      rating: 4.8,
      reviews: 127,
      image: "🌿",
      description: "Discover incredible biodiversity in luxury eco-lodges deep in the rainforest.",
      highlights: ["Eco Lodges", "Wildlife Photography", "Indigenous Culture"]
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-emerald/10 to-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Discover Your Next <span className="text-emerald">Adventure</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Handpicked destinations and carefully crafted experiences that create memories 
                to last a lifetime. Each journey is tailored to your unique preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-emerald/20 transition-colors">
                All Destinations
              </Badge>
              <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-emerald/10 transition-colors">
                Beach & Islands
              </Badge>
              <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-emerald/10 transition-colors">
                Adventure & Nature
              </Badge>
              <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-emerald/10 transition-colors">
                Cultural Heritage
              </Badge>
              <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-emerald/10 transition-colors">
                Luxury & Wellness
              </Badge>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Card key={destination.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-background overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-emerald/20 to-gold/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {destination.image}
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl group-hover:text-emerald transition-colors">
                        {destination.name}
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald">{destination.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {destination.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {destination.duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-gold text-gold" />
                        <span className="font-medium">{destination.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({destination.reviews} reviews)
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">
                      {destination.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-emerald to-emerald-light hover:shadow-lg transition-all duration-300">
                      View Details & Book
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-emerald/10 to-gold/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our travel experts specialize in creating completely customized itineraries 
              tailored to your unique interests and preferences.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-emerald to-emerald-light hover:shadow-lg transition-all duration-300">
              Create Custom Journey
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Destinations;