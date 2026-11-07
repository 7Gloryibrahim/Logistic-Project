 
import Nav from "./Nav"
import {motion} from "framer-motion"
import SmoothScroll from "./smoothScroll"
import Footer from "./footer"
import { Link } from "react-router"

 export default function Project() {

    return(
        <div className="relative bg-[#C0C3D4] max-h-full">
            <SmoothScroll/>
            <Nav/>
            <div className="relative h-[50em] lg:h-[90em] overflow-hidden">
                
                <div style={{backgroundImage:"url('/detail1.webp')", backgroundSize:"cover", }} className="h-[50em] lg:h-[44em]">
                {/* <img src="/detail1.jpg" className="h-[38em] w-screen fixed"/> */}
                
                </div>
            <div className="bg-blue-500/35 absolute h-[50em] lg:h-[44em] inset-0 "></div>
            <motion.div
            
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.8, ease:"easeIn"}}
            viewport={{once:false}}
            className="absolute top-64 lg:left-[47em] bg-white/35 mx-1 lg:mx-0 rounded p-4">
                    <div>
                        <p className="text-4xl lg:text-5xl items-center ml-12  bebas-neue-regular uppercase font-bold text-white lg:text-[#242B39]">Projects</p>
                        <div className="w-96 shadow shadow-[#242B39] items-center pl-2 pb-3 pt-1 mt-5 pr-3 text-2xl " >
                        <p className="w-fit  mt-6 text-[#242B39]">Delivering reliable logistics solutions, connecting businesses, and moving what matters from first mile to last.</p>
                        </div>
                        </div>
                    
                    </motion.div>

                    <div className="absolute top-[34em] lg:top-[32em] left-5">
                        <div className=" lg:flex gap-3">
                            <motion.p

                                initial={{opacity:0, y:-50}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.5, ease:"easeInOut"}}
                                viewport={{once:false}}
                            className="bg-white/35 p-5 uppercase font-bold border border-white text-white">Global Reach</motion.p>
                            <motion.p
                            
                             initial={{opacity:0, y:-50}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.8, ease:"easeInOut"}}
                                viewport={{once:false}}

                            className="bg-white/35 p-5 uppercase font-bold border border-white text-white">Smarter Logistic</motion.p>
                            < motion.p
                            
                             initial={{opacity:0, y:-50}}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:0.9, ease:"easeInOut"}}
                                viewport={{once:false}}
                            
                            className="bg-white/35 p-5 uppercase font-bold border border-white text-[#D44216]">Reliable Delivery</motion.p>
                        </div>
                    </div>
                   


                    <div className=" relative">
                        <div className="flex items-center absolute top-10 left-7 gap-2">
                            <div className="bg-[#D44216] w-10 h-0.5 rounded  left-3"></div>
                            <p className="uppercase bebas-neue-regular text-2xl tracking-wide top-10 lg:text-3xl text-[#D44216]  ">Our Impact</p>
                            </div>
                        <div className="absolute bg-[#002979] text-white items-center top-20 left-6 ">
                            <div className="p-4">
                                <motion.p
                                 initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeInOut"}}
            viewport={{once:false}}
                                className="text-5xl ">10K+</motion.p>
                                <motion.p
                                initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, ease:"easeInOut"}}
            viewport={{once:false}}

                                >Successful Deliveries</motion.p>
                            </div>
                            
                             <div className="p-4">
                                <motion.p 
                                initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, ease:"easeInOut"}}
            viewport={{once:false}}
                                className="text-5xl">25+</motion.p>
                                <motion.p
                                 initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.9, ease:"easeInOut"}}
            viewport={{once:false}}

                                >Countries Served</motion.p>
                            </div>

                             <div className="p-4">
                                <motion.p 
                                 initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, ease:"easeInOut"}}
            viewport={{once:false}}

                                className="text-5xl ">98%</motion.p>
                                <motion.p 
                                 initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeInOut"}}
            viewport={{once:false}}
                                >On-Time Delivery</motion.p>
                            </div>

                            <div className="p-4">
                                <motion.p 
                                 initial={{opacity:0, y:-50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, ease:"easeInOut"}}
            viewport={{once:false}}

                                className="text-5xl">15+</motion.p>
                                <motion.p 
                                 initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.9, ease:"easeInOut"}}
            viewport={{once:false}}
                                >Logistics Partners</motion.p>
                            </div>
                        </div>
                        <img src="container2.png" className="  hidden  lg:block left-[27em] absolute"/>
                  
                  

                  
                   </div>
                </div>

                {/* <div className="relative top-5">
                    <img src="hero-delivery-boy.png" className="guy absolute -top-52"/>
                </div> */}

                 <div className="">

                 <div className="lg:block md:block">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#002a7a" fill-opacity="1" d="M0,224L360,192L720,320L1080,192L1440,160L1440,320L1080,320L720,320L360,320L0,320Z"></path></svg>
                 </div>



                 <div className="relative min-h-[233em] lg:min-h-[95em] bg-[#002A7A]">
                    <div style={{backgroundImage:"url('/v2.png')", backgroundSize:"cover", backgroundPosition:"fixed" }} className="h-[20em] w-full"></div>
                  
                    <div className="relative -top-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-48 lg:gap-y-72 gap-x-7 w-full justify-items-center">

                            <motion.div 
                            
                            initial={{y: 50, scale:0.7, opacity:0}}
                            whileInView={{y:0, scale:1, opacity:1}}
                            transition={{duration:0.9, ease: "easeInOut"}}
                            className="w-fit shadow rounded-2xl relative shadow-[#D44216]">
                                <img src="/project1.jpg" className="h-96 w-96 rounded-2xl object-cover"/>
                               
                                <div className="absolute text-[#111827]   flex-col gap-y-5  ml-5 mr-5 lg:block bg-[#F75128] w-fit p-4 -bottom-32 shadow-2xl shadow-[#111827] rounded-2xl">
                                    <p className="bg-[#111827]/50 w-fit text-[#F75128] rounded -mt-10 p-3 inter-regular font-bold">Logistic</p>
                                    <p className=" bebas-neue-regular text-2xl lg:text-3xl">Freight Wave</p>
                                    <p className="w-80 inter-regular">Reliable freight forwarding solutions designed to simplify international shipping, improve cargo handling, and keep global trade moving.</p>
                                   <div className="w-full justify-end flex">
                                   <button className="bg-[#111827] text-[#F75128] p-2 rounded rounded-bl-xl "><Link  to="/ProjectDetails">Project Details</Link></button>
                                   </div>
                                </div>
                                </motion.div>

                              <motion.div
                              
                              initial={{y:50, scale: 0.8, opacity:0}}
                            whileInView={{y:0, scale:1, opacity:1}}
                            transition={{duration:1, ease: "easeInOut"}}

                              className=" relative w-fit shadow  shadow-[#D44216] rounded-2xl"> 

                                <img src="/project3.jpg" className="proimg2 h-96 rounded-2xl object-center w-96 object-cover"/> 

                                <div className="absolute   text-[#111827] flex-col gap-y-5  ml-5 mr-5 lg:block bg-[#F75128] w-fit p-3 -bottom-32 shadow-2xl shadow-[#111827] rounded-2xl">
                                    <p className="bg-[#111827]/50 w-fit text-[#F75128] rounded -mt-10 p-3 inter-regular font-bold">Logistic</p>
                                    <p className=" bebas-neue-regular text-2xl lg:text-3xl">GoFreight Logistics</p>
                                    <p className=" inter-regular">Integrated logistics solutions combining transportation, warehousing, and delivery coordination to help businesses move goods more efficiently.</p>
                                          <div className="w-full justify-end flex">
                                   <button className="bg-[#111827] text-[#F75128] p-2 rounded rounded-bl-xl "><Link  to="/ProjectDetails">Project Details</Link></button>
                                   </div>
                                </div>
                                
                                </motion.div>

                               <motion.div
                               
                               initial={{y: 50, scale:0.7, opacity:0}}
                            whileInView={{y:0, scale:1, opacity:1}}
                            transition={{duration:1, ease: "easeInOut"}}

                               className=" relative w-fit text-[#111827] rounded-2xl  shadow shadow-[#D44216]"> 
                                <img src="/truck.JPG" className="h-96 w-96 rounded-2xl object-cover"/>
                                <div className="absolute   flex-col gap-y-5  ml-1 mr-1 lg:block bg-[#F75128] w-fit p-4 -bottom-32 shadow-2xl shadow-[#111827] rounded-2xl">
                                    <p className="bg-[#111827]/50 w-fit text-[#F75128] rounded -mt-10 p-3 inter-regular font-bold">Logistic</p>
                                    <p className=" bebas-neue-regular text-2xl lg:text-3xl">FastLane Logistics</p>
                                    <p className=" inter-regular">Speed-focused delivery solutions designed to minimize delays, optimize transportation routes, and meet demanding delivery schedules.</p>
                                      
                                      <div className="w-full justify-end flex mt-2">
                                   <button className="bg-[#111827] text-[#F75128] p-2 rounded rounded-bl-xl "><Link  to="/ProjectDetails">Project Details</Link></button>
                                   </div>
                                </div>

                                
                                </motion.div>

                                
                               <motion.div 
                               
                               initial={{y:30, scale:0.7, opacity:0}}
                            whileInView={{y:0, scale:1, opacity:1}}
                            transition={{duration:0.9, ease: "easeIn"}}
                               
                               className=" relative w-fit text-[#111827] rounded-2xl  shadow shadow-[#D44216]"> 
                                <img src="/project8.jpeg" className="h-96 rounded-2xl w-96 object-cover"/>
                                <div className="absolute flex-col gap-y-5  ml-2 mr-2  lg:block bg-[#F75128] w-fit p-4 -bottom-32 shadow-2xl shadow-[#111827] rounded-2xl">
                                    <p className="bg-[#111827]/50 w-fit text-[#F75128] rounded -mt-10 p-3 inter-regular font-bold">Logistic</p>
                                    <p className=" bebas-neue-regular text-2xl lg:text-3xl">Skyline Transport</p>
                                    <p className="w-full inter-regular">Dependable transportation services connecting businesses and destinations through safe cargo handling and efficient freight distribution.</p>
                                      
                                      <div className="w-full justify-end flex mt-2">
                                   <button className="bg-[#111827] text-[#F75128] p-2 rounded rounded-bl-xl "><Link  to="/ProjectDetails">Project Details</Link></button>
                                   </div>
                                </div>
                                </motion.div>
                           
                            
                               <motion.div 
                               
                                initial={{y: 50, scale:0.8, opacity:0}}
                            whileInView={{y:0, scale: 1, opacity:1}}
                            transition={{duration:1, ease: "easeInOut"}}
                               
                               className=" relative w-fit text-[#111827] rounded-2xl  shadow shadow-[#D44216]"> 
                                <img src="/project7.jpg" className="h-96 rounded-2xl w-96 object-cover"/>
                                <div className="absolute  flex-col gap-y-5  lg:block bg-[#F75128] w-full p-4 -bottom-32 shadow-2xl shadow-[#111827] rounded-2xl">
                                    <p className="bg-[#111827]/50 w-fit text-[#F75128] rounded -mt-10 p-3 inter-regular font-bold">Logistic</p>
                                    <p className=" bebas-neue-regular text-2xl lg:text-3xl">Expedite Xpress</p>
                                    <p className=" inter-regular">Specialized express shipping for urgent cargo, combining priority handling, efficient transportation, and responsive delivery coordination.</p>
                                      
                                      <div className="w-full justify-end flex mt-2">
                                   <button className="bg-[#111827] text-[#F75128] p-2 rounded rounded-bl-xl "><Link  to="/ProjectDetails">Project Details</Link></button>
                                   </div>
                                </div>
                                </motion.div>
                            

                              
                               <motion.div
                               
                                initial={{y: 50, scale:0.7, opacity:0}}
                            whileInView={{y:0, scale:1, opacity:1}}
                            transition={{duration:1, ease: "easeInOut"}}
                               
                               className=" relative w-fit text-[#111827] rounded-2xl  shadow shadow-[#D44216]"> 
                                <img src="/project6.jpg" className="h-96 rounded-2xl w-96 object-cover"/>
                                <div className="absolute  flex-col gap-y-5  ml-8 mr-8 lg:block bg-[#F75128] w-fit p-4 -bottom-32 shadow-2xl shadow-[#111827] rounded-2xl">
                                    <p className="bg-[#111827]/50 w-fit text-[#F75128] rounded -mt-10 p-3 inter-regular font-bold">Logistic</p>
                                    <p className=" bebas-neue-regular text-2xl lg:text-3xl">OnTime Freight</p>
                                    <p className="w-72 inter-regular">Reliable freight management focused on organized shipment scheduling, transparent tracking, and consistent delivery performance.</p>
                                      
                                      <div className="w-full justify-end flex mt-2">
                                   <button className="bg-[#111827] text-[#F75128] p-2 rounded rounded-bl-xl "><Link  to="/ProjectDetails">Project Details</Link></button>
                                   </div>
                                </div>

                                
                                </motion.div>
                             </div>
                 </div>
                 </div>
                 <div  className="mt-28">
                      <Footer/>
                      </div>
        </div>
     
    )
 }