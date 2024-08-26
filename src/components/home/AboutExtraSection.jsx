import { Link } from "react-router-dom"
import { HiMiniArrowLongRight } from "react-icons/hi2";

const AboutExtraSection = () => {
  return (
    <div className="about-extra-section">
               <div className="inner-row">
                       <div className="about-extra-section-content">
                                   <h3><span>Renaissance per Salut Architects </span>is a Kenyan firm committed to excellence in Africa’s building industry. With 30+ years of combined experience, we deliver sustainable, cost-effective designs across residential, healthcare, commercial, and hospitality sectors. Our projects emphasize environmentally conscious solutions, using renewable energy, efficient systems, natural ventilation, and locally sourced materials to maximize value and comfort.</h3>
                                    
                                 <div className="link-wrap">
                                          <Link to={"/"}>
                                                <span className="top-border"></span>
                                                <span className="right-border"></span>
                                                <span className="bottom-border"></span>
                                                <span className="left-border"></span>
                                          More About Us <span className="icon"><HiMiniArrowLongRight  /></span></Link>
                                 </div>
                       </div>

                       <div className="numbers-row">
                                 <div className="number-moja">
                                            <h2>750+</h2>
                                            <h4>Projects Completed</h4>
                                 </div>
                                 <div className="number-moja">
                                            <h2>150+</h2>
                                            <h4>Clients Served</h4>
                                 </div>
                                 <div className="number-moja">
                                            <h2>75k</h2>
                                            <h4>Square feet Built</h4>
                                 </div>
                                 <div className="number-moja">
                                            <h2>97%</h2>
                                            <h4>Success Rate</h4>
                                 </div>
                       </div>
               </div>
    </div>
  )
}

export default AboutExtraSection