import { useEffect, useState } from "react"
import { projects } from "../../data/portfolio"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";

const WorkBody = () => {
    const [ active, setActive ] = useState("All")
    const { search } = useLocation();
 const navigate = useNavigate();

    const switchActive = (val) => {
           setActive(val)
          if(search !== ""){
               navigate("/projects")
               setActive(val)
          }
    }
   
    useEffect(() => {
          const searchVal = search.slice(6, search.length);
          if(searchVal !== ""){
               setActive(searchVal)
          }
    }, [search])

  return (
    <div className="work-body">
               <div className="inner-row">
                          <div className="work-body-content">
                                     <div className="work-body-shifts">
                                                <div className="shift-title">
                                                            <h3>{active}</h3>
                                                </div>
                                                <ul>
                                                         <li onClick={() => switchActive("All")} className={ active === "All" ? "active" : ""}>All</li>
                                                         <li onClick={() => switchActive("Institutional")} className={ active === "Institutional" ? "active" : ""}>Institutional</li>
                                                         <li onClick={() => switchActive("Healthcare")} className={ active === "Healthcare" ? "active" : ""}>Healthcare</li>
                                                         <li onClick={() => switchActive("Hospitality")} className={ active === "Hospitality" ? "active" : ""}>Hospitality</li>
                                                         <li onClick={() => switchActive("Residential")} className={ active === "Residential" ? "active" : ""}>Residential</li>
                                                         <li onClick={() => switchActive("Religious")} className={ active === "Religious" ? "active" : ""}>Religious</li>
                                                         {/* <li onClick={() => switchActive("Interiors")} className={ active === "Interiors" ? "active" : ""}>Interiors</li> */}
                                                </ul>
                                     </div>

                                     <div className="work-body-row">
                                             { active === "All" ?
                                                  projects.map(item => 
                                                        <div className="work-project-moja" key={item.id} onClick={() => navigate(item.link)}>
                                                                  <div className="image-section">
                                                                               <img src={item.main_image} alt="" />
                                                                               <div className="work-status">
                                                                                          { item.status}
                                                                               </div>
                                                                  </div>
                                                                  <h3>{item.title}</h3>
                                                                  <Link to={item.link}>View <span><BsArrowRight /></span></Link>
                                                         </div>
                                                     ) 
                                                     :
                                                     active === "Institutional" ?
                                                          <>
                                                                { projects.filter(item => item.category === "Institutional").length > 0 ?
                                                                   projects.filter(item => item.category === "Institutional").map(kitu =>
                                                                           <div className="work-project-moja" key={kitu.id} onClick={() => navigate(kitu.link)}>
                                                                                        <div className="image-section">
                                                                                                 <img src={kitu.main_image} alt="" />
                                                                                                 <div className="work-status">
                                                                                                            { kitu.status}
                                                                                                 </div>
                                                                                       </div>
                                                                                      <h3>{kitu.title}</h3>
                                                                                      <Link to={kitu.link}>View <span><BsArrowRight /></span></Link>
                                                                            </div>                 
                                                                   )  :<p>No projects uploaded yet for this category!</p>}
                                                          </>
                                                     :
                                                     active === "Healthcare"  ?
                                                     <>
                                                              { projects.filter(item => item.category === "Healthcare").length > 0 ?
                                                                 projects.filter(item => item.category === "Healthcare").map(kitu =>
                                                                         <div className="work-project-moja" key={kitu.id} onClick={() => navigate(kitu.link)}>
                                                                                        <div className="image-section">
                                                                                                 <img src={kitu.main_image} alt="" />
                                                                                                 <div className="work-status">
                                                                                                            { kitu.status}
                                                                                                 </div>
                                                                                       </div>
                                                                                      <h3>{kitu.title}</h3>
                                                                                      <Link to={kitu.link}>View <span><BsArrowRight /></span></Link>
                                                                            </div>                
                                                                 )  :<p>No projects uploaded yet for this category!</p>}
                                                        </>
                                                     :
                                                     active === "Hospitality" ?
                                                     <>
                                                              { projects.filter(item => item.category === "Hospitality").length > 0 ?
                                                                 projects.filter(item => item.category === "Hospitality").map(kitu =>
                                                                          <div className="work-project-moja" key={kitu.id} onClick={() => navigate(kitu.link)}>
                                                                                        <div className="image-section">
                                                                                                 <img src={kitu.main_image} alt="" />
                                                                                                 <div className="work-status">
                                                                                                            { kitu.status}
                                                                                                 </div>
                                                                                       </div>
                                                                                      <h3>{kitu.title}</h3>
                                                                                      <Link to={kitu.link}>View <span><BsArrowRight /></span></Link>
                                                                            </div>                  
                                                                 )  :<p>No projects uploaded yet for this category!</p>}
                                                        </>
                                                     :
                                                     active === "Residential"    ?
                                                            <>
                                                              { projects.filter(item => item.category === "Residential").length > 0 ?
                                                                 projects.filter(item => item.category === "Residential").map(kitu =>
                                                                          <div className="work-project-moja" key={kitu.id} onClick={() => navigate(kitu.link)}>
                                                                                        <div className="image-section">
                                                                                                 <img src={kitu.main_image} alt="" />
                                                                                                 <div className="work-status">
                                                                                                            { kitu.status}
                                                                                                 </div>
                                                                                       </div>
                                                                                      <h3>{kitu.title}</h3>
                                                                                      <Link to={kitu.link}>View <span><BsArrowRight /></span></Link>
                                                                            </div>                
                                                                 )  :<p>No projects uploaded yet for this category!</p>}
                                                        </>
                                                     :

                                                     active === "Religious" ?
                                                     <>
                                                              { projects.filter(item => item.category === "Religious").length > 0 ?
                                                                 projects.filter(item => item.category === "Religious").map(kitu =>
                                                                          <div className="work-project-moja" key={kitu.id} onClick={() => navigate(kitu.link)}>
                                                                                        <div className="image-section">
                                                                                                 <img src={kitu.main_image} alt="" />
                                                                                                 <div className="work-status">
                                                                                                            { kitu.status}
                                                                                                 </div>
                                                                                       </div>
                                                                                      <h3>{kitu.title}</h3>
                                                                                      <Link to={kitu.link}>View <span><BsArrowRight /></span></Link>
                                                                            </div>                   
                                                                 )  :<p>No projects uploaded yet for this category!</p>}
                                                        </>
                                                        :
                                                        active === "Interiors" ?
                                                         <>
                                                              { projects.filter(item => item.category === "Interiors").length > 0 ?
                                                                 projects.filter(item => item.category === "Interiors").map(kitu =>
                                                                          <div className="work-project-moja" key={kitu.id} onClick={() => navigate(kitu.link)}>
                                                                                        <div className="image-section">
                                                                                                 <img src={kitu.main_image} alt="" />
                                                                                                 <div className="work-status">
                                                                                                            { kitu.status}
                                                                                                 </div>
                                                                                       </div>
                                                                                      <h3>{kitu.title}</h3>
                                                                                      <Link to={kitu.link}>View <span><BsArrowRight /></span></Link>
                                                                            </div>                  
                                                                 )  :<p>No projects uploaded yet for this category!</p>}
                                                        </>
                                                        : 
                                                    ""
                                               }
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default WorkBody