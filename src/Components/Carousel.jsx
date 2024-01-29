import { useRef } from 'react';
import Slider from "react-slick";
import { settings, slides } from "../constants";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { imageDescriptions } from "../constants"

const Carousel = () => {
 
  const slider = useRef(null);

  return (
    <div className="w-full items-center sm:max-w-screen-xl mx-auto px-6">
    <Slider {...settings} className="my-4" ref={slider}>
      {slides.map((slide, index) => (
        <div key={index} className="w-full p-2 sm:p-4 hover:cursor-pointer">
          <img
            src={slide}
            alt={`slide-${index}`}
            className="w-80 h-80 object-fill rounded-md shadow-md sm:ml-6 sm:mx-auto"
          />
          <p className="mt-2 text-center text-slate-600">{imageDescriptions[index]}</p>
        </div>
      ))}
    </Slider>
    <div className="hidden md:flex justify-between items-center">
      <button
        className="bg-gradient-to-t from-black to-red-600 hover:opacity-80 text-white px-4 py-2 rounded-md"
        onClick={() => slider.current.slickPrev()}
      >
        Previous
      </button>
      <button
        className="bg-gradient-to-t from-black to-red-600 hover:opacity-80 text-white px-4 py-2 rounded-md"
        onClick={() => slider.current.slickNext()}
      >
        Next
      </button>
    </div>
  </div>
  )
}

export default Carousel