import styles from '../Data/FeedbackOptions.module.css';

export default function FeedbackOptions({ buttonsName, onLeaveFeedback }) {
  const button = buttonsName.map((elem, index) => {
    return (
      <button
        className={styles.button}
        name={elem}
        key={index}
        onClick={onLeaveFeedback}
      >
        {elem}
      </button>
    );
  });
  return <div>{button}</div>;
}
