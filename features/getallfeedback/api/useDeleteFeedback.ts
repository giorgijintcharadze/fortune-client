import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteFeedback } from "./deleteFeedback";

export function useDeleteFeedback() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allPosts"] });
    },
  });
}
