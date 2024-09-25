import { processes } from "../../data/process"
const ProcessSection = () => {
  return (
    <div className="process-section">
            <div className="inner-row">
                      <div className="process-section-content">
                                  <div className="intro">
                                            <h2>We Work with You Every step of the Way</h2>
                                  </div>

                                  <div className="process-section-row">
                                            { processes.map(item => 
                                              <div className="process-moja" key={item.id}>
                                                         <figure>Step {item.id}</figure>
                                                         <span className="dot"></span>

                                                         <h3>{item.title}</h3>
                                                         <p>{item.explanation}</p>
                                             </div>
                                            )}
                                  </div>
                      </div>
            </div>
    </div>
  )
}

export default ProcessSection