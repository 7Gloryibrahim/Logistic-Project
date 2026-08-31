import { useState,} from "react";
import Solution  from "./Solution";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { BsGeoAltFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { RiArrowRightWideFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

import FlipWords from "~/flip";
import {motion} from "framer-motion"

export function Page(){
    const [search, setSearch] = useState(false)
    const [menu, setMenu] = useState(false)
    return(
        <div className="bg-[#111827] font-sans">
            <nav>
             <div className="absolute z-50 w-full bg-[#192235] sm:block md:block">
            {/*first Top */}
            <div className="bg-[#111827] hidden sm:flex sm:justify-between sm:px-7 md:pl-0 sm:ml-6 sm:mr-3  md:hidden  md:ml-6 lg:justify-between lg:pl-7 lg:flex   ">
                {/* Left side */}
                <div className="">
                    <ul className=" sm:flex sm:gap-5  sm:py-3  ">
                      
                        <li className="flex gap-1 text-white  translate duration-300 hover:text-[#F75128]"><MdPhoneInTalk className="mt-1 text-[#F75128]"/>[+123 456 789]</li>
                        <li className="flex text-white translate duration-300 hover:text-[#F75128]">
                        < MdEmail className="mt-1 text-[#F75128]"/>
                        <a href='mailto:support@logistra.com'>[support@logistra.com]</a></li>
                    </ul>
                </div>
                {/*Right side */}
                <div className="">
                    <ul className="bg-[#F75128] py-3 px-10 flex sm:-mr-7 sm:w-80 sm:gap-3 sm:text-center md:gap-3 md:-mr-7 md:text-center lg:gap-3 lg:-mr-7 lg:text-center" style={{clipPath: "polygon( 15% 0%,100% 0%, 100% 100%,0% 100%)"}}>
                        <li className="text-white  transition duration-300 hover:text-black"><Link to='/page-one'><FaFacebookF /></Link></li>
                        <li className="border-r-2 border-amber-50"></li>
                        <li className="text-white transition duration-300 hover:text-black">< FaXTwitter/></li>
                         <li className="border-r-2 border-amber-50"></li>
                        <li className="text-white transition duration-300 hover:text-black"><FaInstagram/> </li>
                         <li className="border-r-2 border-amber-50"></li>
                        <li className="text-white transition duration-300 hover:text-black"><RiLinkedinFill/></li>
                         <li className="border-r-2 border-amber-50"></li>
                        <li className="text-white transition duration-300 hover:text-black"
                         onClick={() => setSearch(true)}
                       >Search</li>
                    </ul>
                </div>
            </div>

            {/*Second Top */}

                <div className="second-border flex bg-[#111827] border-r-2 border-orange-600  mr-2 sm:border-r-0 sm:border-t-2 sm:ml-6 sm:h-20 sm:mr-3 md:mr-3 md:h-20 md:border-r-2 md:border-orange-600 lg:mr-3 lg:h-20">
                    <div className="bg-[#F75128] w-72 " style={{clipPath:"polygon(0 0, 100% 0, 90% 100%, 0 100%)"}}>
                        <img src="/Truck1.png" alt="Truck" className="mt-4 items-center pr-3.5 pb-3 sm:pl-1 sm:w " />
                    </div>
                    {/*Nav bar at the top*/}
                    <div className=" flex justify-between w-full  font-bold">
                        <ul className=" hidden  sm:flex sm:ml-4 sm:gap-6 mt-5 text-white items-center md:hidden lg:flex    ">
                            <li className="Home flex">Home <MdArrowDropDown className="mt-1" />
                            {/*First Drop Down */}
                            <ul className="Home-one">
                            <li className="Drop-one">Header One</li>
                            <li className="Drop-one">Header Two</li>
                            <li className="Drop-one">Header Three</li>
                            <ul className="Fs-menu flex justify-between ">
                            <li className="Drop-one  ">Header Styles</li>
                             < RiArrowRightWideFill className="arrow-one mt-3 mr-3 text-2xl text-[#F75128]" />

                            {/* Second Drop-down */}

                            <ul className="second-menu font-bold text-white">
                                <li className="home-head-one">Header One</li>
                                <li className="home-head-one">Header Two</li>
                                <li className="home-head-one">Header Three</li>

                            </ul>

                           </ul>
                            </ul>
                            </li>
                            <li className="flex">About <MdArrowDropDown  className="mt-1"/></li>
                            <li className="services flex">Services <MdArrowDropDown className="mt-1"/>
                            <ul className="service-drop-down ">
                                <li className="service-menu">Services</li>
                                <li className="service-menu">International Transport</li>
                                <li className="service-menu">Local Track Transport</li>
                                <li className="service-menu">Fast Personal Delivery</li>
                                <li className="service-menu">Safe Ocean Transport</li>
                                 <li className="service-menu"> Warehouse Facility</li>
                               <li className="service-menu">Emergency Transport</li> 
                            </ul>
                            </li>
                            <li className=" Pages flex">Pages <MdArrowDropDown className="mt-1"/>
                            
                                <ul className="Pages-menu">
                                       <li className="pages-list">Team</li> 
                                        <li className="pages-list">Team Details</li>
                                        <li className="pages-list">Projects</li>
                                        <li className="pages-list">Project Details</li>
                                        <li className="pages-list">Testimonials</li>
                                        <li className="pages-list">Pricing</li>
                                        <li className="pages-list">FAQ</li>
                                        <li className="pages-list">404 Error</li>
                                </ul>

                            </li>
                            <li className=" Shop flex">Shop <MdArrowDropDown  className="mt-1"/>
                            
                                <ul className="Shop-menu">
                                   <li className="Shop-list">Products</li> 
                                     <li className="Shop-list">Product Details </li> 
                                     <li className="Shop-list">Cart </li>
                                       <li className="Shop-list">Checkout</li>
                                         <li className="Shop-list">Wishlist</li>
                                        <li className="Shop-list">Sign up</li>
                                          <li className="Shop-list">Login</li>  
                                </ul>

                            </li>
                            <li className="Blog flex">Blog <MdArrowDropDown  className="mt-1"/>
                            
                            <ul className="Blog-menu">
                                    <li className="Blog-list">Blog</li>
                                    <li className="Blog-list">Blog Standard</li>
                                    <li className="Blog-list">Blog Left Sidebar</li>
                                    <li className="Blog-list">Blog Left Sidebar</li>
                                    <li className="Blog-list">Blog Details</li>

                            </ul>
                            
                            </li>
                            <li>Contact</li>
                        </ul>

                            <div className="hidden  sm:hidden md:hidden lg:block">
                        <button className="track-order border-2 border-double border-white text-white  p-3 h-20  md:block">TRACK ORDER</button>
                       
                    </div>
                         {/*Mobile Icon */}
                    <div onClick={()=> setMenu(prev => !prev)} className="absolute left-5/6  text-[#F75128] text-3xl font-bold  sm:hidden md:block md:mt-6 md:left-5/6  lg:hidden ">
                        <IoMenu  />
                    </div>
                    </div>

                </div>

            </div>
            </nav>
          
            <section>
            {/*Hero Background-Image */}
            <div>
                <div style={{backgroundImage:"url('/homebg.jpg')", backgroundPosition:"center", backgroundAttachment:"fixed",backgroundSize:"cover", overflow:"hidden"}} className="relative overflow-hidden h-[45em] sm:h-[140vh] md:h-[180vh] lg:h-[140vh] ">
               
              
                <div>
                    <img src="/hero-globe.png" alt="Globe" className="absolute   left-1/2 -translate-x-1/2 z-40 top-28 sm:mx-auto md:top-36    lg:top-44"/>
{/*Goe location icons */}
                    <div className="relative z-40 text-wrap justify-center h-full top-20 sm:top-50  ">
                    <div className="circleicon1  absolute text-[#F75128] sm:left-1/3 sm:top-"><FaCircle className="relative text-[#F75128] left-26 top-9 sm:top-2 sm:left-20" /><FaRegCircle className=" absolute text-[#F75128] text-3xl left-24 top-7  sm:top-0 sm:left-18.25 "/>
<div className="dot1 absolute top-10 text-[#111827] z-50 p-2 font-bold rounded left-28 lg:left-0 bg-white w-36 text-center">
                        <p>Cross River State</p>
                        <div className=" ml-12 w-10  border-2 border-[#F75128] shadow-2xl shadow-white rounded-full ">
                            <img src="/flag1.png" className="w-10 rounded-full"/>
                        </div>
                       
                        <p>Logistic service provider</p>
                     </div>


                   <div>
                    <div className="bg-white absolute h-16 w-16 rounded-full -top-0 left-20 lg:-top-4 transition animate-ping [animation-duration:1s] -z-20 lg:left-[55px]"></div>
                    <div className="bg-white absolute h-10 w-10 rounded-full left-[91px] lg:left-[69px] lg:-top-1 transition animate-ping [animation-duration:2s] -z-10 "></div>
                    </div>
                    
                     </div>
                      <div className="circleicon2  text-[#F75128] absolute sm:left-2/3 "><FaCircle className="circleicon2  relative left-40 top-26 sm:top-52 sm:-left-62"/><FaRegCircle className=" absolute text-3xl left-38 top-24  sm:top-50 sm:-left-64 " />

                        <div className="dot2 absolute right-60 top-60 text-[#111827] font-bold bg-white w-36 text-center rounded p-2">
                        <p>Delta State</p>
<div className="w-10 border-2 ml-12   border-[#F75128] rounded-full">
                            <img src="/flag1.png" className="rounded-full w-10"/>
                        </div>

                        <p>Logistic service provider</p>
                     </div>

                     
                      <div>
                    <div className="bg-white absolute h-16 w-16 rounded-full left-[135px] top-[75px] lg:right-[224px]  lg:top-44 transition  [animation-duration:1s] animate-ping -z-20">
                    </div>   
                      <div className="bg-white absolute h-10 w-10 rounded-full left-36.5 top-22.5 lg:right-[236px]  lg:top-[193px] transition [animation-duration:2s] animate-ping   duration-700 -z-10 "></div> 



                    </div>
                     </div> 
                     
                     <div className="circleicon3 text-[#F75128] absolute sm:left-80 sm:top-20"><FaCircle className="circleicon3 relative left-60 top-16 sm:top-2 sm:left-4" /><FaRegCircle className=" absolute text-3xl top-14 left-58 sm:top-0 sm:left-2 "/>
                    <div className="dot3 absolute bottom-6 right-7 text-[#111827] font-bold bg-white w-36 text-center rounded p-2">
                        <p>Lagos</p>
                        <div className="w-10 border-2 ml-12   border-[#F75128] rounded-full">
                            <img src="/flag1.png" className="rounded-full w-10"/>
                        </div>

                        <p>Logistic service provider</p>
                     </div>

                      <div>

                    <div className="bg-white absolute h-16 w-16 rounded-full left-7 top-8 lg:-left-2 lg:-top-4 transition  [animation-duration:1s] animate-ping -z-20 "></div>
                    <div className="bg-white absolute h-10 w-10 rounded-full left-11 top-12 lg:left-0.75  lg:-top-1 transition [animation-duration:2s] animate-ping   duration-700 -z-10 "></div>
                    </div>
                    

                     </div>
                     {/*right*/}
                     <div className="circleicon4 text-[#F75128] absolute sm:left-2/3 sm:top-20"> <FaCircle className="circleicon4 relative left-14 top-16 sm:top-2 sm:left-4"/><FaRegCircle className=" absolute text-3xl left-12 top-14 sm:top-0 sm:left-2"/>


         {/*The right hand dot*/}           
                     <div>
                         <div>
                    <div className="bg-white absolute h-16 w-16 rounded-full left-[214px] top-8 lg:-top-4 lg:-left-2 transition  [animation-duration:1s] animate-ping  -z-20 "></div>
                    <div className="bg-white absolute h-10 w-10 rounded-full left-[227px] top-12 lg:-top-1 lg:left-[3px] transition [animation-duration:2s]    animate-ping  duration-700 -z-10 "></div>
                    </div>
                    </div>
                     <div className="dot4 absolute top-24 lg:top-8 left-32 lg:left-0  text-[#111827] font-bold bg-white w-36 text-center rounded p-2 ">
                        <p className="">Rivers State</p>
                        <div className="w-10 border-2 ml-12   border-[#F75128] rounded-full">
                            <img src="/flag1.png" className="rounded-full w-10"/>
                        </div>
                        <p>Logistic service provider</p>
                     </div>
                     </div>

                   

                    </div>
                </div>

    {/* Hero Overlay */}
                <div className="absolute bg-black/50 inset-0 h-[140vh] sm:h-[140vh] md:h-[180vh] lg:h-[140vh]"></div>
                
             {/*Hero mini video*/}   
                <motion.div 
                 initial={{opacity:0, y:-50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2, ease:"easeInOut"}}
                viewport={{once:false}}
                className="absolute object-cover h-fit w-72  top-96 left-[78%] z-50 hidden sm:hidden md:hidden lg:block border border-[#F75128] rounded-2xl ">
                    <video
                    autoPlay
                    playsInline
                    muted
                    loop className="h-fit w-96 rounded-2xl mt-0 ">
                        <source src="/container1.mp4" type="video/mp4" className="absolute  "/>
                    </video>
                    <motion.div 
                     initial={{opacity:0, y:-50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2, ease:"easeInOut"}}
                viewport={{once:false}}
                    className="absolute backdrop-blur-md border border-[#F75128] p-1 rounded-2xl top-36">
                       <Link to='/AboutUs'> <button className="bg-[#111827] text-[#F75128] rounded-2xl p-3 cursor-pointer border border-amber-50">Our Team</button></Link>
                    </motion.div>
                </motion.div>
               {/*Mini Hero Box*/}
                <motion.div 
                initial={{opacity:0, y:-50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2, ease:"easeInOut"}}
                viewport={{once:false}}
                className="absolute hidden  z-50 top-96 backdrop-blur-md text-white p-7 border border-[#F75128] rounded-2xl
                left-7 sm:hidden md:hidden lg:block ">
                   
                   <div className="flex items-center gap-1 ">
                    <div className="w-7 h-1 bg-white rounded"></div>
                    <p className="text-[#F75128] text-4xl ">Reliable</p>
                    <p className="font-bold">Transport.</p>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <div className="bg-[#F75128] h-1 w-7 rounded"></div>
                    <p className="font-bold">On Time,</p>
                    <p className="text-[#F75128] text-4xl"><FlipWords
    words={["Ahead", "Safe", "Success","Direct","Proven","Swift "]}
  /></p>
  <p className="font-bold">Everytime</p>
                    </div>
                </motion.div>

     {/*Hero text*/}
               <motion.div initial={{opacity:0 , y:50}}
                                   whileInView={{opacity:1, y:0}}
                                   transition={{duration:0.8,
                                    ease:"easeOut"
                                   }}
                                viewport={{once:false}}
                                
               className=" relative text-wrap z-50 top-72 gap-4 rounded md:border md:border-white md:mx-7 md:p-7 md:backdrop-blur-md lg:border lg:border-white sm:top-2/3    sm:flex sm:items-center  md:block md:top-1/2 lg:flex lg:w-fit lg:p-4 lg:top-2/3 lg:gap-4 lg:left-1/6 lg:backdrop-blur-md ">
                {/*First Text*/}
                <div >
                    <h1 className="text-white font-bold ml-10 text-4xl sm:mb-5 md:top-0 md:ml-10 md:text-5xl sm:w-fit lg:ml-0 lg:w-full  ">Modern Logistic </h1>
                       <p className="text-[#F75128] font-bold ml-10 sm:text-4xl  sm:mb-5 sm:ml-0 md:ml-10 lg:ml-0 lg:text-right"> Transport</p>
                    <p className=" text-white ml-10 md:ml-10 sm:ml-0 lg:ml-0  lg:text-right">Specialist In Modern</p>
                    <p className=" text-white mb-5 ml-10 sm:ml-0 md:ml-10 md:mb-3 lg:text-right lg:ml-0">Transportation</p>
                </div>
   {/* Line in-between */}
                <div className="hidden sm:block bg-[#F75128] w-1 sm:h-72 md:hidden lg:block lg:h-64"></div>
                <div className="block h-72 w-1  absolute bg-[#F75128]  left-5 sm:hidden md:block md:top-44 lg:hidden"></div>
      {/*Second Text*/}
                <div>
                <div className="sm:w-[60%] sm:text-wrap ">
                    <p className=" ml-10 w-80 text-white  md:ml-10 md:w-80 lg:ml-0 lg:text-left lg:w-72 tracking-[1px]">Logistic service provider company plays a pivotal role
                        in the global supply chain ecosystem managing.</p>
                    </div>
       {/*Rounded Hero Images*/}
                    <div className=" relative block ml-10 mt-5 gap-x-24 sm:ml-0 md:flex md:ml-10 lg:ml-0 lg:flex ">
                     
                        <img src="hero1.jpg" alt="hero1" className="relative rounded-full border-2 border-[#F75128]"/>

                        <img src="hero2.jpg" alt="hero2" className="absolute top-0 left-10 rounded-full border-2 border-[#F75128] sm:top-0 md:top-0 lg:top-0"/>

                        <img src="/hero3.jpg" alt="hero3" className="absolute left-20 top-0 rounded-full border-2 border-[#F75128]"/>
                   

                    <div>
                        <p className="text-white  md:text-2xl lg:text-2xl">Customer Satisfied</p>
                        <p className="text-white ">4.8 (15k Reviews)</p>
                    </div>
                    
                  </div>
                  <button className="About-btn flex left-7 overflow-hidden text-wrap items-center gap-4 h-16 font-bold bg-[#F75128] text-white py-2 px-4 rounded mt-6 sm:ml-0 md:ml-10 lg:ml-0"><Link to="/AboutUs"   className="flex items-center gap-4 w-full h-full">About Us <FaArrowRightLong />
                  <span className="About-btn-line1"></span> </Link>
                 
                  </button>
                 
                </div>
               </motion.div>
                    

            </div>
             </div>
             </section>
       {/*Second section*/} 
        <Solution/>
            <div
    onClick={() => setSearch(false)}
    className={`
        fixed
        top-0
        right-0
        bottom-0
        left-0

        bg-[#F75128]/50

        flex
        justify-center
        items-start

        pt-64
        z-50
        transition-transform
        duration-700
        ease-in-out

        ${
            search
                ? "translate-y-0"
                : "-translate-y-full"
        }
    `}
>

    <div
        onClick={(e) => e.stopPropagation()}
        className="w-full flex justify-center">

        <input
            type="text"
            placeholder="Search..."
            className=" py-5 px-6 relative w-72 rounded-l-2xl border-2 border-[#F75128] bg-white outline-0 text-black"
        />
        <label className=" bg-[#F75128] rounded-r-2xl w-20">
            <FaMagnifyingGlassChart className="text-2xl text-white h-16 ml-4 text-center   " />
        </label>
        
    </div>

            </div>
      <div 
      onClick={()=> setMenu(false)} className={`fixed top-2 left-0 bottom-2 rounded-tr-2xl rounded-br-2xl items-start w-60 z-50 transition-transform duration-700  pl-5 ease-in-out  bg-[#111827] border-t-4 border-t-[#F75128] shadow-2xl shadow-black block  md:block md:w-80 lg:hidden ${menu ? "translate-x-0" : "-translate-x-full"} `}  >
        <div onClick={(e)=> e.stopPropagation() } className={`h-full`}>
     <ul className={`text-amber-50`}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
     </ul>
      </div>
      
      </div>

        </div>
    )
   
}

