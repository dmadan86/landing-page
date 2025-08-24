import { NextResponse } from "next/server";
import { sendToGHL } from "@/lib/webhooks";

interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  [key: string]: string | undefined;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const utmParams: UtmParams = {};
    if (data.utm) {
      if (data.utm.source) utmParams.utm_source = data.utm.source;
      if (data.utm.medium) utmParams.utm_medium = data.utm.medium;
      if (data.utm.campaign) utmParams.utm_campaign = data.utm.campaign;
      if (data.utm.term) utmParams.utm_term = data.utm.term;
      if (data.utm.content) utmParams.utm_content = data.utm.content;
    } else {
      const utmFields = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
      ];
      utmFields.forEach((field) => {
        if (data[field]) {
          utmParams[field] = data[field];
        }
      });
    }

    const ghlData = {
      ...data,
      ...utmParams,
    };

    const response = await sendToGHL(ghlData);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from GHL webhook:", errorText);
      return NextResponse.json(
        { error: "Failed to submit to CRM" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
