import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        id="searchBar"
        placeholder="Search Here.."
        className='p-2 px-2 rounded-full outline-none border border-firebrick w-full sm:min-w-60 h-10'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
