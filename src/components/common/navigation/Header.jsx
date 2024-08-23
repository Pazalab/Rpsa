import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);

  const openSidebar = () => setSidebarStatus(true)
  return (
    <header>
              <div className="inner-row">
                           <div className="header-content">
                                     <Link to={"/"} className="logo">
                                               <img src={logo} alt="" />
                                     </Link>

                                     <div className="header-right-stuff">
                                               <h3>Call Us: +254 721 286 228</h3>

                                              <div className="header-right-column">
                                                       <div className="header-btn" onClick={openSidebar}>
                                                                  <span></span>
                                                                  <span></span>
                                                                  <span></span>
                                                        </div>
                                                        <span><IoSearchOutline /></span>
                                              </div>
                                     </div>
                           </div>
              </div>
    </header>
  )
}

export default Header