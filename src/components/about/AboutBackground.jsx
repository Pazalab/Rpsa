import about1 from "../../assets/arch5.jpg"
import about2 from "../../assets/arch3.jpg"
const AboutBackground = () => {
  return (
    <div className="about-background">
              <div className="inner-row">
                           <div className="about-background-content">
                                        <div className="intro">
                                                    <h3>Our Firm Story</h3>

                                                    <h4>Renaissance per Salut Architects is a leading architectural firm based in Kenya, renowned for its commitment to transforming the building industry in Africa. With an unwavering dedication to excellence, we design projects that are not only environmentally responsible and cost-effective but also elevate the value of our clients&apos; investments. Our team brings over 30 years of expertise, having delivered complex residential, healthcare, commercial, institutional, and hospitality projects for diverse clients both locally and globally.</h4>
                                        </div>
                                        <div className="about-background-split">
                                                    <div className="about-background-description">
                                                                <p>At Renaissance, we champion the future of sustainable architecture. Our designs integrate cutting-edge renewable energy, advanced recycling systems, and innovative energy-efficient technologies that set new standards in the industry. We believe in crafting context-sensitive spaces that maximize indoor comfort through natural ventilation, strategic daylighting, and the creative use of locally sourced materials. Every project is an opportunity to push boundaries, redefine sustainability, and create spaces that inspire.</p>
                                                                 {/* <p>We foster an open and transparent environment that encourages bold, professional creativity and collaboration throughout the design and execution process. As our client, you can rely on our unwavering commitment to turning your vision into reality. We are not just service providers but dedicated partners, relentlessly focused on ensuring the success of your projects with integrity and determination.</p> */}
                                                                <div className="statement-wrap">
                                                                         <h2>Mission Statement</h2>                                                               
                                                                          <p>As a company, we are on a mission to bridge the gap between innovation and practicality by harnessing technology and expertise to create design solutons that seamlessly integrate into everyday life.</p>
                                                                </div>
                                                                <div className="statement-wrap">
                                                                            <h2>Vision Statement</h2>
                                                                            <p>We envision being the leading provider in Africa of innovative, practical and impactful planning and design solutions that shape a better-built environment.</p>
                                                                </div>                                      
                                                    </div>
                                                    <div className="about-background-image">
                                                              <img src={about1} alt="" />
                                                              <img src={about2} alt="" />
                                                    </div>
                                        </div>

                                        <div className="about-statements-row">
                                                     <div className="about-empty-column"></div>
                                                     <div className="about-statements-description">
                                                               <h2>Values and Principles that drive Renaissance Africa&apos;s work</h2>

                                                               <div className="value-moja">
                                                                         <h4>Honesty and Integrity</h4>
                                                                         <p>We are committed to being transparent and truthful in every interaction, holding ourselves to the highest ethical standards. This unwavering commitment to integrity builds trust and fosters lasting relationships, ensuring that our actions consistently align with our words.</p>
                                                               </div>
                                                               <div className="value-moja">
                                                                         <h4>Commitment to Excellence</h4>
                                                                         <p>Every project we undertake is a testament to our hard work, determination, and drive to achieve the highest standards. We don&apos;t just meet expectations - we exceed, delivering results that reflect our passion for superior craftsmanship and dedication to perfection.</p>
                                                               </div>
                                                               <div className="value-moja">
                                                                           <h4>Collaboration and Openness</h4>
                                                                           <p>We thrive on collaboration and the power of shared ideas. By fostering a culture of openness, we create a vibrant space where professional minds can freely express bold, innovative solutions. Such an environment not only sparks creativity that also ensures that every design is enriched by diverse perspectives, driving groundbreaking outcomes.</p>
                                                               </div>
                                                               <div className="value-moja">
                                                                           <h4>Client-Centric Partnership</h4>
                                                                           <p>We view our clients as partners, fully committed to understanding and realizing their vision. Our approach goes beyond service delivery; it&apos;s about forging deep trust-based relationships where we stand shoulder-to-shoulder with our clients, championing their goals and ensuring the successful execution of their projects with unwavering support and dedication.</p>
                                                               </div>
                                                     </div>
                                        </div>
                           </div>
              </div>
    </div>
  )
}

export default AboutBackground