import { useEffect, useState } from "react";
import { getAllCountries } from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCountries().then(({ data }) => {
      setCountries(data);
    });
  }, []);

  const searchHandler = (event) => {
    setSearch(event.currentTarget.value);
  };

  const currentData = countries.filter(({ name: { common } }) =>
    common.toLowerCase().includes(search.toLowerCase())
  );

  const showList = currentData.length > 1 && currentData.length <= 9;
  const showMessage = currentData.length >= 10;
  const showCountry = currentData.length === 1;
  const showEmptyMessage = currentData.length === 0;

  const [oneCountry] = currentData;

  console.log(oneCountry);
  return (
    <div>
      <div>
        find countries
        <input onChange={searchHandler} value={search} />
      </div>
      <div>
        {showMessage && <span>Too many matches, specify another filter</span>}
        {showEmptyMessage && <span>No matches, specify another filter</span>}
        {showList && (
          <ul>
            {currentData.map(({ name: { common } }) => (
              <li key={common}>{common}</li>
            ))}
          </ul>
        )}
        {showCountry && (
          <div>
            <h2>{oneCountry?.name?.common}</h2>
            <p>capital: {oneCountry?.capital.toString()}</p>
            <p>area: {oneCountry?.area}</p>
            <h4>Languages</h4>
            <ul>
              {Object.values(oneCountry?.languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <img src={oneCountry?.flags?.png} alt="Flag" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
