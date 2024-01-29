import {Women9} from "../assets/images";
const QualitySection = () => {
  return (
    <section className="flex h-100 justify-between p-10 sm:p-2 flex-col md:flex-row sm:mt-20 sm:ml-12 sm:mr-12 gap-9 flex-reverse">
      <div className=" p-4 min-w-[200px] w-full sm:p-8 sm:min-w-[400px] text-left sm:w-full bg-slate-200 h-auto rounded-3xl m-auto">
        <h1 className="font-bold text-4xl text-center md:text-5xl md:text-left sm:mt-10 sm:uppercase">Dress to Impress with <span className="text-firebrick">Your Distinct Signature</span> Style</h1>
        <p className="mt-6 text-xl text-gray-600">Discover Your Style, Embrace Elegance! Explore our exquisite collection of designs that redefine fashion. Unleash the allure of captivating designs and make a statement. Elevate your wardrobe with timeless elegance. Shop now and step into a world of glamour!</p>
      </div>
      <div className="w-full min-w-[200px] sm:w-full sm:min-w-[450px] m-auto flex justify-center">
        <img src={Women9} alt="" className="w-80 h-100 rounded-3xl border border-gray-600 "/>
      </div>
    </section>
  )
}

export default QualitySection