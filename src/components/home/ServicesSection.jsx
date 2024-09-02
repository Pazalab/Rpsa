import { Link } from "react-router-dom"
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { services } from "../../data/services";

const ServicesSection = () => {
  return (
    <div className="services-section">
             <div className="inner-row">
                        <div className="services-section-content">
                                   <div className="services-intro">
                                                <h2>We Specialize in these Fields.</h2>
                                                <div className="services-intro-texts">
                                                         <p>At Renaissance Per Salut, quality is our priority—we employ skilled professionals, adhere to industry best practices, and use premium materials to deliver a wide range of tailored services that meet our clients&apos; unique needs, ensuring excellence from initial planning to final touches in every project.</p>

                                                         <div className="link-wrap">
                                                                  <Link to={"/"}>
                                                                        <span className="top-border"></span>
                                                                        <span className="right-border"></span>
                                                                        <span className="bottom-border"></span>
                                                                        <span className="left-border"></span>
                                                                        All Services <span className="icon"><HiMiniArrowLongRight  /></span></Link>
                                                         </div>
                                                </div>
                                   </div>

                                   <div className="services-body-row">
                                            { services.map(service => 
                                                   <div className="service-moja" key={service.id}>
                                                              <img src={service.image} alt="" />
                                                              <h3>{service.title}</h3>
                                                              <p>{service.elaboration}</p>

                                                              <div className="link-wrap">
                                                                           <Link to={"/"}>
                                                                                 <span className="top-border"></span>
                                                                                 <span className="right-border"></span>
                                                                                 <span className="bottom-border"></span>
                                                                                 <span className="left-border"></span>
                                                                        Know more<span className="icon"><HiMiniArrowLongRight  /></span></Link>
                                                                  </div>
                                                   </div>
                                            )}
                                   </div>
                        </div>
             </div>
    </div>
  )
}

export default ServicesSection