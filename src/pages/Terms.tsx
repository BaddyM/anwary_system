import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Mail, Phone } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-emerald mr-4" />
              <h1 className="font-serif text-5xl font-bold text-forest">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our travel services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <p className="text-muted-foreground mt-4">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using Anwaary Travel's website and services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, please do 
                  not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Service Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald mb-2">Travel Planning Services</h4>
                  <p className="text-muted-foreground">
                    Anwaary Travel provides luxury travel planning, booking, and concierge services for 
                    destinations worldwide. Our services include but are not limited to accommodation booking, 
                    transportation arrangements, and activity planning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald mb-2">Service Availability</h4>
                  <p className="text-muted-foreground">
                    Services are subject to availability and may vary by destination. We reserve the right 
                    to modify or discontinue services with reasonable notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Booking and Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald mb-2">Booking Process</h4>
                  <p className="text-muted-foreground">
                    All bookings are subject to availability and confirmation. A booking is only confirmed 
                    once you receive written confirmation from Anwaary Travel and required payments have been processed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald mb-2">Payment Schedule</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Deposit: 30% of total cost required at booking</li>
                    <li>• Balance: Due 60 days before departure</li>
                    <li>• Late bookings: Full payment required within 7 days</li>
                    <li>• All payments are non-refundable unless otherwise specified</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald mb-2">Pricing</h4>
                  <p className="text-muted-foreground">
                    All prices are quoted in USD and are subject to change until booking is confirmed. 
                    Prices may vary based on seasonality, availability, and currency fluctuations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Cancellation and Refund Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald mb-2">Cancellation by Client</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• More than 90 days before departure: 25% penalty</li>
                      <li>• 60-90 days before departure: 50% penalty</li>
                      <li>• 30-60 days before departure: 75% penalty</li>
                      <li>• Less than 30 days: 100% penalty (no refund)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald mb-2">Cancellation by Anwaary Travel</h4>
                    <p className="text-muted-foreground">
                      In rare circumstances, we may need to cancel your trip due to insufficient enrollment, 
                      natural disasters, or other unforeseen events. In such cases, we will provide a full refund 
                      or offer alternative arrangements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Travel Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald mb-2">Documentation</h4>
                    <p className="text-muted-foreground">
                      Clients are responsible for ensuring they have valid passports, visas, and all required 
                      travel documentation. We recommend consulting with relevant embassies for visa requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald mb-2">Health and Safety</h4>
                    <p className="text-muted-foreground">
                      Clients should consult healthcare providers regarding vaccinations and health precautions. 
                      We recommend comprehensive travel insurance to cover medical expenses and trip interruptions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Liability and Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-emerald mb-2">Limitation of Liability</h4>
                    <p className="text-muted-foreground">
                      Anwaary Travel acts as an agent for suppliers and is not liable for their acts or omissions. 
                      Our liability is limited to the cost of the services provided and we recommend comprehensive 
                      travel insurance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald mb-2">Force Majeure</h4>
                    <p className="text-muted-foreground">
                      We are not responsible for changes or cancellations due to circumstances beyond our control, 
                      including but not limited to natural disasters, political unrest, strikes, or pandemic restrictions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All content on our website, including text, graphics, logos, and images, is owned by Anwaary Travel 
                  and protected by copyright laws. You may not reproduce, distribute, or create derivative works 
                  without our written permission.
                </p>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms or our services shall be resolved through binding arbitration 
                  in accordance with the laws of New York State. We encourage clients to contact us directly to 
                  resolve any issues before pursuing legal action.
                </p>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald" />
                    <span>legal@anwarytravel.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="gradient-gold text-forest hover:opacity-90 px-8"
              asChild
            >
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;