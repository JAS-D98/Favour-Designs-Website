import { reviews } from "../constants"
import TestimonialsCard from "./TestimonialsCard"


const Testimonials = () => {
  return (
    <section id="testimonials">
      <div class="max-w-6xl px-5 mx-auto mt-8 text-center">
        <h2 class="text-3xl sm:text-5xl font-semibold text-center">What's <span className="text-firebrick">Different About</span> Us?</h2>
        <p className='text-slate-600 text-center mt-2 text-xl'>Here's what our customers have to say</p>
        <div class="flex justify-between flex-col mt-6 md:flex-row md:space-x-6">
            {reviews.map((review)=>(
                <TestimonialsCard key={review.customerName}{...review}/>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials