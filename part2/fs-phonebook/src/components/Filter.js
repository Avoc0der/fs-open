const Filter = ({ searchValue, searchHandler }) => {
  return (
    <div>
      <h5>Search:</h5>
      <input value={searchValue} onChange={searchHandler} />
    </div>
  );
};

export default Filter;
