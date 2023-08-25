// import { Feedback } from "./Statistics.styled";

import { StyledStatistic } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledStatistic>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </StyledStatistic>
  );
};
