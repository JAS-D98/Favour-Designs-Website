import { services } from "../constants"
import ServiceCard from "../Components/ServiceCard"

const Services = () => {
  return (
    <section className="flex justify-center flex-col items-center p-2">
        <h1 className="text-4xl mt-10 font-semibold md:text-5xl md:text-left sm:mt-20">Our <span className="text-firebrick">Services</span></h1>
        <p className="text-slate-600 text-center mt-2 text-xl">Embark on Excellence with Our Unrivaled Services</p>
        <div className="flex justify-center flex-wrap gap-10 mt-0 sm:mt-4 p-6">
      {services.map((service)=>(
        <ServiceCard key={service.label}{...service}/>
      ))}
    </div>
    </section>
  )
}

export default Services 