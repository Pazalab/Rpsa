import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import "../styles/home.css"
const Home = () => {
  return (
    <>
           <div className="landing">
                     <Navbar />
                     <HeroSection />
           </div>
    </>
  )
}

export default Home