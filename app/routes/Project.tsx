 
import {Nav} from "./Nav"
import {motion} from "framer-motion"

 export default function Project() {

    return(
        <div className="">
            <Nav/>
            <div className="relative overflow-hidden">
                <div style={{backgroundImage:"url('/detail1.jpg')", backgroundSize:"cover", backgroundAttachment:"fixed", }} className="h-[50em] lg:h-[39em]">
                {/* <img src="/detail1.jpg" className="h-[38em] w-screen fixed"/> */}
                <div className="bg-blue-500/35 absolute h-[50em] lg:h-[39em] inset-0 "></div>
                </div>
            
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
                        <img src="container2.png" className="hidden lg:block left-[27em] absolute"/>
                    </div>
        </div>
     
    )
 }