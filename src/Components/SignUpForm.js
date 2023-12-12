import { Apartment, AppRegistration, Email, LockOpen, Password, Person, PhoneAndroid } from "@mui/icons-material";
import axios from "axios";

import { baseUrl } from "../utils/baseurl";
import { useState } from "react";
import AlertDialog from "./AlertDialogue";
import ConfirmModal from "./ConfirmPopup";
const SignUpForm = ({companies}) => {
    const [company,setCompany]=useState();
    const [name,setName]=useState();
    const [email1,setEmail1]=useState();
    const [email2,setEmail2]=useState();
    const [password,setPassword]=useState();
    const [retypepassword,setRetypePassword]=useState();
    const [acra_no,setAcra_no]=useState();
    const [phone,setPhone]=useState();
    const [open_confirm,setOpen_confirm]=useState(false)
    const [message,set_message]=useState("")
    const [open,setOpen]=useState(false);
    const [modalText,setModalText]=useState("");
    const [modalHeading,setModalHeading]=useState("");
    const handleClose=()=>{
        setOpen_confirm(false)
        window.location='/'
    }
    const submit=async(e)=>{
        e.preventDefault()
        if(password!=retypepassword)
        { 
            setModalHeading("Passwords do not match")
            setModalText("Please make sure your passwords are matching")
            setOpen(true);
            return;

        }else{
            const data={
                name,
                email1,email2,
                password,
                acra_no,
                phone,
                company_id:company._id,
                subscription_id:company.subscription_id
    
            }
        axios.post(`${baseUrl}/supplier/request`,data).then((res)=>{
          console.log(res.data)
              if(res.data.status=="ok")
              {
                set_message("Your request has been sent successfully . Please wait while we proccess your request")
                setOpen_confirm(true)
                
              }else{
                setModalHeading("Request Failed");
                setModalText("Something Went wrong. Please Try again after sometime");
                setOpen(true)
              }
          }).catch((err)=>{
            setModalHeading("Something Went wrong ");
                setModalText("Something Went wrong. Please Try again after sometime");
                setOpen(true);
            console.log(err);
          })

        }
       
     
    }
  return (
    <div className="bg-slate-100 flex flex-col bg-white w-7/12 md:w-5/12  text-left bg-white p-6 rounded-xl m-auto">
   

      <form onSubmit={submit}>
        <div className="flex flex-col  ">
         
            
            <select 
            required
            onChange={(e)=>{
                setCompany(JSON.parse(e.target.value))
            }}  className=" px-8 py-2 mb-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none" data-te-select-init>
            <option value="">--- Choose Company ---</option>
           {companies.map((data,index)=>(
            <option value={JSON.stringify(data)}>{data.company_name}</option>
           ))}
            </select>

     
        </div>
        <div className="flex flex-col mt-2 ">
         
            <input
            value={name}
           
            className=" px-8 py-2 mb-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
              required
              onChange={(evt)=>{
                setName(evt.target.value)
              }}
              type="text"
              placeholder="Supplier Name"
            />
      
        </div>
        <div className="flex flex-col mt-2 ">
        
            <input
            value={acra_no}
            onChange={(e)=>{
                setAcra_no(e.target.value)
            }}
            required
            className=" px-8 py-2 mb-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
              type="text"
              placeholder="Supplier ACRA / UN Reg. No"
            />
     
        </div>
        <div className="flex flex-col mt-2 ">
          
            <input
            value={email1}
            onChange={(e)=>{
                setEmail1(e.target.value)
            }}
            required
            className=" px-8 py-2 mb-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
              type="text"
              placeholder="Email address 1"
            />
  
        </div>
        <div className="flex flex-col mt-2 ">
          
            <input
            required
            value={email2}
            onChange={(e)=>{
                setEmail2(e.target.value)
            }}
            className=" px-8 py-2 mb-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
              type="text"
              placeholder="Email address 2"
            />
     
        </div>
        <div className="flex flex-col mt-2 ">
         
            <input
            required
             value={phone}
             onChange={(e)=>{
                setPhone(e.target.value)
             }}
             className=" px-8 py-2 mb-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
              type="text"
              placeholder="Phone Number"
            />
       
        </div>
        <div className="flex flex-col mt-2 ">
         
            <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className=" px-8 py-2 mb-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
              type="text"
              placeholder="New Password"
            />
         
        </div>
        <div className="flex flex-col mt-2 ">
          
            <input
            required
            value={retypepassword}
            onChange={(e)=>{
                setRetypePassword(e.target.value)
            }}
            className="px-8 py-2 mb-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
              type="text"
              placeholder="Re-Type Password"
            />
     
        </div>
  
        <div className="flex items-center justify-between mt-2">
          {/* <p className="text-gray-500">Should contain atleast 8 characters</p> */}
          <div class="flex items-center">
    <input required id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div>

        </div>
        <div className="flex items-center justify-center mt-4">
          <button
           type="submit"
           className=" px-4 py-2  justify-center rounded-3xl bg-[#31304D]  text-white font-medium hover:bg-violet-400 "
          >
            
              Sign Up
     
          </button>
        </div>
      </form>
      <ConfirmModal
        open={open_confirm}
        onClose={handleClose}
        message={message}
      />
      <AlertDialog
       open={open}
       setOpen={setOpen}
       modalHeading={modalHeading}
       modalText={modalText}
      />

    </div>
  );
};

export default SignUpForm;
