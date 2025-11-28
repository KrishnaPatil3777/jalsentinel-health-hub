import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AlertPayload {
  type: "water_quality" | "outbreak" | "alert" | "info";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  message: string;
  sendToAll?: boolean;
  specificUserIds?: string[];
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const payload: AlertPayload = await req.json();
    const { type, severity, title, message, sendToAll = false, specificUserIds = [] } = payload;

    // Validate required fields
    if (!type || !severity || !title || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let userIds: string[] = [];

    // Get user IDs to send notifications to
    if (sendToAll) {
      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("user_id");

      if (profilesError) throw profilesError;
      userIds = profiles.map((p) => p.user_id);
    } else if (specificUserIds.length > 0) {
      userIds = specificUserIds;
    } else {
      return new Response(
        JSON.stringify({ error: "Must specify either sendToAll or specificUserIds" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create notifications for all users
    const notifications = userIds.map((userId) => ({
      user_id: userId,
      title,
      message,
      type,
      severity,
      is_read: false,
    }));

    const { data, error } = await supabase
      .from("notifications")
      .insert(notifications)
      .select();

    if (error) throw error;

    return new Response(
      JSON.stringify({
        success: true,
        message: `Sent ${notifications.length} notifications`,
        data,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending alerts:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
