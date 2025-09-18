import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Key, AlertTriangle } from "lucide-react";

declare global {
  interface Window {
    google: typeof google;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState("");
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [error, setError] = useState("");

  // Anwary Travel office location (example coordinates for NYC)
  const officeLocation = { lat: 40.7589, lng: -73.9851 };

  const initializeMap = async (key: string) => {
    if (!mapRef.current || !key.trim()) return;

    try {
      setError("");
      const loader = new Loader({
        apiKey: key,
        version: "weekly",
        libraries: ["places"]
      });

      await loader.load();

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 15,
        center: officeLocation,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#e9f5e9" }]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#d4f1d4" }]
          }
        ],
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true
      });

      // Add custom marker for office
      const marker = new window.google.maps.Marker({
        position: officeLocation,
        map: mapInstance,
        title: "Anwary Travel Office",
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: "#22c55e",
          fillOpacity: 1,
          strokeColor: "#dcfce7",
          strokeWeight: 3,
        }
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: Arial, sans-serif;">
            <h3 style="color: #166534; margin: 0 0 8px 0; font-size: 16px;">Anwary Travel</h3>
            <p style="margin: 0; color: #666; font-size: 14px;">123 Travel Plaza, Suite 456<br>New York, NY 10001</p>
            <p style="margin: 8px 0 0 0; color: #666; font-size: 14px;">📞 +1 (555) 123-4567</p>
          </div>
        `
      });

      marker.addListener("click", () => {
        infoWindow.open(mapInstance, marker);
      });

      // Open info window by default
      infoWindow.open(mapInstance, marker);

      setMap(mapInstance);
      setIsMapLoaded(true);
      
      // Save API key to localStorage for convenience
      localStorage.setItem("googleMapsApiKey", key);
      
    } catch (err) {
      setError("Failed to load Google Maps. Please check your API key and try again.");
      console.error("Error loading Google Maps:", err);
    }
  };

  useEffect(() => {
    // Check for saved API key
    const savedApiKey = localStorage.getItem("googleMapsApiKey");
    if (savedApiKey) {
      setApiKey(savedApiKey);
      initializeMap(savedApiKey);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      initializeMap(apiKey.trim());
    }
  };

  if (!isMapLoaded) {
    return (
      <Card className="travel-card">
        <CardHeader>
          <CardTitle className="font-serif text-xl text-forest flex items-center">
            <MapPin className="w-6 h-6 mr-3 text-emerald" />
            Find Us on Google Maps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-gold/10 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-gold-dark mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> For secure API key storage, we recommend connecting to Supabase. 
                  For now, you can enter your Google Maps API key below to view the map.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Get your API key at: <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank" rel="noopener noreferrer" className="text-emerald hover:underline">Google Maps Platform</a>
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="apiKey" className="flex items-center">
                  <Key className="w-4 h-4 mr-2 text-emerald" />
                  Google Maps API Key
                </Label>
                <Input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Google Maps API key"
                  className="mt-1"
                />
              </div>
              
              {error && (
                <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                  {error}
                </div>
              )}
              
              <Button 
                type="submit" 
                className="gradient-emerald text-white hover:opacity-90"
                disabled={!apiKey.trim()}
              >
                Load Map
              </Button>
            </form>
            
            {/* Fallback static map info */}
            <div className="mt-6 p-6 bg-sage-light rounded-lg text-center">
              <MapPin className="w-12 h-12 text-emerald mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-forest mb-2">
                Visit Our Office
              </h3>
              <p className="text-muted-foreground">
                123 Travel Plaza, Suite 456<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="travel-card overflow-hidden">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-forest flex items-center">
          <MapPin className="w-6 h-6 mr-3 text-emerald" />
          Find Us on Google Maps
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div 
          ref={mapRef} 
          className="w-full h-96 rounded-b-lg"
          style={{ minHeight: "384px" }}
        />
      </CardContent>
    </Card>
  );
};

export default GoogleMap;