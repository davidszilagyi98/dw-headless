import React, { useState } from "react";

interface SortProps {
  onSelectSort: (sortBy: string) => void;
}

const Sort: React.FC<SortProps> = ({ onSelectSort }) => {
  const [sortBy, setSortBy] = useState<string>("Relevance");

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
    onSelectSort(newSortBy);
  };

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle fw-bold"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Sort by: {sortBy}
      </button>
      <ul className="dropdown-menu">
        <li className="mx-3">
          <form className="d-flex justify-content-between">
            <label>
              <input
                type="radio"
                value="Relevance"
                checked={sortBy === "Relevance"}
                onChange={() => handleSortChange("Relevance")}
              />
              Relevance
            </label>
          </form>
        </li>
        <li className="mx-3">
          <form className="d-flex justify-content-between">
            <label>
              <input
                type="radio"
                value="Price"
                checked={sortBy === "Price"}
                onChange={() => handleSortChange("Price")}
              />
              Price
            </label>
          </form>
        </li>
      </ul>
    </div>
  );
};

export default Sort;
