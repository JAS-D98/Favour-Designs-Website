import LandingProductsComponent2 from '../Components/LandingProductsComponent2'
import Button from '../Components/Button'
import { products } from "../constants"
import { arrowRight } from "../assets/icons";

const LandingProducts = () => {
  return (
    <section id="products" className="max-sm:mt-12 p-8 flex flex-col items-center">
    <div className="flex flex-col justify-center item-center text-center gap-5"> 
      <h2 className="text-3xl font-semibold text-center mx-auto  md:text-5xl md:text-left sm:mt-20">Our <span className="text-firebrick">Latest</span> Orders</h2>
      <p className="text-slate-600 text-center mt-2 text-xl">A list of the most recent orders we've received and produced.</p>
    </div>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mb-10">
      {products.map((product)=>(
        <LandingProductsComponent2 key={product.name}{...product}/>
      ))}
    </div>
    <Button label="View More Products" iconURL={arrowRight}/>
  </section>
  )
}

export default LandingProducts