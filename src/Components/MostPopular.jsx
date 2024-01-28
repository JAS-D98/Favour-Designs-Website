import Carousel from "./Carousel"

const MostPopular = () => {
  return (
    <div className='w-full h-screen p-8 flex flex-col items-center -mt-24'>
        <h1 className='text-4xl relative font-semibold text-center md:text-5xl md:text-left sm:mt-20'>Most <span className='text-firebrick'>Popular</span> Designs</h1>
        <p className='text-slate-600 text-center mt-2 text-xl'>Below are some of the most Popular orders by our esteemed customers.</p>
        <Carousel/>
    </div>
  )
}

export default MostPopular