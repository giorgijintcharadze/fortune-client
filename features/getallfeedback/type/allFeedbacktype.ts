export type AllFeedback = {
  _id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  updatedAt: string;
};
