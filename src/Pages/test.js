import { useState } from "react";
import AlertDialog from "../Components/AlertDialogue";

const Test = () => {
    const [open,setopen]=useState(true)
    const modalHeading="test bheading"
    const modalText="tes text"
    return (  
    <div className="w-full h-full">
    <AlertDialog
    open={open}
    setopen={setopen}
    modalHeading={modalHeading}
    modalText={modalText}

    />

    </div>);
}
 
export default Test;