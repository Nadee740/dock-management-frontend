import { faCheckCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const EditAdminUserForm = ({companies,admin,id}) => {
    console.log(admin)
    const {setLoading,Token}=useContext(UserContext);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const [name,setname]=useState(admin.admin_id.name);
    const [email1,setEmail1]=useState(admin.admin_id.email1);
    const [email2,setEmail2]=useState(admin.admin_id.email2);
    const [password,setPassword]=useState('');
    const [retypePassword,setreTypedPassword]=useState('')
    const [acra_no,setAcra_no]=useState(admin.admin_id.acra_no);
    const [phone,setPhone]=useState(admin.admin_id.phone);
    const [role,setRole]=useState(-1);
    const [company,setCompany]=useState(admin.company_id._id);

    const SubmitButton=(e)=>{
        e.preventDefault();
       
            setOpen2(true);
            setModalHeading("Alert")
            setModalText("Are You Sure You Want To Add Admin With Provideed Details");
        
    
    }

    const submitData=async()=>{
        setLoading(true)
        const data = {
            name,email1,email2,acra_no,phone
        
         };
         const data2={
            company_id:company

         }
         const finalData={
            user:data,
            admin:data2
         }
          axios.post(`${baseUrl}/edit/admin?adminid=${id}&&userid=${admin.admin_id._id}`,finalData,{
            headers:{
                'Authorization': `Bearer ${Token}`
            }
          })
          .then((res) => {
          
            
            if(res.data.status=="ok")
            {
               setModalHeading("Admin Edited Successfully")
               setModalText("")
           
               setOpen1(true)

        
            }
            else{
                setModalHeading("Something Went wrong ");
                setModalText("Something Went wrong.Please Try again after sometime");
                setOpen1(true);
    
            }
       
          }).catch((err)=>{
            setModalHeading("Something Went wrong ");
            setModalText("Something Went wrong.Please Try again after sometime");
            setOpen1(true);
            console.log(err)
          })
          .finally(()=>{
         
            setLoading(false)
          })
    }
  return (
    <>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium">
          <FontAwesomeIcon icon={faUser} className="mr-5" />
          Edit Admin User
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="flex flex-col w-full sm:justify-center sm:items-center">
          {/* <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">
              Role
            </label>
            <select
            onChange={(e)=>{
                setRole(e.target.value)
            }}
              id="Vechicletype"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Choose Role ---</option>
              <option value={"Administrator"}>Administrator</option>
              <option value={"Company"}>Company</option>
            </select>
          </div> */}
          <div className="mb-2 sm:w-1/2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">
              Company
            </label>
            <select
            onChange={(e)=>{
                setCompany(e.target.value)
            }}
              id="Vechicletype"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={admin.company_id._id}>{admin.company_id.company_name}</option>
              {
                companies.map((c,index)=>{
                    return admin.company_id._id!=c._id && <option value={c._id}>{c.company_name}</option>
                })
              }
              
           
            </select>
          </div>
          <div className="mb-2 sm:w-1/2">
            <label class="text-black dark:text-gray-200" for="acra">
              ACRA / UN Reg. No
            </label>
            <input
            value={acra_no}
            onChange={(e)=>{
                setAcra_no(e.target.value)
            }}
              placeholder="ACRA / UN Reg. No"
              id="acrar"
              type="text"
              class="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2 sm:w-1/2">
            <label class="text-blackdark:text-gray-200" for="name">
              User Name
            </label>
            <input
            value={name}
            onChange={(e)=>{
                setname(e.target.value)
            }}
              placeholder="User Name"
              id="name"
              type="text"
              class="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2 sm:w-1/2">
            <label class="text-blackdark:text-gray-200" for="email1">
              Email Address 1
            </label>
            <input
            value={email1}
            onChange={(e)=>{
                setEmail1(e.target.value)
            }}
              placeholder="Email address 1"
              id="drivernumber"
              type="text"
              class="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2 sm:w-1/2">
          <label class=" flex text-black dark:text-gray-200" for="email2">
            Email Address 2   <p class="text-sm ml-3 text-red-400 pt-1">* Optional</p>
          </label>
            <input
            value={email2}
            onChange={(e)=>{
                setEmail2(e.target.value)
            }}
              placeholder="Email Address 2"
              id="email2"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2 sm:w-1/2">
            <label class="text-blackdark:text-gray-200" for="phonenumberf">
              Phone Number
            </label>
            <input
            value={phone}
            onChange={(e)=>{
                setPhone(e.target.value)
            }}
              placeholder="Phone Number"
              id="phonenumber"
              type="text"
              class="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
   

        
        <div className="flex justify-between sm:w-1/2 ">
                  <div className="flex justify-start pr-6 pt-6 pb-6 ">
                  <button
                      type="cancel"
                      onClick={()=>{
                      }}
                      className="flex justify-start mr-4  w-32 border-2 border-blue-500 rounded  text-blue-600 px-2 py-1 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-slate-200 focus:outline-none focus:bg-gray-600"
                    >
                    
                    <FontAwesomeIcon
                        className=" text-blue-600 m-1 mt-2"
                        icon={faXmark}
                      ></FontAwesomeIcon>
                      <p className="m-1 text-blue-600"><Link to="/admin/users/listCompanyAdminUsers">Cancel</Link></p>
                    </button>

                  </div>
                  <div className="flex pt-6 pb-6 pl-6 ">
                  <button
                      type="submit"
                      className="flex justify-end sm:items-center ml-6  w-32 bg-blue-600 px-8 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-blue-400 focus:outline-none focus:bg-gray-600"
                    >
                    <p>Submit</p>
                      <FontAwesomeIcon
                        className="ml-2 mt-1 text-white"
                        icon={faCheckCircle}
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                   </div>
                   </div>
      </form>
      <AlertDialog
        open={open1}
        setOpen={setOpen1}
        modalHeading={modalHeading}
        modalText={modalText}
      />
      <ConfirmDialog
        open={open2}
        setOpen={setOpen2}
        modalHeading={modalHeading}
        modalText={modalText}
        confirmFunction={submitData}
      />
    </>
  );
};

export default EditAdminUserForm;
