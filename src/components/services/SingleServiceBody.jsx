/* eslint-disable react/prop-types */
import { HiOutlineDocumentText } from "react-icons/hi2";
const SingleServiceBody = ({ data }) => {
  
  return (
    <div className="single-service-body">
            <div className="inner-row">
                        <div className="single-service-content">
                                     <img src={data.service_image} alt="" />
                                     
                                     <div className="about-service-body">
                                                <h4>About the Service</h4>
                                                <p>{data.definition}</p>
                                                { data.body && data.body.map(item => <p key={item}>{item}</p>)}


                                                <div className="bronchure">
                                                           <div className="bronchure-texts">
                                                                    <h3>Download our Brochure</h3>
                                                                    <span>Discover the full range of our offerings in one place, how we can bring your vision to life and what makes us the ideal partner for your architectural needs.</span>
                                                           </div>
                                                           <button>Download Brochure <span><HiOutlineDocumentText /></span></button>
                                                </div>
                                     </div>
                        </div>
            </div>
    </div>
  )
}

export default SingleServiceBody