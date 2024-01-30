import React, { useState } from 'react';
import DesignGallery from './DesignGallery';
import { AllDesigns } from '../constants'; // Import your array from index.js
import DesignsBanner from './DesignsBanner'; // Import the DesignsBanner component

const ImageFiltering = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // Initial filter is set to 'all'

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setSearchTerm(''); // Reset search term when a filter is applied
  };

  const filteredDesigns =
    activeFilter === 'all'
      ? AllDesigns
      : AllDesigns.filter((design) => design.categories && design.categories.includes(activeFilter));

  return (
    <div className='flex flex-col justify-between'>
      <DesignsBanner handleFilterChange={handleFilterChange} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Add padding to the DesignGallery to make space for the DesignsBanner */}
      <div className="p-8 md:p-12 lg:p-20 xl:p-30 mt-24 min-h-screen">
        <DesignGallery designs={filteredDesigns} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default ImageFiltering;
