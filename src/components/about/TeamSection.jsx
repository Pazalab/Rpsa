import { team } from "../../data/team"

const TeamSection = () => {
  return (
    <div className="team-section">
              <div className="inner-row">
                       <div className="team-section-content">
                                   <div className="team-section-column">
                                               <div className="intro">
                                                        <h3>Meet The Team</h3>
                                                        <p>Our team of experienced architects, designers, and project managers share a passion for problem-solving and a commitment to creating exceptional spaces while responsibly stewarding both the natural and built environment.</p>
                                               </div>
                                               <div className="team-members">
                                                         { team.slice(0,2).map(item =>
                                                              <div className="team-moja" key={item.id}>
                                                                          <img src={item.image} alt="" />

                                                                          <div className="profile-texts">
                                                                                    <h4>{item.name}</h4>
                                                                                    <p>{item.position}</p>
                                                                          </div>
                                                                </div>
                                                         )}
                                               </div>
                                   </div>
                                   <div className="team-section-column grid">
                                              { team.slice(2, 8).map(item => 
                                                       <div className="team-moja" key={item.id}>
                                                                 <img src={item.image} alt="" />

                                                                 <div className="profile-texts">
                                                                           <h4>{item.name}</h4>
                                                                           <p>{item.position}</p>
                                                                 </div>
                                                       </div>
                                              )}
                                   </div>
                       </div>
              </div>
    </div>
  )
}

export default TeamSection