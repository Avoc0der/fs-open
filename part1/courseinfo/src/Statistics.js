const Statistics = ({ good, neutral, bad }) => {
  const average = good - bad / (good + neutral + bad) || 0;
  const positive = good + neutral / (good + neutral + bad) || 0;

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};

export default Statistics;
