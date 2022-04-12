const Person = ({ id, name, number, removeHandler }) => {
  const removeClickHandler = () => {
    removeHandler({ name, id });
  };
  return (
    <li key={name}>
      {name} {number}
      <button onClick={removeClickHandler}>Delete</button>
    </li>
  );
};

export default Person;
