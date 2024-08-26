import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import "../styles/home.css"
import AboutExtraSection from "../components/home/AboutExtraSection"
const Home = () => {
  return (
    <>
           <div className="landing">
                     <Navbar />
                     <HeroSection />
           </div>
           <AboutSection />
           <AboutExtraSection />
    </>
  )
}

export default Home