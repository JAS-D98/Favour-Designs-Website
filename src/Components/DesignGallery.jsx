import React from 'react';
import DesignsCard from './DesignsCard';

const DesignGallery = ({ designs, searchTerm }) => {
  return (
    <div className="mt-28 sm:mt-20 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-14 mb-1 w-full">
      {designs
        .filter((design) => {
          if (searchTerm === '') {
            return design;
          } else if (design.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return design;
          }
        })
        .map((design) => (
          <DesignsCard key={design.id} design={design} />
        ))}
    </div>
  );
};

export default DesignGallery;
