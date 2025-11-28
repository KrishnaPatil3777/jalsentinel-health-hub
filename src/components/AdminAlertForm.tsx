import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, AlertTriangle } from "lucide-react";

const AdminAlertForm = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"water_quality" | "outbreak" | "alert" | "info">("alert");
  const [severity, setSeverity] = useState<"low" | "medium" | "high" | "critical">("medium");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-alert", {
        body: {
          type,
          severity,
          title,
          message,
          sendToAll: true,
        },
      });

      if (error) throw error;

      toast({
        title: "Alert Sent!",
        description: `Successfully sent notifications to all users`,
      });

      // Reset form
      setTitle("");
      setMessage("");
      setType("alert");
      setSeverity("medium");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send alert",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-primary" />
          Send Alert to Users
        </CardTitle>
        <CardDescription>
          Create and send automated alerts for water quality issues or potential outbreaks
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Alert Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Water Quality Alert"
              required
              className="transition-all hover:border-primary focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Alert Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Provide detailed information about the alert..."
              required
              rows={4}
              className="transition-all hover:border-primary focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Alert Type</Label>
              <Select value={type} onValueChange={(value: any) => setType(value)}>
                <SelectTrigger id="type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="water_quality">Water Quality</SelectItem>
                  <SelectItem value="outbreak">Outbreak</SelectItem>
                  <SelectItem value="alert">General Alert</SelectItem>
                  <SelectItem value="info">Information</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="severity">Severity Level</Label>
              <Select value={severity} onValueChange={(value: any) => setSeverity(value)}>
                <SelectTrigger id="severity">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full hover:scale-105 transition-transform"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Alert...
              </>
            ) : (
              "Send Alert to All Users"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdminAlertForm;
