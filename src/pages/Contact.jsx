import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contact/ContactBody"
import "../styles/contact.css"
const Contact = () => {
  return (
    <>
           <div className="hero-landing contact">
                       <Navbar />
                       <div className="hero-landing-content">
                                  <div className="inner-row"></div>
                       </div>
            </div>
            <ContactBody />
            <Footer />
    </>
  )
}

export default Contact