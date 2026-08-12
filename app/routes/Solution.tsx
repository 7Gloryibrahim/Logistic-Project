
import { BsGeoAltFill } from "react-icons/bs";
import {motion} from "framer-motion"
import { GiCommercialAirplane } from "react-icons/gi";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { VscGlobe } from "react-icons/vsc";
import { RiCustomerService2Fill } from "react-icons/ri";
export default function Solution(){
    return(
        <div>
           <section  className="relative mt-7 w-full  overflow-hidden lg:h-screen ">
            <video
            autoPlay
            muted
            playsInline
            loop
           className="h-[149vh] w-full object-cover lg:h-full"
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
                                     viewport={{once:false}}
                            className="backdrop-blur-md p-5 border-2 border-white">
                           {/* Little horizontal line */}
                            <div className="flex items-center gap-2">
                              <span className="h-1 w-7 rounded bg-[#F75128]"></span>
                            <p className="text-white">Our Expertise Stands in</p>
                            </div>
                            
                            <p className=" text-white font-bold lg:text-4xl">Our Expertise Stands in</p>
                            <p className="text-[#F75128] font-bold underline mt-4 lg:text-5xl">Logistics Solutions</p>
                            <p className="font-bold font-sans text-white mt-7">Logistic service provider company plays a pivotal role in the global supply chain ecosystem by efficiently managing the movement of goods from origin to final destination.</p>
                            
                            {/* The two white Boxes */}
  {/* The main container for them */} <div className="flex gap-6 mt-28">
    
    {/* First Box */}
                            <div className="bg-white border-l-4 border-[#F75128] p-5">
                              <div className="flex items-center gap-3">
                                <p className="text-[#F75128] font-bold text-2xl border-r-2 pr-1 h-6 items-center"> < VscGlobe/></p>
                               
                                <p className="font-bold text-[#111827]">Worldwide Service</p>
                              </div>
                              <p className="w-56 text-[#111827] mt-2">Logistic service provider company plays a pivotal role in the global</p>
                            </div>
    {/* Second Box */}
                            <div className="bg-white border-l-4 border-[#F75128] p-5 ">
                              <div className="flex items-center gap-3">
                                <p className="text-[#F75128] text-2xl border-r-2 border-[#F75128] pr-1 "><RiCustomerService2Fill/></p>
                                <p className="font-bold text-[#242B39]">24/7 Online Support</p>
                              </div>
                              <p className="text-[#242B39] font-sans ">Logistic service provider company plays a pivotal role in the global</p>
                            </div>
                            </div>
                        </motion.div>

                        {/*Image Container*/}
                        <div className=" lg:ml-36 ">
                            <img src="/about-v1-img1-5tcu7YgK.jpg" alt="about" className="rounded-2xl"/>
                            <img src="/about-v1.jpg" alt="about" className="lg:absolute lg:top-60 lg:left-3/4 rounded-2xl "/>
                           {/*Rotating  Svg  */}
                           <div className="w-56 h-full">
                            <svg
                              viewBox="0 0 200 200"
  className=" absolute top-56 inset-0 h-full w-full animate-spin-slow lg:left-52"
>
  <defs>
    <path
      id="circlePath"
      d="M 100 20 A 20 20 0 1 1 99.9 20"
      fill="none"
    />
  </defs>
<g>
     

  {/* Background */}
  <use
    href="#circlePath"
    fill="none"
    stroke="#F75128"
    strokeWidth="12"
    strokeLinecap="round"
  />

  {/* Text */}
  <text
    fill="white"
    className=" uppercase font-medium tracking-[1px]"
    fontSize="4"
    fontWeight="500"
  >
    <textPath href="#circlePath">
      YOU ARE WELCOME • SINCE 2002 • 2002
    </textPath>
  </text>
  </g>
</svg>

<div className="absolute top-16 inset-0 flex items-center justify-center lg:left-[31%]">
  <div className="flex text-2xl text-orange-700 bg-amber-50 w-30 h-1/5 items-center justify-center rounded-full">
    <BsGeoAltFill />
  </div>
</div>
</div>
                        </div>
                    </div>
                </div>

    </section>
        </div>
    )
}