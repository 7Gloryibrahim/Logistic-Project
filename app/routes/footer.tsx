import { useState } from "react"

import { Link } from "react-router";

export default function Footer(){
    const [subscribe, setSubscribe] = useState({
    email:" ",
})

     

     function handleSubmit(e: React.FormEvent<HTMLFormElement>)

{ e.preventDefault()
     if (!subscribe.email.trim())
    { alert("Please enter your email address")
        

        return 
    }
     alert(`Thank you for subscribing: ${subscribe.email}`) 
     setSubscribe({ email: "", }) 
    }


    return(
        <footer className="w-full bg-fixed relative bottom-0 bg-[#C3C7D7]">
            <div className="relative">
               
               <div style={{backgroundImage:"url('logistiq-footer.png')", backgroundPosition:"bottom", backgroundRepeat:"no-repeat"}} className=" h-[90em] lg:h-[50em] md:h-[50em] w-full top-0  object-center">
                {/* <img src="logistiq-footer.png" alt="idea4" className="h-[39em] w-screen bottom-0 bg-fixed object-cover "/> */}
               
               
               <div className="flex mx-2 lg:ml-12 flex-col gap-12 lg:flex lg:flex-row md:flex md:flex-row-reverse relative top-52  ">
                <div className="max-w-60">
                    <p className="bebas-neue-regular text-4xl text-[#D44216] ">Logistiq</p>
                <p className="comic-neue-bold text-[#262A70]">Smart logistics. Seamless deliveries. Logistiq connects your supply chain from origin to the final destination with complete visibility and speed.</p>
                </div>
                <div>
                    <p className="text-4xl  bebas-neue-regular text-[#D44216]">Quick Links</p>
                   
                   <div className="flex flex-col gap-y-4 text-[#262A70] comic-neue-bold">
                     <p className="mt-5">Home</p>
                    <Link to="/AboutUs"><p>About Us</p></Link>
                    <p>Service</p>
                   <p> Latest Project</p>
                   <p>Contact Us</p>
                   </div>
                </div>
                <div>
                    <p className="text-4xl  bebas-neue-regular text-[#D44216] ">Get In Touch</p>
                   <div className="flex flex-col gap-y-6 text-[#262A70] comic-neue-bold">
                    <p className="mt-5">3060 Commercial Street Road
                   Fratton, Australia</p>

                   <p> support@logistra.com</p>

                   <p> info@logistra.com</p>
                    <p className="text-[#262A70]">+880 123 456 789</p>
                   </div>
                </div>

                <div>
                    <p className="text-4xl  bebas-neue-regular text-[#D44216] ">Subscribe</p>
                    <p className="text-[#262A70] comic-neue-bold">Sign up for alerts, our latest blogs,
                        thoughts, and insights</p>
                        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3"> 
                            
                        <label htmlFor="subscribe-email" className="text-[#262A70] comic-neue-bold"> Email address </label> 
                       
                        <input type="email" id="subscribe-email" name="email" placeholder="Enter your email" value={subscribe.email} onChange={(e) => setSubscribe({ ...subscribe, email: e.target.value, }) } className="w-full rounded-md border border-[#262A70]/30 bg-white px-4 py-3 outline-none focus:border-[#D44216] comic-neue-bold" /> 
                        
                        <button type="submit" className="rounded-md bg-[#D44216] px-5 py-3 text-white transition hover:bg-[#262A70] comic-neue-bold"> Subscribe </button> 
                        
                        </form>
                </div>
               </div>
               </div>

               {/* <div style={{backgroundImage:"url('logistiq-footer.png')", backgroundPosition:"bottom", backgroundRepeat:"no-repeat"}} className=" h-[90em] lg:h-[50em] w-full   object-center"> */}
                {/* <img src="logistiq-footer.png" alt="idea4" className="h-[39em] w-screen bottom-0 bg-fixed object-cover "/> */}
               
                {/* </div> */}

            </div>
             <img src="divider3.jpg" className="absolute top-0 left-0 w-full h-28 z-20 object-cover"/>

             
        </footer>
    )
}