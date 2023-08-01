import { Apartment, AppRegistration, Email, LockOpen, Password, Person, PhoneAndroid } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [name,setName]=useState("nnn")
  const handleSubmit=async()=>{
    
      const formData = {name};
   
   
      const response = await axios.post('http://localhost:8000/create-supplier', formData);
      if(response.data.status=="ok")
    alert("ok")
    

     
  }
  return (
    <div className="bg-slate-100 flex flex-col bg-white w-11/12 md:w-3/4 lg:w-1/3 text-left bg-white p-10 rounded-xl m-auto">
      <div className="w-full flex items-center pb-5 justify-center ">
        {/* <h2 className="text-base text-slate-400 ">Sign in with credentials</h2> */}
      </div>

      <form action="">
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              {" "}
              <Apartment/>
            </span>
            <select  className="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none" data-te-select-init>
 <option value="-1">---Choose Company ---</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
  <option value="5">Five</option>
  <option value="6">Six</option>
  <option value="7">Seven</option>
  <option value="8">Eight</option>
</select>

          </span>
        </div>
        <div className="flex flex-col mt-2 ">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              <Person/>
            </span>
            <input
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              value={name}
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
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              type="text"
              placeholder="Re-Type Password"
            />
          </span>
        </div>
  
        <div className="flex items-center justify-between mt-2">
          {/* <p className="text-gray-500">Should contain atleast 8 characters</p> */}
          <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div>
          {/* <Link to="/forgot-password">
            <p className="text-slate-400  cursor-pointer">Forgot Password?</p>
          </Link> */}
        </div>
        <div className="flex items-center justify-center mt-4">
          {/* <Link
            to="/"
            className="rounded-md text-indigo-500 py-2 px-4 w-2/3 md:w-1/3 lg:w-1/3  border-2 border-indigo-500 "
          >
            <button className="text-sm w-full h-full" onClick={() => {}}>
              Sign Up
            </button>
          </Link> */}
          <Link
            to="/"
            className="rounded-md text-white py-2 ml-8 px-4 w-2/3 md:w-1/3 lg:w-1/3 bg-indigo-500"
          >
            <button className="w-full h-full " onClick={() => {handleSubmit()}}>
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
