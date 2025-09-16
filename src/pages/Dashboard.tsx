import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MapPin, 
  Calendar, 
  Mail,
  TrendingUp,
  Eye,
  MessageSquare
} from "lucide-react";

const stats = [
  {
    title: "Total Destinations",
    value: "24",
    change: "+2 this week",
    icon: MapPin,
    trend: "up"
  },
  {
    title: "Active Bookings",
    value: "142",
    change: "+12 this week",
    icon: Calendar,
    trend: "up"
  },
  {
    title: "Website Views",
    value: "3,247",
    change: "+18% this month",
    icon: Eye,
    trend: "up"
  },
  {
    title: "New Messages",
    value: "8",
    change: "3 unread",
    icon: MessageSquare,
    trend: "neutral"
  }
];

const recentActivity = [
  {
    id: 1,
    type: "booking",
    message: "New booking for Bali Adventure Package",
    time: "2 hours ago",
    status: "new"
  },
  {
    id: 2,
    type: "contact",
    message: "Contact form submission from Sarah Johnson",
    time: "4 hours ago",
    status: "pending"
  },
  {
    id: 3,
    type: "destination",
    message: "Updated Tokyo destination photos",
    time: "1 day ago",
    status: "completed"
  },
  {
    id: 4,
    type: "booking",
    message: "Booking confirmed for Paris City Tour",
    time: "2 days ago",
    status: "completed"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your website management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-success" />
                <p className="text-xs text-success">
                  {stat.change}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <Badge variant={activity.status === "new" ? "default" : activity.status === "pending" ? "secondary" : "outline"}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
              <MapPin className="h-4 w-4 mr-2" />
              Add New Destination
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              View All Bookings
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Check Messages
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Users className="h-4 w-4 mr-2" />
              Update About Page
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}