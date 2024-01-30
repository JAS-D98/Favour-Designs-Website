import { Globe } from "../assets/icons"
import { ContactLordIcon, socialMedia } from "../constants"
import Banner from "./Banner"
import Form from "./Form"

const ContactUs = () => {
    const aboutSentence = "We Would Love to Hear from You ❤".split("")
  return (
    <div>
        <div className='bg-gradient-to-t from-black to-red-600  h-64 p-8 bg-cover bg-center flex flex-col text-center justify-center items-center text-2xl sm:text-6xl text-white font-semibold'>
            <Banner sentence={aboutSentence}/>
            <p className="text-xl text-center">Reach Us via calls, text and inperson visits</p>
        </div>
        <div className="items-center text-center mb-6 sm:p-8">
           <h2 className="sm:text-2xl text-xl font-semibold text-slate-600 mb-6">Follow Us on this Media Platforms.</h2>
           <div className="flex w-full justify-center gap-8 sm:gap-20">
            {socialMedia.map((Media)=>(
                <div className="text-center flex flex-col items-center justify-center sm:gap-4 gap-2">
                    <div className="bg-gradient-to-t from-black to-red-600 cursor-pointer hover:scale-125 ease-in text-white w-11 h-11 rounded-full p-2 flex justify-center">
                        <img src={Media.src} alt={Media.alt}/>
                    </div>
                    <p className="text-[16px] sm:text-xl font-semibold text-slate-600">{Media.name}</p>
                </div>
            ))}
           </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-center sm:items-start gap-6 sm:gap-10 p-8">
            <div className="flex flex-col gap-4">
            {ContactLordIcon.map((ContactIcon)=>(
                <div className="flex items-center gap-8 text-slate-600">
                    <div className="bg-gradient-to-t from-black to-red-600 w-11 h-11 rounded-full p-2">
                        <img src={ContactIcon.src} alt={ContactIcon.alt}/>
                    </div>
                    <p className="text-firebrick">{ContactIcon.text}</p><br />
                </div>
            ))}
            <div>
            <img src={Globe} alt="Rotating Globe" />
            </div>
            </div>
            <div className="max-w-[400px] sm:w-full">
            <Form/>
            </div>
        </div>
    </div>
  )
}

export default ContactUs 