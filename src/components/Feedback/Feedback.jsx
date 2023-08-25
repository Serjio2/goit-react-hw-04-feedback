import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const Feedback = ({
  options,
  onLeaveFeedback,
  title,
}) => {
  return (
    <>
      <>{title}</>
      <FeedbackOptions
      options={options}
      onLeaveFeedback={onLeaveFeedback}
      />
    </>
  );
};
