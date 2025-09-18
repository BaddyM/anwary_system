import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users
} from "lucide-react";

const inquiryTypes = [
  "General Information",
  "Custom Trip Planning",
  "Group Travel",
  "Honeymoon Package",
  "Corporate Travel",
  "Travel Insurance",
  "Booking Changes",
  "Other"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            Ready to plan your next adventure? Our travel experts are here to help you 
            create unforgettable memories. Contact us today!
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="mt-1"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label>Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => updateFormData("inquiryType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => updateFormData("subject", e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => updateFormData("message", e.target.value)}
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
                    <h4 className="font-semibold text-forest mb-1">Visit Our Office</h4>
                    <p className="text-muted-foreground">
                      123 Travel Plaza, Suite 456<br />
                      New York, NY 10001<br />
                      United States
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
                      Main: +1 (555) 123-4567<br />
                      WhatsApp: +1 (555) 987-6543<br />
                      Emergency: +1 (555) 911-HELP
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
                      General: info@anwarytravel.com<br />
                      Bookings: bookings@anwarytravel.com<br />
                      Support: support@anwarytravel.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full gradient-hero">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 11:00 AM - 4:00 PM<br />
                      <span className="text-emerald font-medium">EST Time Zone</span>
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
                  <h4 className="font-semibold text-forest mb-1">How far in advance should I book?</h4>
                  <p className="text-sm text-muted-foreground">We recommend booking 3-6 months in advance for international trips.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">Do you offer travel insurance?</h4>
                  <p className="text-sm text-muted-foreground">Yes, we provide comprehensive travel insurance options for all trips.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-1">Can you arrange group travel?</h4>
                  <p className="text-sm text-muted-foreground">Absolutely! We specialize in group trips with special rates and custom itineraries.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="travel-card overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-sage h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-emerald mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-forest mb-2">
                    Find Us in New York
                  </h3>
                  <p className="text-muted-foreground">
                    Located in the heart of Manhattan's Travel District
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;