type ContactFormData = {
  utm_content?: any;
  utm_term?: any;
  utm_campaign?: any;
  utm_medium?: any;
  utm?: any;
  productInterest?: string;
  utm_source?: any;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  subject?: string;
};

export async function sendToGHL(data: ContactFormData): Promise<Response> {
  const webhookUrl = process.env.CONTACT_US_GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GHL webhook URL is not configured");
    throw new Error("Webhook URL is not configured");
  }

  const ghlFormattedData = {
    contact: {
      firstName: data.name ? data.name.split(" ")[0] : "",
      lastName: data.name ? data.name.split(" ").slice(1).join(" ") || "" : "",
      email: data.email || "",
      phone: data.phone || "",
      companyName: data.company || "",
    },
    message: {
      subject: data.subject || "Website Contact Form",
      body: data.message || "",
    },
    source: "Website",
    tags: ["website-inquiry"],
    customFields: {
      product_interest: data.productInterest || "",
      utm_source: data.utm_source || data.utm?.source || "",
      utm_medium: data.utm_medium || data.utm?.medium || "",
      utm_campaign: data.utm_campaign || data.utm?.campaign || "",
      utm_term: data.utm_term || data.utm?.term || "",
      utm_content: data.utm_content || data.utm?.content || "",
    },
  };

  try {
    return await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ghlFormattedData),
    });
  } catch (error) {
    console.error("Error sending data to GHL:", error);
    throw error;
  }
}
