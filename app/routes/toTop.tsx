import { FaArrowUp } from "react-icons/fa";
export default function Top(){
    const handleScrollToTop = ()=>{
        window.scrollTo({
            top:0,
        behavior:"smooth"
        })
    }
    return(
        <div className="fixed z-50 bottom-10 flex   right-5 justify-end">
            <button onClick={handleScrollToTop} className="bg-white shadow shadow-black p-5 rounded-full items-center"> 
            <FaArrowUp className="text-[#F55128]   "/>
            </button>
        </div>
    )
}