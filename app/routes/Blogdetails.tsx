import Footer from "./footer"
import Nav from "./Nav"
import { motion } from "framer-motion"
import SmoothScroll from "./smoothScroll"
import { useState } from "react"
export default function BlogDetails(){
    const [comment, setComment] =useState({
        name:"",
        email:"",
        comment:""
    })
    return(
        <div className="bg-[#C3C7D8]">
            <Nav/>
            <section>
                <div style={{backgroundImage:"url('/blogNews3.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover",}} className="relative h-72 lg:h-[40em]  ">
                <motion.div
                
                initial={{opacity:0, y:-500}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                viewport={{once: true}}
                className="h-72 lg:h-[40em] absolute inset-0 bg-black/50"></motion.div>
                <motion.div
                
                initial={{opacity:0, scale:0.9}}
                whileInView={{ opacity:1, scale:1}}
                transition={{duration:0.7, ease:"easeInOut"}}

                className="absolute top-1/2 gap-2 items-center flex flex-row w-full justify-center">
                    
                    <p className="text-white bebas-neue-regular text-shadow-2xs text-shadow-[#F75128] text-3xl lg:text-5xl">Blog</p>
                    <p className="text-[#F75128] text-shadow-2xs text-shadow-[#F75128] bebas-neue-regular text-3xl lg:text-5xl">Details</p>
                </motion.div>
                </div>
            </section>


            <section className="mt-20">
                <div className="flex flex-col mx-7 mb-28 lg:flex lg:flex-row gap-6 gap-y-7 items-center justify-center">
                   
                   <motion.div
                   initial={{y:20, scale:0.8}}
                   whileInView={{y:0, scale:1}}
                   transition={{duration:0.8, ease:"easeInOut"}}
                   viewport={{once:false}}
                  className="lg:grid-cols-1 top-28  border border-[#F75128] p-6 self-start h-fit w-fit sticky hidden md:hidden lg:block">
                     

                        <h2 className="mt-5">Blog Information</h2>

                        <p className="mt-5">Author: Graham Luca</p>

                        <p className="mt-5 mb-5">Date: January 31, 2026</p>

                        <p className="mt-5">
                            <a href="#introduction">Introduction</a>
                        </p>

                        <p className="mt-5">
                            <a href="#trends">Trends</a>
                        </p>

                        <p className="mt-5">
                            <a href="#transport">Transport</a>
                        </p>

                        <p className="mt-5">
                            <a href="#management">Management</a>
                        </p>

                        <p className="mt-5">
                            <a href="#comment">Comment</a>
                        </p>

                        <p className="mt-5 mb-5">
                            <a href="#conclusion">Conclusion</a>
                        </p>

                   </motion.div> 
                                        

                    <div className="overflow-y-auto w-fit mx-52  scrollbar-none scroll-margin  ">
                          <img src="logistic- transport.jpg" id="introduction" className=" w-[30em] lg:w-full scroll-mt-28"/>
                          <p className="mt-10 comic-neue-bold max-w-[30em]  lg:max-w-2xl">The Logistics transport industry, a cornerstone of the global economy, is a remarkable transformation. More data technological advancements, sustainability initiatives, and evolving consumer demands, the future of construction promises to be more efficient, innovative, and eco-friendly. In this blog post, we'll explore some of the key trends and innovations in building industrial construction.</p>

                          <p className="mt-7 comic-neue-bold  max-w-[30em]  lg:max-w-2xl">Transportation Information Modeling (BIM) is revolutionizing how construction projects are designed, managed, and executed. BIM allows for the creation of detailed digital building construction marketing representations of buildings, facilitating better planning, collaboration, and decision-making.</p>

                           <div className="comic-neue-bold-italic bg-[#111827]  text-[#F75128] w-[40em] pl-7 border-l-4 border-l-[#F75128] text-[#111827] p-5 mt-10 max-w-[400px]  lg:max-w-2xl ">
                           <p className=" text-3xl "> The information about a package is as important as the delivery
                            of the package itself…</p>
                            <p className="">Elliot Anderson</p>
                                </div>

                                 <h2 className="text-[#F75128] bebas-neue-regular scroll-mt-28 text-4xl mt-16"   id="trends">
                                        Logistics Trends
                                    </h2>

                                <p className="comic-neue-bold max-w-[30em]  lg:max-w-2xl text-[#111827] mt-5 leading-8">
                                    Modern logistics continues to evolve through technological
                                    advancements and improved transportation systems.
                                </p>


                                <h2
                                 id="transport"
                                className="text-[#F75128] bebas-neue-regular text-4xl mt-16 scroll-mt-28">
                                    Transportation Innovation
                                </h2>

                                <p className="comic-neue-bold text-[#111827] max-w-[30em]  lg:max-w-2xl mt-5 leading-8">
                                    Technology is changing the way goods are transported,
                                    tracked and delivered across the world.
                                </p>


                      <h2 className="text-[#F75128] scroll-mt-28 bebas-neue-regular text-4xl mt-16" id="management">
                Transportation Management
            </h2>


                        <p className="max-w-[30em]  lg:max-w-2xl"   >Transportation management software is streamlining project planning, scheduling, and resource allocation. These platforms enable real-time collaboration among stakeholders, ensuring that everyone is on the same page. Features like document sharing</p>
                  



                        <h2 className="text-[#F75128] bebas-neue-regular text-4xl mt-16" >
                                       Future of Transportation:
                                    </h2>

                                     <p className="max-w-[30em]  lg:max-w-2xl"  >Energy efficiency is a top priority in modern construction. Buildings are designed with advanced insulation, energy-efficient windows, and smart HVAC systems to minimize energy consumption. Renewable energy sources, such as solar panels and wind turbines, are also being integrated into building designs to reduce reliance on fossil fuels.</p>

                                 <h2 className="text-[#F75128] bebas-neue-regular text-4xl scroll-mt-28 mt-16" id="comment">
                                       Post Comments
                                    </h2>
                                    <div className="mt-10">
                                        <div className="flex flex-row gap-6">
                                            <img src="/black-man2.webp" className="w-15 h-12 rounded-full"/>

                                            <div className="flex flex-col gap-y-3">
                                                <p className="comic-neue-bold text-2xl">   Michael Adewale    </p>
                                                <p>Feb 31, 2026 at 8:00</p>
                                                <p className="max-w-[400px]  lg:max-w-2xl">Reliable logistics is the backbone of every successful business. Great insights!</p>

                                                <div className="flex flex-col lg:flex-row gap-6 mt-5">
                                                    <img src="/black-man.webp" className="w-15 h-15 lg:h-11 rounded-full"/>
                                                    <div className="flex flex-col text-left gap-y-3">
                                                      <p className="comic-neue-bold text-2xl"> Daniel Okoro  </p>
                                                     <p>June 11, 2026 at 12:00</p>
                                                <p className="max-w-[400px]  lg:max-w-2xl">The logistics industry is evolving rapidly. Businesses need to stay informed and adaptable. Great read!</p>
                                                </div>
                                                </div>

                                            </div>


                                        </div>

                                        <div className="mt-10">
                                            <div className="flex flex-row gap-6">
                                            <img src="black-woman.webp" className="w-15 h-16 lg:h-15 rounded-full"/>
                                            <div className="flex flex-col text-left gap-y-3">
                                                  <p className="comic-neue-bold text-2xl">Favour Okafor </p>
                                                     <p>April 23, 2026 at 13:00</p>
                                                <p className="max-w-[400px]  lg:max-w-2xl">I like how this breaks things down. Looking forward to reading more articles like this.</p>
                                            </div>
                                            </div>
                                        </div>

                                        <div>
                                             <h2 className="text-[#F75128] bebas-neue-regular text-4xl scroll-mt-28 mt-16"  >
                                      Leave a Comment
                                              </h2>
                                                <div className="">
                                              <form className="flex flex-col gap-y-5">
                                                <input name="name" value={comment.name} placeholder="Name" type="text" id="name"
                                                onChange={(c)=> setComment({
                                                    ...comment, name: c.target.value
                                                })}
                                               className="w-96 pl-5 h-14 outline-none bg-[#111827] text-[#F55128]" />

                                               <input name="email" placeholder="email" type="text" value={comment.email}
                                               id="email" 
                                              onChange={(c)=>({
                                                ...comment,
                                                name: c.target.value
                                              })}
                                                className="w-96 pl-5 h-14 outline-none bg-[#111827] text-[#F55128]" />
                                              </form>
                                              </div>
                                        </div>

                                    </div>
                   
                    </div>

                   
                </div>
            </section>
            <Footer/>
            <SmoothScroll/>
        </div>
    )
}