import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import "../styles/home.css"
import AboutExtraSection from "../components/home/AboutExtraSection"
import ServicesSection from "../components/home/ServicesSection"
import PortfolioSection from "../components/home/PortfolioSection"
import Testimonials from "../components/home/Testimonials"
const Home = () => {
  return (
    <>
           <div className="landing">
                     <Navbar />
                     <HeroSection />
           </div>
           <AboutSection />
           <AboutExtraSection />
           <ServicesSection />
           <PortfolioSection />
           <Testimonials />
    </>
  )
}

export default Home