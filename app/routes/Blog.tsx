import { useState } from "react"
import { Link } from "react-router";
import { motion } from "framer-motion";
import { BsPersonFill } from "react-icons/bs";
import { MdComment } from "react-icons/md";
import Nav from "./Nav";
import Footer from "./footer";
import Top from "./toTop";
export default function Blog(){
const [blogButton1, setBlogButton1] = useState(false)
const [blogButton2, setBlogButton2] = useState(false)
const [blogButton3, setBlogButton3] = useState(false)
const handleToggle= () => {
    if (blogButton1) return;
     setBlogButton1(true);

    setTimeout(() => {
     setBlogButton1(false);
    },600);

};

const handleToggle2 = ()=> {
    if (blogButton2) return;
    setBlogButton2(true)

    setTimeout(() => {
      setBlogButton2(false);
    },600);
};

const handleToggle3 = ()=> {
    if (blogButton3) return;
    setBlogButton3(true)

    setTimeout(() => {
      setBlogButton3(false);
    },600)
}
    return(
        <div className="bg-[#C3C7D8]">
            <Nav/>

             <section>
                <div style={{backgroundImage:"url('/blogNews2.png')", backgroundRepeat:"no-repeat", backgroundSize:"cover",}} className="relative h-72 lg:h-[100vh]  ">
                <div className="h-72 lg:h-[100vh] absolute inset-0 bg-[#002A7A]/50"></div>
                <motion.div
                
                initial={{opacity:0, scale:0.9}}
                whileInView={{ opacity:1, scale:1}}
                transition={{duration:0.7, ease:"easeInOut"}}
                className="absolute top-1/2 gap-2 items-center flex flex-row w-full justify-center">
                    <p className="text-white bebas-neue-regular text-shadow-2xs text-shadow-[#F75128] text-3xl lg:text-5xl">Blog</p>
                   
                </motion.div>
                </div>
            </section>


            <div className="h-[150em] lg:h-[60em] mt-9 bg-[#C3C7D8] relative">
            <div className="flex justify-center  text-4xl items-center gap-3  tracking-wide bebas-neue-regular">
            <div className="w-6 h-1 rounded-2xl bg-[#D44216] mb-12"/>
            <p className="mb-12">Blog</p> <p className="text-[#D44216] mb-12">News</p>
            </div>
            <div className="flex  justify-center gap-7 gap-y-96 mx-3 flex-col lg:flex lg:flex-row absolute top-28 ">
                
                 <motion.div
                
                  initial={{y:10, opacity: 0, scale:0.8}}
            whileInView={{y:0, opacity:1, scale:1}}
            transition={{duration:0.8, ease:"easeOut"}}
                
                className="relative  rounded-t-full rounded-b-full">
                    <div className="blog-img ">
                        <img src="ocean.jpg" className="w-[30em]  h-[20em] rounded-t-full  object-cover"/>
                    </div>
                    <div className="blog-text absolute  bg-[#D44216] min-h-[16em] ">
                       <div className="flex gap-2 md:gap-3 lg:gap-4 justify-center items-center mt-4 comic-neue-bold text-white/50">

                       <div className="flex flex-row  gap-1 items-center">
                        <BsPersonFill />
                        <p className="text-2xl">Atara Graham</p>
                        </div>
                            <div className="flex items-center gap-1">
                                <MdComment />
                        <p>12 Comments</p>
                        </div>
                        <p className="bg-[#C3C7D8]/50 text-red-800 p-1  lg:p-2 lg:text-2xl h-fit lg:h-20 lg:pt-5 -mt-12">01 june</p>
                        </div>
                        <h1 className="mt-8 bebas-neue-regular text-2xl text-white tracking-wide pl-3">Ocean Freight</h1>
                        <p className=" comic-neue-bold   text-white pl-3">Discover how ocean freight provides a reliable and cost-effective way to transport goods across international waters.</p>
                      <div className="flex justify-end pr-6">  <button onClick={handleToggle} className={`blogButton1 w-30  bg-[#111827] text-white h-15 rounded-2xl ${blogButton1 ? 'squash' : ''}`}><Link to="/BlogDetails"> Read More</Link></button></div>
                    </div>
                </motion.div>

                   <motion.div
                 
                   initial={{y:10, opacity: 0, scale:0.8}}
            whileInView={{y:0, opacity:1, scale:1}}
            transition={{duration:0.8, ease:"easeOut"}}
                 
                 className="relative   rounded-t-full rounded-b-full">
                    <div className="blog-img">
                        <img src="inter.jpg" className="w-[30em] h-[20em] rounded-t-full   object-cover"/>
                    </div>
                    <div className="blog-text absolute  bg-[#D44216] h-[16em] ">
                         <div className="flex gap-4 md:gap-5 lg:gap-10 justify-center items-center mt-4 comic-neue-bold text-white/50">
                         <div className="flex items-center gap-1">
                             <BsPersonFill />
                        <p className="text-2xl">Philips </p>
                        </div>
                        <div className="flex items-center gap-1"> 
                        <MdComment />
                        <p>20 Comments</p>
                        </div>
                        <p className="bg-[#C3C7D8]/50 text-red-800 p-2 lg:p-2 lg:text-2xl lg:h-20 lg:pt-5 -mt-12">01 August</p>
                        </div>
                        <h1 className="mt-8 bebas-neue-regular text-2xl text-white tracking-wide pl-3">Global Shipping</h1>
                        <p className="text-white  comic-neue-bold pl-3 ">Explore how international freight connects businesses to global markets through seamless shipping and delivery solutions.</p>
                        <div className="flex justify-end pr-6">  <button onClick={handleToggle2} className={`blogButton1 w-30  bg-[#111827] text-white h-15 rounded-2xl ${blogButton2 ? "squash" : ""}`}><Link to="/BlogDetails"> Read More</Link></button></div>
                    </div>
                </motion.div>

                  <motion.div
                 
                   initial={{y:10, opacity: 0, scale:0.8}}
            whileInView={{y:0, opacity:1, scale:1}}
            transition={{duration:0.8, ease:"easeOut"}}
                 
                 className="relative  rounded-t-full rounded-b-full">
                    <div className="blog-img">
                        <img src="warehouse8.jpg" className="w-[30em] h-[20em] rounded-t-full    object-cover"/>
                    </div>
                    <div className="blog-text absolute bg-[#D44216] h-[16em] ">
                         <div className="flex flex-row gap-3 lg:gap-5 md:gap-3 justify-center items-center mt-4 comic-neue-bold text-white/50">
                         <div className="flex items-center lg:gap-1">
                             <BsPersonFill />
                        <p className="text-2xl">Elena Galena</p>
                        </div>
                        <div className=" items-center  flex gap-1">
                             <MdComment />
                        <p>23 Comments</p>
                        </div>
                        <p className="bg-[#C3C7D8]/50 text-red-800 p-1 lg:p-2 lg:text-2xl lg:h-20 lg:pt-5 -mt-12">01 Jan</p>
                        </div>
                        <h1 className="mt-8 bebas-neue-regular text-2xl text-white tracking-wide pl-3">Warehousing & Storage</h1>
                        <p className="comic-neue-bold text-white pl-3">Learn how secure warehousing and efficient inventory management keep your goods safe, organized, and ready for delivery.</p>
                        <div className="flex justify-end pr-6">  <button onClick={handleToggle3} className={`blogButton1 w-30  bg-[#111827] text-white h-15 rounded-2xl ${ blogButton3 ? "squash" : "" } `}><Link to="/BlogDetails"> Read More</Link></button></div>
                    </div>
                </motion.div>
            </div>
            </div>

            <Footer/>
            <Top/>
        </div>
    )
}