import { Link } from "react-router-dom"
import { FiChevronRight } from "react-icons/fi";
import { RiDoubleQuotesL,  RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data/testimonials";
import { Autoplay } from 'swiper/modules';
import partner1 from "../../assets/radiography.png"
import partner2 from "../../assets/komarock.png"
import partner3 from "../../assets/kirinyaga.png"
import partner4 from "../../assets/hill-view.png"
import partner5 from "../../assets/galaxy-inn.png"
import partner6 from "../../assets/mvuli.png"
const Testimonials = () => {
  return (
    <div className="testimonials-section">
               <div className="inner-row">
                          <div className="testimonials-section-content">
                                      <div className="testimonial-upper-strip">
                                                  <div className="left-column">
                                                            <h3>Trusted By</h3>
                                                             <h2>Clients across East Africa</h2>
                                                  </div>
                                                  <div className="right-column">
                                                             <div className="link-wrap">
                                                                           <Link to={"/contact-us"}>
                                                                                 <span className="top-border"></span>
                                                                                 <span className="right-border"></span>
                                                                                 <span className="bottom-border"></span>
                                                                                 <span className="left-border"></span>
                                                                        Get a Quote<span className="icon"><FiChevronRight /></span></Link>
                                                            </div>
                                                  </div>
                                      </div>


                                      <div className="testimonials-body">
                                               <Swiper
                                                       slidesPerView={1}
                                                       spaceBetween={40}
                                                       loop={true}
                                                       speed={1000}
                                                       autoplay= {{
                                                             delay: 4500,
                                                             disableOnInteraction: false
                                                       }}
                                                       modules={[Autoplay]}
                                                       breakpoints={{
                                                               768: {
                                                                      slidesPerView: 2
                                                               }
                                                         }}
                                                   >
                                                         { testimonials.map(stuff => 
                                                                 <SwiperSlide key={stuff.id}>
                                                                           <div className="testimonial-moja">
                                                                                       <p><span><RiDoubleQuotesL /></span>{stuff.content}<span><RiDoubleQuotesR /></span></p>

                                                                                       <h4>{stuff.name}</h4>
                                                                                       <h5>{stuff.position}</h5>
                                                                          </div>
                                                                 </SwiperSlide>
                                                         )}
                                               </Swiper>
                                      </div>


                                      <div className="partners-strip">
                                              <div className="header-strip">
                                                       <span>Some of Our Clients</span>
                                                         <span className="line"></span>
                                              </div>

                                              <div className="partner-logos">
                                                        <img src={partner1} alt="" />
                                                        <img src={partner2} alt="" />
                                                        <img src={partner3} alt="" />
                                                        <img src={partner4} alt="" />
                                                        <img src={partner5} alt="" />
                                                        <img src={partner6} alt="" />
                                              </div>
                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default Testimonials