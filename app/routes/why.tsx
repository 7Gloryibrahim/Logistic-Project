
import { useState, type ChangeEvent, type FormEvent, type TextareaHTMLAttributes } from "react";
import {object, z} from 'zod'
import { IoAirplaneSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from "react-router";
import {motion} from "framer-motion"
import Transportation from "./transportation";
import Video from "./video";


export default function Why(){
    

    const requestQuote = z.object({
        firstName:z.string().regex(/^[A-Za-z]+$/).min(2, "First name is required"),
       middleName:z.string().optional(),
       lastName:z.string().regex(/^[A-Za-z]+$/).min(2, "Last name is required"),
        phone: z.string().regex(/^\d{11}$/, "Phone must be 11 digits"),
    email: z.string().email("Enter a valid email"),
    pickupLocation: z.string().min(1, "Pickup location is required"),
    deliveryLocation: z.string().min(1, "Delivery location is required"),
    service: z.string().min(1, "Please select a service"),
    load: z.string().min(1, "Please select your load type"),
    loadSize: z.string().min(1, "Please select your load size"),
    date: z.string().min(1, "Please select a date"),
    notes: z.string().optional()
    })
 
const [form, setForm]= useState({
    firstName:"",
    middleName:"",
    lastName:"",
    phone:"",
    email:"",
       pickupLocation: "",
    deliveryLocation: "",
    service: "",
    load: "",
    loadSize:"",
    date: "",
    notes: ""

})

const [errors, setErrors] = useState<Record<string, string>>({

});

const handleChange =(
    e: ChangeEvent <HTMLInputElement | HTMLSelectElement| HTMLTextAreaElement>
) =>{

        const {name, value} = e.target;
        // if(name === "phone" && !/^\d*$/.test(value) ) 
    //     if(name === "phone" && !/^\d*$/.test(value))
    //     {
    //         return
    //     }

       
    
    setForm({
        ...form, [e.target.name]: e.target.value
    });

     if (name === "phone") {
    setErrors({
      ...errors,
      phone: ""
    });
}
    };

const handleSubmit = (
    e: FormEvent<HTMLFormElement>) =>{
            e.preventDefault();
            const result = requestQuote.safeParse(form);
             if (!result.success) {
    const newErrors: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      const fieldName = issue.path[0];

      if (typeof fieldName === "string") {
        newErrors[fieldName] = issue.message;
      }
    });

    setErrors(newErrors);
    return;
    }
    setErrors({});

        console.log("Form is valid:", result.data);

        alert("Quote request submitted successfully!");
        
    };

        const handleReset = () =>{
            setForm({
                firstName:"",
    middleName:"",
    lastName:"",
    phone:"",
    email:"",
       pickupLocation: "",
    deliveryLocation: "",
    service: "",
    load: "",
    loadSize:"",
    date: "",
    notes: ""
            })
        }

return(
    <div className="bg-[#111827]  relative ">
        
        <div className="h-[120em] lg:h-[60em] relative">
    <div  className="relative bg-no-repeat ">
    <img src="/hero-globe.png" className="lg:left-44 top-20 absolute  "/>
    <div className="bg-black/40 absolute inset-0 h-[120em] lg:h-[60em] z-10"></div>

   </div>
          
           <div className="relative z-10">
             {/*cards*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 top-28 gap-52 absolute left-10 ">
               {/*First Card*/}
                <div className="w-fit">
                <div className="flex items-center gap-3">
                    <div className="bg-[#F75127] w-5 h-0.5"></div>
                    <div>
                       <p className="text-white font-sans font-bold">WHY CHOOSE US</p>
                    </div>
                      <IoAirplaneSharp  className="IoAirplaneSharp text-[#CBCFDA] lg:text-[#F75127] text-2xl"/>
                    </div>
                    <div className="mt-5">
                        <p className="text-3xl lg:text-5xl text-white font-bold comic-neue-regular">Efficient, Safe, & Swift</p>
                        <div className="lg:text-5xl flex items-center gap-2 lg:gap-4 font-bold mt-3">
                            <p className="text-3xl text-white uppercase bebas-neue-regular">Logistics</p>
                            <p className="text-3xl uppercase text-[#F75127] underline bebas-neue-regular">solution!</p>
                        </div>
                        <div className="text-white font-bold font-sans mt-10  -ml-3 lg:ml-0 md:ml-0  backdrop-blur-md p-7 w-[20em] md:w-fit  lg:w-fit space-y-6 shadow shadow-white">
                        <p className="flex gap-3 items-center"><IoAirplaneSharp className="text-[#F75127]"/> Global supply Chain Solutions</p>
                        <p className="flex gap-3 items-center"> <IoAirplaneSharp className="text-[#F75127]"/> 24 Hours - Technical Support.</p>
                        <p className="flex gap-3 items-center"> <IoAirplaneSharp className="text-[#F75127]"/> Mobile Shipment Tracking</p>
                        <p className="flex gap-3 items-center"><IoAirplaneSharp className="text-[#F75127]"/> Careful Handling of Valuable Goods</p>
                        </div>
                        <button className="About-btn flex shadow shadow-white text-white  items-center gap-2 font-bold font-sans p-3 bg-[#F75127] mt-4 rounded">
                           <Link to="/08108054356" className="flex items-center gap-3">Contact us <MdPhoneInTalk />
                             <span className="About-btn-line1"></span></Link> 
                        </button>
                    </div>
                    
                </div>


                {/*Second Card*/}
        <div className="relative">
                <motion.div
                initial={{ y:-50}}
                whileInView={{ y:0}}
                transition={{duration:2, ease:"easeInOut"}}
                viewport={{once:false}}
                className="bg-white left-6 lg:left-0  absolute h-[70em] lg:h-[45em] shadow-2xl shadow-[#192235] w-[23em] md:w-[30em] lg:w-[30em] -ml-9 mr-7 rounded -top-36">
                    <div>
                        <p className="text-4xl mt-15 font-bold text-[#192235] ml-12">Request a Quote</p>
                    </div>

                    <div>
                        <form noValidate onSubmit={handleSubmit} className="items-center mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-7 gap-4">
                            {/* <label htmlFor="firstName" className="block">FirstName</label> */}
                        <input required name="firstName" value={form.firstName} id="firstName" onChange={handleChange} placeholder="First Name" className="border-2 p-2"/>
                       
                       <input required onChange={handleChange} value={form.middleName} name="middleName" id="middleName" placeholder="Midddle Name" className="border-2 p-2"/>
                       
                        <input required onChange={handleChange} value={form.lastName} name="lastName" id="lastName" placeholder="Last Name" className="border-2 p-2 "/>
                    <div className="relative">
                       <input  onChange={handleChange} name="phone" value={form.phone} type="tel" id="phone" maxLength={11}  pattern="[0-9]{11}"   placeholder="Phone" className="  border-2 p-2"/>
                        {errors.phone && (
                        <p className="text-red-500 text-sm absolute">
                            {errors.phone}
                        </p>
                        )}
                            </div>
                        <input name="email" onChange={handleChange} type="email" required placeholder="atara1@gmail.com" className="p-2 border-2"/>
                   
                    <select name="load" onChange={handleChange} value={form.load}>
                        <option disabled value="">Select Your Load Type</option>
                        <option  value="furniture">Furniture</option>
                        <option value="electronics">Electronics</option>
                        <option value="household">Household Items</option>
                        <option value="documents">Documents</option>
                        <option value="building-materials">Building Materials</option>
                        <option value="food">Food / Perishables</option>
                        <option value="other">Other</option>

                    </select>
                     
                        <select name="service" value={form.service} onChange={handleChange} required>
                          <option value="" disabled>Services Types</option>
                          <option value="01">Standard Delivery</option> 
                          <option value="02">Express Delivery</option> 
                          <option value="03">Delicate Load</option> 
                            <option value="04">Moving Service</option>
                        </select>

                           <label ><input name="loadSize" onChange={handleChange} value="medium" checked={form.loadSize === "medium"} type="radio"/>Medium</label> 
                            <label><input name="loadSize"  checked={form.loadSize === "small"} onChange={handleChange} value="small" type="radio"/>Small</label>
                           <label> <input name="loadSize"  checked={form.loadSize === "large"} onChange={handleChange} value="large" type="radio"/>Large</label>
                            <label><input name="loadSize"  checked={form.loadSize === "extra large"} onChange={handleChange} value="extra large" type="radio"/>Extra Large</label>

                        {/* <option disabled>Load Size</option>
                        <option >Medium</option>
                        <option>Small</option>
                        <option>Large</option>
                        <option>Extra Large</option> */}
                        

                       <label className="text-[#192235]">Pickup Location <input name="pickupLocation" type="address" value={form.pickupLocation} onChange={handleChange} placeholder="14, Oyedele Oguniyi Street Anthony " className="p-2 border-2 rounded"/></label> 
                        
                        <label className="text-[#192235]"> Delivery Location<input name="deliveryLocation" type="address" onChange={handleChange} value={form.deliveryLocation} placeholder="Block 9, Baba Omojola Estate, Gbagada, Lagos Nigeria " className="border-2 p-2"/></label>
                        <textarea name="notes" value={form.notes} onChange={handleChange} className="border-2 p-3" placeholder="Notes"></textarea>

                             <input required onChange={handleChange} value={form.date} name="date" id="date" type="date" className="border-2"/>


                        
                        <button type="submit" className="bg-[#192235] text-white font-bold w-32 p-1 rounded">
                            Request Quote
                        </button>
                            <button type="button" onClick={handleReset} className="bg-[#192235] text-white font-bold w-32 p-1 rounded">Reset</button>
                        </form>
                    </div>

                    <div>
                        
                    </div>
                </motion.div>
                </div>
            </div>  
        </div>
    </div>
    


   
 
    </div>



)

}

