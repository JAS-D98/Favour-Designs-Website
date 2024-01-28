const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-md bg-slate-200 px-10 py-10">
      <div className="w-11 h-11 flex justify-center items-center bg-gradient-to-t from-black to-red-600 rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-4 text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-2 break-words text-lg leading-normal text-slate-600">{subtext}</p>
    </div>
  )
}

export default ServiceCard