import { motion } from "framer-motion"

export default function Mission(){



    return(
        <div className=" mb-28 ">
            <div className="flex-col flex gap-y-12 lg:flex lg:flex-row lg:gap-7 justify-center ml-2 mr-2 mt-44 lg:mt-28 lg:ml-13 lg:mr-13 text-black  ">
                <div  className="w-full h-fit lg:w-1/2 backdrop-blur-md border-2 border-[#111827] shadow-2xl shadow-[#111827] p-5 rounded-2xl">
                    <p className="text-[#2A82A8] bebas-neue-regular text-4xl tracking-wider capitalize">Our Mission</p>
                    <div className=" mt-5 ">
                         <p className="bebas-neue-regular text-[#2A82A8]  text-2xl tracking-wide">Fast & Efficient Delivery</p>
                         <p className="inter-regular lg:text-xl ">
                            We understand the importance of time in every shipment. Our goal is to streamline the delivery process, minimize delays, and ensure that every consignment reaches its destination as scheduled.
                         </p>
                    </div>
                    <div className="mt-5">
                       <p className="bebas-neue-regular text-[#2A82A8]  text-2xl tracking-wide">  Safety You Can Trust</p>
                       <div  className="lg:w-[30em] inter-regular lg:text-xl">
                   <p> Every shipment deserves careful handling and protection throughout its journey. We prioritize secure transportation, responsible cargo management, and consistent service you can rely on.</p>

                    <p className="mt-5 inter-regular lg:text-xl"> At the heart of our operations is a commitment to making transportation simpler and more dependable for businesses and individuals. We combine efficient coordination with practical logistics solutions to keep goods moving across different destinations.</p>

                    <p className="mt-5 inter-regular lg:text-xl">Whether transporting goods across cities or coordinating deliveries over longer distances, we strive to provide a seamless experience at every stage. Through professionalism, careful planning, and a dedication to customer satisfaction, we aim to build lasting relationships and make every delivery count.</p>
                    </div>
                    </div>
                </div>

                <div  className="w-full lg:w-1/2 backdrop-blur-md border-2 border-[#111827] shadow-2xl shadow-[#111827] p-4 rounded-2xl">
                    <div className="mt-5">
                    <p className="bebas-neue-regular text-[#2A82A8]  text-2xl tracking-wide">Precision in Every Shipment</p>
                    <p className="inter-regular lg:text-xl">From documentation to final delivery, we pay attention to every detail. Our team works to maintain accurate shipment records, coordinate operations effectively, and provide a dependable logistics experience.</p>
                    </div>

                    <div className="mt-5">
                        <p className="bebas-neue-regular text-[#2A82A8] text-2xl tracking-wide">Moving Goods. Connecting Businesses.</p>
                        <p className="inter-regular lg:text-xl">Reliable logistics goes beyond transporting goods from one destination to another. It requires careful planning, clear communication, and a coordinated approach to every delivery.</p>
                    </div>
                    <div className="mt-5 inter-regular lg:text-xl">
                        <p>We work to simplify the movement of goods through dependable transportation solutions designed around the needs of our customers. From the initial pickup to the final destination, our focus remains on efficiency, transparency, and a service experience that earns your trust.</p>
                        <div className="lg:w-[30em] ">
                        <img src="/staff3.png" alt="staff3" className=" h-72 rounded-2xl mt-5 items-center "/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}