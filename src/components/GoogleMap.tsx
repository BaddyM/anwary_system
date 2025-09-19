import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const GoogleMap = () => {
  // Anwaary Travel office location - Times Square area, NYC
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98731268459394!3d40.75889097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus";

  return (
    <Card className="travel-card overflow-hidden">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-forest flex items-center">
          <MapPin className="w-6 h-6 mr-3 text-emerald" />
          Find Us on Google Maps
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          <iframe
            src={embedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Anwaary Travel Office Location"
            className="rounded-b-lg"
          />
          {/* Overlay with office info */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
            <h4 className="font-serif text-lg font-semibold text-forest mb-2">Anwaary Travel</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>123 Travel Plaza, Suite 456</p>
              <p>New York, NY 10001</p>
              <p className="text-emerald font-medium">📞 +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleMap;