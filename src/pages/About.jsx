import AboutBackground from "../components/about/AboutBackground"
import Navbar from "../components/common/navigation/Navbar"
import "../styles/about.css"

const About = () => {
  return (
    <>
           <div className="hero-landing">
                     <Navbar />
                     <div className="hero-landing-content">
                                <div className="inner-row">
                                                 <div className="hero-landing-texts">
                                                        <h1>We craft innovative designs, redefines spaces, modern living elegantly.</h1>
                                                 </div>
                                </div>
                     </div>
           </div>
           <AboutBackground />
    </>
  )
}

export default About