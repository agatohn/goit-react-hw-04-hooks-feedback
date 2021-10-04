import { Component } from "react";
import ButtonBlock from "./buttonBlock/ButtonBlock";
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (e) => {
    const name = e.target.name;
    this.setState((prev) => ({ [name]: prev[name] + 1 }));
  };

  calcFeedbackSumm = () => {
    const { good, neutral, bad } = this.state;
    const summ = good + neutral + bad;
    return summ;
  };

  calcFeedbackPercentage = () => {
    const total = this.calcFeedbackSumm();
    const { good } = this.state;
    const percentage = total ? (good / total) * 100 : 0;
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.calcFeedbackSumm();
    const percentage = this.calcFeedbackPercentage();
    const { addFeedback } = this;
    return (
      <>
        <Section title="Please leave your feedback">
          <ButtonBlock
            addFeedback={addFeedback}
            options={["good", "neutral", "bad"]}
          />
        </Section>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
