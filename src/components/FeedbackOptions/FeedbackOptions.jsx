import { StyledFeedbackOptions } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <StyledFeedbackOptions>
      <button type="button" name="Good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" name="Neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" name="Bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </StyledFeedbackOptions>
  );
};
