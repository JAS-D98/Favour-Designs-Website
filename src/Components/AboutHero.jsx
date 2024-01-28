import React from "react";
import Banner from "./Banner";

const AboutPage = () => {
  const aboutSentence = "Get to Know More About Us".split("")

  return (
  <div className='bg-gradient-to-t from-black to-red-600  h-64 p-8 bg-cover bg-center flex justify-center items-center text-3xl sm:text-6xl text-white font-semibold'>
    <Banner sentence={aboutSentence}/>
 </div>
  )
};

export default AboutPage;
