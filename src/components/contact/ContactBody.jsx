import ContactForm from "./ContactForm"


const ContactBody = () => {
  return (
    <div className="contact-body">
               <div className="inner-row">
                           <div className="contact-body-content">
                                     <div className="contact-body-form">
                                            <div className="hero-landing-box">
                                                       <h2>Connect with Us</h2>
                                                       <p>We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.</p>

                                                       <ContactForm />
                                              </div>
                                     </div>
                                     <div className="contact-body-details">
                                                   <h2>Interested in Working with Us</h2>
                                                   <p>If you&apos;re excited about partnering with us, let&apos;s connect and explore how we can achieve remarkable results together! Reach out today to start a conversation about the possibilities.</p>

                                                   <div className="contact-details-row">
                                                            <div className="contact-detail-moja">
                                                                       <h4>Office Mail</h4>
                                                                       <p>info@rpsa.co.ke</p>
                                                            </div>
                                                            <div className="contact-detail-moja">
                                                                        <h4>Office Phone</h4>
                                                                        <p>+254 7359 75898</p>
                                                            </div>
                                                            <div className="contact-detail-moja">
                                                                         <h4>Office Address</h4>
                                                                         <p>Brandon Ethan House, Kolobot Rd, Ngara - Nairobi,Kenya</p>
                                                            </div>
                                                   </div>
                                     </div>
                           </div>
               </div>
    </div>
  )
}

export default ContactBody