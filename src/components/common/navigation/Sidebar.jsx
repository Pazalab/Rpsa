import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo2.png"
import { CgClose } from "react-icons/cg"
import { LuMoveRight } from "react-icons/lu";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useContext, useEffect, useRef } from "react";
import { sidebarContext } from "./navcontext";
import gsap from "gsap";

const Sidebar = () => {
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const sidebarRef = useRef();
  //close sidebar
  const closeSidebar = () => setSidebarStatus(false);

  useEffect(() => {
        if(sidebarStatus){
              //  sidebarRef.current.classList.add("active")
               const tl = gsap.timeline();
               const tl2 = gsap.timeline();
               tl.to(sidebarRef.current, {
                     scaleY: 1,
                     duration: 0.75
                })
              tl.to(sidebarRef.current.querySelector(".sidebar-head"), {
                    opacity: 1,
                    duration: 0.3
              })
             tl.to(sidebarRef.current.querySelector(".social-links"), {
                   scale: 1,
                   duration: 0.5
             })
             sidebarRef.current.querySelectorAll(".sidebar-nav ul li").forEach(item => {
                    tl.to(item, {
                           opacity: 1,
                           duration: 0.3
                    })
             })

             tl2.to(sidebarRef.current.querySelector(".sidebar-section-small-column"), {
                  x: 0,
                duration: 0.5
            })
            tl2.to(sidebarRef.current.querySelector(".sidebar-small-content"), {
                  opacity: 1,
                  duration: 0.5
            })

        }else{
               const tl = gsap.timeline();

               tl.to(sidebarRef.current.querySelector(".social-links"), {
                    scale: 0,
                   duration: 0.2
              })
              const elements = [...sidebarRef.current.querySelectorAll(".sidebar-nav ul li")];
              elements.reverse().forEach(item => {
                      tl.to(item, {
                             opacity: 0,
                             duration: 0.2
                      })
               })
              tl.to(sidebarRef.current.querySelector(".sidebar-head"), {
                  opacity: 0,
                  duration: 0.2
             })

            tl.to(sidebarRef.current.querySelector(".sidebar-section-small-column"), {
                   x: "100%",
                   duration: 0.5
             })
            tl.to(sidebarRef.current, {
                  scaleY: 0,
                  duration: 0.5
            })

      }
  }, [sidebarStatus])

  return (
    <div ref={sidebarRef} className="sidebar-section">
              <div className="sidebar-section-big-column">
                       <div className="sidebar-inner">
                                  <div className="sidebar-top">
                                              <div className="sidebar-head">
                                                        <Link to={"/"} className="logo">
                                                                  <img src={logo} alt="" />
                                                        </Link>
                                                        <span onClick={closeSidebar}><CgClose /></span>
                                              </div>
                                              <div className="sidebar-nav">
                                                        <ul>
                                                                <li><NavLink to={"/"}>Home <span><LuMoveRight /></span></NavLink></li>
                                                                <li><NavLink to={"/about-us"}>About Us<span><LuMoveRight /></span></NavLink></li>
                                                                <li><NavLink to={"/services"}>Services<span><LuMoveRight /></span></NavLink></li>
                                                                <li><NavLink to={"/projects"}>Our Projects<span><LuMoveRight /></span></NavLink></li>
                                                                {/* <li><NavLink to={"/"}>Articles <span><LuMoveRight /></span></NavLink></li> */}
                                                                <li><NavLink to={"/contact-us"}>Contact Us <span><LuMoveRight /></span></NavLink></li>
                                                        </ul>
                                              </div>
                                  </div>
                                  <div className="sidebar-bottom">
                                             <div className="social-links">
                                                       <ul>
                                                                <li><Link to={"/"}><span><FaFacebookF /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaInstagram /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                <li><Link to={"/"}><span><FaLinkedinIn  /></span></Link></li>
                                                       </ul>
                                             </div>
                                  </div>
                       </div>
              </div>
              <div className="sidebar-section-small-column">
                        <div className="sidebar-small-content">
                                  <div className="sidebar-small-header">
                                               <span onClick={closeSidebar}><CgClose /></span>
                                  </div>

                                  <div className="sidebar-box-moja with-line">
                                           <h4>Have a Project?</h4>
                                           <h2>letstalk@rpsa.co.ke</h2>
                                  </div>
                                  <div className="sidebar-box-moja"> 
                                           <h4>Want to Work with Us?</h4>
                                           <Link to={"/"}>Send Brief <span><LuMoveRight /></span></Link>
                                  </div>
                                  <div className="sidebar-box-moja">
                                            <h4>Want to Book an Appointment?</h4>
                                            <Link to={"/"}>Book Now <span><LuMoveRight /></span></Link>
                                  </div>
                        </div>
              </div>
    </div>
  )
}

export default Sidebar