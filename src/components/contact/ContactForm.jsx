
const ContactForm = () => {
  return (
    <div className="contact-form">
              <form>
                         <div className="form-row">
                                    <label htmlFor="full name">Full name</label>
                                    <input type="text" className="input-control" />
                         </div>
                         <div className="form-row">
                                   <label htmlFor="email">Email Address</label>
                                   <input type="email" className="input-control" />
                         </div>
                         <div className="form-row">
                                   <label htmlFor="subject">Subject of Inquiry</label>
                                   <input type="text" className="input-control" />
                         </div>
                         <div className="form-row">
                                    <label htmlFor="message">Message</label>
                                   <textarea className="text-control"></textarea>
                         </div>
                         <div className="form-btn">
                                   <button type="submit">Submit Message</button>
                         </div>
              </form>
    </div>
  )
}

export default ContactForm