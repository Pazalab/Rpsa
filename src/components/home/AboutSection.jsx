import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const aboutRef = useRef();

    useEffect(() => {
        const aboutWrapper = aboutRef.current;

        let ctx = gsap.context(() => {
               if(window.innerWidth > 1090){
                      gsap.to(aboutWrapper.querySelector(".top-part h2"), {
                               y: "-400",
                               duration: 0.8,
                               scrollTrigger: {
                                      trigger: aboutWrapper,
                                      start: "10%",
                                      scrub: true
                               }
                      })

                      gsap.to(aboutWrapper.querySelector(".middle-part h2.left"), {
                              x: "-600",
                              duration: 0.8,
                              scrollTrigger: {
                                     trigger: aboutWrapper,
                                     start: "10%",
                                     scrub: true,
                              }
                      })

                      gsap.to(aboutWrapper.querySelector(".middle-part h2.right"), {
                            x: "600",
                            duration: 0.8,
                            scrollTrigger: {
                                   trigger: aboutWrapper,
                                   start: "10%",
                                   scrub: true,
                            }
                    })

                      gsap.to(aboutWrapper.querySelector(".bottom-part h2"), {
                            y: "400",
                            duration: 0.8,
                            scrollTrigger: {
                                   trigger: aboutWrapper,
                                   start: "10%",
                                   scrub: true,
                            }
                    })

                    gsap.to(aboutWrapper.querySelector(".middle-media"), {
                            width: "100%",
                            duration: 0.75,
                            scrollTrigger: {
                                    trigger: aboutWrapper,
                                    start: "10%",
                                    scrub: 1
                            }
                    })
               }
        })

        return () => ctx && ctx.revert();
          
    }, [])
  return (
    <div className="about-section">
             <div ref={aboutRef} className="about-section-content">
                         <div className="top-part">
                                <h2>We Design and</h2>
                         </div>
                         <div className="middle-part">
                                   <h2 className="left">Build Spaces</h2>
                                   <div className="middle-media">
                                               <video autoPlay loop muted>
                                                             <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1724697528/jwzgnt2xyyzxwkvrxucu.mp4" type="video/mp4" />
                                                   </video>
                                   </div>
                                   <h2 className="right">That Inspire</h2>
                         </div>
                         <div className="bottom-part">
                                 <h2>Extraordinary Lifestyles</h2>
                         </div>
             </div>
    </div>
  )
}

export default AboutSection