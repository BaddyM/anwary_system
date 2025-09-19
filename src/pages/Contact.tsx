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
  ExternalLink,
  Undo2,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  useGetContactQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} from "../api/apiSlice";
import ErrorComponent from "@/components/Error";
import Loading from "@/components/Loading";
import { useToast } from "@/components/ui/use-toast";
export interface Contact {
  id?: string;
  name: string;
  contact: string;
  message: string;
  isRead?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const { data, isLoading, isError, isSuccess } = useGetContactQuery({
    page,
    limit,
  });
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [id, setId] = useState<string | null>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<
    (typeof data)[0] | null
  >(null);

  const getStatusColor = (status: boolean) => {
    switch (status) {
      case true:
        return "bg-blue-500 text-white";
      case false:
        return "bg-success text-success-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const readMessage = async (id: string, isRead: boolean, readMessage:boolean) => {
    if (isRead == false) {
      const res = await updateContact({
        id:id,
        data: {
          isRead: readMessage,
        },
      });
      if (res.error) {
        toast({
          title: "Error",
          description: "Sorry, failed to read message!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Message updated successfully!",
        });
      }
    }
  };

  if (isError) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    const contacts: Contact[] = data.data;
    const totalMessages = contacts.length;
    const newMessages = contacts.filter((c) => c.isRead === true).length;
    const filteredContacts = contacts.filter((contact) => {
      const matchesSearch =
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.contact.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === "all";
      return matchesSearch && matchesFilter;
    });
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Contact Messages
            </h1>
            <p className="text-muted-foreground">
              Manage customer inquiries and communications
            </p>
          </div>
          <div className="flex gap-2 hidden">
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Contact Form Settings
            </Button>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              size="sm"
            >
              <Mail className="h-4 w-4 mr-2" />
              Compose
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Messages
                  </p>
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
                  <p className="text-sm font-medium text-muted-foreground">
                    New Messages
                  </p>
                  <p className="text-2xl font-bold text-blue-500">
                    {newMessages}
                  </p>
                </div>
                <Badge className="bg-blue-500 text-white px-2 py-1">●</Badge>
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
                  <div className="flex gap-2 hidden">
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
                      variant={
                        filterStatus === "in_progress" ? "default" : "outline"
                      }
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
                    selectedMessage?.id === contact.id
                      ? "ring-2 ring-accent"
                      : ""
                  }`}
                  onClick={() => {
                    setId(contact.id);
                    setSelectedMessage(contact);
                    readMessage(contact.id, contact.isRead, true);
                  }}
                >
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-foreground">
                            {contact.name}
                          </h3>
                          <Badge
                            className={getStatusColor(contact.isRead)}
                            variant="secondary"
                          >
                            {contact.isRead == true ? "Read" : "Unread"}
                          </Badge>
                        </div>

                        {/* <p className="text-sm font-medium text-foreground mb-1">
                          {contact.subject}
                        </p> */}
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {contact.message}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>
                            {new Date(contact.createdAt).toDateString()} at{" "}
                            {new Date(contact.createdAt).toLocaleTimeString()}
                          </span>
                          <span>•</span>
                          <span className="capitalize">{"Webiste"}</span>
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
                      <p className="text-xs text-muted-foreground">
                        {selectedMessage.email}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {selectedMessage.phone}
                      </p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">Contact or Email</Label>
                      <p className="text-sm">{selectedMessage.contact}</p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">Message</Label>
                      <p className="text-sm leading-relaxed bg-secondary/30 p-3 rounded">
                        {selectedMessage.message}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground hidden"
                      >
                        <Reply className="h-3 w-3 mr-1" />
                        Reply
                      </Button>
                      <Button
                        onClick={() => {
                          readMessage(id, false, false);
                        }}
                        variant="outline"
                        size="sm"
                      >
                        <Undo2 className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive"
                        onClick={() => {
                          if (id != null) {
                            deleteContact(id).then((res: any) => {
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
                            });
                          }
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hidden">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Reply</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Textarea placeholder="Type your reply..." rows={4} />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        Send Reply
                      </Button>
                      <Button variant="outline" size="sm">
                        Save Draft
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Select a message to view details
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function Label({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <label className={className}>{children}</label>;
}
