import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Users,
  Award,
  Globe,
  Heart,
  MapPin,
  Plane,
  Camera,
  Shield,
} from "lucide-react";

const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [storyRef, storyVisible] = useScrollAnimation();
  const [valuesRef, valuesVisible] = useScrollAnimation();
  const [teamRef, teamVisible] = useScrollAnimation();

  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description:
        "We live and breathe travel, sharing our passion with every journey we create.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Your safety and security are our top priorities in every destination.",
    },
    {
      icon: Globe,
      title: "Authentic Experiences",
      description:
        "We believe in genuine cultural immersion and meaningful connections.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every detail of your travel experience.",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Abdul Hafiz Walusimbi",
      role: "Founder & CEO",
      description:
        "20+ years in luxury travel with a passion for creating unforgettable experiences.",
      image: "/placeholder.svg",
    },
    {
      name: "Azhar",
      role: "-",
      description:
        "Expert in logistics and ensuring seamless travel experiences worldwide.",
      image: "/placeholder.svg",
    },
    {
      name: "Bashir Kawesa",
      role: "-",
      description:
        "Specialist in authentic cultural immersion and local partnerships.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          ref={heroRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Anwaary Travel
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            For over two decades, we've been crafting extraordinary journeys
            that transform travelers into storytellers, creating memories that
            last a lifetime.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={storyRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
              storyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h2 className="text-4xl font-bold text-forest mb-6">
                Our Story, Started in 2022
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Anwary Travel aims to provide seamless and affordable travel
                  experiences for pilgrims traveling to Mecca for Umrah or Hajj.
                  Here's a potential storyline:
                  <br /><br />
                  <span className="text-forest font-bold">Mission</span>: Anwary
                  Travel's mission is to ease the process of traveling to Mecca,
                  ensuring a worthwhile experience for pilgrims.
                  <br /><br />
                  <span className="text-forest font-bold">Services</span>: The
                  agency offers comprehensive services, including:
                  <br /><br />
                  <span className="text-forest font-bold">Visa Processing</span>
                  : Anwary Travel assists with visa applications, ensuring a
                  smooth and efficient process.
                  <br />
                  <span className="text-forest font-bold">Ticketing</span>: The
                  agency provides convenient ticketing services, helping
                  pilgrims secure flights to Saudi Arabia.
                  <br /><br />
                  <span className="text-forest font-bold">
                    Travel Arrangements
                  </span>
                  : Anwary Travel organizes accommodations and transportation,
                  catering to the needs of pilgrims.
                  <br /><br />
                  <span className="text-forest font-bold">Expertise</span>: With
                  knowledgeable staff and partners, Anwary Travel provides
                  valuable insights and guidance throughout the journey.
                  <br />- *Affordable Packages*: The agency offers competitive
                  pricing and customizable packages to suit different budgets
                  and preferences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg"
                  alt="Anwaary Travel founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-16 h-16 text-forest" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={valuesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              valuesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-forest mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every
              journey we craft for our travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`text-center hover-lift travel-card transition-all duration-1000 ${
                  valuesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-emerald flex items-center justify-center shadow-lg">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-forest">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={teamRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              teamVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-forest mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of travel experts brings decades of combined
              experience and an unwavering commitment to creating your perfect
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`text-center hover-lift travel-card transition-all duration-1000 ${
                  teamVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-forest">
                    {member.name}
                  </h3>
                  <p className="text-emerald-bright font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              These milestones represent years of dedication to creating
              exceptional travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-gold-bright mr-2" />
                <span className="text-4xl font-bold">150+</span>
              </div>
              <p className="text-white/90">Destinations Covered</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-gold-bright mr-2" />
                <span className="text-4xl font-bold">25K+</span>
              </div>
              <p className="text-white/90">Happy Travelers</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-gold-bright mr-2" />
                <span className="text-4xl font-bold">15+</span>
              </div>
              <p className="text-white/90">Industry Awards</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Plane className="w-6 h-6 text-gold-bright mr-2" />
                <span className="text-4xl font-bold">10</span>
              </div>
              <p className="text-white/90">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pearl">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-forest mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our experienced team create a personalized adventure that
            reflects your unique travel dreams. Your extraordinary journey
            begins with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-gold text-forest hover:opacity-90 px-8 shadow-lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-bright text-emerald-bright hover:bg-emerald-bright hover:text-white px-8"
              asChild
            >
              <Link to="/destinations">View Destinations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
