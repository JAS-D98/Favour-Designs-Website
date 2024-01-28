import Hero from "../Components/Hero";
import MostPopular from "../Components/MostPopular";
import Services from "../Components/Services";
import QualitySection from "../Components/QualitySection";
import LandingProducts from "../Components/LandingProducts";
import Testimonials from "../Components/Testimonials";

const LandingPage = () => {
  return (
   <div>
    <Hero/>
    <MostPopular/>
    <Services/>
    <QualitySection/>
    <LandingProducts/>
    <Testimonials/>
   </div>
  )
}

export default LandingPage;