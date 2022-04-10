import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, totalFeedback, averageScore }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={totalFeedback} />
          <StatisticLine text="average" value={averageScore / totalFeedback} />
          <StatisticLine
            text="positive"
            value={`${(good / totalFeedback) * 100} %`}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
