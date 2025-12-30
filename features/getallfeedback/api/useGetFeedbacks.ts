import { useQuery } from "@tanstack/react-query";
import { getFeedback } from "./getAllFeedback";
import { AllFeedback } from "../type/allFeedbacktype";

export function useGetFeedback() {
  return useQuery<AllFeedback[]>({
    queryKey: ["allPosts"],
    queryFn: getFeedback,
  });
}
