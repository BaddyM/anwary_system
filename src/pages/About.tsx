import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Edit3, Save, Image as ImageIcon, Globe } from "lucide-react";
import { useState } from "react";

const aboutData = {
  companyName: "TravelExplore",
  tagline: "Discover the World with Us",
  description: "We are a passionate team of travel enthusiasts dedicated to creating unforgettable experiences for our customers. With over 10 years of experience in the travel industry, we specialize in crafting personalized journeys that connect you with the beauty and culture of destinations worldwide.",
  mission: "To inspire and enable people to explore the world while creating lasting memories and meaningful connections.",
  vision: "To be the leading travel company that transforms how people experience and connect with the world.",
  values: [
    "Customer-centric service",
    "Sustainable tourism",
    "Cultural respect",
    "Adventure and discovery",
    "Safety and reliability"
  ],
  stats: [
    { label: "Years of Experience", value: "10+" },
    { label: "Happy Customers", value: "5,000+" },
    { label: "Destinations", value: "50+" },
    { label: "Expert Guides", value: "200+" }
  ],
  lastUpdated: "September 15, 2024"
};

export default function About() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(aboutData);

  const handleSave = () => {
    // In a real app, this would save to backend
    setIsEditing(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">About Page Management</h1>
          <p className="text-muted-foreground">Manage your website's about section content</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Globe className="h-4 w-4 mr-2" />
            Preview Live
          </Button>
          <Button 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
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
              <CardDescription>Basic company details and branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  {isEditing ? (
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                    />
                  ) : (
                    <p className="text-lg font-semibold mt-1">{formData.companyName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="tagline">Tagline</Label>
                  {isEditing ? (
                    <Input
                      id="tagline"
                      value={formData.tagline}
                      onChange={(e) => handleChange('tagline', e.target.value)}
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground mt-1">{formData.tagline}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                {isEditing ? (
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    rows={4}
                  />
                ) : (
                  <p className="text-sm mt-1 leading-relaxed">{formData.description}</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission & Vision</CardTitle>
              <CardDescription>Company mission and vision statements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="mission">Mission</Label>
                {isEditing ? (
                  <Textarea
                    id="mission"
                    value={formData.mission}
                    onChange={(e) => handleChange('mission', e.target.value)}
                    rows={3}
                  />
                ) : (
                  <p className="text-sm mt-1 leading-relaxed">{formData.mission}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="vision">Vision</Label>
                {isEditing ? (
                  <Textarea
                    id="vision"
                    value={formData.vision}
                    onChange={(e) => handleChange('vision', e.target.value)}
                    rows={3}
                  />
                ) : (
                  <p className="text-sm mt-1 leading-relaxed">{formData.vision}</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Company Values</CardTitle>
              <CardDescription>Core values and principles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {formData.values.map((value, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
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
          </Card>
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
                {formData.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                    <span className="text-sm font-medium">{stat.label}</span>
                    <span className="text-lg font-bold text-accent">{stat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media</CardTitle>
              <CardDescription>Images and visual content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Company Logo
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Team Photos
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
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
                  <Badge className="bg-success text-success-foreground">Published</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Updated:</span>
                  <span className="text-muted-foreground">{formData.lastUpdated}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}