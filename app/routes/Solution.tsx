import { useState } from "react";
import { Link } from "react-router";
import { BsGeoAltFill } from "react-icons/bs";
import {motion} from "framer-motion"
import { GiCommercialAirplane } from "react-icons/gi";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { VscGlobe } from "react-icons/vsc";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbPhoneCalling } from "react-icons/tb";
import { BsGrid3X3Gap } from "react-icons/bs";
import "@fontsource/oswald/500.css";

interface RotatingBadgeProps {
  text?: string;
  size?: number;
  duration?: number
  textRadiusRatio?: number;
}
export default function Solution( { 
  text = 'YOU ARE WELCOME • SINCE 2002•EXPLORE OUR SERVICES•',
  
  duration= 12,
  textRadiusRatio =0.76
}: RotatingBadgeProps){

 const r = 200 * 0.48;
 const textR =r * textRadiusRatio
 const center = 200/2;
  
    return(
        <div>
           <section  className="relative mt-0 border-t-2 border-t-[#F75128] border-b-2 border-b-[#F75128] w-full h-[300vh] overflow-hidden md:h-[230vh] lg:h-[120vh] ">
            <video
            autoPlay
            muted
            playsInline
            loop
           className="h-[410vh] w-full object-cover lg:h-full"
            >
                <source src="/LogisticVideo.mp4" type="video/mp4" className="absolute "/>
                </video>
                <div className="absolute z-10 bg-black/70 inset-0 object-cover"></div>
               {/*main container*/}
                <div className="absolute top-6 z-20 w-full h-screen p-7">
                    <div className="grid grid-cols-1 gap-7   md:grid-cols-1  lg:grid-cols-2 lg:gap-7">
                        
                        {/*Text container*/}
                        <motion.div  initial={{ opacity: 0, y: 50 }}   
                                    whileInView={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.8, ease: 'easeOut' }}
                                    
                                     viewport={{once:false,
                                     
                                     }}
                            className="backdrop-blur-md p-5  border-2 h-fit border-white">
                           {/* Little horizontal line */}
                            <div className="flex items-center gap-2">
                              <span className="h-1 w-7 rounded bg-[#F75128]"></span>
                            <p className="text-white text-2xl">OUR COMPANY</p>
                            </div>
                            
                            <p className=" text-white text-2xl font-bold md:text-4xl lg:text-4xl space-x-0.5">Our Expertise Stands in</p>
                            <p className="text-[#F75128] text-2xl font-extrabold underline mt-4 md:text-5xl lg:text-5xl uppercase">Logistics Solutions</p>
                            <p className="font-bold font-sans text-[20px] text-white mt-7">Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently managing the movement of goods from origin to final destination.</p>
                            
                            {/* The two white Boxes */}
  {/* The main container for them */} <div className="flex-1 gap-6 mt-28 md:flex lg:flex">
    
    {/* First Box */}
                            <div className="box1 mb-5 rounded bg-white border-l-4 border-[#F75128] p-5 lg:mb-0">
                              <div className="flex items-center gap-3">
                                <p className=" text-[#F75128] font-bold text-2xl border-r-2 pr-1 h-6 items-center"> < VscGlobe className="box-icon1" /></p>
                               
                                <p className="font-bold text-[#111827]">Worldwide Service</p>
                              </div>
                              <p className="w-fit text-[#111827] mt-2">Logistic service provider company plays a pivotal role in the global</p>
                            </div>
    {/* Second Box */}
                            <div className=" box2 mb-5 rounded bg-white border-l-4 border-[#F75128] p-5 lg:mb-0 ">
                              <div className="flex items-center gap-3">
                                <p className=" text-[#F75128] text-2xl border-r-2 border-[#F75128] pr-1 "><RiCustomerService2Fill className="box-icon2"/></p>
                                <p className="font-bold text-[#242B39]">24/7 Online Support</p>
                              </div>
                              <p className="text-[#2B313F] font-sans w-fit font-oswald ">Logistic service provider company plays a pivotal role in the global</p>
                            </div>
                            </div>
                             {/* Button & Box */}
                             <div className=" flex-1 gap-7 items-center mt-5 md:flex lg:gap-16 lg:flex">
                            <button className="button-more text-white mb-3 ml-14 bg-[#F75128] h-10 w-fit pl-2 pr-2 font-bold rounded lg:mb-0 lg:ml-0" ><Link to="/AboutUs"> More About Us </Link></button>
                            <div className="flex items-center gap-2">
                              <TbPhoneCalling className="text-2xl text-[#F75128]  "/>
                              <div className="bg-white  p-4 border-r-4 border-r-[#F75128] rounded">
                                <p className="font-bold flex">Make A Phone Call</p>
                                <a href="tel:+8108054356" className="flex">+880 123 456 789</a>
                              </div>
                            </div>
                            </div>
                        </motion.div>

                        {/*Image Container*/}
                        <motion.div initial={{opacity:0, y:50}}
                                    whileInView={{opacity:1, y:0}}
                                    transition={{duration:0.9, ease:"easeInOut"}}
                                    viewport={{once:false}} className=" relative lg:ml-36 ">
          {/*Dot Box*/}            <div className="grid-box absolute  text-[#F75128] left-80 -top-5 -z-10"><BsGrid3X3Gap /></div>
                            <img src="/about-v1-img1-5tcu7YgK.jpg" alt="about" className="rounded-2xl"/>
                            <img src="/about-v1.jpg" alt="about" className=" absolute mt-7 md:top-52 md:left-44 md:mt-0 lg:absolute lg:top-60 lg:right-16 lg:mt-0 rounded-2xl  "/>
                           {/*Rotating  Svg  */}
                           <div className=" relative z-100 w-fit top-32 -left-24 md:-top-32 md:left-16 lg:-top-32 lg:left-16">
                            <svg style={{width:200, height: 200}} 
                              viewBox="0 0 200 200"
  // className=" absolute top-56 inset-0 h-full w-full animate-spin-slow lg:left-52"
>
  <defs>
    <path
      id="circlePath"
      d={`M ${center}, ${center} m -${r * 0.8}, 0
      a ${r * 0.8}, ${r * 0.8} 0, 1,1 ${r * 1.6}, 0
      a ${r * 0.8}, ${r * 0.8} 0, 1,1 -${r * 1.6}, 0 `}
    />
  </defs>
<g style={{
  animation: `spin ${duration}s linear infinite`,
  transformOrigin: `${center}px ${center}px`,
}}>
     

  {/* Background */}
  {/* <use
    href="#circlePath"
    fill="none"
    stroke="#F75128"
    strokeWidth="12"
    strokeLinecap="round"
  /> */}

  {/* Text */}
  {/* <text
    fill="white"
    className=" uppercase font-medium tracking-[1px]"
    fontSize="4"
    fontWeight="500"
  > */}
  <circle cx={center} cy={center} r={r} fill="#D85A30"/>
  <text fontSize="13" fontWeight={500} letterSpacing="2" fill="white">
    <textPath href="#circlePath" startOffset="0%">
      {text}
    </textPath>
  </text>
  </g>
<g>
  <circle  cx={center} cy={center} r={r*0.5} fill="white"/>
 <svg
  x={center - 12}
  y={center - 12}
  width="24"
  height="24"
  viewBox="0 0 16 16"
  fill="#D85A30"
>
  <path d="M8 16s6-4.35 6-10A6 6 0 0 0 2 6c0 5.65 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
</svg>
</g>

</svg>

{/* <div className="absolute top-16 inset-0 flex items-center justify-center lg:left-[31%]">
  <div className="flex text-2xl text-orange-700 bg-amber-50 w-30 h-1/5 items-center justify-center rounded-full">
    <BsGeoAltFill />
  </div>
</div> */}
<style >{`
@keyframes spin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg);}}`}
 
</style>
</div>
                        </motion.div>
                    </div>
                </div>

    </section>
        </div>
    )
}