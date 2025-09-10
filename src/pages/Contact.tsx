import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircleMore } from "lucide-react";
import { useAddContactMutation } from "@/api/apiSlice";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import WhatsAppFab from "@/components/WhatsappFab";

export interface Contact {
  name: string;
  contact: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [addContact] = useAddContactMutation();
  const [formData, setFormData] = useState<Contact>();
  const [loading, setLoading] = useState(false);
  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await addContact(formData);
    if (!formData.contact || !formData.message || !formData.name) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Sorry, all fields must be filled",
        variant: "destructive",
      });
    } else {
      setLoading(false);
      setFormData(null);
      if (res.error) {
        toast({
          title: "Error",
          description: "Sorry, something went wrong!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Successfully sent message",
        });
      }
    }
  };
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-emerald" />,
      title: "Phone",
      details: ["+256 782 808261"],
      description: "Available 24/7 for travel emergencies",
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald" />,
      title: "Email",
      details: ["info@anwarytravels.com", "bookings@anwarytravels.com"],
      description: "We respond within 2 hours during business days",
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald" />,
      title: "Office",
      details: ["UAP", "Kimati Avenue"],
      description: "Visit our luxury travel lounge",
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald" />,
      title: "Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat-Sun: 10AM-5PM"],
      description: "Extended hours for consultation",
    },
  ];

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
                Let's Plan Your{" "}
                <span className="text-emerald">Dream Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ready to explore the world? Our travel experts are here to craft
                the perfect itinerary just for you. Get in touch and let's start
                planning your adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <form onSubmit={handleSave}>
                <Card className="border-0 shadow-lg bg-background">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Send Us a Message
                    </CardTitle>
                    <CardDescription>
                      Tell us about your dream destination and we'll create a
                      personalized quote for you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Name</Label>
                        <Input
                          id="firstName"
                          name="name"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contact: e.target.value,
                          })
                        }
                        placeholder="Enter your phone number"
                      />
                    </div>

                    {/* <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Input
                        id="destination"
                        placeholder="Where would you like to go?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Input
                        id="travelers"
                        type="number"
                        placeholder="How many people?"
                      />
                    </div> */}

                    {/* <div className="space-y-2">
                      <Label htmlFor="dates">Travel Dates</Label>
                      <Input
                        id="dates"
                        placeholder="When would you like to travel?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input
                        id="budget"
                        placeholder="What's your approximate budget?"
                      />
                    </div> */}

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        placeholder="Tell us more about your dream trip, special occasions, interests, or any specific requirements..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-emerald to-emerald-light hover:shadow-lg transition-all duration-300 py-6 text-lg"
                    >
                      {loading == true
                        ? `Loading`
                        : `Send Message`}
                    </Button>
                  </CardContent>
                </Card>
              </form>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team of travel specialists is ready to help you plan the
                    perfect getaway. Whether you're looking for adventure,
                    relaxation, or cultural immersion, we'll create an
                    unforgettable experience tailored just for you.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 bg-muted/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-emerald/10 rounded-lg">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>
                            <div className="space-y-1 mb-2">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Map Placeholder */}
                <Card className="border-0 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-emerald/20 to-gold/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-emerald mx-auto mb-3" />
                      <p className="text-lg font-medium text-foreground">
                        Visit Our Travel Lounge
                      </p>
                      <p className="text-muted-foreground">
                        123 Travel Plaza, New York
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How far in advance should I book my trip?",
                  answer:
                    "We recommend booking 2-3 months in advance for optimal availability and pricing, though we can accommodate last-minute requests.",
                },
                {
                  question: "Do you handle all travel arrangements?",
                  answer:
                    "Yes! We take care of everything from flights and accommodations to activities, transfers, and dining reservations.",
                },
                {
                  question: "What if I need to cancel or change my trip?",
                  answer:
                    "We offer flexible booking policies and will work with you to modify your plans. Specific terms depend on the destinations and suppliers involved.",
                },
                {
                  question: "Are your travel consultations free?",
                  answer:
                    "Yes, initial consultations are complimentary. We only charge fees once we begin actively planning and booking your customized itinerary.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 bg-background">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
