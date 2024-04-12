import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import {HeroImage} from "../assets/images";

const Hero = () => {
  return (
    <section id="hero" className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container">

    <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 md:flex-row">
      <div className="flex flex-col mb-32 space-y-12 sm:space-y-6 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left sm:mt-20">Welcome to Our One Stop Shop where <span className="text-firebrick">design, fashion and elegance</span> meet at your convenient price.</h1>
        <p className="max-w-sm text-center text-slate-600 text-2xl font-semibold md:text-left">Get the best designs and value without having to worry.</p>
        <div className="flex justify-center md:justify-start">
        <Button label="Contact Us" iconURL={arrowRight}/>
        </div>
      </div>
     
      <div className="md:w-1/2">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  </section>

  )
}

export default Hero