import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Plus, 
  Search, 
  Filter,
  Edit3, 
  Trash2,
  Eye,
  Star,
  Calendar,
  DollarSign
} from "lucide-react";
import { useState } from "react";

const destinationsData = [
  {
    id: 1,
    name: "Bali Adventure Package",
    location: "Bali, Indonesia",
    price: "$1,299",
    duration: "7 days",
    rating: 4.8,
    reviews: 124,
    status: "active",
    image: "/placeholder.svg",
    description: "Experience the magic of Bali with our comprehensive adventure package",
    lastUpdated: "2024-09-10",
    bookings: 45
  },
  {
    id: 2,
    name: "Tokyo City Explorer",
    location: "Tokyo, Japan",
    price: "$1,899",
    duration: "5 days",
    rating: 4.9,
    reviews: 89,
    status: "active",
    image: "/placeholder.svg",
    description: "Discover the vibrant culture and modern wonders of Tokyo",
    lastUpdated: "2024-09-12",
    bookings: 32
  },
  {
    id: 3,
    name: "Paris Romance Tour",
    location: "Paris, France",
    price: "$1,599",
    duration: "6 days",
    rating: 4.7,
    reviews: 156,
    status: "draft",
    image: "/placeholder.svg",
    description: "A romantic journey through the City of Light",
    lastUpdated: "2024-09-05",
    bookings: 28
  },
  {
    id: 4,
    name: "African Safari",
    location: "Kenya",
    price: "$2,499",
    duration: "10 days",
    rating: 5.0,
    reviews: 67,
    status: "active",
    image: "/placeholder.svg",
    description: "Wildlife adventure in the heart of Africa",
    lastUpdated: "2024-09-08",
    bookings: 18
  }
];

export default function Destinations() {
  const [destinations, setDestinations] = useState(destinationsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || dest.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "draft": return "bg-secondary text-secondary-foreground";
      case "archived": return "bg-muted text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Destinations</h1>
          <p className="text-muted-foreground">Manage your travel destinations and packages</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Add New Destination
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={filterStatus === "all" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("all")}
              >
                All
              </Button>
              <Button 
                variant={filterStatus === "active" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("active")}
              >
                Active
              </Button>
              <Button 
                variant={filterStatus === "draft" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("draft")}
              >
                Draft
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-secondary relative">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-3 right-3 ${getStatusColor(destination.status)}`}>
                {destination.status}
              </Badge>
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg leading-tight">{destination.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    {destination.location}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-accent">{destination.price}</div>
                  <div className="text-xs text-muted-foreground">{destination.duration}</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {destination.description}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span>{destination.rating}</span>
                  <span>({destination.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{destination.bookings} bookings</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit3 className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Destinations</p>
                <p className="text-2xl font-bold">{destinations.length}</p>
              </div>
              <MapPin className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold text-success">
                  {destinations.filter(d => d.status === "active").length}
                </p>
              </div>
              <Eye className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold">
                  {destinations.reduce((sum, d) => sum + d.bookings, 0)}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Rating</p>
                <p className="text-2xl font-bold">
                  {(destinations.reduce((sum, d) => sum + d.rating, 0) / destinations.length).toFixed(1)}
                </p>
              </div>
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}