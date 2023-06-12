import React from 'react';
import { productApi } from '../../redux/services/productApi';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import SliderLoader from './SliderLoader'
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'



const Sliders = () => {
   const { data, error, isLoading } = productApi.useFetchAllSlidersQuery('')
   SwiperCore.use([Autoplay]);
   SwiperCore.use([Navigation]);
   let swiperOptions = {
      loop: true,
      slidesPerView: 1,
      loopedSlides: 1,
      spaceBetween: 30,
      speed: 1300,
      freeMode: false,
      wrapperClass: "main_slider__block",
      centeredSlides: true,
      autoplay: {
         delay: 2200,
         disableOnInteraction: false,
      },
      breakpoints: {
         1590: {
            slidesPerView: 1,
            spaceBetween: 25,
         },
         768: {
            slidesPerView: 1,
            spaceBetween: 20,
         },
         575: {
            slidesPerView: 1,
            spaceBetween: 15,
         },
         300: {
            slidesPerView: 1,
            spaceBetween: 15,
         },
      },
   };
   const swiperRef = React.useRef<SwiperRef | null>(null)
   const goToNextSlide = () => {
      if (swiperRef.current && swiperRef.current?.swiper.slideNext) {
         swiperRef.current.swiper.slideNext(); // Switch to the next slide
      }
   };

   const goToPrevSlide = () => {
      if (swiperRef.current && swiperRef.current?.swiper.slidePrev) {
         swiperRef.current.swiper.slidePrev(); // Switch to the next slide
      }

   };
   return (
      <Swiper ref={swiperRef}
         {...swiperOptions}
         navigation
      >
         {isLoading ? <SwiperSlide >
            <SliderLoader />
         </SwiperSlide> :
            data && data.map((item) => (
               <SwiperSlide key={item.id}>
                  <img src={item.image} alt="" />
               </SwiperSlide>
            ))

         }
         {isLoading ? '' : (
            <>
               <div onClick={goToPrevSlide} className="swiper-button-prev"></div>
               <div onClick={goToNextSlide} className="swiper-button-next"></div>
            </>
         )
         }
      </Swiper >
   )
}


export default Sliders;