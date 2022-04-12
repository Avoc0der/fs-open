import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personsServices from "./services/persons";
import Notification from "./components/Notification";

import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);

  const inputHandler = ({ currentTarget: { value } }) => {
    setNewName(value);
  };
  const inputNumberHandler = ({ currentTarget: { value } }) => {
    setNewNumber(value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (
      persons.findIndex(
        ({ name }) => name.toLowerCase() === newName.toLowerCase()
      ) !== -1
    ) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personsServices
          .update(
            persons.find(
              ({ name }) => name.toLowerCase() === newName.toLowerCase()
            ).id,
            personObject
          )
          .then(({ data }) => {
            setPersons(
              persons.map((person) =>
                person.id !==
                persons.find(
                  ({ name }) => name.toLowerCase() === newName.toLowerCase()
                ).id
                  ? person
                  : data
              )
            );
            setMessage(`Changed ${personObject.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          });
      }
    } else {
      personsServices.create(personObject).then(({ data }) => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${personObject.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
    }
  };

  const searchHandler = ({ currentTarget: { value } }) => {
    setSearch(value);
  };

  const currentData = persons.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  const removePersons = ({ name, id: removeId }) => {
    if (window.confirm(`Delete ${name}?`)) {
      console.log(removeId);
      personsServices.remove(removeId).then(({ status }) => {
        if (status === 200) {
          setPersons(persons.filter(({ id }) => id !== removeId));
        }
      });
    }
  };

  useEffect(() => {
    personsServices.getAll().then(({ data }) => {
      setPersons(data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter searchValue={search} searchHandler={searchHandler} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={formHandler}
        nameHandler={inputHandler}
        nameValue={newName}
        numberValue={newNumber}
        numberHandler={inputNumberHandler}
      />
      <h2>Numbers</h2>
      <Persons removeHandler={removePersons} list={currentData} />
    </div>
  );
};

export default App;
