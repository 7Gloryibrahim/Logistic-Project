import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import {ImFacebook } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
type UseAutoScrollType = {
  autoScrollIsPlaying: boolean
  toggleAutoScroll: () => void
  onAutoScrollButtonClick: (callback: () => void) => void
}

export default function Team() {
const [isPlaying, setIsPlaying] = useState(false)

const [emblaRef, emblaApi] = useEmblaCarousel(
{
loop: true,
align: 'start',
},
[
AutoScroll({
active: true,
speed: 0.2,
startDelay: 0,
stopOnInteraction: false,
stopOnMouseEnter: false,
stopOnFocusIn: false,
}),
]
)

const toggleAutoScroll = () => {
const autoScroll = emblaApi?.plugins()?.autoScroll

if (!autoScroll) {
  console.error('Auto Scroll plugin is not available.')
  return
}

if (isPlaying) {
  autoScroll.stop()
  setIsPlaying(false)
} else {
  autoScroll.play()
  setIsPlaying(true)
}

}

const  [icons, setIcons]= useState(false)
const [icons2, setIcons2] = useState(false)
const [icons3, setIcons3] = useState(false)
const [icons4, setIcons4] = useState(false)
const [icons5, setIcons5] = useState(false)

const [description1, setDescription1] = useState(false)
const [description2, setDescription2] = useState(false)
const [description3, setDescription3] = useState(false)
const [description4, setDescription4] = useState(false)
const [description5, setDescription5] = useState(false)
const [description6, setDescription6] = useState(false)

const [otherIcons, setOtherIcons] = useState<string | null> (null)
const teams = [
  {
    id: "1",
    img:"team-5.jpg",
    alt: "team1"
  },

  

  
]
return (
<section className="mt-20 bg-[#CBCFDA] px-6 py-12">

    <div className="flex items-center gap-4 justify-center mt-32">
       <div className='h-1 w-6 rounded bg-[#D44216]'></div> 
       <h3 className='text-2xl font-bold comic-neue-bold'>TEAM MEMBERS</h3>
    </div>

    <div>
        <p className='text-3xl flex justify-center lg:text-5xl bebas-neue-regular tracking-wide'>OUR EXPERT LOGISTIC TEAM</p>
    </div>
<div className="mx-auto max-w-5xl mt-24">
<div className="overflow-hidden" ref={emblaRef} >
<div className="flex ">

<div className="team min-w-0 w-full px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] ">
        <div onMouseEnter={() => { setIcons(true); setDescription1(true) }} onMouseLeave={() => {setIcons(false); setDescription1(false)}} className="team1 flex overflow-visible h-96 relative items-center justify-center rounded-2xl  shadow-md">
        <img src='team1.jpg' alt="team1" className='h-96  '/>
        
      
        <div  className={`icons absolute transition-all z-20 top-12 shadow shadow-black text-white flex flex-col bg-[#D44216] w-fit h-fit p-3 gap-y-4 duration-500 inset-0 ease-in-out ${
          icons ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} >
          < FaXTwitter />
          < GrInstagram/>
          <ImFacebook />
          <  FaLinkedin />
        </div>

        <div className={`absolute bottom-0 w-full   bg-[#D44216]/50 text-white shadow shadow-black  transition-all duration-500 ${
          description1 ? "translate-y-0 h-full opacity-100": "translate-y-full opacity-0 h-0 overflow-visible"}`}>
          <div className='mt-52 ml-7'>
            <p>Olivia Smith</p>
          <p className='text-2xl bebas-neue-regular tracking-wide'>Logistics Manager</p>
          <p className='w-72'>Oversees daily logistics operations, ensuring shipments are handled efficiently and deliveries stay on schedule.</p>
          </div>
        </div>

        </div>
</div>

        <div className="team min-w-0 flex-[0_0_100%] w-full relative overflow-hidden sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
          <div onMouseEnter={()=> {setIcons2(true);setDescription2(true)}} onMouseLeave={()=> {setIcons2(false); setDescription2(false)}} className="team1 flex h-96 items-center relative justify-center rounded-2xl  shadow-md">
            <img src='team2.jpg' alt='team2' className='h-96 '/>
            <div  className={`icons absolute transition-all shadow shadow-black top-12 z-20 left-0 text-white flex flex-col bg-[#D44216] w-fit h-fit p-3 gap-y-4 duration-500  ease-in-out ${
          icons2 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} >
          < FaXTwitter />
          < GrInstagram/>
          <ImFacebook />
          <  FaLinkedin />
        </div>

         <div className={`absolute bottom-0 w-full   bg-[#D44216]/50 text-white shadow shadow-black  transition-all duration-500 ${
          description2? "translate-y-0 h-full opacity-100": "translate-y-full opacity-0 h-0 overflow-visible"}`}>
          <div className='mt-52 ml-7'>
            <p>Emma Johnson</p>
          <p className='text-2xl bebas-neue-regular tracking-wide'>Transportation Coordinator</p>
          <p className='w-72'>Coordinates transportation schedules and routes to ensure goods reach their destinations safely and on time.</p>
          </div>
          
          </div>

          
      
        </div>

        </div>

        <div className="team min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
          {teams.map((x)=> (
          <div
          key={"1"}
          onMouseEnter={()=> {setOtherIcons("1"); setDescription3(true)}}
          onMouseLeave={()=> {setOtherIcons(null); setDescription3(false) }}
          className="team1 flex h-96 items-center justify-center rounded-2xl bg-white shadow-md">
           <img src={x.img} alt={x.id} className='h-96 '/>
            <div  className={`icons absolute transition-all top-12 z-20 shadow shadow-black left-0 text-white flex flex-col bg-[#D44216] w-fit h-fit p-3 gap-y-4 duration-500  ease-in-out ${
         
        otherIcons ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} >
          < FaXTwitter />
          < GrInstagram/>
          <ImFacebook />
          <  FaLinkedin />
        </div>
        <div className={`absolute bottom-0 w-full   bg-[#D44216]/50 text-white shadow shadow-black  transition-all duration-500 ${
          description3? "translate-y-0 h-full opacity-100": "translate-y-full opacity-0 h-0 overflow-visible"}`}>
          <div className='mt-52 ml-7'>
            <p>Oliver Williams</p>
          <p className='text-2xl bebas-neue-regular tracking-wide'>Freight Operations Specialist</p>
          <p className='w-72'>Manages freight movements and shipment processes, ensuring smooth coordination from pickup to delivery.</p>
          </div>
          
          </div>
          </div>
          ))}
        </div>
      
      
      <div className="team min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
          
          <div 
          onMouseEnter={()=>{setIcons3(true); setDescription4(true)}} onMouseLeave={()=>{setIcons3(false); setDescription4(false)}} className="team1 flex h-96 items-center justify-center rounded-2xl bg-white shadow-md">
            <img src='team3.jpg' className='h-96 '/>
           <div  className={`icons absolute transition-all top-12 z-20 left-0 text-white flex flex-col bg-[#D44216] w-fit h-fit p-3 shadow shadow-black gap-y-4 duration-500  ease-in-out ${
          icons3 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} >
          < FaXTwitter />
          <GrInstagram/>
          <ImFacebook />
          <FaLinkedin />
        </div>
         <div className={`absolute bottom-0 w-full   bg-[#D44216]/50 text-white shadow shadow-black  transition-all duration-500 ${
          description4? "translate-y-0 h-full opacity-100": "translate-y-full opacity-0 h-0 overflow-visible"}`}>
          <div className='mt-52 ml-7'>
            <p>James Brown</p>
          <p className='text-2xl bebas-neue-regular tracking-wide'>Supply Chain Coordinator</p>
          <p className='w-72'>Coordinates the movement of goods and resources to support efficient supply chain operations.</p>
          </div>
          
          </div>
          </div>
        </div>

        <div className="team min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
          <div onMouseEnter={()=>{ setIcons4(true); setDescription5(true)}} onMouseLeave={()=> {setIcons4(false); setDescription5(false)}} className="team1 flex h-96 items-center justify-center rounded-2xl bg-white shadow-md">
            <img src='team-6.jpg' className='h-96 '/>
          <div  className={`icons absolute transition-all top-12 z-20 left-0 text-white flex flex-col bg-[#D44216] w-fit h-fit p-3 shadow shadow-black gap-y-4 duration-500  ease-in-out ${
          icons4 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} >
          < FaXTwitter />
          <GrInstagram/>
          <ImFacebook />
          <FaLinkedin />
        </div>
          <div className={`absolute bottom-0 w-full   bg-[#D44216]/50 text-white shadow shadow-black  transition-all duration-500 ${
          description5? "translate-y-0 h-full opacity-100": "translate-y-full opacity-0 h-0 overflow-visible"}`}>
          <div className='mt-52 ml-5'>
            <p>Noah Liam</p>
          <p className='text-2xl bebas-neue-regular tracking-wide'>Customer Service Representative</p>
          <p className='w-72'>Assists customers with shipment enquiries, tracking updates, and delivery-related concerns.</p>
          </div>
          
          </div>
          </div>
        </div>


        <div className="team min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
          <div onMouseEnter={()=> {setIcons5(true); setDescription6(true)}} onMouseLeave={()=> {setIcons5(false); setDescription6(false)}} className="team1 flex h-96 items-center justify-center rounded-2xl bg-white shadow-md">
            <img src='team-7.jpg' className='h-96 '/>
          <div  className={`icons absolute transition-all top-12 z-20 left-0 text-white flex flex-col bg-[#D44216] w-fit h-fit p-3 shadow shadow-black gap-y-4 duration-500  ease-in-out ${
          icons5 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} >
          < FaXTwitter />
          <GrInstagram/>
          <ImFacebook />
          <FaLinkedin />
        </div>
          <div className={`absolute bottom-0 w-full   bg-[#D44216]/50 text-white shadow shadow-black  transition-all duration-500 ${
          description6? "translate-y-0 h-full opacity-100": "translate-y-full opacity-0 h-0 overflow-visible"}`}>
          <div className='mt-48 ml-5'>
            <p>Michael Jones</p>
          <p className='text-2xl bebas-neue-regular tracking-wide'>Warehouse and Distribution Officer</p>
          <p className='w-72'>Oversees the handling, storage, and distribution of goods to ensure accurate and timely order fulfilment.</p>
          </div>
          
          </div>
          </div>
        </div>

      </div>
    
    
   
   
    </div>

    

    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
      >
        Previous
      </button>

      <button
        type="button"
        onClick={toggleAutoScroll}
        className="rounded-full bg-[#D44216] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D44216]"
      >
        {isPlaying ? 'Stop' : 'Play'}
      </button>

      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  </div>
</section>

)
}