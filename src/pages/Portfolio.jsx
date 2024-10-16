import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import WorkBody from "../components/work/WorkBody"
import "../styles/work.css"
const Portfolio = () => {
  return (
    <>
            <div className="hero-portfolio-landing">
                         <Navbar />
                         <div className="hero-portfolio-texts">
                                    <div className="inner-row">
                                                <h2>Our Projects are a blend of innovative design and functional solutions that create spaces that inspire.</h2>
                                    </div>
                         </div>
            </div>
            <WorkBody />
            <Footer />
    </>
  )
}

export default Portfolio