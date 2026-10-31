import BookBtn from "./book"
import { motion } from "framer-motion"
export default function Delivery(){
    return(
        <div className="bg-[#C3C7D8] w-full flex justify-center">
            <motion.div
            
            initial={{y:10, opacity: 0, scale:0.8}}
            whileInView={{y:0, opacity:1, scale:1}}
            transition={{duration:0.8, ease:"easeOut"}}
            className="flex flex-col space-x-7 px-5 mb-44 shadow gap-y-28 pt-10 lg:pt-0 md:pt-0  shadow-[#111827]  bg-[#F75128] lg:flex-row lg:flex  w-fit items-center  md:h-[20em] lg:h-[20em]  " style={{backgroundImage:"url('v2.png')", backgroundRepeat:"no-repeat", backgroundSize:"cover", 
                objectPosition:"center"}}>

                <div className="text-left flex flex-col gap-y-3  ">
                    <p className="bebas-neue-regular text-2xl lg:text-3xl text-[#111827]">We Ensure Safe</p>
                        <p className="bebas-neue-regular text-2xl lg:text-3xl text-[#111827]">Transportation Fast Delivery Service! </p>
                    <BookBtn/>
                </div>
                <img src="/logisWorker.png" className="h-[25em] z-20 -mt-20"/>
            </motion.div>
        </div>
    )
}