import { useState, useEffect } from "react";

function SearchBar({ onSearch, currentSearch = '' }) {  
  const [inputValue, setInputValue] = useState(currentSearch);
  
  useEffect(() => {
    setInputValue(currentSearch);
  }, [currentSearch]);

  // Debounce logic 
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, onSearch]);

  return (
    <div className="search-bar">
      <input 
        type="text"
        className="search-input"
        placeholder=" Search a country..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;