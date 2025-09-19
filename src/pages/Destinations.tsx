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
  MapPin,
  Plus,
  Search,
  Filter,
  Edit3,
  Trash2,
  Eye,
  Star,
  Calendar,
  DollarSign,
  MapPinned,
  Save,
  Play,
  StopCircle,
} from "lucide-react";
import { useState } from "react";
import {
  useGetDestinationQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
  baseUrl,
} from "@/api/apiSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";

export interface Destination {
  id?: string;
  title: string;
  description: string;
  image: any;
  price: number;
  rating: number;
  location: string;
  isActive: boolean;
  checkInDate: string;
  checkOutDate: string;
  persons: number;
  Booking: any[];
  createdAt: string;
  updatedAt: string;
}

export default function Destinations() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Destination>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [updateDestination] = useUpdateDestinationMutation();
  const [deleteDestination] = useDeleteDestinationMutation();
  const { data, isLoading, isError, isSuccess } = useGetDestinationQuery({
    page,
    limit,
  });
  const [addDestination] = useAddDestinationMutation();

  function getDaysBetween(date1, date2) {
    // Convert to Date objects (in case strings are passed)
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Get difference in milliseconds
    const diffMs = Math.abs(d1 - d2);

    // Convert ms → days
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData();
    form.append("title", formData.title);
    form.append("location", formData.location);
    form.append("image", formData.image);
    form.append("description", formData.description);
    form.append("price", String(formData.price));
    form.append("checkInDate", formData.checkInDate);
    form.append("checkOutDate", formData.checkOutDate);
    form.append("persons", String(formData.persons));
    if (
      !formData.title ||
      !formData.location ||
      !formData.description ||
      !formData.image ||
      !formData.price ||
      !formData.checkInDate ||
      !formData.checkOutDate
    ) {
      toast({
        title: "Error",
        description: "Sorry, all fields must be filled!",
        variant: "destructive",
      });
    } else {
      const res = await addDestination(form);
      setDialogOpen(false);
      setLoading(false);
      if (res.error) {
        toast({
          title: "Error",
          description: "Sorry, something went wrong!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Added destination successfully.",
        });
      }
    }
  };

  const getStatusColor = (status: boolean) => {
    switch (status) {
      case true:
        return "bg-success text-success-foreground";
      case false:
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const handleUpdate = async (id: string, data: any) => {
    setLoading(true);
    const res = await updateDestination({
      id,
      data,
    });
    setLoading(false);
    if (res.error) {
      toast({
        title: "Error",
        description: "Sorry, something went wrong!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Updated destination successfully.",
      });
    }
  };

  const handldeDelete = async (id: string) => {
    setLoading(true);
    const res = await deleteDestination(id);
    setLoading(false);
    if (res.error) {
      toast({
        title: "Error",
        description: "Sorry, something went wrong!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Deleted destination successfully.",
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
    const destinations: Destination[] = data.data;
    const filteredDestinations = destinations.filter((dest: Destination) => {
      const matchesSearch =
        dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === "all";
      return matchesSearch && matchesFilter;
    });
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Destinations</h1>
            <p className="text-muted-foreground">
              Manage your travel destinations and packages
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Add New Destination
              </Button>
            </DialogTrigger>
            <DialogContent className="overflow-y-scroll h-full">
              <DialogHeader>
                <DialogTitle>
                  <p className="flex items-center gap-2">
                    <MapPinned /> Add a Destination
                  </p>
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-2">
                  <Label>
                    Destination <i className="text-red-500">*</i>
                  </Label>
                  <Input
                    placeholder="Enter destination"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-2">
                  <Label>
                    Location <i className="text-red-500">*</i>
                  </Label>
                  <Input
                    placeholder="Enter Location"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        location: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-2">
                  <Label>
                    Image(s) <i className="text-red-500">*</i>
                  </Label>
                  <Input
                    type="file"
                    accept="image/*"
                    placeholder="Add Image"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        image: e.target.files[0],
                      })
                    }
                  />
                </div>
                <div className="mb-2">
                  <Label>
                    Description <i className="text-red-500">*</i>
                  </Label>
                  <Textarea
                    placeholder="Add Description"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                  ></Textarea>
                </div>
                <div className="mb-2">
                  <Label>
                    Price <i className="text-red-500">*</i>
                  </Label>
                  <Input
                    type="number"
                    placeholder="Add Price"
                    step={0.01}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="mb-2">
                  <Label>Persons</Label>
                  <Input
                    type="number"
                    placeholder="Add Persons"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        persons: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="mb-2">
                  <Label>
                    Check In Date <i className="text-red-500">*</i>
                  </Label>
                  <Input
                    type="date"
                    placeholder="Add Check In Date"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        checkInDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-2">
                  <Label>
                    Check Out Date <i className="text-red-500">*</i>
                  </Label>
                  <Input
                    type="date"
                    placeholder="Add Check Out Date"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        checkOutDate: e.target.value,
                      })
                    }
                  />
                </div>
                <Button disabled={loading} className="px-10" type="submit">
                  <Save /> Save
                </Button>
              </form>
            </DialogContent>
          </Dialog>
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
              <div className="flex gap-2 hidden">
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
          {filteredDestinations.map(
            (destination: Destination, index: number) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-secondary relative">
                  <img
                    src={`${baseUrl}/${destination.image.split(",")[0]}`}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className={`absolute top-3 right-3 ${getStatusColor(
                      destination.isActive
                    )}`}
                  >
                    {destination.isActive == true ? "Active" : "Inactive"}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg leading-tight">
                        {destination.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {destination.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-accent">
                        {Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(destination.price)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {getDaysBetween(
                          destination.checkOutDate,
                          destination.checkInDate
                        )}
                      </div>
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
                      {/* <span>({destination.reviews})</span> */}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{destination.Booking.length} bookings</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {/* <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button> */}
                    {destination.isActive == true ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:bg-red-500"
                        title="De-activate"
                        disabled={loading}
                        onClick={() =>
                          handleUpdate(destination.id, {
                            isActive: false,
                          })
                        }
                      >
                        <StopCircle className="h-3 w-3" />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-500 hover:bg-green-400"
                        title="Activate"
                        disabled={loading}
                        onClick={() =>
                          handleUpdate(destination.id, {
                            isActive: true,
                          })
                        }
                      >
                        <Play className="h-3 w-3" />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:bg-destructive/70"
                      disabled={loading}
                      onClick={() => handldeDelete(destination.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Destinations
                  </p>
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Active
                  </p>
                  <p className="text-2xl font-bold text-success">
                    {destinations.filter((d) => d.isActive === true).length}
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Bookings
                  </p>
                  <p className="text-2xl font-bold">
                    {destinations.reduce((sum, d) => sum + d.Booking.length, 0)}
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Avg. Rating
                  </p>
                  <p className="text-2xl font-bold">
                    {(
                      destinations.reduce((sum, d) => sum + d.rating, 0) /
                      destinations.length
                    ).toFixed(1)}
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
}
