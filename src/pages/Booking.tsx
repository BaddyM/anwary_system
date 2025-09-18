import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  CalendarIcon, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  Plane,
  Clock,
  Shield
} from "lucide-react";
import { format } from "date-fns";

const destinations = [
  "Maldives Paradise",
  "Swiss Alps Adventure", 
  "Angkor Wat Explorer",
  "African Safari Expedition",
  "Santorini Romance",
  "Northern Lights Quest",
  "Custom Destination"
];

const travelTypes = [
  "Honeymoon",
  "Family Vacation",
  "Adventure Travel",
  "Luxury Escape",
  "Cultural Journey",
  "Wildlife Safari",
  "Beach Getaway"
];

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    travelType: "",
    travelers: "2",
    departureDate: undefined as Date | undefined,
    duration: "",
    budget: "",
    specialRequests: ""
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
        title: "Booking Request Submitted!",
        description: "Our travel experts will contact you within 24 hours to discuss your dream vacation.",
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        destination: "",
        travelType: "",
        travelers: "2",
        departureDate: undefined,
        duration: "",
        budget: "",
        specialRequests: ""
      });
    }, 2000);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-bold text-forest mb-6">
            Book Your Dream Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your travel dreams and our experts will create a personalized 
            luxury experience tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">
                  Travel Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Travel Preferences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Preferred Destination *</Label>
                      <Select value={formData.destination} onValueChange={(value) => updateFormData("destination", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose a destination" />
                        </SelectTrigger>
                        <SelectContent>
                          {destinations.map((dest) => (
                            <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Travel Type</Label>
                      <Select value={formData.travelType} onValueChange={(value) => updateFormData("travelType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select travel type" />
                        </SelectTrigger>
                        <SelectContent>
                          {travelTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Number of Travelers *</Label>
                      <Select value={formData.travelers} onValueChange={(value) => updateFormData("travelers", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Departure Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full mt-1 justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.departureDate ? format(formData.departureDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.departureDate}
                            onSelect={(date) => updateFormData("departureDate", date)}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Duration</Label>
                      <Select value={formData.duration} onValueChange={(value) => updateFormData("duration", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-5">3-5 Days</SelectItem>
                          <SelectItem value="6-8">6-8 Days</SelectItem>
                          <SelectItem value="9-12">9-12 Days</SelectItem>
                          <SelectItem value="13+">13+ Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Budget Range (per person)</Label>
                    <Select value={formData.budget} onValueChange={(value) => updateFormData("budget", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                        <SelectItem value="20000+">$20,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests or Preferences</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => updateFormData("specialRequests", e.target.value)}
                      placeholder="Tell us about any specific interests, dietary requirements, accessibility needs, or special occasions..."
                      className="mt-1"
                      rows={4}
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
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Plane className="w-5 h-5 mr-2" />
                        Submit Booking Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Why Book With Us */}
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-forest">
                  Why Book With Anwary Travel?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-forest">Expert Planning</h4>
                    <p className="text-sm text-muted-foreground">Personalized itineraries crafted by travel experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-emerald mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-forest">24/7 Support</h4>
                    <p className="text-sm text-muted-foreground">Round-the-clock assistance during your journey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-emerald mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-forest">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">Response within 24 hours guaranteed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-forest">
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-muted-foreground">info@anwarytravel.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-sm text-muted-foreground">123 Travel Plaza, Suite 456<br />New York, NY 10001</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Destinations */}
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-forest">
                  Most Popular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">Maldives Paradise</Badge>
                  <Badge variant="secondary" className="mr-2">Swiss Alps</Badge>
                  <Badge variant="secondary" className="mr-2">African Safari</Badge>
                  <Badge variant="secondary" className="mr-2">Santorini Romance</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;