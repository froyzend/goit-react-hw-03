import css from "./Options.module.css";
const Options = ({ onUpdate, totalFeedback, onReset }) => {
  return (
    <>
      <div className={css.ListBtn}>
        <button className={css.Btn} onClick={() => onUpdate("good")}>
          Good
        </button>
        <button className={css.Btn} onClick={() => onUpdate("neutral")}>
          Neutral
        </button>
        <button className={css.Btn} onClick={() => onUpdate("bad")}>
          Bad
        </button>
        {totalFeedback > 0 && (
          <button className={css.Btn} onClick={onReset}>
            Reset
          </button>
        )}
      </div>
    </>
  );
};

export default Options;
