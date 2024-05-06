import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia} from "../constants"
import Year from '../Components/Year'

const Footer = () => {
  return (
    <footer className="p-8 bg-black text-white mt-16">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
                
            <a href="/" className="text-xl font-bold italic sm:text-3xl sm:flex sm:flex-row sm:items-center justify-center"><span className="text-white-600"><h1 className="text-4xl -mb-6 mr-3">F</h1> D</span> Favoured Designs</a>
            {/* <a href="/"><img src={footerLogo} alt="logo" width={150} height={46} className="m-0"/></a> */}
            <p className="mt-6 text-base leading-7 text-white-400 sm:max-w-sm">Unveil Your Signature Style with Our Fashion Forward Collection</p>
            <div className="flex items-center gap-5 mt-8 ">
               {socialMedia.map((icon)=>(
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                </div>
               ))}
            </div>
          </div>
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section)=>(
                <div key={section}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                  <ul>
                    {section.links.map((link)=>(
                      <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name} ><a href="">{link.name}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> 
        </div>
        <div className="flex justify-between text-white-400 mt-20 max-sm:flex-col max-sm:items-center ">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
               <img src={copyrightSign} alt="copy right sign" height={20} width={20} className="rounded-full m-0"/>
               <p>Copyright. All rights reserved.</p> 
               <Year/>
            </div>
            <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
       <a href="https://jasperwambuguport.netlify.app"><p className="mt-2 items-center flex w-full justify-center">Designed &amp; Developed by &nbsp;<span className="text-firebrick italic"> Jasper Wambugu</span></p></a> 
    </footer>
  )
}

export default Footer