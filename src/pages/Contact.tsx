import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users,
} from "lucide-react";
import GoogleMap from "@/components/GoogleMap";
import { useAddContactMutation } from "@/api/apiSlice";

const inquiryTypes = [
  "General Information",
  "Custom Trip Planning",
  "Group Travel",
  "Honeymoon Package",
  "Corporate Travel",
  "Travel Insurance",
  "Booking Changes",
  "Other",
];

export interface Contact {
  name: string;
  contact: string;
  message: String;
}

const Contact = () => {
  const [formData, setFormData] = useState<Contact>();
  const [addContact] = useAddContactMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await addContact(formData);
    e.target.message.value = "";
    e.target.phone.value = "";
    e.target.name.value = "";
    setFormData(null);
    setIsSubmitting(false);
    if (res.error) {
      toast({
        title: "Error",
        description: "Sorry, something went wrong!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Successfully sent message.",
      });
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold text-forest mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to plan your next adventure? Our travel experts are here to
            help you create unforgettable memories. Contact us today!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-emerald" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      // value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      // value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact: e.target.value,
                        })
                      }
                      className="mt-1"
                      placeholder="Add Contact"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      //   value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      required
                      className="mt-1"
                      rows={6}
                      placeholder="Tell us more about your travel plans, questions, or how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-hero text-white hover:opacity-90"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-forest">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full gradient-hero">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest mb-1">
                      Visit Our Office
                    </h4>
                    <p className="text-muted-foreground">
                      AHA Towers, Ground Floor, Plot 7 Lourdel Road Nakasero, Kampala
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full gradient-hero">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest mb-1">Call Us</h4>
                    <p className="text-muted-foreground">
                      +256 782-808-261 <br/>
                      +256 702-029-143
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full gradient-hero">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest mb-1">Email Us</h4>
                    <p className="text-muted-foreground">
                      General: anwaarytravel@gmail.com
                      <br />
                      Bookings: bookings@anwarytravel.com
                      <br />
                      Support: support@anwarytravel.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full gradient-hero">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest mb-1">
                      Business Hours
                    </h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br />
                      Saturday: 10:00 AM - 6:00 PM
                      <br />
                      Sunday: 11:00 AM - 4:00 PM
                      <br />
                      <span className="text-emerald font-medium">
                        EST Time Zone
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-forest">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full gradient-hero text-white hover:opacity-90"
                  asChild
                >
                  <a href="/booking">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Consultation
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white"
                  asChild
                >
                  <a href="/destinations">
                    <Users className="w-4 h-4 mr-2" />
                    Browse Destinations
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-forest">
                  Common Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-forest mb-1">
                    How far in advance should I book?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    We recommend booking 3-6 months in advance for international
                    trips.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">
                    Do you offer travel insurance?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, we provide comprehensive travel insurance options for
                    all trips.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">
                    Can you arrange group travel?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! We specialize in group trips with special rates
                    and custom itineraries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
