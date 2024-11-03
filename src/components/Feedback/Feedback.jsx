import css from "./Feedback.module.css";
const Feedback = ({ amount, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.FeedbackList}>
      <li>Good:{amount.good}</li>
      <li>Neutral:{amount.neutral}</li>
      <li>Bad:{amount.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive feedback:{positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
