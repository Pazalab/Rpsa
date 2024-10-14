import { Link, useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import { services } from "../data/services";
import { GoChevronRight } from "react-icons/go";
import SingleServiceBody from "../components/services/SingleServiceBody";
import Faqs from "../components/services/Faqs";
import Footer from "../components/common/Footer";


const SingleService = () => {
    const { name } = useParams();
    const service = services.find(item => item.url_param === name);
  return (
    <>
           <div className="hero-service-landing">
                      <Navbar />
                      <div className="hero-service-texts">
                               <div className="inner-row">
                                          <div className="hero-service-text-content">
                                                   <div className="hero-service-title">
                                                             <h3>Service</h3>
                                                             <h2>{service.title}</h2>
                                                   </div>
                                                   <div className="back-to-services">
                                                               <Link to={"/services"}>Back to Services <span><GoChevronRight /></span></Link>
                                                   </div>
                                          </div>
                               </div>
                      </div>
           </div>
           <SingleServiceBody data={service} />
           <Faqs />
           <Footer />
    </>
  )
}

export default SingleService