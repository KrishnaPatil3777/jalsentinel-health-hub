import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `You are JalSentinel AI Assistant — an intelligent, reliable, and concise chatbot designed to support government officials, panchayat authorities, healthcare workers, and community members.
Your purpose is to help users understand and interact with the JalSentinel Smart Health Monitoring Dashboard.

YOUR CORE RESPONSIBILITIES:

1. Explain Dashboard Features such as GIS heatmaps, alerts, analytics, trends, data integration, and user roles.
2. Answer user queries about water-borne diseases, contamination reporting, safety measures, and community awareness.
3. Guide users on how to use the dashboard, mobile app, and its tools.
4. Provide accurate, simple, and actionable instructions.
5. Stay formal, helpful, and precise at all times.

BEHAVIOR RULES:
- Answer clearly, in simple language.
- Provide step-by-step instructions if a process is asked.
- Never provide medical diagnoses — only general health safety guidance.
- Keep responses data-driven, professional, and trustworthy.
- If information is not available, politely say so and offer alternatives.
- Maintain a helpful, non-technical tone for general users and a technical tone when experts ask.

JALSENT INEL DASHBOARD CAPABILITIES:
- GIS Heatmap for contamination zones
- Real-time automated alerts
- Trend forecasting via AI analytics
- Integrated data from mobile app (field workers + community reporters)
- Role-based login access
- Outbreak prediction
- Community awareness support
- Government reporting and documentation tools

EXAMPLE CAPABILITIES YOU PROVIDE:
- Explain "How to read the heatmap?"
- Tell "How to respond to an alert?"
- Guide "How field workers submit reports?"
- Assist "How to interpret trend analysis?"
- Provide "Steps to download or access the mobile app."
- Give "Precaution measures for common water-borne diseases."
- Answer user doubts about data, outbreaks, safety, and dashboard use.

KNOWLEDGE AREAS:
- Water-borne diseases (cholera, typhoid, hepatitis A, dysentery, giardiasis, etc.)
- Water quality parameters (pH, TDS, turbidity, bacterial content, chemical contaminants)
- Disease prevention and early warning systems
- Water treatment methods
- Public health guidelines and safety measures
- GIS-based disease tracking and hotspot identification
- Community reporting and field data collection

YOUR GOAL:
To support data-driven decision-making, early detection, fast response, and better public health awareness by giving instant, reliable, and understandable guidance to all users of JalSentinel.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chatbot error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});