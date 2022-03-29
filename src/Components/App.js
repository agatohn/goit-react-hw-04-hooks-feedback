import { useState } from "react";
import ButtonBlock from "./buttonBlock/ButtonBlock";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (name) => {
    switch (name) {
      case "good":
        setGood((state) => state + 1);
        break;

      case "neutral":
        setNeutral((state) => state + 1);
        break;

      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        return;
    }
  };

  const calcFeedbackSumm = () => good + neutral + bad;
  const calcFeedbackPercentage = () => {
    const total = calcFeedbackSumm();
    const percentage = total ? (good / total) * 100 : 0;
    return Math.round(percentage);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <ButtonBlock
          addFeedback={addFeedback}
          options={["good", "neutral", "bad"]}
        />
      </Section>
      {!calcFeedbackSumm() ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={calcFeedbackSumm()}
            percentage={calcFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//  addFeedback = (e) => {
//     const name = e.target.name;
//     setState((prev) => ({ [name]: prev[name] + 1 }));
//   };

//   calcFeedbackSumm = () => {
//     const { good, neutral, bad } = state;
//     const summ = good + neutral + bad;
//     return summ;
//   };

//   calcFeedbackPercentage = () => {
//     const total = calcFeedbackSumm();
//     const { good } = state;
//     const percentage = total ? (good / total) * 100 : 0;
//     return Math.round(percentage);
//   };

//   render() {
//     const { good, neutral, bad } = state;
//     const total = calcFeedbackSumm();
//     const percentage = calcFeedbackPercentage();
//     const { addFeedback } = this;
//     return (
//       <>
//         <Section title="Please leave your feedback">
//           <ButtonBlock
//             addFeedback={addFeedback}
//             options={["good", "neutral", "bad"]}
//           />
//         </Section>
//         {total === 0 ? (
//           <Notification message="No feedback given" />
//         ) : (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percentage={percentage}
//             />
//           </Section>
//         )}
//       </>
//     );
//   }
// }

export default App;
