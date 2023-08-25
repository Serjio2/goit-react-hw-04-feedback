import { StyledFeedbackOptions } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <StyledFeedbackOptions>
      {Object.keys(options).map(item => (
        <button type="button" name={item} onClick={onLeaveFeedback}>
          {item.replace(item[0], item[0].toUpperCase())}
        </button>
      ))}
    </StyledFeedbackOptions>
  );
};
