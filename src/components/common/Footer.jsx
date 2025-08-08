import { Link } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import ctasvg from "../../assets/cta-image.svg"
import logo from "../../assets/logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
               <div className="inner-row">
                       <div className="footer-call-to-action">
                                 <h3>Looking to transform your vision into reality with innovative architectural designs?</h3>
                                 <div className="link-wrap">
                                          <Link to={"/contact-us"}>
                                                <span className="top-border"></span>
                                                <span className="right-border"></span>
                                                <span className="bottom-border"></span>
                                                <span className="left-border"></span>
                                      Get in Touch<span className="icon"><HiMiniArrowLongRight  /></span></Link>
                               </div>
                                <div className="cta-svg">
                                          <img src={ctasvg} alt="" />
                                </div>
                       </div>

                       <div className="footer-content">
                                   <div className="footer-column-flexy">
                                             <div className="footer-company-description">
                                                         <img src={logo} alt="" />
                                                         <p>Architectural excellence tailored to your vision. Discover the art of design with us</p>
                                             </div>

                                             <div className="footer-social-links">
                                                        <ul> 
                                                                <li><Link to={"/"}><span><FaFacebookF /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaLinkedinIn /></span></Link></li>
                                                        </ul>
                                             </div>
                                   </div>
                                   <div className="footer-column-griddy">
                                           <div className="footer-sub-grid">
                                                      <h3 className="footer-title">Contact Info</h3>
                                                      <h2>Brandon Ethan House, Kolobot Rd, Ngara - Nairobi,Kenya</h2>

                                                      <h3 className="footer-title">Looking for expedited assistance?</h3>
                                                      <h2>hello@rpsa.co.ke</h2>
                                                      <h2>+254 727 516 222</h2>
                                           </div>
                                           <div className="footer-sub-grid">
                                                        <h3 className="footer-title">Pages</h3>
                                                        <ul>
                                                                 <li><Link to={"/about-us"}>About Us</Link></li>
                                                                 <li><Link to={"/projects"}>Our Work</Link></li>
                                                                 <li><Link to={"/services"}>Services</Link></li>
                                                                 {/* <li><Link to={"/"}>Articles</Link></li> */}
                                                                 <li><Link to={"/contact-us"}>Contact Us</Link></li>
                                                        </ul>
                                           </div>
                                   </div>
                       </div>


                       <div className="copyright">
                                   <p>&copy; {new Date().getFullYear()} Reniassance Per Salut Architects</p>
                                   <div className="copyright-links">
                                             <Link to={"#"}>Privacy Policy</Link>
                                             <Link to={"#"}>Terms of Service</Link>
                                   </div>
                       </div>
               </div>
    </footer>
  )
}

export default Footer