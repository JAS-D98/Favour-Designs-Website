import React from 'react';
import DesignsCard from './DesignsCard';

const DesignGallery = ({ designs, searchTerm }) => {
  return (
    <div className="mt-8 sm:mt-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full">
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
