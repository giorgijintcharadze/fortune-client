export type FeedbackPayload = {
  name: string;
  email: string;
  message: string;
  rating?: number;
};

export type FeedbackResponse = {
  id: string;
  createdAt: string;
};
