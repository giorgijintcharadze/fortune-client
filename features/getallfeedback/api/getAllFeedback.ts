import { AllFeedback } from "../type/allFeedbacktype";

export async function getFeedback(): Promise<AllFeedback[]> {
  const res = await fetch("http://localhost:4000/api/feedback/all");
  if (!res.ok) throw new Error("Failed to get Feedbacks ");
  return res.json();
}
