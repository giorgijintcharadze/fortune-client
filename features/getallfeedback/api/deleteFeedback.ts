export async function DeleteFeedback(id: string): Promise<void> {
  const res = await fetch(`http://localhost:4000/api/feedback/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Can't Delete feedback");
}
