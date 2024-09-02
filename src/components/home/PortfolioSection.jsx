import { Link } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
               <div className="inner-row">
                          <div className="portfolio-section-content">
                                      <div className="portfolio-intro-strip">
                                                <div className="portfolio-intro-content">
                                                            <h4>Portfolio</h4>
                                                             <h2>We make buildings and places that matter. Working across a breadth of portfolios, we design by sharing ideas, testing limits, and meeting new challenges.</h2>

                                                             <div className="link-wrap">
                                                                           <Link to={"/"}>
                                                                                 <span className="top-border"></span>
                                                                                 <span className="right-border"></span>
                                                                                 <span className="bottom-border"></span>
                                                                                 <span className="left-border"></span>
                                                                        Know more<span className="icon"><HiMiniArrowLongRight  /></span></Link>
                                                                  </div>
                                                </div>
                                      </div>
                                      <div className="portfolio-projects-row">

                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default PortfolioSection