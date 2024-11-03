import "./App.css";
import Descriptions from "./components/Descriptions/Descriptions";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState, useEffect } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <>
      <div className="AppUserFeedback">
        <Descriptions
          title="Sip Happens Café"
          text="Please leave your feedback about our service by selecting one of the options below."
        />
        <Options
          onUpdate={updateFeedback}
          onReset={resetFeedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
        {totalFeedback === 0 && <Notification />}
        {totalFeedback > 0 && (
          <Feedback
            amount={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}
        <ToDoList />
      </div>
    </>
  );
}

export default App;
