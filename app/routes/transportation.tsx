import { LiaAngellist } from "react-icons/lia";
import { FaMapLocation } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import {motion} from "framer-motion"
export default function transportation(){

return(

    <div className="lg:h-[50em] bg-white">
        <div className="relative ">

            
            <div className="flex-1 absolute shadow shadow-[#192235] -top-32 rounded z-30 bg-white left-[19em] p-6 h-fit hidden lg:flex gap-7 lg:flex-3">
            <motion.div 
           
            initial={{ x:-50}}
                    whileInView={{ x:0}}
            transition={{duration:1}}
            viewport={{once:false}}
            className="items-center w-52 shadow shadow-[#192235] comic-neue-bold text-2xl text-white pl-12 pt-12 border-2 rounded border-white h-52 bg-[#D44216]">
                < LiaAngellist className="ml-7 text-3xl"/>
              <p>On-Time <br/>Deliveries</p>
            </motion.div>

              <motion.div 
              
               initial={{ y:-50}}
                    whileInView={{ y:0}}
            transition={{duration:1}}
            viewport={{once:false}}
              className="items-center shadow shadow-[#192235] comic-neue-bold w-52 text-2xl rounded text-white pl-12 pt-12 border-2 border-white h-52 bg-[#D44216]">
                < GiReceiveMoney className="ml-7 text-3xl"/>
              <p>Transparent <br/>Pricing</p>
            </motion.div>

            <motion.div 
            
             initial={{ x:50}}
                    whileInView={{ x:0}}
            transition={{duration:1}}
            viewport={{once:false}}
            className="items-center w-52 comic-neue-bold text-2xl rounded text-white pl-12 pt-12 border-2 border-white h-52 shadow shadow-[#192235] bg-[#D44216]">
                < FaMapLocation className="ml-7 text-3xl"/>
              <p>Real Time Tracking</p>
            </motion.div>
            </div>
            

        <div className=" absolute   border-4 border-[#D44216] rounded flex-1 lg:flex lg:flex-2 top-40 mx-5">
            <div className="relative skill overflow-hidden w-full h-full">
            <img src="skill-v1.jpg" className=" w-[35em] lg:h-[32em]"/>
              </div>
            <div className="bg-[#D44216] lg:border-l-2 lg:border-l-white">
                <p className="text-white text-2xl pl-6 lg:text-5xl lg:pl-7 lg:pr-7 pt-9 bebas-neue-regular">Transportation Services We Are Often Considered</p>
                <div className="bg-[#192235] h-1 w-80 lg:w-[50em] ml-6"></div>
                <p className="text-white hidden lg:block pl-6 pr-6 mt-5">We provide reliable and efficient transportation solutions designed to keep your goods moving smoothly from pickup to final destination. Our services are tailored to meet different cargo, distance, and delivery requirements, whether you need local transportation, regional distribution, or long-distance freight movement. With careful planning, dependable handling, and efficient routes, we help businesses reduce delays, simplify their supply chain, and ensure their shipments arrive safely and on time.</p>

                <p className="text-white hidden lg:block pl-6 pr-6 uppercase mt-5 bebas-neue-regular text-2xl tracking-wider">We are frequently trusted and chosen by businesses across industries to manage the following core transportation services:</p>

                    <div className="flex flex-col items-center  lg:mb-10   lg:ml-7 mt-7  gap-6 lg:gap-x-8 lg:flex-row">
                    <motion.div 
                    
                    
                    className="relative w-fit shadow shadow-[#192235] rounded-2xl">
                <img src="/MSK.jpg" className="w-52 h-30 rounded-2xl  "/>
                <div className="absolute bg-blue-300/25 h-30 w-52 rounded-2xl top-0 items-center">
                <p className=" bebas-neue-regular lg:text-2xl mt-10 ml-16 text-white tracking-wide ">Shipping</p>
                </div>
                </motion.div>
              
              <div className="relative w-fit shadow shadow-[#192235] rounded-2xl">
                <img src="manage1.jpg  " className="w-52 h-30 rounded-2xl"/>
                <div className="absolute bg-black/30 h-30 w-52 rounded-2xl top-0 items-center">
                <p className=" bebas-neue-regular lg:text-2xl mt-10 ml-16 text-white font-extrabold tracking-wide ">Management</p>
                </div>
              </div>
              

                <div className="relative w-fit shadow shadow-[#192235] rounded-2xl">
                    <img src="/image.jpg"  className="w-52 h-30 rounded-2xl"/>
                    <div className="absolute bg-black/35 h-30 w-52 rounded-2xl top-0 items-center">
                    <p className=" bebas-neue-regular lg:text-2xl mt-10 ml-16 font-bold text-white tracking-wide ">
                            Warehousing
                        </p>
                    </div>
                </div>

                </div>
            </div>
        </div>
        </div>
    </div>

)

}