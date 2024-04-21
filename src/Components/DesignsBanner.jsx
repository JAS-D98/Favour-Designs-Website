import React from 'react';
import Banner from './Banner';
import SearchBar from './SearchBar';

const DesignsBanner = ({ searchTerm, setSearchTerm, handleFilterChange }) => {
  const Sentence = "Get Inspired to get a custom design".split("");

  return (
    <div className='bg-gradient-to-t from-black to-red-600 h-52 sm:h-52 bg-cover bg-center flex justify-end flex-col items-center text-2xl sm:text-6xl text-white font-semibold w-full fixed top-0 pb-2'>
      <Banner sentence={Sentence} />
      <div className='flex justify-between flex-col-reverse sm:flex-row-reverse gap-2 sm:gap-6 text-[16px] text-slate-600'>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <div className='flex gap-2 items-center justify-center flex-wrap sm:gap-12 mx-auto'>
          <button className='bg-gradient-to-t from-black to-red-600 font-[16px] min-w-[90px] hover:opacity-80 text-white px-2 py-0 sm:py-1 rounded-md' onClick={() => handleFilterChange('all')}>All</button>
          <button className='bg-gradient-to-t from-black to-red-600 font-[16px] min-w-[90px] hover:opacity-80 text-white px-2 py-0 sm:py-1 rounded-md' onClick={() => handleFilterChange('Men')}>Men</button>
          <button className='bg-gradient-to-t from-black to-red-600 font-[16px] min-w-[90px] hover:opacity-80 text-white px-2 py-0 sm:py-1 rounded-md' onClick={() => handleFilterChange('Women')}>Women</button>
          <button className='bg-gradient-to-t from-black to-red-600 font-[16px] min-w-[90px] hover:opacity-80 text-white px-2 py-0 sm:py-1 rounded-md' onClick={() => handleFilterChange('Home Decor')}>Home Decor</button>
        </div>
      </div>
    </div>
  );
};

export default DesignsBanner;
