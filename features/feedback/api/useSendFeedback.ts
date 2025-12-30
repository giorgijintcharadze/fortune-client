"use client";

import { useMutation } from "@tanstack/react-query";
import { sendFeedback } from "../api/feedbackApi";

export function useSendFeedback() {
  return useMutation({
    mutationFn: sendFeedback,
  });
}
