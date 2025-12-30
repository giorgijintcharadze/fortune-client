import { DeleteFeedback } from "@/features/getallfeedback/api/deleteFeedback";
import FeedbackList from "@/features/getallfeedback/components/FeedbackList";

const GetFeedback = () => {
  return (
    <div className="bg-amber-200">
      <FeedbackList />
    </div>
  );
};

export default GetFeedback;
