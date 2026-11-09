
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import {object, z} from 'zod'
import { IoAirplaneSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from "react-router";
import {motion} from "framer-motion"
import Transportation from "./transportation";
import Video from "./video";


export default function Why(){
    

    const requestQuote = z.object({
        firstName:z.string().trim().regex(/^[A-Za-z]+$/).min(2, "First name is required"),
       middleName:z.string().optional(),
       lastName:z.string().trim().regex(/^[A-Za-z]+$/).min(2, "Last name is required"),
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

const [draftLoaded, setDraftLoaded] = useState(false);

const [errors, setErrors] = useState<Record<string, string>>({

});
const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending" | "success" | "error" | "not-configured">("idle");

const fieldError = (name: string) => errors[name] && (
    <p id={`${name}-error`} role="alert" className="text-red-600 text-sm">
        {errors[name]}
    </p>
);

const handleChange =(
    e: ChangeEvent <HTMLInputElement | HTMLSelectElement| HTMLTextAreaElement>
) =>{

        const {name, value} = e.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setSubmissionStatus("idle");
    };

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    setSubmissionStatus("idle");
    return;
    }
    setErrors({});

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) {
        console.error("Quote form is not configured: VITE_FORMSPREE_ENDPOINT is missing.");
        setSubmissionStatus("not-configured");
        return;
    }

    setSubmissionStatus("sending");
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(e.currentTarget),
        });

        if (!response.ok) {
            throw new Error(`Formspree returned status ${response.status}`);
        }

        setSubmissionStatus("success");
        setForm({
            firstName: "",
            middleName: "",
            lastName: "",
            phone: "",
            email: "",
            pickupLocation: "",
            deliveryLocation: "",
            service: "",
            load: "",
            loadSize: "",
            date: "",
            notes: "",
        });
    } catch (error) {
        console.error("Quote request could not be delivered.", error);
        setSubmissionStatus("error");
    }
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
            setErrors({});
            setSubmissionStatus("idle");
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
                initial={{opacity:0, y:-50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:2, ease:"easeInOut"}}
                viewport={{once:false}}
                className="bg-white w-fit   lg:left-0  absolute h-fit lg:h-fit shadow-2xl shadow-[#192235] w-[23em] md:w-[30em] lg:w-full   mr-7 rounded -top-36">
                    <div>
                        <p className="text-3xl lg:text-4xl mt-15 font-bold text-[#192235] ml-6 lg:ml-12">Request a Quote</p>
                    </div>

                    <div>

                        
                        <form noValidate  onSubmit={handleSubmit} className=" w-full items-center mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-7 gap-4">
                        <div>
                            <input required name="firstName" value={form.firstName} id="firstName" onChange={handleChange} placeholder="First Name" aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? "firstName-error" : undefined} className="border-2 w-full min-w-0 p-2"/>
                            {fieldError("firstName")}
                        </div>
                       
                       <input onChange={handleChange} value={form.middleName} name="middleName" id="middleName" placeholder="Middle Name (optional)" className="border-2 p-2"/>
                       
                        <div>
                            <input required onChange={handleChange} value={form.lastName} name="lastName" id="lastName" placeholder="Last Name" aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? "lastName-error" : undefined} className="w-full min-w-0 border-2 p-2 "/>
                            {fieldError("lastName")}
                        </div>
                    <div className="relative">
                       <input required onChange={handleChange} name="phone" value={form.phone} type="tel" id="phone" maxLength={11} pattern="[0-9]{11}" placeholder="Phone (11 digits)" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} className="border-2 p-2 w-full"/>
                        {fieldError("phone")}
                            </div>
                        <div>
                            <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email address" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className="p-2 w-full min-w-0 border-2"/>
                            {fieldError("email")}
                        </div>
                   
                    <div>
                    <select required name="load" onChange={handleChange} value={form.load} aria-invalid={Boolean(errors.load)} aria-describedby={errors.load ? "load-error" : undefined}>
                        <option disabled value="">Select Your Load Type</option>
                        <option  value="furniture">Furniture</option>
                        <option value="electronics">Electronics</option>
                        <option value="household">Household Items</option>
                        <option value="documents">Documents</option>
                        <option value="building-materials">Building Materials</option>
                        <option value="food">Food / Perishables</option>
                        <option value="other">Other</option>

                    </select>
                    {fieldError("load")}
                    </div>
                     
                    <div>
                        <select name="service" value={form.service} onChange={handleChange} required aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}>
                          <option value="" disabled>Services Types</option>
                          <option value="01">Standard Delivery</option> 
                          <option value="02">Express Delivery</option> 
                          <option value="03">Delicate Load</option> 
                            <option value="04">Moving Service</option>
                        </select>
                        {fieldError("service")}
                    </div>

                    <fieldset className="md:col-span-2">
                        <legend>Load size</legend>
                        <div className="flex flex-wrap gap-3">
                           <label ><input required name="loadSize" onChange={handleChange} value="medium" checked={form.loadSize === "medium"} type="radio"/> Medium</label> 
                            <label><input name="loadSize"  checked={form.loadSize === "small"} onChange={handleChange} value="small" type="radio"/>Small</label>
                           <label> <input name="loadSize"  checked={form.loadSize === "large"} onChange={handleChange} value="large" type="radio"/>Large</label>
                            <label><input name="loadSize"  checked={form.loadSize === "extra large"} onChange={handleChange} value="extra large" type="radio"/>Extra Large</label>
                        </div>
                        {fieldError("loadSize")}
                    </fieldset>
                        
                       <div><label className="text-[#192235]">Pickup Location <input required name="pickupLocation" type="text" value={form.pickupLocation} onChange={handleChange} placeholder="Pickup address" aria-invalid={Boolean(errors.pickupLocation)} aria-describedby={errors.pickupLocation ? "pickupLocation-error" : undefined} className="p-2 w-full min-w-0 border-2 rounded"/></label>{fieldError("pickupLocation")}</div>
                        
                        <div><label className="text-[#192235]">Delivery Location<input required name="deliveryLocation" type="text" onChange={handleChange} value={form.deliveryLocation} placeholder="Delivery address" aria-invalid={Boolean(errors.deliveryLocation)} aria-describedby={errors.deliveryLocation ? "deliveryLocation-error" : undefined} className="w-full min-w-0 border-2 p-2"/></label>{fieldError("deliveryLocation")}</div>
                        <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full min-w-0 border-2 p-3" placeholder="Notes"></textarea>

                        <div><input required onChange={handleChange} value={form.date} name="date" id="date" type="date" aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? "date-error" : undefined} className="w-full min-w-0 border-2"/>{fieldError("date")}</div>


                        <div aria-live="polite" className="md:col-span-2">
                            {submissionStatus === "sending" && <p role="status">Sending your quote request...</p>}
                            {submissionStatus === "success" && <p role="status" className="text-green-700">Your quote request was sent successfully. We’ll be in touch soon.</p>}
                            {submissionStatus === "error" && <p role="alert" className="text-red-600">We couldn’t send your request. Please try again later or contact us directly.</p>}
                            {submissionStatus === "not-configured" && <p role="alert" className="text-red-600">This form isn’t connected yet. Please contact us directly while we finish setting it up.</p>}
                        </div>

                        <button type="submit" disabled={submissionStatus === "sending"} className="bg-[#192235] text-white font-bold w-32 p-1 rounded disabled:opacity-50">
                            {submissionStatus === "sending" ? "Sending..." : "Request Quote"}
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
