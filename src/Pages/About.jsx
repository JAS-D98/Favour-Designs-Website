import AboutHero from "../Components/AboutHero"
import AboutInfo from "../Components/AboutInfo"
import AnimatedImages from "../Components/AnimatedImages"

const About = () => {
  return (
    <div>
      <AboutHero/>
      <div className="flex flex-col items-center sm:items-start sm:flex-row p-8 gap-8 mt-2">
        <AboutInfo/>
        <AnimatedImages/>
      </div>
    </div>
  )
}

export default About