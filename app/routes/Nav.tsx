import { useState,} from "react";

import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { RiArrowRightWideFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

export function Nav(){
    const [search, setSearch]= useState(false)
    const [ menu, setMenu] = useState(false)
    return(
        <div>
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
                        <img src="/Truck1.png" alt="Truck" className="mt-4  sm:pl-1 sm:w "/>
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
                            <li className="Blog flex">BLog <MdArrowDropDown  className="mt-1"/>
                            
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
                    <div onClick={()=> setMenu(prev => !prev)} className="absolute   text-[#F75128] text-3xl font-bold  sm:hidden md:block  md:md:left-5/6  lg:hidden ">
                        <IoMenu  />
                    </div>
                    </div>

                </div>

            </div>
            </nav>
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

            <div onClick={ ()=> setMenu(false)} 
                className={`
                    fixed
                    top-2
                    left-0
                    bottom-2
                    w-52
                    h-full
                    block
                    md:block
                    lg:hidden
                    items-center
                    border-t-2
                    border-t-[#F75128]
                    bg-[#192235]

                    
                    ${
                     menu
                       ? "translate-x-0"
                       : "-translate-x-full"
                        }
                        
                        `}
                >
           <div onClick={(e)=>e.stopPropagation() } className={`h-full`} >
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