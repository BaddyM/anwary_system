import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  MapPin,
  CheckCircle2,
  StopCircle,
} from "lucide-react";
import { useState } from "react";
import {
  useGetBookingQuery,
  useAddBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} from "@/api/apiSlice";
import { useToast } from "@/components/ui/use-toast";
import Loading from "@/components/Loading";
import ErrorComponent from "@/components/Error";
import { Destination } from "./Destinations";

export interface Booking {
  id?: string;
  fname: string;
  lname: string;
  contact: string;
  email: string;
  memo?: string;
  destination: Destination;
  isConfirmed?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export default function Bookings() {
  const { toast } = useToast();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const { data, isSuccess, isLoading, isError } = useGetBookingQuery({
    page,
    limit,
  });
  const [updateBooking] = useUpdateBookingMutation();
  const [deleteBooking] = useDeleteBookingMutation();

  const getStatusColor = (status: boolean) => {
    switch (status) {
      case true:
        return "bg-success text-success-foreground";
      case false:
        return "bg-yellow-500 text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const handleUpdate = async (id: string, data: any) => {
    const res = await updateBooking({ id, data });
    if (res.error) {
      toast({
        title: "Error",
        description: "Sorry, failed to update booking!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Updated booking successfully!",
      });
    }
  };

  const handleDelete = async (id: string) => {
    const res = await deleteBooking(id);
    if (res.error) {
      toast({
        title: "Error",
        description: "Sorry, failed to delete booking!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Deleted booking successfully!",
      });
    }
  };

  if (isError) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    const bookings = data.data;
    const filteredBookings: Booking[] = bookings.filter((booking: Booking) => {
      const matchesSearch =
        booking.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === "all";
      return matchesSearch && matchesFilter;
    });
    const totalBookings = bookings.length;
    const confirmedBookings = bookings.filter(
      (b: Booking) => b.isConfirmed === true
    ).length;
    const pendingBookings = bookings.filter(
      (b: Booking) => b.isConfirmed === false
    ).length;
    const totalRevenue = bookings
      .filter((b: Booking) => b.isConfirmed == true)
      .reduce((sum, b: Booking) => sum + b.destination.price, 0);
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
            <p className="text-muted-foreground">
              Manage customer bookings and reservations
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              size="sm"
            >
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Bookings
                  </p>
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Confirmed
                  </p>
                  <p className="text-2xl font-bold text-success">
                    {confirmedBookings}
                  </p>
                </div>
                <Badge className="bg-success text-success-foreground px-2 py-1">
                  ✓
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Pending
                  </p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {pendingBookings}
                  </p>
                </div>
                <Badge className="bg-yellow-500 text-white px-2 py-1">⏳</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Revenue
                  </p>
                  <p className="text-2xl font-bold text-accent">
                    ${totalRevenue.toLocaleString()}
                  </p>
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
              <div className="flex gap-2 hidden">
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
            <Card
              key={booking.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* Booking Info */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">
                        {booking.lname} {booking.fname}
                      </h3>
                      <Badge className={getStatusColor(booking.isConfirmed)}>
                        {booking.isConfirmed == true ? "Paid" : "Pending"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {booking.destination.title}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(booking.createdAt).toDateString()} at{" "}
                        {new Date(booking.createdAt).toLocaleTimeString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {booking.destination.persons} traveler
                        {booking.destination.persons > 1 ? "s" : ""}
                      </div>
                      <div className="flex items-center gap-1">
                        <CreditCard className="h-3 w-3" />
                        {Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(booking.destination.price)}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {booking.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {booking.contact}
                      </div>
                    </div>

                    {booking.memo && (
                      <p className="text-sm text-muted-foreground bg-secondary/30 p-2 rounded">
                        <strong>Notes:</strong> {booking.memo}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-row lg:flex-col gap-2">
                    {booking.isConfirmed == true ? (
                      <Button
                        size="sm"
                        className="bg-red-500 hover:bg-red-400"
                        onClick={() =>
                          handleUpdate(booking.id, {
                            isConfirmed: false,
                          })
                        }
                      >
                        <StopCircle className="w-5 h-5" />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-400"
                        onClick={() =>
                          handleUpdate(booking.id, {
                            isConfirmed: true,
                          })
                        }
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
