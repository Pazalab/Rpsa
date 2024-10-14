import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import Faqs from "../components/services/Faqs"
import ServicesBody from "../components/services/ServicesBody"
import "../styles/services.css"

const Services = () => {
  return (
    <>
            <div className="hero-landing">
                       <Navbar />
                       <div className="hero-landing-content services">
                                  <div className="inner-row">
                                             <div className="hero-landing-texts">
                                                       <h1>Collaborative, innovative, and sustainable solutions for a better world.</h1>
                                             </div>
                                  </div>
                       </div>
            </div>
            <ServicesBody />
            <Faqs />
            <Footer />
    </>
  )
}

export default Services