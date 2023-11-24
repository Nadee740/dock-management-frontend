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
    <div className="bg-slate-100 flex flex-col bg-white w-11/12 md:w-3/4 lg:w-1/3 text-left bg-white p-10 rounded-xl m-auto">
      <div className="w-full flex items-center pb-5 justify-center ">
        {/* <h2 className="text-base text-slate-400 ">Sign in with credentials</h2> */}
      </div>

      <form onSubmit={submit}>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              {" "}
              <Apartment/>
            </span>
            <select 
            required
            onChange={(e)=>{
                setCompany(JSON.parse(e.target.value))
            }} className="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none" data-te-select-init>
            <option value="">--- Choose Company ---</option>
           {companies.map((data,index)=>(
            <option value={JSON.stringify(data)}>{data.company_name}</option>
           ))}
            </select>

          </span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              <Person/>
            </span>
            <input
            value={name}
           
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              required
              onChange={(evt)=>{
                setName(evt.target.value)
              }}
              type="text"
              placeholder="Supplier Name"
            />
          </span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              <AppRegistration/>
            </span>
            <input
            value={acra_no}
            onChange={(e)=>{
                setAcra_no(e.target.value)
            }}
            required
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              type="text"
              placeholder="Supplier ACRA / UN Reg. No"
            />
          </span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              <Email/>
            </span>
            <input
            value={email1}
            onChange={(e)=>{
                setEmail1(e.target.value)
            }}
            required
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              type="text"
              placeholder="Email address 1"
            />
          </span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
            <Email/>
            </span>
            <input
            required
            value={email2}
            onChange={(e)=>{
                setEmail2(e.target.value)
            }}
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              type="text"
              placeholder="Email address 2"
            />
          </span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              <PhoneAndroid/>
            </span>
            <input
            required
             value={phone}
             onChange={(e)=>{
                setPhone(e.target.value)
             }}
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              type="text"
              placeholder="Phone Number"
            />
          </span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
            <LockOpen/>
            </span>
            <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              type="text"
              placeholder="New Password"
            />
          </span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
            <LockOpen/>

            </span>
            <input
            required
            value={retypepassword}
            onChange={(e)=>{
                setRetypePassword(e.target.value)
            }}
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              type="text"
              placeholder="Re-Type Password"
            />
          </span>
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
            className="rounded-md text-white py-2 ml-8 px-4 w-2/3 md:w-1/3 lg:w-1/3 bg-indigo-500"
          >
            <button className="w-full h-full ">
              Sign Up
            </button>
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
