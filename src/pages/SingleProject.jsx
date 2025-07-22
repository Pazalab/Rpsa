import { useParams } from "react-router-dom"
import Navbar from "../components/common/navigation/Navbar"
import { projects } from "../data/portfolio";
import Footer from "../components/common/Footer";

const SingleProject = () => {
    const { name } = useParams();
    const project = projects.find(item => item.url_param === name);

  return (
    <>
          <Navbar />
          <div className="single-project-body">
                    <div className="inner-row">
                              <div className="single-project-content">
                                        <div className="project-intro">
                                                   <h3>{project.category}</h3>
                                                   <h1>{project.title}</h1>
                                        </div>
                                        <div className="project-body-texts">
                                                  <div className="project-body-column">
                                                           <div className="project-overview-wrap">
                                                                     <h3>Project Overview</h3>
                                                                     <p>{project.intro}</p>

                                                                     <div className="overview-extra">
                                                                                <h4>Project Status: <span>{project.status}</span></h4>
                                                                                <h4>Client: <span>{project.client}</span></h4>
                                                                                <h4>Year: <span>{project.project_year}</span></h4>
                                                                     </div>
                                                           </div>
                                                  </div>
                                                  <div className="project-body-col">
                                                            <div className="project-main-image">
                                                                        <img src={project.main_image} alt="" />
                                                            </div>
                                                            { project.description.map(item => <p key={item}>{item}</p>)}

                                                            <div className="project-body-gallery">
                                                                    { project.gallery.map(item => 
                                                                             <img src={item} alt="project photo" key={item} />
                                                                    )}
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          </div>
          <Footer />
    </>
  )
}

export default SingleProject