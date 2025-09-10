import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { baseUrl, useGetDestinationsQuery } from "@/api/apiSlice";
import { useState } from "react";
import WhatsAppFab from "@/components/WhatsappFab";

const Destinations = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading, isError, isSuccess } = useGetDestinationsQuery({
    page,
    limit,
  });

  if (isError) {
    return (
      <div>
        <p>Error...</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <>
        <Navigation />
        <WhatsAppFab />
        <main className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="pt-24 pb-16 bg-gradient-to-br from-emerald/10 to-gold/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Discover Your Next{" "}
                  <span className="text-emerald">Adventure</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Handpicked destinations and carefully crafted experiences that
                  create memories to last a lifetime. Each journey is tailored
                  to your unique preferences.
                </p>
              </div>
            </div>
          </section>

          {/* Filter Section */}
          <section className="py-8 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 cursor-pointer hover:bg-emerald/20 transition-colors"
                >
                  All Destinations
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-emerald/10 transition-colors"
                >
                  Beach & Islands
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-emerald/10 transition-colors"
                >
                  Adventure & Nature
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-emerald/10 transition-colors"
                >
                  Cultural Heritage
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-emerald/10 transition-colors"
                >
                  Luxury & Wellness
                </Badge>
              </div>
            </div>
          </section>

          {/* Destinations Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.data.map((destination: any, index: number) => (
                  <Card
                    key={index}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-background overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-emerald/20 to-gold/20 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={`${baseUrl}/${destination.image.split(",")[0]}`}
                      />
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl group-hover:text-emerald transition-colors">
                          {destination.title}
                        </CardTitle>
                        <div className="text-right">
                          <div className="text-lg font-bold text-emerald">
                            {Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(destination.price)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            per person
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {destination.location}
                        </div>
                        {/* <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {destination.duration}
                      </div> */}
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-gold text-gold" />
                          <span className="font-medium">
                            {destination.rating}
                          </span>
                        </div>
                        {/* <span className="text-sm text-muted-foreground">
                        ({destination.reviews} reviews)
                      </span> */}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="leading-relaxed">
                        {destination.description}
                      </CardDescription>

                      {/* <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div> */}

                      {/* <Button 
                      className="w-full bg-gradient-to-r from-emerald to-emerald-light hover:shadow-lg transition-all duration-300">
                         Book This Journey
                      </Button> */}
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
                Our travel experts specialize in creating completely customized
                itineraries tailored to your unique interests and preferences.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald to-emerald-light hover:shadow-lg transition-all duration-300"
                asChild
              >
                <Link to="/booking"> Create Sacred Journey</Link>
              </Button>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default Destinations;
