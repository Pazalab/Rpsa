import { Link } from "react-router-dom"
import logo from "../../../assets/logo.png"
const Header = () => {
  return (
    <header>
              <div className="inner-row">
                           <div className="header-content">
                                     <Link to={"/"} className="logo">
                                               <img src={logo} alt="" />
                                     </Link>
                           </div>
              </div>
    </header>
  )
}

export default Header