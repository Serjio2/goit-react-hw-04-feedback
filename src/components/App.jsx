import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;

      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return total;
    } else {
      return Math.round((good * 100) / total);
    }
  };

  const total = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();

  return (
    <>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        )}
      </Section>
    </>
  );
};

// *****************************************

// use class

// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (event) => {
//     const name = event.target.name;
//     this.setState(prevState => {
//       return {
//         [name]: prevState[name] + 1,
//       }
//     })
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const result = good + neutral + bad;
//     return result;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     if (total === 0) {
//       return total;
//     } else {
//       return Math.round((good * 100) / total);
//     }
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <GlobalStyle />
//         <Section title="Please leave feedback">
//           <Feedback
//             options={this.state}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
