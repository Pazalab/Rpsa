import AboutBackground from "../components/about/AboutBackground"
import ProcessSection from "../components/about/ProcessSection"
import TeamSection from "../components/about/TeamSection"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import Testimonials from "../components/home/Testimonials"
import "../styles/about.css"

const About = () => {
  return (
    <>
           <div className="hero-landing">
                     <Navbar />
                     <div className="hero-landing-content">
                                <div className="inner-row">
                                                 <div className="hero-landing-texts">
                                                        <h1>We craft innovative designs that redefine spaces and elevate modern living.</h1>
                                                 </div>
                                </div>
                     </div>
           </div>
           <AboutBackground />
           <ProcessSection />
           <TeamSection />
           <Testimonials />
           <Footer />
    </>
  )
}

export default About