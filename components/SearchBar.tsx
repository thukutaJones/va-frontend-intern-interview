import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => {
  return (
    <div className="w-[40%] bg-dark_gray rounded-full flex flex-row gap-4 items-center px-4">
      <FaSearch className="text-dark" />
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ fontWeight: 900 }}
        placeholder=" Search here..."
        className="text-dark font-bold text-xs h-full w-[90%] py-4 bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
