
import { useRef, useState } from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

import { LuChevronDown } from "react-icons/lu";
import { LuChevronUp } from "react-icons/lu";

export default function Video(){
   const [faq, setFaq] = useState(false)
    const [secondFaq, setSecondFaq] = useState(false)
    const[thirdFaq, setThirdfaq] = useState(false)
    const [fourthFaq , setFourthfaq]= useState(false)
    const [video, setVideo] = useState(false)

    return(
        <div className="bg-[] relative h-[74em] lg:h-[45em]">
          <div className="hidden absolute -top-80 lg:block md:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="1351" height="320" preserveAspectRatio="none">
  <path d="M 0 235.1 C 80 221.6 320 155 480 154.6 C 640 154.1 800 231.7 960 232.4 C 1120 233.1 1360 171 1440 158.7 L 1440 320 L 0 320 Z" fill="#111827"/>
</svg>
                 </div>
            <div className="flex-1 ml-3 lg:mx-10  lg:gap-40  lg:flex lg:flex-2 md:flex-2 absolute top-36 ">
           
            <div className="w-[25em] h-fit bg-[#E6EEF7] hover:bg-[#DAE6F3] duration-300 pt-5 pb-5 lg:w-[34em] rounded-2xl  shadow-2xl shadow-[#D44216] pl-3 lg:pl-5 border-t-8 border-[#D44216]">
                <div className="flex items-center gap-3  mt-7 mb-5">
                    <div className="bg-[#D44216] h-1 w-6 rounded-2xl"/>
                <p>Company's FAQ</p>
                <IoAirplaneSharp className="text-[#D44216]"/>
            </div>
            <div>
                <div className="comic-neue-regular text-3xl mb-6 text-[#222931] font-bold">
                    <p>FREQUENTLY ASKED QUESTIONS</p>
                    </div>

                <div className="flex gap-8 items-center">
                    <button onClick={()=> setFaq(!faq)} className="text-[16px] lg:text-2xl text-[#D44216] comic-neue-regular mb-4">How do you handle returns or exchanges?</button>
                   <div onClick={()=>setFaq(!faq)} className="">
                  { faq ? <LuChevronDown className="text-[#CBCFDA] text-2xl comic-neue-regular" /> : <LuChevronUp className="text-[#D44216] text-2xl"/>}
                    </div>
                    </div>
                    {
                        faq && (
                            <p className="w-96 lg:w-[28em] mt-5 comic-neue-bold-italic mb-3 text-[#445262]">We manage the entire reverse logistics process, making returns and exchanges seamless for both you and your customers.</p>
                        )
                    }


                    <div className="flex gap-28 items-center">
                        <p onClick={()=> setSecondFaq(!secondFaq)} className="text-[16px] lg:text-2xl text-[#D44216] comic-neue-regular mb-4">What does business consulting do?</p>
                   <div onClick={()=>  setSecondFaq(!secondFaq)} className="">
                    {secondFaq ? <LuChevronDown className="text-[#CBCFDA] text-2xl comic-neue-regular"/> : <LuChevronUp className="text-[#D44216] text-2xl"/> }
                    </div>
                    </div>


                    {
                        secondFaq &&(
                            <p className="w-96 lg:w-[28em] comic-neue-bold-italic mb-3 text-[#445262]">Business consulting helps organizations solve specific problems, improve operational efficiency, and maximize growth.</p>
                        )
                    }

                    <div className="flex gap-6  items-center">
                        <p onClick={()=>setThirdfaq(!thirdFaq)} className="text-[16px] lg:text-[22px] text-[#D44216] comic-neue-regular mb-4">Can I cancel a shipment after it's been booked?</p>
                    
                    <div onClick={()=> setThirdfaq(!thirdFaq)}>
                         {thirdFaq ? < LuChevronDown className="text-[#CBCFDA] text-2xl comic-neue-regular"/> : <LuChevronUp className="text-[#D44216] text-2xl"/> }
                         </div>
                    </div>
                
                    {
                        thirdFaq && (
                            <p className="w-96 lg:w-[28em] comic-neue-bold-italic mb-3 text-[#445262]">Yes, you can cancel a shipment as long as it has not yet been picked up or dispatched.</p>
                        )
                    }


                    <div className="flex gap- items-center">
                        <p onClick={()=>  setFourthfaq (!fourthFaq)} className="text-[16px] lg:text-[22px] text-[#D44216] comic-neue-regular mb-4">Can you assist with customs clearance procedures?</p>
                        <div onClick={()=> setFourthfaq(!fourthFaq)}>
                        {fourthFaq ?  < LuChevronDown className="text-[#CBCFDA] text-2xl comic-neue-regular"/> : <LuChevronUp className="text-[#D44216] text-2xl"/>}
                        </div>
                    </div>
                    { fourthFaq && (
                        <p className="w-96 lg:w-[28em] comic-neue-bold-italic mb-3 text-[#445262]">Yes, we provide full-service customs clearance support to ensure your international shipments comply with all local laws and cross borders smoothly.</p>
                    )}
            </div>
            </div>
                    <div className="mt-16 lg:mt-0 w-96 lg:w-[30em] lg:h-[27em] h-[32em]  shadow shadow-[#D44216] rounded p-2 border-2 border-[#D44216]">
            <img src="/delivery1.webp" className="w-96 lg:w-[30em] h-[31em] rounded absolute  lg:-top-20"/>
                               <div  className="backdrop-blur-lg w-fit rounded-full border-2 border-white p-5 text-5xl absolute top-[14em] lg:top-36 font-extrabold ml-50 ">
                                <CiPlay1 onClick={()=> setVideo(true)}  className="text-[#D44216] text-shadow-2xl text-shadow-black  z-10 "/>
                                </div>
                                <div className="">
                                   

                                 {video && (
                                    <div className="fixed inset-0 z-50 flex items-center backdrop-blur-lg bg-black/50 justify-center">
                                        <AiOutlineClose className="absolute  top-10 left-10/12 duration-300 hover:bg-[#D44216] hover:text-[#D9E4F4] text-[#D44216] bg-black/50 w-10 h-10 rounded-full text-2xl z-30"  onClick={()=>setVideo(false)}/>
                                  
                                    <video
                                    controls
                                   
                                    playsInline
                                    className="max-h-[80vh] rounded-2xl shadow shadow-[#D44216] "
                                    >
                                        <source src="/add.mp4" type="video/mp4" className="  "/>
                                    </video>
                                    </div>
                                )} 
                               
                                </div>
                    </div>
            </div>

        </div>
    )
}