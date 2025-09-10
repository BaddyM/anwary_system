import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Globe className="h-8 w-8 text-emerald" />,
      title: "Global Expertise",
      description: "Over 20 years of experience crafting unforgettable journeys across all continents."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald" />,
      title: "Personal Service",
      description: "Dedicated travel consultants who understand your unique preferences and dreams."
    },
    {
      icon: <Award className="h-8 w-8 text-emerald" />,
      title: "Excellence Award",
      description: "Recognized as the leading luxury travel agency with multiple industry awards."
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald" />,
      title: "Passionate Team",
      description: "Travel enthusiasts who share your passion for discovery and adventure."
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
                About <span className="text-emerald">Anwary Travel</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                For over one decade, we've been turning travel dreams into extraordinary realities. 
                Our passion for exploration and commitment to excellence has made us the trusted choice 
                for discerning travelers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2003 by seasoned travelers Ahmed and Sarah Anwary, Anwary Travels 
                    began as a small boutique agency with a simple mission: to create personalized 
                    travel experiences that go beyond the ordinary.
                  </p>
                  <p>
                    What started as a passion project has grown into a globally recognized luxury 
                    travel company, serving thousands of satisfied clients who trust us with their 
                    most precious commodity - their time.
                  </p>
                  <p>
                    Today, we continue to honor our founding principles while embracing innovation 
                    to deliver seamless, sustainable, and spectacular travel experiences.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-emerald/20 to-gold/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-4xl md:text-6xl font-bold text-emerald mb-2">10+</div>
                    <div className="text-lg text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values guide every interaction and ensure your journey exceeds expectations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-background">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-emerald/10 rounded-full w-fit">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <div className="bg-gradient-to-br from-emerald/10 to-gold/10 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                "To inspire and enable meaningful connections between people and places, 
                creating transformative travel experiences that enrich lives, preserve cultures, 
                and protect our planet for future generations."
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;