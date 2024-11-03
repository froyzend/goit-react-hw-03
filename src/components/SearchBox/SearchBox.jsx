import css from "./SearchBox.module.css";

const SearchBox = ({ onSearch, inputValue }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className={css.SearchBox}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
