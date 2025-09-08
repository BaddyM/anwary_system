import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Users, MapPin, Star, Clock, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Booking = () => {
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const packages = [
    {
      id: "maldives",
      name: "Maldives Paradise",
      price: 3499,
      duration: "7 Days",
      image: "🏝️",
      highlights: ["Overwater Villa", "Private Beach", "Spa Treatments"]
    },
    {
      id: "swiss",
      name: "Swiss Alpine Adventure",
      price: 4299,
      duration: "10 Days", 
      image: "🏔️",
      highlights: ["Mountain Chalet", "Helicopter Tours", "Gourmet Dining"]
    },
    {
      id: "safari",
      name: "Safari & Serenity",
      price: 5199,
      duration: "12 Days",
      image: "🦁",
      highlights: ["Big Five Safari", "Luxury Camps", "Cultural Experiences"]
    }
  ];

  const selectedPackageDetails = packages.find(pkg => pkg.id === selectedPackage);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-emerald/10 to-gold/10 relative overflow-hidden">
          {/* Islamic Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundSize: '60px 60px'
                 }}>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="text-6xl">🌙✨</div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                ﷽ Book Your Sacred <span className="text-emerald">Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Bismillah - Begin your blessed adventure with Anwary Travels. 
                Choose your destination and dates for a journey filled with barakah and beautiful memories.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="border-2 border-emerald/20 shadow-xl bg-background relative overflow-hidden">
                {/* Decorative Islamic Border */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald via-gold to-emerald"></div>
                
                <CardHeader className="text-center pb-3">
                  <div className="text-3xl mb-3">☪️</div>
                  <CardTitle className="text-3xl text-emerald">حجز رحلتك</CardTitle>
                  <CardTitle className="text-2xl">Book Your Journey</CardTitle>
                  <CardDescription>
                    Fill in your travel details and we'll create a blessed itinerary for you
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Package Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="package">Select Travel Package</Label>
                    <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your sacred destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.id}>
                            <div className="flex items-center gap-3">
                              <span>{pkg.image}</span>
                              <div>
                                <div className="font-medium">{pkg.name}</div>
                                <div className="text-sm text-muted-foreground">${pkg.price} • {pkg.duration}</div>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Selection */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Departure Date تاريخ المغادرة</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !departureDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {departureDate ? format(departureDate, "PPP") : <span>Select departure</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={departureDate}
                            onSelect={setDepartureDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Return Date تاريخ العودة</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !returnDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {returnDate ? format(returnDate, "PPP") : <span>Select return</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={returnDate}
                            onSelect={setReturnDate}
                            disabled={(date) => date < (departureDate || new Date())}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name الاسم الأول</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name اسم العائلة</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number رقم الهاتف</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers عدد المسافرين</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How many travelers?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Traveler</SelectItem>
                        <SelectItem value="2">2 Travelers</SelectItem>
                        <SelectItem value="3">3 Travelers</SelectItem>
                        <SelectItem value="4">4 Travelers</SelectItem>
                        <SelectItem value="5">5+ Travelers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Special Requirements */}
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Special Requirements متطلبات خاصة</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Halal food, prayer facilities, family-friendly activities, etc."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-emerald to-emerald-light hover:shadow-lg transition-all duration-300 py-6 text-lg font-semibold"
                    size="lg"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    بارك الله فيك - Confirm Booking
                  </Button>
                </CardContent>
              </Card>

              {/* Package Details & Summary */}
              <div className="space-y-6">
                {selectedPackageDetails ? (
                  <Card className="border-2 border-gold/30 bg-gradient-to-br from-gold/5 to-emerald/5">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{selectedPackageDetails.image}</div>
                        <div>
                          <CardTitle className="text-2xl text-emerald">
                            {selectedPackageDetails.name}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {selectedPackageDetails.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-gold text-gold" />
                              4.9 Rating
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Package Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedPackageDetails.highlights.map((highlight, index) => (
                              <Badge key={index} variant="secondary">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center text-lg">
                            <span>Package Price:</span>
                            <span className="text-2xl font-bold text-emerald">
                              ${selectedPackageDetails.price}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">per person</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-2 border-dashed border-muted-foreground/30">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl mb-4">🧭</div>
                      <p className="text-muted-foreground">
                        Select a travel package to see details and pricing
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Islamic Travel Tips */}
                <Card className="border border-emerald/30 bg-emerald/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald">
                      <div className="text-2xl">🕌</div>
                      Islamic Travel Etiquette
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald mt-0.5" />
                      <p className="text-sm">All accommodations provide Qibla direction and prayer mats</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald mt-0.5" />
                      <p className="text-sm">Halal-certified restaurants and meal options available</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald mt-0.5" />
                      <p className="text-sm">Prayer time reminders and nearby mosque locations provided</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald mt-0.5" />
                      <p className="text-sm">Family-friendly activities respecting Islamic values</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Support */}
                <Card className="bg-gradient-to-br from-emerald/10 to-gold/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">📞</div>
                    <h3 className="font-semibold text-lg mb-2">Need Assistance?</h3>
                    <p className="text-muted-foreground mb-4">
                      Our Islamic travel specialists are here to help you plan the perfect journey
                    </p>
                    <Button variant="outline" className="border-emerald text-emerald hover:bg-emerald/10">
                      Contact Our Experts
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-gradient-to-br from-emerald/5 to-gold/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Trusted by Muslim Travelers Worldwide
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-semibold text-emerald">Halal Certified</h3>
                <p className="text-muted-foreground">All food and accommodations meet Islamic standards</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-semibold text-emerald">Safe & Secure</h3>
                <p className="text-muted-foreground">Family-friendly destinations with Islamic values</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-emerald">24/7 Support</h3>
                <p className="text-muted-foreground">Muslim travel experts available around the clock</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Booking;