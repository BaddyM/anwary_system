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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
  Shield,
} from "lucide-react";
import { format } from "date-fns";
import { Destination } from "./Home";
import { useAddBookingMutation, useGetDestinationsQuery } from "@/api/apiSlice";

const destinations = [
  "Maldives Paradise",
  "Swiss Alps Adventure",
  "Angkor Wat Explorer",
  "African Safari Expedition",
  "Santorini Romance",
  "Northern Lights Quest",
  "Custom Destination",
];

const travelTypes = [
  "Honeymoon",
  "Family Vacation",
  "Adventure Travel",
  "Luxury Escape",
  "Cultural Journey",
  "Wildlife Safari",
  "Beach Getaway",
];

export interface Booking {
  id?: string;
  fname: string;
  lname: string;
  contact: string;
  email: string;
  memo?: string;
  destination: Destination;
  destinationId?: string;
  isConfirmed?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<Booking>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [createBooking] = useAddBookingMutation();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isSuccess, isError, isLoading } = useGetDestinationsQuery({
    page,
    limit,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await createBooking(formData);
    setIsSubmitting(false);
    setFormData(null);
    e.target.lname.value = "";
    e.target.fname.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.memo.value = "";
    e.target.destination.value = "";
    if (res.error) {
      toast({
        title: "Error",
        description: "Sorry, something went wrong!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Successfully created booking.",
      });
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
            Tell us about your travel dreams and our experts will create a
            personalized luxury experience tailored just for you.
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
                        placeholder="Enter First Name"
                        name="fname"
                        // value={formData.fname}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fname: e.target.value,
                          })
                        }
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter Last Name"
                        name="lname"
                        // value={formData.lname}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lname: e.target.value,
                          })
                        }
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address </Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        // value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone Number"
                        // value={formData.contact}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contact: e.target.value,
                          })
                        }
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Travel Preferences */}
                  <div className="">
                    <div>
                      <Label>Preferred Destination *</Label>
                      <Select
                        // value={formData.destination.id}
                        required
                        name="destination"
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            destinationId: value,
                          })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose a destination" />
                        </SelectTrigger>
                        <SelectContent>
                          {data &&
                            data.data.map(
                              (dest: Destination, index: number) => (
                                <SelectItem key={index} value={dest.id}>
                                  {dest.title}
                                </SelectItem>
                              )
                            )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="specialRequests">
                      Special Requests or Preferences
                    </Label>
                    <Textarea
                      id="specialRequests"
                      name="memo"
                    //   value={formData.memo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          memo: e.target.value,
                        })
                      }
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
                  Why Book With Anwaary Travel?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-forest">
                      Expert Planning
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Personalized itineraries crafted by travel experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-emerald mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-forest">24/7 Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock assistance during your journey
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-emerald mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-forest">
                      Quick Response
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Response within 24 hours guaranteed
                    </p>
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
                    <p className="text-sm text-muted-foreground">
                      +256 782-808-261 <br/>
                      +256 702-029-143
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-muted-foreground">
                      anwaarytravel@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-sm text-muted-foreground">
                      AHA Towers, 1st floor, Plot 7 Lourdel Road Nakasero, Kampala
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Destinations */}
            <Card className="travel-card hidden">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-forest">
                  Most Popular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="mr-2">
                    Maldives Paradise
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    Swiss Alps
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    African Safari
                  </Badge>
                  <Badge variant="secondary" className="mr-2">
                    Santorini Romance
                  </Badge>
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
