import { GoPlus } from "react-icons/go";
import { faqs } from "../../data/faq";
import { useState } from "react";
const Faqs = () => {
    const [ active, setActive ] = useState(null);

  return (
    <div className="faq-section">
               <div className="inner-row">
                          <div className="faq-section-content">
                                       <div className="faq-section-column flex">
                                                <div className="faq-intro">
                                                          <h3>Faq</h3>
                                                          <h2>Frequently Asked Questions</h2>
                                                </div>

                                                <div className="faq-cta">
                                                          <h4>You have different questions?</h4>
                                                          <p>Our team will answer all your questions, we ensure a quick response.</p>

                                                          <h5><span>Call us:</span> +254 721 286 228</h5>
                                                </div>
                                       </div>
                                       <div className="faq-section-column">
                                                 { faqs.map(faq => 
                                                        <div className={active === faq.id ? "faq-moja active": "faq-moja"} key={faq.id}>
                                                                   <div className="faq-header" onClick={() => setActive(faq.id)}>
                                                                              <h3>{faq.question}</h3>
                                                                              <span><GoPlus /></span>
                                                                   </div>
                                                                   <div className="faq-answer">
                                                                             <div className="faq-answer-inner">
                                                                                       <p>{faq.answer}</p>
                                                                             </div>
                                                                   </div>
                                                        </div>
                                                 )}
                                       </div>
                          </div>
               </div>
    </div>
  )
}

export default Faqs