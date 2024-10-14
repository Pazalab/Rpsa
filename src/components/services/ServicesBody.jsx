import { services } from "../../data/services"
import { Link } from "react-router-dom"
import { HiMiniArrowLongRight } from "react-icons/hi2";
const ServicesBody = () => {
  return (
    <div className="services-body">
                <div className="inner-row">
                           <div className="services-body-content">
                                       <div className="services-intro">
                                                 <h2>We Specialize in these Fields.</h2>
                                                 <p>With a proven track record in delivering a wide range of architectural projects, our company brings together the collective expertise of our directors, who have led and contributed to numerous high-profile ventures. Each project showcases our commitment to innovative design, precision, and functionality. Whether as a team or through individual leadership, we consistently exceed client expectations, turning architectural visions into stunning realities. Let us bring your next project to life with our comprehensive experience and creative solutions tailored to your needs.</p>
                                       </div>

                                       <div className="services-body-row">
                                                { services.map(service => 
                                                    <div className="service-moja" key={service.id}>
                                                              <img src={service.image} alt="" />
                                                              <h3>{service.title}</h3>
                                                              <p>{service.elaboration}</p>

                                                              <div className="link-wrap">
                                                                           <Link to={service.link}>
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

export default ServicesBody