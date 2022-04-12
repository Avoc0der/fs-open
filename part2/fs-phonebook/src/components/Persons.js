import Person from "./Person";

const Persons = ({ list, removeHandler }) => {
  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <Person
          id={id}
          removeHandler={removeHandler}
          key={name}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};

export default Persons;
