import { Africa, AfricanMan, AfricanWoman} from "../assets/images"

const AnimatedImages = () => {
  return (
    <div className="w-full flex">
        <div className="w-60">
        <img src={Africa} alt="African Map" className="bg-cover h-60"/>
        </div>
        <div className="sm:w-30">
        <img src={AfricanMan} alt="African Man" className="bg-cover"/>
        </div>
        <div className="w-60">
        <img src={AfricanWoman} alt="African Woman" className="bg-cover h-60"/>
        </div>
    </div>
  )
}

export default AnimatedImages