import { useState } from "react";

const Button = () => {
    const[isRed, setIsRed]=useState(true)
  return <button onClick={()=>setIsRed(!isRed)} style={{ background: isRed ? 'red' : 'aqua' }}>{isRed ? "Maviye Cevir" : "Kirmiziya Cevir"}</button>;
};

export default Button;
