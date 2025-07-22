import { Link } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { portfolio } from "../../data/portfolio";
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
                                                                           <Link to={"/projects"}>
                                                                                 <span className="top-border"></span>
                                                                                 <span className="right-border"></span>
                                                                                 <span className="bottom-border"></span>
                                                                                 <span className="left-border"></span>
                                                                        View all Work<span className="icon"><HiMiniArrowLongRight  /></span></Link>
                                                                  </div>
                                                </div>
                                      </div>
                                      <div className="portfolio-projects-row">
                                                { portfolio.map(pt => 
                                                      <div className="portfolio-project-moja" key={pt.id}>
                                                              <img src={pt.image} alt="" />
                                                              <div className="pt-texts">
                                                                         <h3>{pt.name}</h3>
                                                                         
                                                                         <Link to={pt.link}>Explore Category <span><HiMiniArrowLongRight /></span></Link>
                                                              </div>
                                                     </div>
                                                )}
                                      </div>
                          </div>
               </div>
    </div>
  )
}

export default PortfolioSection