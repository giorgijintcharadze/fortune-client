import { FeedbackFormValues } from "../schemas/feedback.schema";
import { FeedbackPayload, FeedbackResponse } from "../type/feedback.types";

export async function sendFeedback(
  data: FeedbackFormValues
): Promise<FeedbackResponse> {
  const res = await fetch("http://localhost:4000/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to send feedback");

  return res.json();
}
