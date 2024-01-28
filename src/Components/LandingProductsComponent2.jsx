const LandingProductsComponent2 = ({imgURL, name}) => {
  return (
    <div className="flex flex-1 items-center flex-col w-full max-sm:w-full rounded-3xl shadow-xl pb-3">
    <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
    <div className="mt-8 flex-col flex justify-start gap-1 items-center">
        <p className="text-slate-600 text-center mt-1 text-xl">{name}</p>
    </div>
</div>
  )
}

export default LandingProductsComponent2