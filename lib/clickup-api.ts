// lib/clickup-api.ts
type FeedbackData = {
  title: string;
  description: string;
  type: "Bug" | "Feature Request" | "Improvement";
  priority: "Critical" | "High" | "Medium" | "Low";
  email: string;
};

export async function createClickUpTask(data: FeedbackData): Promise<Response> {
  const apiKey = process.env.CLICKUP_API_KEY;
  const listId = process.env.CLICKUP_LIST_ID;
  const typeFieldId = process.env.CLICKUP_TYPE_FIELD_ID;

  if (!apiKey || !listId || !typeFieldId) {
    console.error("ClickUp configuration is missing");
    throw new Error("ClickUp configuration is missing");
  }

  // Map our priority to ClickUp priority (1-4)
  const priorityMap: Record<string, number> = {
    Critical: 1,
    High: 2,
    Medium: 3,
    Low: 4,
  };

  // Map type values to the specific option IDs from the API response
  const typeOptionMap: Record<string, string> = {
    Bug: "5104aa10-d70f-40fc-a52c-e3b16e07df33",
    "Feature Request": "bb63d001-faa1-4883-94c6-ea48d40af902",
    Improvement: "b997457f-74cd-4da0-bc24-a714be957055",
  };

  // Prepare task description
  let taskDescription = data.description;

  // Add reporter email
  taskDescription += `\n\n**Reporter Email:** ${data.email}`;

  const clickUpData = {
    name: data.title,
    description: taskDescription,
    priority: priorityMap[data.priority],
    custom_fields: [
      {
        id: typeFieldId,
        value: typeOptionMap[data.type],
      },
    ],
  };

  try {
    return await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify(clickUpData),
    });
  } catch (error) {
    console.error("Error sending data to ClickUp:", error);
    throw error;
  }
}

export async function uploadAttachmentToClickUp(
  taskId: string,
  file: File
): Promise<Response> {
  const apiKey = process.env.CLICKUP_API_KEY;

  if (!apiKey || !taskId) {
    throw new Error("ClickUp configuration is missing");
  }

  const formData = new FormData();
  formData.append("attachment", file);

  return await fetch(
    `https://api.clickup.com/api/v2/task/${taskId}/attachment`,
    {
      method: "POST",
      headers: {
        Authorization: apiKey,
      },
      body: formData,
    }
  );
}
