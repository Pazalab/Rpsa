import { useEffect, useState } from "react"
import { projects } from "../../data/portfolio"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";

const WorkBody = () => {
    const [ active, setActive ] = useState({ 
          idx: 0,
          title: "All",
    })

    const switchActive = (i, val) => {
           setActive({ idx: i, title: val})
    }
    const navigate = useNavigate();
    
   //  useEffect(() => {
   //       if(searchParam){
   //            const param = searchParam.toString().slice(5, 30);
   //            setActive({...active, title: param}) 
   //       }
   //  }, [searchParam, active])

  return (
    <div className="work-body">
               <div className="inner-row">
                          <div className="work-body-content">
                                     <div className="work-body-shifts">
                                                <div className="shift-title">
                                                            <h3>{active.title ? active.title : "All"}</h3>
                                                </div>
                                                <ul>
                                                         <li onClick={() => switchActive(0, "All")} className={ active.idx === 0 ? "active" : ""}>All</li>
                                                         <li onClick={() => switchActive(1, "Institutional")} className={ active.idx === 1 ? "active" : ""}>Institutional</li>
                                                         <li onClick={() => switchActive(2, "Healthcare")} className={ active.idx === 2 ? "active" : ""}>Healthcare</li>
                                                         <li onClick={() => switchActive(3, "Hospitality")} className={ active.idx === 3 ? "active" : ""}>Hospitality</li>
                                                         <li onClick={() => switchActive(4, "Residential")} className={ active.idx === 4 ? "active" : ""}>Residential</li>
                                                         <li onClick={() => switchActive(5, "Religious")} className={ active.idx === 5 ? "active" : ""}>Religious</li>
                                                         <li onClick={() => switchActive(6, "Interiors")} className={ active.idx === 6 ? "active" : ""}>Interiors</li>
                                                </ul>
                                     </div>

                                     <div className="work-body-row">
                                             { active.title === "All" ?
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
                                                     active.title === "Institutional" ?
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
                                                     active.title === "Healthcare"  ?
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
                                                     active.title === "Hospitality" ?
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
                                                     active.title === "Residential"    ?
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

                                                     active.title === "Religious" ?
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
                                                        active.title === "Interiors" ?
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