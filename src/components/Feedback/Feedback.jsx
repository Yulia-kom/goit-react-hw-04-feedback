import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';

import styles from '../Data/Feedback.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeStats = event => {
    switch (event.target.name) {
      case 'Good':
        setGood(state => state + 1);
        break;
      case 'Neutral':
        setNeutral(state => state + 1);
        break;
      case 'Bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : '0';

  const buttons = ['Good', 'Neutral', 'Bad'];

  return (
    <div className={styles.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          buttonsName={buttons}
          onLeaveFeedback={handleChangeStats}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
