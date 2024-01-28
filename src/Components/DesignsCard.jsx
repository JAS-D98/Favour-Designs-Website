import React from 'react';

const DesignsCard = ({ design }) => {
  return (
    <div className="flex flex-1 items-center flex-col sm:w-full rounded-3xl w-[350px] shadow-xl pb-3 max-w-[400px] mx-auto">
      <div className="flex items-center justify-center h-[300px] w-full">
        <img src={design.imgURL} alt={design.name} className="h-full w-full" />
      </div>
      <div className="mt-8 flex-col flex justify-start gap-1 items-center">
        <h3 className="text-slate-600 text-center mt-1 text-xl">{design.name}</h3>
      </div>
    </div>
  );
};

export default DesignsCard;
