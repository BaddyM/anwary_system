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
  GalleryVerticalEndIcon,
} from "lucide-react";
import { useState } from "react";
import {
  useGetGalleryQuery,
  useAddGalleryMutation,
  useUpdateGalleryMutation,
  useDeleteGalleryMutation,
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

export interface Gallery {
  id?: string;
  name: string;
  location: string;
  image: any;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function Gallery() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Gallery>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [updateGallery] = useUpdateGalleryMutation();
  const [deleteGallery] = useDeleteGalleryMutation();
  const { data, isLoading, isError, isSuccess } = useGetGalleryQuery({
    page,
    limit,
  });
  const [addGallery] = useAddGalleryMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData();
    form.append("name", formData.name);
    form.append("location", formData.location);
    form.append("image", formData.image);
    if (!formData.name || !formData.location || !formData.image) {
      toast({
        title: "Error",
        description: "Sorry, all fields must be filled!",
        variant: "destructive",
      });
    } else {
      const res = await addGallery(form);
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
          description: "Added gallery successfully.",
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
    const res = await updateGallery({
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
        description: "Updated gallery successfully.",
      });
    }
  };

  const handldeDelete = async (id: string) => {
    setLoading(true);
    const res = await deleteGallery(id);
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
        description: "Deleted gallery successfully.",
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
    const galleries: Gallery[] = data.data;
    const filteredGallery = galleries.filter((dest: Gallery) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === "all";
      return matchesSearch && matchesFilter;
    });
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gallery</h1>
            <p className="text-muted-foreground">
              Manage your travel galleries and packages
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Add New Gallery
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <p className="flex items-center gap-2">
                    <GalleryVerticalEndIcon /> Add to Gallery
                  </p>
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-2">
                  <Label>
                    Title <i className="text-red-500">*</i>
                  </Label>
                  <Input
                    placeholder="Enter title"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
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
                  placeholder="Search galleries..."
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((gallery: Gallery, index: number) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-secondary relative">
                <img
                  src={`${baseUrl}/${gallery.image.split(",")[0]}`}
                  alt={gallery.name}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className={`absolute top-3 right-3 ${getStatusColor(
                    gallery.isActive
                  )}`}
                >
                  {gallery.isActive == true ? "Active" : "Inactive"}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg leading-tight">
                      {gallery.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {gallery.location}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex gap-2">
                  {gallery.isActive == true ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 hover:bg-red-500"
                      title="De-activate"
                      disabled={loading}
                      onClick={() =>
                        handleUpdate(gallery.id, {
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
                        handleUpdate(gallery.id, {
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
                    onClick={() => handldeDelete(gallery.id)}
                  >
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
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Gallery
                  </p>
                  <p className="text-2xl font-bold">{galleries.length}</p>
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
                    {galleries.filter((d) => d.isActive === true).length}
                  </p>
                </div>
                <Eye className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
