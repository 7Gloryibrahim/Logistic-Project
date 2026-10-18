import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// Imported mandatory built-in Swiper core styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Imported modules needed for automatic sliding and crossfades
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
const main ={
 hidden:{opacity:0},
 visible:{opacity:1, transition: {staggerChildren: 0.2, delayChildren:0.8}}
}

const children ={
 hidden:{opacity:0, y:30},
 visible:{opacity:1, y:0, transition:{duration:0.8}}
}

export default function Testimonials() {
  //  real client review data
  const clientReviews = [
    {
      quote: "This logistics company has completely transformed our supply chain. Their real-time tracking is flawlessly accurate, and shipments always hit our warehouses precisely on schedule.",
      author: "Sarah Jenkins",
      role: "Operations Director, Global Trade Co.",
      bgImage: "truck.JPG",
      client: "woman1.jpg"
    },
    {
      quote: "Incredibly transparent pricing structure and stellar customer service. Whenever customs hitches popped up, their management group handled it before it turned into a delay.",
      author: "Marcus Chen",
      role: "Supply Chain Manager, Apex Tech",
      bgImage: "shipn6.jpg",
      client: "man1.jpg"
    },
    {
      quote: "Safe handling, clean warehousing allocations, and exceptional shipping times. They have safely overseen over 400 of our freight deliveries this year alone without a single loss.",
      author: "David Ross",
      role: "Logistics Lead, Vanguard Brands",
      bgImage: "warehouse5.avif",
      client: "man2.jpg"
    }
  ];

  return (
    <div className="relative w-full h-[50em] lg:h-[80em]  lg:top-0 bg-[#CBCFDA] mx-auto  py-12">
      
      {/* Inline Styles injected directly into this component. 
          This completely bypasses the need for a separate styles.css file! */}
      <style>{`
        .testimonialSwiper {
          width: 100%;
          height: 420px;
        //   border-radius: 1rem;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .testimonialSwiper {
            height: 650px;
          }
        }
        /* Custom Orange Branding for Arrow Buttons */
        .testimonialSwiper .swiper-button-next,
        .testimonialSwiper .swiper-button-prev {
          color: #D44216 !important;
          transform: scale(0.65);
        }
        /* Custom Orange Branding for Active Pagination Dots */
        .testimonialSwiper .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.4;
        }
        .testimonialSwiper .swiper-pagination-bullet-active {
          background: #D44216 !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Header Section */}
      
      <motion.div variants={main} initial="hidden" whileInView="visible" viewport={{once: false}}  className="text-center mb-10">
        <motion.h2 variants={children} className="text-3xl lg:text-5xl font-bold text-[#192235] uppercase tracking-wide bebas-neue-regular">
          What Our Clients Say
        </motion.h2>
        <div className="bg-[#D44216] h-1 w-24 mx-auto mt-3"></div>
      </motion.div>

      {/* Swiper Implementation */}
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay: 4500, 
          disableOnInteraction: false,
           pauseOnMouseEnter: true, 
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Navigation, Pagination, Autoplay]}
        className="testimonialSwiper shadow-2xl"
      >
        {clientReviews.map((review, index) => (
          <SwiperSlide key={index} className="relative w-full h-full bg-black ">
            
            {/* Background Image behind the text */}
            <img 
              src={review.bgImage} 
              className="absolute inset-0 w-full h-full object-cover select-none  " 
              alt="Logistics context background"
            />
            
            <img src={review.client}
            alt="client testimonies"
            className='absolute w-30 z-30 rounded-full h-30 shadow shadow-[#D44216] left-[38em] top-12 border-2  border-[#D44216]'
            />

            {/* Dark tint overlay ensures white typography is highly readable over your image */}
            <div className="absolute inset-0 bg-black/65 flex flex-col justify-center items-center text-center p-8 lg:p-16 ">
              <span className="text-5xl lg:text-6xl text-[#D44216] font-serif leading-none h-4 ">“</span>
              
              <p className="text-white text-base lg:text-xl italic max-w-3xl mb-6 mt-4 leading-relaxed tracking-wide">
                {review.quote}
              </p>
              
              <h4 className="text-[#D44216] font-bold text-lg tracking-wider uppercase m-0">
                {review.author}
              </h4>
              
              <p className="text-gray-300 text-xs lg:text-sm mt-1">
                {review.role}
              </p>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
