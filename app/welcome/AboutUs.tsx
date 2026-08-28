import { PiSelectionBackgroundFill } from "react-icons/pi"
import {Nav} from "../routes/Nav"
import Solution from "../routes/Solution"
import { motion } from "framer-motion"


export default function AboutUs(){


    return(
        <div className="bg-white overflow-hidden font-sans" >
            <Nav/>
            
            <div className="relative  ">
{/*First Overlay*/}
                <div className="absolute bg-black/50 inset-0 h-[140vh]"></div>
             {/*Second Overlay*/}   
                <div className="bg-linear-to-r/increasing from-black  w-96 h-[140vh] absolute"></div>
                {/*The Hero Worker Image*/}
                <div className="" >
                <motion.img
                initial={{ x: 300, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true,}}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
                src="logisWorker.png" className="absolute hidden w-[40%] top-60 left-[59%] sm:hidden md:hidden lg:block " style={{}} />
                </div>
        {/*Hero section*/}
        <section>
                <div style={{backgroundImage:"url('/workers1.jpg')", backgroundPosition:"center", backgroundSize:"cover",backgroundAttachment:"fixed", overflow:"hidden",}} className="h-[140vh]">
                {/*Hero Text */}
                <div className="heroText items-center absolute z-40 top-80 left-4 w-[90%] lg:w-[52%]  text-white lg:left-20 backdrop-blur-lg border-2 border-white rounded-2xl p-7">
                    <div className="w-fit">
                        <div className="flex items-center gap-2 font-sans text-2xl  w-fit uppercase  lg:text-5xl lg:flex ">
                         
                            <div className="w-6 h-1 bg-[#F75128] font-serif font-medium rounded lg:w-6"></div>
                        <p className="">Seamless</p>
                        <p className="text-[#F75128] backdrop-blur-md p-1 border-2  uppercase  border-white rounded">Logistics,</p>
                        </div>

                        <div className="w-44 font-sans" >
                            <p>From First Mile to Last</p>
         {/*Text underline*/} <div className="underLine w-[50%] left-[73px] rounded-2xl h-1 bg-[#F75128] lg:w-[50%] lg:left-[72px]"></div>
                        
                        </div>
                        
                    </div>
                    <div className=" block subhead text-2xl bg-[#F75128] text-[#111827] rounded-2xl pl-4 mt-5 border-l-4 pt-2 pb-2 border-l-[#F75128] max-w-87.5 text-left font-bold sm:hidden lg:hidden">
                  <p>Bridging the distance from raw materials to satisfied customers.</p>
                    </div>
                <div className="hidden subhead mt-5 border-l-4 border-l-[#F75128]  rounded-2xl bg-[#F75128] pl-4 text-[#111827] font-sans font-bold pt-3 pr-3 pb-3 tracking-normal text-[20px] text-left items-center sm:block lg:block" >
                    
                    
                    <p className="font-bold  ">For over a decade, we have combined asset-backed asset capacity, deep compliance expertise, and an unwavering commitment to safety to ensure your inventory arrives on time, intact, and on budget—every single Mile of the journey.</p>
                </div>
                </div>
                {/*Half Rotating Container*/}
                <img src="/container2.png"className="container2 left-7 top-[570px]  absolute lg:top-[64%] w-52"/>
                </div>
                </section>
            </div>
           
            <Solution/>
          <section className="relative" style={{backgroundImage:"url('/bg2.avif')", height:"140vh", backgroundPosition:"center", backgroundSize:"cover", backgroundAttachment:"fixed", overflow:"hidden", }}>
            <div className="bg-black/50 inset-0 absolute"></div>
            <div>
                <img src="/container1.png" className="absolute left-[70%]"/>
                
            </div>
          </section>

        </div>
      

      
    )
}