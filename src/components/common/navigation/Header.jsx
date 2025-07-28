import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "../../../assets/logo.png"
import logo2 from "../../../assets/logo2.png"
//import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const { pathname } = useLocation();
  const path = pathname.slice(10, 14);

  const openSidebar = () => setSidebarStatus(true)
  return (
    <header className={path === "view" ? "black-adjust": ""}>
              <div className="inner-row">
                           <div className="header-content">
                                     <Link to={"/"} className="logo">
                                               { path === "view" ? <img src={logo2} alt="RPSA logo" /> : <img src={logo} alt="Rpsa logo" /> }
                                     </Link>
                                     
                                     <div className="header-right-stuff">
                                              <nav>
                                                      <ul>
                                                                <li><NavLink to={"/"}>Home </NavLink></li>
                                                                <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                                                <li><NavLink to={"/services"}>Services</NavLink></li>
                                                                <li><NavLink to={"/projects"}>Our Projects </NavLink></li>
                                                                {/* <li><NavLink to={"/resources"}>Resources</NavLink></li> */}
                                                                {/* <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li> */}
                                                      </ul>
                                            </nav>
                                              <div className="header-action">
                                                       <Link to={"/contact-us"}>Get in Touch</Link>
                                              </div>

                                              <div className="header-btn" onClick={openSidebar}>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                              </div>
                                     </div>
                           </div>
              </div>
    </header>
  )
}

export default Header