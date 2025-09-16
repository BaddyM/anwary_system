import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Search, 
  Filter,
  Reply,
  Archive,
  Trash2,
  Star,
  Clock,
  User,
  Phone,
  MessageSquare,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const contactData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 555-0123",
    subject: "Question about Bali package pricing",
    message: "Hi, I'm interested in the Bali Adventure Package for 2 people. Could you provide more details about what's included in the price and any optional add-ons available?",
    date: "2024-09-15",
    time: "14:30",
    status: "new",
    priority: "normal",
    source: "website"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 555-0456",
    subject: "Tokyo tour dietary requirements",
    message: "I have some dietary restrictions (vegetarian + gluten-free). Can you accommodate these requirements during the Tokyo City Explorer tour?",
    date: "2024-09-14",
    time: "09:15",
    status: "replied",
    priority: "normal",
    source: "email"
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "+1 555-0789",
    subject: "Urgent: Travel document requirements",
    message: "We're traveling to Paris next month and need to know about visa requirements for US citizens. This is urgent as we need to apply soon.",
    date: "2024-09-16",
    time: "11:45",
    status: "new",
    priority: "high",
    source: "website"
  },
  {
    id: 4,
    name: "James Rodriguez",
    email: "james.rodriguez@email.com",
    phone: "+1 555-0321",
    subject: "Group booking discount inquiry",
    message: "I'm planning a family trip for 8 people to the African Safari. Do you offer group discounts? Also, what's the minimum age for children?",
    date: "2024-09-13",
    time: "16:20",
    status: "in_progress",
    priority: "normal",
    source: "phone"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@email.com",
    phone: "+1 555-0654",
    subject: "Booking cancellation request",
    message: "I need to cancel my booking (BK005) due to a family emergency. Please let me know the cancellation policy and refund process.",
    date: "2024-09-12",
    time: "13:10",
    status: "resolved",
    priority: "high",
    source: "website"
  }
];

export default function Contact() {
  const [contacts, setContacts] = useState(contactData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<typeof contactData[0] | null>(null);

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || contact.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-500 text-white";
      case "replied": return "bg-success text-success-foreground";
      case "in_progress": return "bg-yellow-500 text-white";
      case "resolved": return "bg-gray-500 text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-500";
      case "normal": return "text-blue-500";
      case "low": return "text-gray-500";
      default: return "text-gray-500";
    }
  };

  const newMessages = contacts.filter(c => c.status === "new").length;
  const inProgress = contacts.filter(c => c.status === "in_progress").length;
  const totalMessages = contacts.length;
  const replyRate = Math.round((contacts.filter(c => c.status === "replied" || c.status === "resolved").length / totalMessages) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Messages</h1>
          <p className="text-muted-foreground">Manage customer inquiries and communications</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Contact Form Settings
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
            <Mail className="h-4 w-4 mr-2" />
            Compose
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Messages</p>
                <p className="text-2xl font-bold">{totalMessages}</p>
              </div>
              <Mail className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Messages</p>
                <p className="text-2xl font-bold text-blue-500">{newMessages}</p>
              </div>
              <Badge className="bg-blue-500 text-white px-2 py-1">●</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                <p className="text-2xl font-bold text-yellow-600">{inProgress}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Reply Rate</p>
                <p className="text-2xl font-bold text-success">{replyRate}%</p>
              </div>
              <Reply className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Filters and Search */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search messages..."
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
                    variant={filterStatus === "new" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFilterStatus("new")}
                  >
                    New
                  </Button>
                  <Button 
                    variant={filterStatus === "in_progress" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFilterStatus("in_progress")}
                  >
                    In Progress
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Messages */}
          <div className="space-y-3">
            {filteredContacts.map((contact) => (
              <Card 
                key={contact.id} 
                className={`cursor-pointer hover:shadow-md transition-shadow ${
                  selectedMessage?.id === contact.id ? 'ring-2 ring-accent' : ''
                }`}
                onClick={() => setSelectedMessage(contact)}
              >
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-foreground">{contact.name}</h3>
                        <Badge className={getStatusColor(contact.status)} variant="secondary">
                          {contact.status.replace("_", " ")}
                        </Badge>
                        {contact.priority === "high" && (
                          <Star className="h-4 w-4 text-red-500 fill-red-500" />
                        )}
                      </div>
                      
                      <p className="text-sm font-medium text-foreground mb-1">{contact.subject}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {contact.message}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{contact.date} at {contact.time}</span>
                        <span>•</span>
                        <span className="capitalize">{contact.source}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Message Detail / Reply Panel */}
        <div className="space-y-4">
          {selectedMessage ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Message Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">From</Label>
                    <p className="text-sm">{selectedMessage.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedMessage.email}</p>
                    <p className="text-xs text-muted-foreground">{selectedMessage.phone}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Subject</Label>
                    <p className="text-sm">{selectedMessage.subject}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Message</Label>
                    <p className="text-sm leading-relaxed bg-secondary/30 p-3 rounded">
                      {selectedMessage.message}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Reply className="h-3 w-3 mr-1" />
                      Reply
                    </Button>
                    <Button variant="outline" size="sm">
                      <Archive className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Reply</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Textarea placeholder="Type your reply..." rows={4} />
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">Send Reply</Button>
                    <Button variant="outline" size="sm">Save Draft</Button>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Select a message to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>;
}