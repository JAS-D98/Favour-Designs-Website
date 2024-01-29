import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import BusinessHours from '../Components/BusinessHours'
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle]=useState(false);
  return (
    <header className="px-6 py-2 sm:px-8 sm:py-4 z-10 w-full border-b-2 shadow-sm bg-white fixed">
        <nav className="flex justify-between items-center max-container">
            <a href="/" className="text-xl font-bold italic sm:text-xl sm:ml-6 sm:flex sm:flex-row sm:items-center justify-center md:text-2xl"><span className="text-firebrick"><h1 className="text-4xl -mb-6 mr-3">F</h1> D</span> Favoured Designs</a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden md:ml-6 md:gap-10">
            {navLinks.map((item)=>(
                <li key={item.label} className="relative hover:text-firebrick"><a href={item.href} className="font-montserrat leading-normal md:text-6 text-slate-gray font-semibold">{item.label}</a></li>
            ))}
            </ul>
            <BusinessHours/>
            <div className="lg:hidden flex flex-1 justify-end items-center">
              <img src={toggle ? close : hamburger} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=> setToggle((prev)=>!prev)}/>
              <div className={`${toggle ? 'flex' :'hidden'} p-6 bg-gradient-to-t from-black to-red-600 absolute top-20 right-0 my-1 min-w-[300px] h-screen rounded-xl sidebar`} >
              <ul className="list-none flex flex-col  items-center flex-1 text-white">
              {navLinks.map((item)=>(
                <li key={item.label} className="relative hover:text-slate-600 font-normal text-xl uppercase mr-0 mb-12"><a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray font-semibold">{item.label}</a></li>
              ))}
              <a href="/" className="text-xl font-bold italic sm:text-3xl sm:flex sm:flex-row sm:items-center justify-center mt-40"><span className="text-white-600"><h1 className="text-4xl -mb-6 mr-3">F</h1> D</span> Favoured Designs</a>
            </ul>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar