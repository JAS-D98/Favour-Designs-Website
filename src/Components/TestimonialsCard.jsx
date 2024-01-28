const TestimonialsCard = ({imgURL, customerName, feedback}) => {
  return (
    <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-200 md:w-1/3 shadow-xl mt-20">
    <div className="w-16 h-16 flex justify-center items-center border border-firebrick rounded-full -mt-14 overflow-hidden ">
    <img src={imgURL} className="rounded-full border border-firebrick object-cover w-full h-full" alt=""/>
    </div>
    <h5 class="text-lg font-bold">{customerName}</h5>
    <p class="text-sm text-gray-600">{feedback}</p>
  </div>
  )
}

export default TestimonialsCard