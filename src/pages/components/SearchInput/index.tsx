import React from "react";
import SearchIcon from "../Icons/SearchIcon";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="relative mb-6 w-full max-w-md">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon />
      </span>
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-gray-700 shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="나카노시마×야키토리 상위 맛집"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
