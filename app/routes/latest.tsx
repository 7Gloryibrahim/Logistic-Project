import {motion} from "framer-motion"
import { IoAirplaneSharp } from "react-icons/io5";
export default function Latest(){
    return(
        <div className="h-[64em] relative bg-[#192235]">
           
          
         {/* <div className="custom-shape-divider-top-1788805964 ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
        <path fill="#CBCFDA" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill "></path>
    </svg>
</div> */}

            <section>
                <div className="bg-white relative h-[67em] lg:h-[50em]  ">

                    <div className=" grid grid-cols-1 md:grid-cols-2    lg:grid-cols-2 gap-7 p-9">
                        <div className="shadow lg:w-[40em] lg:h-[20em] shadow-[#192235] relative rounded-2xl">
                      <div className="mt-16 ml-16">
                        <div className=" flex gap-4 items-center">
                            <div className="h-1 w-5 rounded-2xl bg-[#F75127]"></div>
                            <p className="uppercase font-bold text-[#192235] font-sans">Latest Project</p>
                              <IoAirplaneSharp  className="IoAirplaneSharp text-[#CBCFDA] lg:text-[#F75127] text-2xl"/>
                        </div>
                        <div className=" mt-5 md:text-2xl lg:text-5xl font-bold font-sans">
                        <div className="text-[#192235]">
                            <p className="text-2xl">The Achievement</p>
                        </div>

                    <div className="flex gap-2 lg:gap-3">
                        <p className="text-[#192235]">Of Our</p>
                        <p className="uppercase underline text-[#F75127]">project</p>
                    </div>
                        </div>

                        <button className="bg-[#192235] mt-5 mb-6 md:mb-5  text-white rounded-2xl  p-5 font-bold font-sans">See All About Us →</button>
                    </div>
                        </div>
                   

                    <motion.div
                    
                      initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:2, ease:"easeInOut"}}
                        viewport={{once:true}}
                    className="videoSix overflow-hidden shadow shadow-[#192235] p-3 lg:h-[23em] md:h-[12em] rounded-2xl">
                       
                       <div className="videoBox flex w-72  absolute top-16 ml-4 md:left-1 lg:flex justify-between items-center z-10 lg:top-52 bg-white h-20 lg:w-96 rounded-r-full lg:ml-7 pl-4 pt-4 pb-4 border-l-4 border-l-[#F75127]">
                           
                            <div className="text-2xl text-[#192235]">
                                <p>Logistic</p>
                            <p>Warehouse Inventory</p>
                            </div>

                           
                            <div className=" bg-[#F75127] p-2 rounded-r-full text-white font-bold ml-64  absolute lg:ml-[22em]  ">
                                 <p className="straightUp">↗</p>
                            </div>
                           
                        </div>
                        {/*video*/}
                        <div
                      
                        className="overflow-hidden rounded-2xl">
                        <video 
                        playsInline
                        muted
                        autoPlay
                        loop
                        className="videoS z-0 rounded-2xl relative  transition-transform duration-300 ease-in-out object-cover"
                        >
                            <source src="/six.mp4" type="video/mp4" />
                             <div className="inset-0 bg-black/50 absolute z-20"></div>
                        
                        </video>
                            </div>
                        
                    </motion.div>
                   </div>
                     {/*Flexed Images*/}
                     <div className="grid grid-cols-1 ml-12 md:grid-cols-2 lg:grid-cols-4 md:ml-3  lg:ml-3 gap-2">
                     {/*img1*/}
                    <motion.div 
                      initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:2, ease:"easeInOut"}}
                        viewport={{once:false}}
                    className="latest1 relative p-3  shadow shadow-[#192235] w-80  rounded-2xl overflow-hidden ">
                      <div className="overflow-hidden rounded-2xl">
                        <img src="/warehouse7.jpeg" className="latestImg rounded-2xl overflow-hidden " />
                            </div>
                             <div className="imgcardText absolute top-33 backdrop-blur-md shadow shadow-[#192235] left-5 p-3 font-bold rounded-r-full border-l-2 border-[#F75127] text-[#E9E3D3] font-sans">
                        <p>Warehouse Solutions</p>
                        </div>
                    </motion.div>
{/*img2*/}
                <motion.div 
                
                  initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:2, ease:"easeInOut"}}
                        viewport={{once:false}}

                className="latest1 h-60 mt-4 md:mt-0 lg:mt-0 w-80 p-3 items-center rounded-2xl overflow-hidden shadow shadow-[#192235]  ">
                    <div className="overflow-hidden rounded-2xl">
                        <img src="/warehouse.jpg" className="latestImg h-52 w-80 rounded-2xl"/>
                    </div>
                     <div className="imgcardText absolute top-33 backdrop-blur-md shadow shadow-[#192235] left-5 p-3 font-bold rounded-r-full border-l-2 border-[#F75127] text-[#E9E3D3] font-sans">
                        <p>Warehouse Solutions</p>
                        </div>
                </motion.div>
{/*img3*/}
                 <motion.div 
                 
                   initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:3, ease:"easeInOut"}}
                        viewport={{once:false}}

                 className="latest1 relative h-60 mt-4 md:mt-0 lg:mt-0 w-80  p-3 items-center rounded-2xl overflow-hidden shadow shadow-[#192235]  ">
                    <div className="overflow-hidden rounded-2xl">
                        <img src="/warehouse3.jpg" className="latestImg h-52 w-80 rounded-2xl"/>
                    </div>
                     <div className="imgcardText absolute top-33 backdrop-blur-md shadow shadow-[#192235] left-5 p-3 font-bold rounded-r-full border-l-2 border-[#F75127] text-[#E9E3D3] font-sans">
                        <p>Warehouse Solutions</p>
                        </div>
                </motion.div>
{/*img4*/}
                  <motion.div 
                    initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:3, ease:"easeInOut"}}
                        viewport={{once:false}}

                  className="latest1 h-60 mt-4 md:mt-0 lg:mt-0 w-80 p-3 items-center  rounded-2xl overflow-hidden shadow shadow-[#192235]  ">
                    <div className="overflow-hidden rounded-2xl">
                        <img src="/warehouse4.jpg" className="latestImg h-52 w-80 rounded-2xl"/>
                    </div>

                        <div className="imgcardText absolute top-33 backdrop-blur-md shadow shadow-[#192235] left-5 p-3 font-bold rounded-r-full border-l-2 border-[#F75127]  text-[#E9E3D3] font-sans">
                        <p>Warehouse Solutions</p>
                        </div>

                </motion.div>

                </div>
                </div>
            </section>

        
        </div>
    )
}