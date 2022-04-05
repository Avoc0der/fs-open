import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => (
        <Part key={id} exercises={exercises} name={name} />
      ))}
    </div>
  );
};

export default Content;
