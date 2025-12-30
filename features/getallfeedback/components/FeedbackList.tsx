"use client";

import { validDataA } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data-errors.js";
import { useGetFeedback } from "../api/useGetFeedbacks";
import { useDeleteFeedback } from "../api/useDeleteFeedback";

const FeedbackList = () => {
  const { data, isLoading, error, isError } = useGetFeedback();
  const { mutate, isPending } = useDeleteFeedback();
  if (isLoading) {
    return <p className="text-center text-black">Loading...</p>;
  }

  if (isError) {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4 bg-amber-200 text-black">
      {data?.map((item) => (
        <div key={item._id} className="border p-4 rounded shadow bg-white">
          <h3 className="font-bold text-lg">
            {item.name} ⭐ {item.rating}
          </h3>

          <p className="text-sm text-gray-600">{item.email}</p>

          <p className="mt-2">{item.message}</p>

          <span className="text-xs text-gray-400">
            {new Date(item.createdAt).toLocaleString()}
          </span>

          <p className="text-sm mt-1">
            Status: <b>{item.status}</b>
          </p>

          <button
            disabled={isPending}
            onClick={() => mutate(item._id)}
            className="bg-red-500 text-white px-3 py-1 rounded mt-2 cursor-pointer "
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
