import React, { useState } from "react";

interface SearchProps {
  onSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="d-flex gap-2">
      <input
        className="p-2 rounded-1 border-1 "
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="article-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
