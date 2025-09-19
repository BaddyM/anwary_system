import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Edit3,
  Save,
  Image as ImageIcon,
  Globe,
  DatabaseZap,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  useGetAboutQuery,
  useAddAboutMutation,
  useDeleteAboutMutation,
  useUpdateAboutMutation,
} from "@/api/apiSlice";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useToast } from "@/components/ui/use-toast";

export interface CompanyDetails {
  id?: string;
  name: string;
  address: string;
  contact: string;
  tagline: string;
  mission: string;
  vision: string;
  yearsOfExperience: number;
  happyCustomers: number;
  destinations: number;
  satifactionRate: number;
  about: string;
  createdAt?: string;
}

export default function About() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<CompanyDetails>();
  const { data, isLoading, isSuccess, isError } = useGetAboutQuery({});
  const [updateData] = useUpdateAboutMutation();

  useEffect(() => {
    console.log(`Data = ${data}`);
    if (data) {
      if (data.data.length > 0) {
        setFormData({
          ...formData,
          id: data.data[0].id,
        });
      }
    }
  }, [isSuccess]);

  const handleSave = async () => {
    setLoading(true);
    const res = await updateData({
      id: formData.id,
      data: formData,
    });
    setIsEditing(false);
    setLoading(false);
    if (res.error) {
      toast({
        title: "Error",
        description: "Sorry, failed to update!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Updated data successfully!",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isError) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    const details = data.data[0];
    if (data.data.length > 0) {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                About Page Management
              </h1>
              <p className="text-muted-foreground">
                Manage your website's about section content
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                disabled={loading}
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                size="sm"
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Content
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                  <CardDescription>
                    Basic company details and branding
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      {isEditing ? (
                        <Input
                          id="companyName"
                          value={details.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <p className="text-lg font-semibold mt-1">
                          {details.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="tagline">Tagline</Label>
                      {isEditing ? (
                        <Input
                          id="tagline"
                          defaultValue={details.tagline}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              tagline: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <p
                          className="text-sm text-muted-foreground mt-1"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {details.tagline}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="about">About</Label>
                    {isEditing ? (
                      <Textarea
                        id="about"
                        defaultValue={details.about}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            about: e.target.value,
                          })
                        }
                      ></Textarea>
                    ) : (
                      <p
                        className="text-sm mt-1 leading-relaxed"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {details.about}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mission & Vision</CardTitle>
                  <CardDescription>
                    Company mission and vision statements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="mission">Mission</Label>
                    {isEditing ? (
                      <Textarea
                        id="mission"
                        defaultValue={details.mission}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            mission: e.target.value,
                          })
                        }
                        rows={3}
                      />
                    ) : (
                      <p className="text-sm mt-1 leading-relaxed">
                        {details.mission}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="vision">Vision</Label>
                    {isEditing ? (
                      <Textarea
                        id="vision"
                        defaultValue={details.vision}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            vision: e.target.value,
                          })
                        }
                        rows={3}
                      />
                    ) : (
                      <p className="text-sm mt-1 leading-relaxed">
                        {details.vision}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="hidden">
                <CardHeader>
                  <CardTitle>Company Values</CardTitle>
                  <CardDescription>Core values and principles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {formData.values.map((value, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {value}
                      </Badge>
                    ))}
                  </div>
                  {isEditing && (
                    <Button variant="outline" size="sm" className="mt-3">
                      <Edit3 className="h-4 w-4 mr-2" />
                      Edit Values
                    </Button>
                  )}
                </CardContent>
              </Card> */}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                  <CardDescription>Key company metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <span className="text-sm font-medium">
                        Years of Experience
                      </span>
                      {isEditing == true ? (
                        <Input
                          placeholder={`Enter Years of Experience`}
                          type="number"
                          defaultValue={details.yearsOfExperience}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              yearsOfExperience: Number(e.target.value),
                            })
                          }
                        />
                      ) : (
                        <span className="text-lg font-bold text-accent">
                          {Intl.NumberFormat("en-US").format(
                            details.yearsOfExperience
                          )}
                          +
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <span className="text-sm font-medium">
                        Happy Customers
                      </span>
                      {isEditing == true ? (
                        <Input
                          placeholder={`Enter Happy Customers`}
                          type="number"
                          defaultValue={details.happyCustomers}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              happyCustomers: Number(e.target.value),
                            })
                          }
                        />
                      ) : (
                        <span className="text-lg font-bold text-accent">
                          {Intl.NumberFormat("en-US").format(
                            details.happyCustomers
                          )}
                          +
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <span className="text-sm font-medium">Destinations</span>
                      {isEditing == true ? (
                        <Input
                          placeholder={`Enter Destinations`}
                          type="number"
                          defaultValue={details.destinations}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              destinations: Number(e.target.value),
                            })
                          }
                        />
                      ) : (
                        <span className="text-lg font-bold text-accent">
                          {Intl.NumberFormat("en-US").format(
                            details.destinations
                          )}
                          +
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                      <span className="text-sm font-medium">
                        Satisfaction Rate
                      </span>
                      {isEditing == true ? (
                        <Input
                          placeholder={`Enter Satifaction Rate`}
                          type="number"
                          defaultValue={details.satifactionRate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              satifactionRate: Number(e.target.value),
                            })
                          }
                        />
                      ) : (
                        <span className="text-lg font-bold text-accent">
                          {Intl.NumberFormat("en-US").format(
                            details.satifactionRate
                          )}
                          +
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hidden">
                <CardHeader>
                  <CardTitle>Media</CardTitle>
                  <CardDescription>Images and visual content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Company Logo
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Team Photos
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Office Images
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Status:</span>
                      <Badge className="bg-success text-success-foreground">
                        Published
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Last Updated:</span>
                      <span className="text-muted-foreground">
                        {new Date(details.updatedAt).toDateString()},{" "}
                        {new Date(details.updatedAt).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center h-full">
          <p className="flex items-center gap-2">
            <DatabaseZap /> No data available
          </p>
        </div>
      );
    }
  }
}
