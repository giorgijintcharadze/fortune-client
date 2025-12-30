"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FeedbackFormValues,
  FeedbackSchemas,
} from "../schemas/feedback.schema";
import { useSendFeedback } from "../api/useSendFeedback";

const FeedbackForm = () => {
  const { mutate, isPending, isSuccess, isError, error } = useSendFeedback();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(FeedbackSchemas),
    defaultValues: {
      name: "",
      email: "",
      rating: 5,
      message: "",
    },
  });

  const feedbackSubmit = (data: FeedbackFormValues) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
    console.log(data);
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-green-300">
        <form
          className="bg-white p-6 rounded shadow-md w-full max-w-md"
          onSubmit={handleSubmit(feedbackSubmit)}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            send Feedback
          </h2>

          {/* First Name */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1  text-black">
              First Name
              {errors.name && (
                <p className="text-red-400">{errors.name.message}</p>
              )}
            </label>
            <input
              type="text"
              className="border rounded  border-black w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              {...register("name")}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1  text-black">
              Email
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
            </label>
            <input
              type="email"
              className="border rounded border-black w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400  text-black"
              {...register("email")}
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label
              htmlFor="rating"
              className="block text-sm font-medium mb-1  text-black"
            >
              rating{" "}
            </label>
            <input
              id="rating"
              className="border rounded  border-black w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400  text-black"
              {...register("rating")}
              type="number"
              min={1}
              max={5}
              {...register("rating", { valueAsNumber: true })}
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1  text-black">
              message{" "}
              {errors.message && (
                <p className="text-red-400">{errors.message.message}</p>
              )}
            </label>
            <textarea
              rows={4}
              className="border rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none  text-black"
              {...register("message")}
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={isPending}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full "
          >
            {isPending ? "Sending Feedback.." : "Submit Feedback"}
          </button>

          {isSuccess && (
            <p className="text-green-600 text-center pt-6">
              Feedback Sent successfully 🎉
            </p>
          )}
          {isError && (
            <p className="text-red-400 text-center">Feedback Sent error ❌</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
