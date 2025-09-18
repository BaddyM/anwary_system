import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Mail, Phone } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-emerald mr-4" />
              <h1 className="font-serif text-5xl font-bold text-forest">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-muted-foreground mt-4">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald mb-2">Personal Information</h4>
                  <p className="text-muted-foreground">
                    We collect information you provide directly, such as your name, email address, phone number, 
                    and travel preferences when you book our services or contact us.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald mb-2">Travel Information</h4>
                  <p className="text-muted-foreground">
                    Details about your travel plans, preferences, dietary requirements, and special requests 
                    to provide personalized travel experiences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald mb-2">Technical Information</h4>
                  <p className="text-muted-foreground">
                    We automatically collect certain information about your device and how you interact with our website, 
                    including IP address, browser type, and usage patterns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide and improve our travel services and customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Process bookings, payments, and communicate about your trips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Send you travel updates, promotional offers, and newsletters (with your consent)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Comply with legal obligations and protect against fraud</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Analyze website usage to enhance user experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• With your explicit consent</li>
                  <li>• To trusted service providers who assist in operating our website and conducting business</li>
                  <li>• When required by law or to protect our rights</li>
                  <li>• In connection with a business transfer or sale</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure servers and regular security audits</li>
                  <li>• Access controls and employee training</li>
                  <li>• Regular data backups and recovery procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access your personal information we hold</li>
                  <li>• Request correction of inaccurate data</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Object to or restrict processing of your data</li>
                  <li>• Data portability and withdrawal of consent</li>
                  <li>• Lodge a complaint with supervisory authorities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze website traffic, and personalize content. You can control cookie preferences 
                  through your browser settings.
                </p>
              </CardContent>
            </Card>

            <Card className="travel-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-forest">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  If you have questions about this Privacy Policy or your personal information, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald" />
                    <span>privacy@anwarytravel.com</span>
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

export default Privacy;