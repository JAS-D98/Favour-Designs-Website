const DesignsCard = ({ design }) => {
  return (
    <div className="flex flex-1 items-center flex-col sm:w-full rounded-3xl w-full sm:max-w-[350px] shadow-xl pb-3 mt-6">
      <div className="flex items-center justify-center h-[200px] sm:h-[300px] w-full">
        <img src={design.imgURL} alt={design.name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-4 flex-col flex justify-start gap-1 items-center">
        <h3 className="text-slate-600 text-center mt-1 text-lg sm:text-xl">{design.name}</h3>
      </div>
    </div>
  );
};

export default DesignsCard;
