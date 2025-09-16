import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Save, 
  Globe, 
  Bell,
  Shield,
  Database,
  Palette,
  Mail,
  Key,
  Download,
  Upload,
  User,
  Camera
} from "lucide-react";
import { useState } from "react";

const settingsData = {
  general: {
    siteName: "TravelExplore",
    siteDescription: "Discover the World with Us - Your Premier Travel Partner",
    contactEmail: "info@travelexplore.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "123 Travel Street, Adventure City, AC 12345",
    timezone: "America/New_York",
    language: "English (US)",
    currency: "USD"
  },
  notifications: {
    emailNotifications: true,
    smsNotifications: false,
    newBookingAlerts: true,
    contactFormAlerts: true,
    maintenanceAlerts: true,
    marketingEmails: false,
    weeklyReports: true,
    monthlyReports: true
  },
  security: {
    twoFactorAuth: true,
    sessionTimeout: "30 minutes",
    passwordExpiry: "90 days",
    loginAttempts: "5 attempts",
    lastPasswordChange: "August 15, 2024",
    apiKeyCreated: "September 1, 2024"
  },
  appearance: {
    primaryColor: "#228B22",
    accentColor: "#000000",
    backgroundColor: "#FFFFFF",
    fontFamily: "Inter",
    logoUrl: "/logo.png",
    faviconUrl: "/favicon.ico"
  },
  integrations: {
    googleAnalytics: "GA-XXXXXXXX-X",
    facebookPixel: "XXXXXXXXXXXXXXX",
    stripePublicKey: "pk_test_xxxxxxxxxxxxxxx",
    emailProvider: "SendGrid",
    smsProvider: "Twilio",
    mapProvider: "Google Maps"
  },
  backup: {
    lastBackup: "September 15, 2024 at 2:30 AM",
    autoBackup: true,
    backupFrequency: "Daily",
    retentionPeriod: "30 days"
  }
};

export default function Settings() {
  const [settings, setSettings] = useState(settingsData);
  const [activeTab, setActiveTab] = useState("general");

  const handleSave = () => {
    // In a real app, this would save to backend
    console.log("Settings saved:", settings);
  };

  const handleToggle = (section: keyof typeof settings, key: string) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: !(prev[section] as any)[key]
      }
    }));
  };

  const tabs = [
    { id: "general", label: "General", icon: Globe },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: Key },
    { id: "backup", label: "Backup", icon: Database }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your dashboard and website configuration</p>
        </div>
        <Button onClick={handleSave} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="h-4 w-4 mr-2" />
                {tab.label}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === "general" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Website Information</CardTitle>
                  <CardDescription>Basic information about your travel website</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="siteName">Site Name</Label>
                      <Input id="siteName" value={settings.general.siteName} />
                    </div>
                    <div>
                      <Label htmlFor="contactEmail">Contact Email</Label>
                      <Input id="contactEmail" type="email" value={settings.general.contactEmail} />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Textarea id="siteDescription" value={settings.general.siteDescription} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input id="phoneNumber" value={settings.general.phoneNumber} />
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Input id="timezone" value={settings.general.timezone} />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Business Address</Label>
                    <Textarea id="address" value={settings.general.address} rows={2} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Localization</CardTitle>
                  <CardDescription>Language and currency settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="language">Default Language</Label>
                      <Input id="language" value={settings.general.language} />
                    </div>
                    <div>
                      <Label htmlFor="currency">Default Currency</Label>
                      <Input id="currency" value={settings.general.currency} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">General Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch 
                        checked={settings.notifications.emailNotifications}
                        onCheckedChange={() => handleToggle("notifications", "emailNotifications")}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>SMS Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive urgent notifications via SMS</p>
                      </div>
                      <Switch 
                        checked={settings.notifications.smsNotifications}
                        onCheckedChange={() => handleToggle("notifications", "smsNotifications")}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Business Alerts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>New Booking Alerts</Label>
                        <p className="text-sm text-muted-foreground">Get notified when new bookings are made</p>
                      </div>
                      <Switch 
                        checked={settings.notifications.newBookingAlerts}
                        onCheckedChange={() => handleToggle("notifications", "newBookingAlerts")}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Contact Form Alerts</Label>
                        <p className="text-sm text-muted-foreground">Get notified about new contact messages</p>
                      </div>
                      <Switch 
                        checked={settings.notifications.contactFormAlerts}
                        onCheckedChange={() => handleToggle("notifications", "contactFormAlerts")}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Reports</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">Receive weekly business summaries</p>
                      </div>
                      <Switch 
                        checked={settings.notifications.weeklyReports}
                        onCheckedChange={() => handleToggle("notifications", "weeklyReports")}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Monthly Reports</Label>
                        <p className="text-sm text-muted-foreground">Receive monthly analytics reports</p>
                      </div>
                      <Switch 
                        checked={settings.notifications.monthlyReports}
                        onCheckedChange={() => handleToggle("notifications", "monthlyReports")}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "security" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Security</CardTitle>
                  <CardDescription>Manage your account security settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Badge className="bg-success text-success-foreground">Enabled</Badge>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Session Timeout</Label>
                      <Input value={settings.security.sessionTimeout} readOnly />
                    </div>
                    <div>
                      <Label>Password Expiry</Label>
                      <Input value={settings.security.passwordExpiry} readOnly />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Max Login Attempts</Label>
                      <Input value={settings.security.loginAttempts} readOnly />
                    </div>
                    <div>
                      <Label>Last Password Change</Label>
                      <Input value={settings.security.lastPasswordChange} readOnly />
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Key className="h-4 w-4 mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Setup 2FA
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Access</CardTitle>
                  <CardDescription>Manage API keys and access tokens</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary/30 rounded">
                    <div>
                      <p className="font-medium">Dashboard API Key</p>
                      <p className="text-sm text-muted-foreground">Created: {settings.security.apiKeyCreated}</p>
                    </div>
                    <Button variant="outline" size="sm">Regenerate</Button>
                  </div>
                  
                  <Button variant="outline">
                    <Key className="h-4 w-4 mr-2" />
                    Create New API Key
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "appearance" && (
            <Card>
              <CardHeader>
                <CardTitle>Website Appearance</CardTitle>
                <CardDescription>Customize your website's look and feel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Brand Colors</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="primaryColor">Primary Color</Label>
                      <div className="flex gap-2">
                        <div 
                          className="w-10 h-10 rounded border"
                          style={{ backgroundColor: settings.appearance.primaryColor }}
                        ></div>
                        <Input id="primaryColor" value={settings.appearance.primaryColor} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="accentColor">Accent Color</Label>
                      <div className="flex gap-2">
                        <div 
                          className="w-10 h-10 rounded border"
                          style={{ backgroundColor: settings.appearance.accentColor }}
                        ></div>
                        <Input id="accentColor" value={settings.appearance.accentColor} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="backgroundColor">Background Color</Label>
                      <div className="flex gap-2">
                        <div 
                          className="w-10 h-10 rounded border"
                          style={{ backgroundColor: settings.appearance.backgroundColor }}
                        ></div>
                        <Input id="backgroundColor" value={settings.appearance.backgroundColor} />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Typography</h4>
                  <div>
                    <Label htmlFor="fontFamily">Font Family</Label>
                    <Input id="fontFamily" value={settings.appearance.fontFamily} />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Brand Assets</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Website Logo</Label>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-2" />
                          Upload Logo
                        </Button>
                        <span className="text-sm text-muted-foreground self-center">{settings.appearance.logoUrl}</span>
                      </div>
                    </div>
                    <div>
                      <Label>Favicon</Label>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-2" />
                          Upload Favicon
                        </Button>
                        <span className="text-sm text-muted-foreground self-center">{settings.appearance.faviconUrl}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "integrations" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics & Tracking</CardTitle>
                  <CardDescription>Connect analytics and tracking services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                    <Input id="googleAnalytics" value={settings.integrations.googleAnalytics} placeholder="GA-XXXXXXXX-X" />
                  </div>
                  <div>
                    <Label htmlFor="facebookPixel">Facebook Pixel ID</Label>
                    <Input id="facebookPixel" value={settings.integrations.facebookPixel} placeholder="XXXXXXXXXXXXXXX" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Processing</CardTitle>
                  <CardDescription>Configure payment gateways</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="stripeKey">Stripe Public Key</Label>
                    <Input id="stripeKey" value={settings.integrations.stripePublicKey} placeholder="pk_test_xxxxxxxxxxxxxxx" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Communication Services</CardTitle>
                  <CardDescription>Email and SMS service providers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emailProvider">Email Provider</Label>
                      <Input id="emailProvider" value={settings.integrations.emailProvider} />
                    </div>
                    <div>
                      <Label htmlFor="smsProvider">SMS Provider</Label>
                      <Input id="smsProvider" value={settings.integrations.smsProvider} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="mapProvider">Map Provider</Label>
                    <Input id="mapProvider" value={settings.integrations.mapProvider} />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "backup" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Backup Configuration</CardTitle>
                  <CardDescription>Manage your data backup settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">Automatically backup your data</p>
                    </div>
                    <Switch 
                      checked={settings.backup.autoBackup}
                      onCheckedChange={() => handleToggle("backup", "autoBackup")}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Backup Frequency</Label>
                      <Input value={settings.backup.backupFrequency} readOnly />
                    </div>
                    <div>
                      <Label>Retention Period</Label>
                      <Input value={settings.backup.retentionPeriod} readOnly />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Last Backup</Label>
                    <p className="text-sm text-muted-foreground mt-1">{settings.backup.lastBackup}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Backup
                    </Button>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Restore Backup
                    </Button>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Database className="h-4 w-4 mr-2" />
                      Create Backup Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Export</CardTitle>
                  <CardDescription>Export your data in various formats</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export All Destinations (CSV)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export Bookings (PDF)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Export Contact Messages (JSON)
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}