import Nav from "./Nav"
import Comments from "./Comments"
import SmoothScroll from "./smoothScroll"
import Footer from "./footer"
import Delivery from "./delivery"
import { FaArrowUp } from "react-icons/fa6"
 
export default function Testimonials(){
  
const handleScroll = ()=>{
 window.scrollTo({
    top:0,
    behavior:"smooth"
 })
}

    return(
        <div className="bg-[#C3C7D8]">
           
            <Nav/>
             <section>
                <div style={{backgroundImage:"url('/happyCustomer6.webp')", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}} className="h-96 lg:h-[45em] w-full relative">
                <div className="bg-black/50 inset-0 h-96 lg:h-[45em] w-full"></div>
                
<div className="absolute w-full right-0  left-0 top-75 lg:top-[28em]">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F75128" fill-opacity="2" d="M0,128L48,128C96,128,192,128,288,149.3C384,171,480,213,576,240C672,267,768,277,864,245.3C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="w-full h-auto"></path></svg>
                   </div>
                </div>
            </section>
               
                    
                 <div className="fixed z-50 bottom-10 flex   right-5 justify-end">
                            <button onClick={handleScroll} className="bg-white p-5 rounded-full items-center"> 
                            <FaArrowUp className="text-[#F55128]   "/>
                            </button>
                        </div>
            <section className="mt-28">
                <Comments/>
            </section>
            <section className=" h-[100em] lg:h-[25em]">
                <Delivery/>
            </section>

             <SmoothScroll/>
             <section className="">
             <Footer/>
             </section>
        </div>
    )
}
