import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { StyledFeedback } from './Feedback.styled';

export const Feedback = ({ good, neutral, bad, onLeaveFeedback }) => {
  return (
    <StyledFeedback>
      <FeedbackOptions
        good={good}
        neutral={neutral}
        bad={bad}
        onLeaveFeedback={onLeaveFeedback}
      />
    </StyledFeedback>
  );
};
