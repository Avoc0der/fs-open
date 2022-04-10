import { useState } from "react";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const averageScore = good * 1 + neutral * 0 + bad * -1;

  return (
    <div>
      <h2>Give feedback</h2>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      {totalFeedback === 0 ? (
        <span>No feedback given</span>
      ) : (
        <Statistics
          bad={bad}
          good={good}
          neutral={neutral}
          averageScore={averageScore}
          totalFeedback={totalFeedback}
        />
      )}
    </div>
  );
};

export default App;
