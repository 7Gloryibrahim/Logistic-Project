import Footer from "./footer"
import Nav from "./Nav"
import { motion } from "framer-motion"
import SmoothScroll from "./smoothScroll"
export default function BlogDetails(){
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
                <div className="grid grid-cols-1 mx-7 mb-28 lg:flex lg:flex-row gap-10 gap-y-7 items-center justify-center">
                   
                   <motion.div
                   initial={{y:20, scale:0.8}}
                   whileInView={{y:0, scale:1}}
                   transition={{duration:0.8, ease:"easeInOut"}}
                   viewport={{once:false}}
                   className="lg:grid-cols-1 top-52 border border-[#F75128] p-6    self-start h-fit w-fit sticky hidden md:hidden lg:block">
                      <h2 className="mt-5">Blog Information</h2>
                    <p className="mt-5">Author : Graham Luca</p>
                      <p className="mt-5 mb-5">Date: October 31, 2026</p>
                     <p className="mt-5"> <a href="#introduction">Introduction</a> </p>
                      <p className="mt-5"> <a href="#trends">Trends</a> </p>
                      <p className="mt-5 mb-5"> <a href="#conclusion">Conclusion</a> </p>
                    </motion.div> 

                    <div className="overflow-y-auto w-fit scrollbar-none">
                          <img src="logistic- transport.jpg" id="introduction"/>
                          <p className="mt-10 comic-neue-bold w-[40em]">The Logistics transport industry, a cornerstone of the global economy, is a remarkable transformation. More data technological advancements, sustainability initiatives, and evolving consumer demands, the future of construction promises to be more efficient, innovative, and eco-friendly. In this blog post, we’ll explore some of the key trends and innovations in building industrial construction.</p>

                          <p className="mt-7 comic-neue-bold  w-[40em]">Transportation Information Modeling (BIM) is revolutionizing how construction projects are designed, managed, and executed. BIM allows for the creation of detailed digital building construction marketing representations of buildings, facilitating better planning, collaboration, and decision-making.</p>

                           <p className="comic-neue-bold-italic  w-[20em] pl-7 border-l-4 border-l-[#F75128] text-[#111827] mt-10 text-3xl">
                            The information about a package is as important as the delivery
                            of the package itself…
                                </p>

                                 <h2 className="text-[#F75128] bebas-neue-regular text-4xl mt-16" id="trends">
                                        Logistics Trends
                                    </h2>

            <p className="comic-neue-bold text-[#111827] mt-5 leading-8">
                Modern logistics continues to evolve through technological
                advancements and improved transportation systems.
            </p>


            <h2 className="text-[#F75128] bebas-neue-regular text-4xl mt-16">
                Transportation Innovation
            </h2>

            <p className="comic-neue-bold text-[#111827] mt-5 leading-8">
                Technology is changing the way goods are transported,
                tracked and delivered across the world.
            </p>
                    </div>
                </div>
            </section>
            <Footer/>
            <SmoothScroll/>
        </div>
    )
}