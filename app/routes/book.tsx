 import { Link } from "react-router"
 export default function BookBtn(){
    return(
        <div>
           <Link to="/contact"> <button className="track-order p-2 bg-[#111827] text-white border border-white">Book Your Parcel</button></Link>
        </div>
    )
 }