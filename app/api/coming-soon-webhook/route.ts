import { NextResponse } from "next/server";
import { sendToGHL } from "@/lib/webhooks";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.email) {
      return NextResponse.json(
        { error: "Missing email field" },
        { status: 400 }
      );
    }

    const response = await sendToGHL(data);

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
      message: "Added to waitlist successfully",
    });
  } catch (error) {
    console.error("Error processing coming soon webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
