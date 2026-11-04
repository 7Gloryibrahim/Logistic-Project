import { useEffect, useState } from 'react'
import "leaflet/dist/leaflet.css";
import "./contact.css";
import { motion } from "framer-motion"
import Nav  from './Nav';
import SmoothScroll from './smoothScroll';
import ContactMap from './map'
import Footer from './footer'
import useToggle from './toggle';
import toggle from './toggle';
import Why from './why';
import type { ReactFormState } from 'react-dom/client';
import { email } from 'zod';
export default function Contact() {
   const { toggle, handleToggle } = useToggle();
   const [popUp, setPopUp] = useState(false)
   const [popUpText, setPopUpText] = useState("")

   const [message, setMessage] = useState({
    name:"",  
    email:"",
    message: "",

   })

   function handleSubmit (e: React.FormEvent<HTMLFormElement>){
    {e.preventDefault()}

   if(!message.name.trim()){
    setPopUp(true)
    setPopUpText("Kindly enter your name before submiting.")
    return
   }

   if(!message.email.trim()){
    setPopUp(true)
    setPopUpText("Kindly enter you email address.")
    return

   }

   setPopUp(true)
   setPopUpText("Thank you for contacting us! We'll get back to you soon.")
   }

   
   
  // const [leaflet, setLeaflet] = useState<typeof import('react-leaflet') | null>(null)
  // const [markerIcon, setMarkerIcon] = useState<import('leaflet').DivIcon | null>(null)

  // useEffect(() => {
  //   let active = true

  //   Promise.all([import('react-leaflet'), import('leaflet')]).then(([components, L]) => {
  //     if (active) {
  //       setLeaflet(components)
  //       setMarkerIcon(
  //         L.divIcon({
  //           className: 'contact-marker-icon',
  //           html: '<span class="contact-marker-pin"><span></span></span>',
  //           iconSize: [30, 40],
  //           iconAnchor: [15, 40],
  //           popupAnchor: [0, -36],
  //         }),
  //       )
  //     }
  //   })

  //   return () => {
  //     active = false
  //   }
  // }, [])

  // if (!leaflet || !markerIcon) {
  //   return <div className="h-[400px] w-full" aria-label="Loading map" />
  // }

  // const { MapContainer, TileLayer, Marker, Popup } = leaflet
  // const locations: { name: string; position: [number, number] }[] = [
  //   { name: 'Delta State (Asaba)', position: [6.198, 6.732] },
  //   { name: 'Lagos State', position: [6.5244, 3.3792] },
  //   { name: 'Cross River State (Calabar)', position: [4.9517, 8.3417] },
  //   { name: 'Rivers State (Port Harcourt)', position: [4.8156, 7.0498] },
  // ]

  return (
    <div className='bg-[#C0C3D4]'>
      <SmoothScroll/>
      <Nav/>
      <div>
        <div style={{backgroundImage:"url('/Customer-care7.webp')", backgroundSize:"cover"}} className="h-[50em] lg:h-[40em] relative">
        <div className=' inset-0 bg-linear-to-r from-black/90 via-black/90 to-transparent z-30 absolute h-[50em]   lg:h-[40em]'></div>
          {/* <img src="/Customer-care6.jpg"  alt="Customer care team" className=' w-full  object-cover object-center'/> */}
       <div className='absolute w-full flex flex-col justify-center text-center top-80 lg:top-1/2'>
       <div className='flex flex-row w-full justify-center text-2xl z-30 gap-2 inter-regular'>
        <p className='text-white '>Contact</p>
        <p className='text-[#F75128]'>Us</p>
        </div>

          <motion.div
          
           initial={{y:-10, opacity: 0, scale:0.7}}
            whileInView={{y:0, opacity:1, scale:1}}
            transition={{duration:0.8, ease:"easeInOut"}}
          viewport={{once:false, amount: 0.3}}
          
          className=' z-40 text-center items-center flex gap-2 justify-center w-full'>
          <p className='text-white bebas-neue-regular text-4xl lg:text-5xl tracking-wide capitalize'>
            Your Next Move Starts
          </p>
          <p className='text-4xl lg:text-5xl bebas-neue-regular text-[#F75128]'> Here.</p>
        </motion.div>

        <div className='flex flex-row gap-2 w-full justify-center text-center items-center z-30'>
        <p className='text-white'>What Do You</p>
        <p className='text-[#F75128] inter-regular'>Need ?</p>
        </div>

            <div className='w-full text-white z-30 justify-center flex '>
              <p className="w-[30em] mt-5 inter-regular">Have a shipment to plan or a question about our services? We're here to help you find the right logistics solution. Let's get things moving.</p>
            </div>
            <div className='w-full hidden lg:w-96 z-30 h-1 rounded-2xl  justify-center lg:block  bg-[#F75128] absolute lg:top-[13em] lg:left-[30em] lg:right-[30em] '></div>
        </div>
        </div>
        
      </div>

      <div className=' mt-33  '>
       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c44019" fill-opacity="1" d="M0,32L720,192L1440,96L1440,320L720,320L0,320Z"></path></svg>
         <section className='bg-[#C44019] mb-52 lg:h-[40em] px-10'>
          <div className='flex flex-col text-white lg:flex lg:flex-row justify-center w-full gap-12 '>
          <div className='items-center text-center bg-[#111827] p-5 pl-5 pr-5'>
            <p className='bebas-neue-regular text-2xl tracking-wide'>Phone</p>
            <p>Have any question?</p>
            <p>+234 8415 2569</p>
          </div>

          <div className='items-center text-center bg-[#111827] p-5 pl-5 pr-5'>
           <p className='bebas-neue-regular text-2xl tracking-wide'>Email</p>
           <p>Write us email</p>
           <p>support@logistra.com</p>
          </div>

          <div className='items-center text-left bg-[#111827] p-5 pl-5 pr-5'>
            <p className='bebas-neue-regular text-2xl tracking-wide'>Location</p>
            <p>Headquoters</p>
            <p className=''>1 cloud, somewhere in Heaven Street, Paradise State</p>
          </div>

        

          </div>
          <div className='flex flex-col justify-center items-center gap-y-5 mt-16 '>
           <div className='text-center text-white'>
            <p className='bebas-neue-regular text-5xl'>Leave Us Your Info</p>
            <p className='inter-regular'>and we will get back to you</p>
            </div>
            <form onSubmit={handleSubmit} className=' flex flex-col gap-y-8 text-white inter-regular mb-33'>
              <div className='flex bg-[#111827] gap-4 h-12 items-center pl-2 pr-2'>
              <label htmlFor='name'>Name</label>
              <input id='name' name="name" 
               value={message.name}
               onChange={(e)=>
               setMessage({...message,name: e.target.value})
               }
                placeholder='Enter Your Name Please' className='outline-0'/>
                </div>

                <div className='flex bg-[#111827] gap-4 h-12 items-center pl-2 pr-2'>
              <label htmlFor='email'>
                Email
              </label>
              <input id='email' placeholder='youremail@gmail.com' name='email'
              value={message.email}
              onChange={(r)=>
                setMessage({...message,email: r.target.value})
              }
              className="outline-0"/>
              </div>

                <div className='flex bg-[#111827] gap-4 h-fit items-center pl-2 pr-2'>
              <label htmlFor='message'>
                Message
              </label>
              <textarea id='message' name="message" placeholder="Enter your message"  className='outline-0 pt-6 '/>
              </div>
              <div className='flex flex-row w-full justify-center '>
              <button type='submit' onClick={handleToggle} className={` bg-[#111827] w-fit items-center p-3 rounded-2xl ${toggle ? "squash2" : ""} `}>
                Send Message
              </button>
              </div>
            </form>
        {popUp && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">

    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md rounded-2xl border-t-4 border-[#F75128] bg-[#111827] p-8 text-center text-white shadow-2xl"
    >

      <div className="mb-4 text-4xl text-[#F75128]">
        !
      </div>

      <h2 className="mb-3 text-2xl bebas-neue-regular tracking-wide">
        Notice
      </h2>

      <p className="mb-7 text-gray-300 inter-regular">
        {popUpText}
      </p>

      <button
        type="button"
        onClick={() => setPopUp(false)}
        className="rounded-lg bg-[#F75128] px-6 py-3 font-semibold text-white transition hover:bg-[#D44216]"
      >
        Okay, I understand
      </button>

    </motion.div>

  </div>
)}

          </div>
          </section>


        
          <Why/>
        
      </div>

        

      {/* <section>
      <MapContainer
        className="contact-map  "
        center={[9.082, 8.6753]}
        zoom={6}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker key={location.name} position={location.position} icon={markerIcon}>
            <Popup className="contact-popup">{location.name}, Nigeria</Popup>
          </Marker>
        ))}
      </MapContainer>
      </section> */}
      <section className='mt-35'>
        <ContactMap/>
      </section>
      <footer className='mt-28'>
        <Footer/>
      </footer>
    </div>
  )
}
