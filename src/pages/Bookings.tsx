import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Search, 
  Filter,
  Eye,
  MessageSquare,
  Download,
  User,
  Phone,
  Mail,
  CreditCard,
  MapPin
} from "lucide-react";
import { useState } from "react";

const bookingsData = [
  {
    id: "BK001",
    customerName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 555-0123",
    destination: "Bali Adventure Package",
    bookingDate: "2024-09-10",
    travelDate: "2024-10-15",
    travelers: 2,
    amount: "$2,598",
    status: "confirmed",
    paymentStatus: "paid",
    notes: "Vegetarian meals requested"
  },
  {
    id: "BK002",
    customerName: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 555-0456",
    destination: "Tokyo City Explorer",
    bookingDate: "2024-09-12",
    travelDate: "2024-11-20",
    travelers: 1,
    amount: "$1,899",
    status: "pending",
    paymentStatus: "pending",
    notes: "First-time traveler to Japan"
  },
  {
    id: "BK003",
    customerName: "Emma & David Wilson",
    email: "emma.wilson@email.com",
    phone: "+1 555-0789",
    destination: "Paris Romance Tour",
    bookingDate: "2024-09-08",
    travelDate: "2024-12-05",
    travelers: 2,
    amount: "$3,198",
    status: "confirmed",
    paymentStatus: "paid",
    notes: "Anniversary celebration"
  },
  {
    id: "BK004",
    customerName: "James Rodriguez",
    email: "james.rodriguez@email.com",
    phone: "+1 555-0321",
    destination: "African Safari",
    bookingDate: "2024-09-15",
    travelDate: "2024-10-30",
    travelers: 4,
    amount: "$9,996",
    status: "confirmed",
    paymentStatus: "partially_paid",
    notes: "Family trip with teenagers"
  },
  {
    id: "BK005",
    customerName: "Lisa Thompson",
    email: "lisa.thompson@email.com",
    phone: "+1 555-0654",
    destination: "Bali Adventure Package",
    bookingDate: "2024-09-14",
    travelDate: "2024-11-10",
    travelers: 1,
    amount: "$1,299",
    status: "cancelled",
    paymentStatus: "refunded",
    notes: "Cancelled due to personal reasons"
  }
];

export default function Bookings() {
  const [bookings, setBookings] = useState(bookingsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-success text-success-foreground";
      case "pending": return "bg-yellow-500 text-white";
      case "cancelled": return "bg-destructive text-destructive-foreground";
      case "completed": return "bg-primary text-primary-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-success text-success-foreground";
      case "pending": return "bg-yellow-500 text-white";
      case "partially_paid": return "bg-blue-500 text-white";
      case "refunded": return "bg-gray-500 text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(b => b.status === "confirmed").length;
  const pendingBookings = bookings.filter(b => b.status === "pending").length;
  const totalRevenue = bookings
    .filter(b => b.paymentStatus === "paid" || b.paymentStatus === "partially_paid")
    .reduce((sum, b) => sum + parseFloat(b.amount.replace("$", "").replace(",", "")), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
          <p className="text-muted-foreground">Manage customer bookings and reservations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            New Booking
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold">{totalBookings}</p>
              </div>
              <Calendar className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Confirmed</p>
                <p className="text-2xl font-bold text-success">{confirmedBookings}</p>
              </div>
              <Badge className="bg-success text-success-foreground px-2 py-1">✓</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingBookings}</p>
              </div>
              <Badge className="bg-yellow-500 text-white px-2 py-1">⏳</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold text-accent">${totalRevenue.toLocaleString()}</p>
              </div>
              <CreditCard className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search bookings by customer, destination, or ID..."
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
                variant={filterStatus === "confirmed" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("confirmed")}
              >
                Confirmed
              </Button>
              <Button 
                variant={filterStatus === "pending" ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilterStatus("pending")}
              >
                Pending
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Date Range
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Booking Info */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{booking.customerName}</h3>
                    <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                    <Badge className={getPaymentStatusColor(booking.paymentStatus)} variant="outline">
                      {booking.paymentStatus.replace("_", " ")}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {booking.destination}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {booking.travelDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {booking.travelers} traveler{booking.travelers > 1 ? "s" : ""}
                    </div>
                    <div className="flex items-center gap-1">
                      <CreditCard className="h-3 w-3" />
                      {booking.amount}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      {booking.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {booking.phone}
                    </div>
                  </div>

                  {booking.notes && (
                    <p className="text-sm text-muted-foreground bg-secondary/30 p-2 rounded">
                      <strong>Notes:</strong> {booking.notes}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-row lg:flex-col gap-2">
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}