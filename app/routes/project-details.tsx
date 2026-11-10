import Delivery from "./delivery"
import Footer from "./footer"
import Nav  from "./Nav"
import SmoothScroll from "./smoothScroll"
import Top from "./toTop"

export default function ProjectDetails(){
return(
    <div className="bg-[#C3C7D8] ">
        <Nav/>
        <section>
            <div style={{backgroundImage:"url('/project-detail2.jpg')", backgroundPosition:"center", objectPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundAttachment:"fixed"}} className="relative h-[40em] w-full top-0 left-0 right-0"></div>
            <div className="absolute top-1/2 justify-center flex w-full text-5xl bebas-neue-regular text-[#F75128] uppercase ">
                <p> Project Details</p>
            </div>
        </section>

        <section className="h-fit mt-20 w-full mb-32">
            <div className="  flex flex-col items-center  ml-7 mr-7">
               <img src="project-detail6.jpg"  className="    lg:max-w-[70em] h-auto object-contain  lg:ml-o lg:mr-0" alt="Project-detail"/>
              
               <div className="max-w-[70em] mt-16 flex flex-col gap-y-7">
               <p className="bebas-neue-regular text-3xl text-[#F75128] ">Project Overview</p>
               <p>Logistiq is a modern logistics and transportation website designed to present logistics services through a seamless, professional, and user-focused digital experience. The project focuses on creating a strong online presence for a logistics company while making it easier for potential customers to explore available services, understand delivery solutions, and connect with the business.</p>

               <p>The website combines a clean interface, structured content, responsive layouts, and interactive elements to communicate reliability, efficiency, and professionalism. Every section was carefully designed to maintain visual consistency while guiding visitors through the company's services, business values, and customer-focused solutions.</p>


                <p className="bebas-neue-regular text-3xl text-[#F75128] ">Project Objectives</p>
               <p>The primary objective was to develop a functional and visually appealing website that reflects the demands of the modern logistics industry. The design prioritises accessibility, straightforward navigation, responsiveness, and a consistent brand identity.</p>
                <p className="bebas-neue-regular text-3xl text-[#F75128] ">Key Features</p>
                <div className="flex flex-col gap-y-5"> 
               <p>Responsive design optimised for desktop, tablet, and mobile devices.</p>

                   <p> Intuitive navigation for easy access to important information.</p>

                    <p> Dedicated service sections showcasing logistics and transportation solutions.</p>

                    <p> Interactive components and animations that enhance user engagement.</p>

                    <p> Contact and quotation forms designed to simplify customer enquiries.</p>

                     <p>Blog section for sharing logistics-related information and industry insights.</p>

                     <p>Consistent typography, colour schemes, and visual elements that reinforce brand identity.</p>
                     </div>
                     

                     <p className="bebas-neue-regular text-3xl text-[#F75128] ">Development Process</p>
               <p>The website was developed using React, TypeScript, Tailwind CSS, and Framer Motion. React was used to build reusable components and organise the application, while TypeScript provided improved code structure and type safety. Tailwind CSS handled the styling and responsive layouts, and Framer Motion introduced subtle animations and transitions.</p>

               <p>Throughout development, attention was given to component organisation, responsive behaviour, user experience, and maintaining a consistent design system across the website.</p>


                <p className="bebas-neue-regular text-3xl text-[#F75128] ">Project Objectives</p>
               <p>The final result is a modern logistics website that combines functionality, visual appeal, and accessibility. It demonstrates how thoughtful frontend development and strategic interface design can transform a business concept into a professional digital experience.</p>
               <p>This project also provided an opportunity to strengthen my understanding of React development, component reusability, responsive design, form handling, animations, and practical frontend engineering.</p>
                </div>


            </div>
        </section>

        <section>
           <Delivery/>
        </section>
        <Top/>
        <Footer/>
        <SmoothScroll/>

    </div>
)
}