// app/actions/newsletter.ts
"use server";

import { z } from "zod";

const subscriberSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  try {
    // Validate input
    const validatedData = subscriberSchema.parse({ email });

    // Here you would typically:
    // 1. Save to your database
    // 2. Send confirmation email
    // 3. Add to your email marketing platform (Mailchimp, ConvertKit, etc.)

    // For demo purposes, let's simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success
    return { success: true, message: "Thanks for subscribing!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      };
    }

    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
