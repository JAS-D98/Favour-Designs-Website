import React from 'react';
import Banner from './Banner';
import SearchBar from './SearchBar';

const DesignsBanner = ({ searchTerm, setSearchTerm, handleFilterChange }) => {
  const Sentence = "Get Inspired to get a custom design".split("");

  return (
    <div className='bg-gradient-to-t from-black to-red-600 h-52 sm:h-56 bg-cover bg-center flex justify-end flex-col items-center text-4xl sm:text-6xl text-white font-semibold w-full fixed top-0 pb-2'>
      <Banner sentence={Sentence} />
      <div className='flex justify-between flex-col-reverse sm:flex-row-reverse gap-2 sm:gap-6 text-[16px] mt-3 text-slate-600'>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <div className='flex gap-2 items-center flex-wrap sm:gap-12'>
          <button className='bg-gradient-to-t from-black to-red-600 min-w-[100px] hover:opacity-80 text-white px-2 py-1 rounded-md' onClick={() => handleFilterChange('all')}>All</button>
          <button className='bg-gradient-to-t from-black to-red-600 min-w-[100px] hover:opacity-80 text-white px-2 py-1 rounded-md' onClick={() => handleFilterChange('Men')}>Mens Wear</button>
          <button className='bg-gradient-to-t from-black to-red-600 min-w-[100px] hover:opacity-80 text-white px-2 py-1 rounded-md' onClick={() => handleFilterChange('Women')}>Womens Wear</button>
          <button className='bg-gradient-to-t from-black to-red-600 min-w-[100px] hover:opacity-80 text-white px-2 py-1 rounded-md' onClick={() => handleFilterChange('Home Decor')}>Home Decor</button>
        </div>
      </div>
    </div>
  );
};

export default DesignsBanner;
