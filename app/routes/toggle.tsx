import { useState } from "react";

export default function useToggle(){
const [toggle, setToggle] = useState(false)

const handleToggle = () => {
   if (toggle) return;
   setToggle(true)

setTimeout(()=> {
setToggle(false)
},600)
}
 return { toggle, handleToggle };
}
