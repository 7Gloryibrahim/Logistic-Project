

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; 

import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState, useEffect,useRef } from "react";
import { IoAirplaneSharp } from "react-icons/io5";


const slides =[

    {
        imagePath: "/freeShip.jpg",
        title: "Ocean Freight",
         description:"A Logistic service provider company plays a pivotal role in the global supply chain, logistic service"
    },


      {
        imagePath: "/shipping.webp",
        title: "Warehouse",
        description:"A Logistic service provider company plays a pivotal role in the global supply chain, logistic service"
    },

  {
        imagePath: "/shpin3.jpg",
        title:"Warehouse",
        description:"A Logistic service provider company plays a pivotal role in the global supply chain, logistic service"
    },

      {
        imagePath: "/inter.jpg",
        title:"International Freight",
        description:"A Logistic service provider company plays a pivotal role in the global supply chain, logistic service"
    },

      {
        imagePath: "/shipn5.jpg",
        title:"Ocean Freight",
        description:"A Logistic service provider company plays a pivotal role in the global supply chain, logistic service"
    },

  {
        imagePath: "/shipn4.jpg",
        title:"Warehouse",
        description:"A Logistic service provider company plays a pivotal role in the global supply chain, logistic service"
    },

{
        imagePath: "/train.jpg",
        title:"Rail Freight",
        description:"A Logistic service provider company plays a pivotal role in the global supply chain, logistic service"
    }

]



export default function Services(){

//   const [isClient, setIsClient] = useState(false);


//  var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };
 
// useEffect(() => {
//   setIsClient(true);
// }, []);


//     const [initialSlides, setInitialSlides] = useState(0)



// useEffect(() => {
//   const interval = setInterval(() => {
   
//     setInitialSlides(
//       (prevSlide) => (prevSlide + 1) % slides.length
//     );
//   }, 5000);

//   return () => clearInterval(interval);
// },  []);

// const visibleSlides = [
//   slides[initialSlides],
//   slides[(initialSlides + 1) % slides.length],
//   slides[(initialSlides + 2) % slides.length],
// ];

// const nextSlide = () => {
//   setInitialSlides(
//     (prevSlide) => (prevSlide + 1) % slides.length
//   );
//   console.log("next")
// };

// const prevSlide = () => {
//   setInitialSlides(
//     (prevSlide) =>
//       (prevSlide - 1 + slides.length) % slides.length
//   );
// };

 

 

    return(
<div style={{backgroundImage:"url('/blob.jpg')", backgroundSize:"cover",backgroundPosition:"center", overflow:"hidden", backgroundAttachment:"scroll"}} className="h-[50em] lg:h-[64em] relative">

                <section>
                    <img src="/container1.png" alt="container1" className=" blueOrange absolute hidden md:block lg:block -top-3 left-2.5" />
                    <div className="absolute w-full top-28">
                    <div className="absolute left-24  flex md:left-72 lg:left-130   items-center gap-3">
                        <div className="h-1 w-6 bg-[#F75127] rounded-2xl"></div>
                        <div className="font-bold font-sans text-2xl text-[#111827]">
                            <p>
                                Our Services
                            </p>
                        </div>
                        <IoAirplaneSharp  className="IoAirplaneSharp text-[#CBCFDA] lg:text-[#F75127] text-2xl"/>
                    </div>

                    <div className="absolute mt-10 left-5 text-2xl uppercase md:text-3xl md:left-44 lg:left-60 lg:mt-10 font-bold text-[#111827]">
                        <p className="lg:text-5xl">Provide Efficient Logistics</p>

                         <div className="flex ml-12 lg:text-5xl lg:justify-center uppercase gap-2">
                        <p>Solutions</p>
                        <p className="underline text-[#F75127] md:text-[#111827] lg:text-[#F75127]">Business</p>
                    </div>
                    </div>
                   {/* <div className="relative items-center top-72 slidermain">
                <div className="flex transition-transform duration-300 ease-in-out gap-3 overflow-hidden mx-6 slider" 
              >
                    { visibleSlides.map((slides, index)=>
                     <div key={index} className="w-1/3 shrink-0" >
                     <img src={slides.imagePath} alt="slides" className="h-72 w-full object-cover"/>
                     <p></p>
                </div>
                )}
                </div>
                </div>
                <div className="flex justify-between relative top-33 items-center mx-5  ">

                <button onClick={prevSlide} className="bg-[#111827] text-[#F75128] rounded-full  p-4" >
  <MdArrowBackIosNew />
</button>

<button onClick={nextSlide} className="bg-[#111827] text-[#F75128] rounded-full p-4">
 < MdArrowForwardIos />
</button>
               </div>  */}
           <Swiper
           effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
           pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        loop= {true}
         spaceBetween={0} 
       slidesPerView={3}

breakpoints={{
 320: {
    slidesPerView: 1,
  },

768:{
  slidesPerView: 1,
},

1024:{
  slidesPerView:3,
}

}}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          
          depth: 100,
          modifier: 1,
          slideShadows:false
          
        }}
        
        pagination={true}
           navigation={true}  
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper top-60 h-125 "
             >
              
               
           
                  {slides.map((slides,index)=>
              <SwiperSlide key={index} className='relative   lg:w-52'>
                <div className='relative'>
              <img src={slides.imagePath} alt='slides' className="rounded h-72 w-full px-10 lg:p-0 lg:w-fit object-cover" />
             <h1 className='absolute text-3xl font-sans font-bold text-[#F75128] text-center backdrop-blur-lg border-2 border-[#2B313F] shadow-2xl shadow-black text-shadow-2xs text-shadow-black w-fit p-3 flex uppercase left-16 md:left-28 lg:left-6 top-4 rounded-r-full'>
              {slides.title}
              </h1>
             
                      <div className='absolute p-6 bg-white rounded-2xl top-64 mx-1 md:mx-16 lg:mx-16 items-center shadow-2xl shadow-black'>
                        <div >
                        <p className=' w-fit   font-bold font-sans items-center'>{slides.description}</p>
                        </div>
                        <div className='p-2 w-fit pb-7 mt-2  backdrop-blur-xl  border-2 border-[#F75128] rounded-full'>
                        <p className='mt-7 font-bold font-sans bg-[#192235] text-white text-shadow-2xs text-shadow-[#F75128] p-2 rounded-full'>Read More</p>
                      </div>
                      </div>
                  </div>
                  
              </SwiperSlide>
             
             )}
           
               </Swiper>


  
                    </div>
                </section>

    </div>

    )
    
}