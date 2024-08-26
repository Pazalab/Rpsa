import { Swiper, SwiperSlide } from "swiper/react"
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
// import required modules
import { EffectCreative, Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";

const hero_data = [
      {
           id: 1,
           image: "one",
           statement: "Crafting Innovative Architecture for Inspired Living.",
           description: "We push design boundaries to craft spaces that inspire and enhance everyday living, from residential to commercial."
      },
      {
        id: 2,
        image: "two",
        statement: "Where Vision Meets Precision, and Ideas Become Landmarks.",
        description: "We turn visionary ideas into iconic structures with meticulous detail and a commitment to excellence."
      },
      {
        id: 3,
        image: "three",
        statement: "Designing Timeless Spaces, Shaping Lasting Legacies",
        description: "We blend classic design with innovation to create enduring spaces that enrich communities and stand the test of time."
      }
]
const HeroSection = () => {
  const [ swiperRef, setSwiperRef ] = useState(null);
  const [swiperIndex, setSwiperIndex] = useState(0)

  console.log(swiperRef)
  return (
    <div className="hero-section">
              <div className="hero-slider">
                       <Swiper
                           slidesPerView={1}
                           loop={true}
                           speed={1000}
                           effect={'creative'}
                           direction={'vertical'}
                           autoplay= {{
                                delay: 8500,
                                disableOnInteraction: false
                          }}
                          creativeEffect={{
                               prev: {
                                      shadow: true,
                                      translate: [0, "-20%", -1],
                               },
                              next: {
                                     translate: [0, "100%", 0],
                              },
                          }}
                          onSwiper={(swiper) => setSwiperRef(swiper)}
                          onActiveIndexChange={(swiper) => {
                                    setSwiperIndex(swiper.realIndex)
                          }}
                          className="mySwiper"
                           modules={[EffectCreative, Autoplay, Pagination]}
                       >
                              { hero_data.map(slide => 
                                  <SwiperSlide key={slide.id}>
                                          { ({isActive}) => (
                                                   <div className={`hero-slide-moja ${slide.image}`}>
                                                             <div className="image-plus-overlay"></div>
                                                             <div className={ isActive ? "hero-slide-texts active" : "hero-slide-texts"}>
                                                                      <div className="inner-row">
                                                                              <div className="hero-slide-inner-wrap">
                                                                                           <h1>{slide.statement}</h1>
                                                                                           <p>{slide.description}</p>
                                                                              </div>
                                                                              <div className="hero-social-links">
                                                                                         <ul>
                                                                                                  <li><Link to={"/"} target="_blank"><FaFacebookF /></Link></li>
                                                                                                  <li><Link to={"/"} target="_blank"><FaXTwitter /></Link></li>
                                                                                                  <li><Link to={"/"} target="_blank"><FaLinkedinIn /></Link></li>
                                                                                         </ul>
                                                                                 </div>
                                                                   </div>
                                                        </div>
                                                </div>
                                           )}
                                 </SwiperSlide>
                              )}
                       </Swiper>
                       <div className="hero-activity-wrap">
                              <div className="hero-activity-wrap-inner">
                                        <div className="hero-activity-status">
                                                  <span onClick={() => swiperRef.slideTo(0)} className={swiperIndex == 0 ? "active" : ""}></span>
                                                  <span onClick={() => swiperRef.slideTo(1)}  className={swiperIndex == 1 ? "active" : ""}></span>
                                                  <span onClick={() => swiperRef.slideTo(2)}  className={swiperIndex == 2 ? "active" : ""}></span>
                                        </div>
                                          <div className="hero-switches">
                                                    <span className="swiper-button-prev" onClick={() => swiperRef.slidePrev()}><HiOutlineArrowLongLeft /></span>
                                                    <span className="swiper-button-next" onClick={() => swiperRef.slideNext()}><HiOutlineArrowLongRight /></span>
                                          </div>
                              </div>
                      </div>
              </div>
    </div>
  )
}

export default HeroSection