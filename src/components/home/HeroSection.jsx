import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
// import required modules
import { EffectCreative, Autoplay } from 'swiper/modules';
const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="hero-slider">
                       <Swiper
                           slidesPerView={1}
                           loop={true}
                           speed={1000}
                           direction={'vertical'}
                           autoplay= {{
                                delay: 3500,
                                disableOnInteraction: false
                          }}
                          creativeEffect={{
                            prev: {
                              shadow: true,
                              translate: [0, 0, -400],
                            },
                            next: {
                              translate: [0, "100%", 0],
                            },
                          }}
                          className="mySwiper"
                           modules={[EffectCreative, Autoplay]}
                       >
                               <SwiperSlide>
                                        <div className="hero-slide-moja one">
                                              <div className="hero-slide-texts">
                                               
                                              </div>
                                      </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                        <div className="hero-slide-moja two">
                                              <div className="hero-slide-texts">
                                               
                                              </div>
                                      </div>
                               </SwiperSlide>
                               <SwiperSlide>
                                        <div className="hero-slide-moja three">
                                              <div className="hero-slide-texts">
                                               
                                              </div>
                                      </div>
                               </SwiperSlide>
                       </Swiper>
              </div>
    </div>
  )
}

export default HeroSection