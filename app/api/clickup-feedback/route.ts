import { NextResponse } from "next/server";
import {
  createClickUpTask,
  uploadAttachmentToClickUp,
} from "@/lib/clickup-api";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as
      | "Bug"
      | "Feature Request"
      | "Improvement";
    const priority = formData.get("priority") as
      | "Critical"
      | "High"
      | "Medium"
      | "Low";
    const email = formData.get("email") as string;
    const screenshot = formData.get("screenshot") as File | null;

    if (!title || !description || !type || !priority || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const clickUpData = {
      title,
      description,
      type,
      priority,
      email,
    };

    const response = await createClickUpTask(clickUpData);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error from ClickUp API:", errorText);
      return NextResponse.json(
        { error: "Failed to create task in ClickUp", details: errorText },
        { status: 500 }
      );
    }

    const responseData = await response.json();
    const taskId = responseData.id;

    if (screenshot) {
      try {
        const attachmentResponse = await uploadAttachmentToClickUp(
          taskId,
          screenshot
        );

        if (!attachmentResponse.ok) {
          console.error(
            "Error uploading attachment to ClickUp:",
            await attachmentResponse.text()
          );
        }
      } catch (attachmentError) {
        console.error("Error with attachment upload:", attachmentError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Feedback submitted successfully",
      taskId: taskId,
      taskUrl: responseData.url,
    });
  } catch (error) {
    console.error("Error processing feedback:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
