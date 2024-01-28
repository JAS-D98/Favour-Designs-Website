import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import OurDesigns from "./Pages/OurDesigns";
import Contacts from "./Pages/Contacts";

export default function App() {
  return (
    <div> 
    <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element={ <LandingPage/> }/> 
       <Route path="/About" element={  <About/>  }/> 
       <Route path="/Designs" element={  <OurDesigns/>  }/> 
       <Route path="/Contact Us" element={  <Contacts/>  }/> 
      </Routes>
      <Footer/> 
    </BrowserRouter>
    </div>
    
  )
}