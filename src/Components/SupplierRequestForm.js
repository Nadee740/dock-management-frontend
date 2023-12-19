import { faCheckCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/baseurl";
import { UserContext } from "../Contexts/UserContexts";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SupplierRequestForm= ({suppliergroup,supplierData}) => {

    const {setLoading}=useContext(UserContext);
    const [role,setRole]=useState(-1);
    const [supplier_groupselected,setSupplierGroupSelected]=useState(-1);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const [status,setStatus]=useState(1);
    const roleList=['Admin','Supplier','Company','SubContractor']
   
    const SubmitButton=(e)=>{
      e.preventDefault();
    if(status==1&&(supplier_groupselected==-1||role==-1))
      {
          setModalHeading("Please Fill All Columns");
          setOpen1(true);
  
      }
      else{
          setOpen2(true);
          setModalHeading("Alert")
          setModalText("Are You Sure You Want To Submit ");
      }
  
  }
    const submitData=()=>{
      
       
        setLoading(true)
        const data = {
          group_id:supplier_groupselected,
            role,
            
          
          };
          const token=localStorage.getItem("EZTOken")
          axios.post(`${baseUrl}/change/status/supplier?_id=${supplierData._id}&&status=${status}`,data,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
          })
          .then((res) => {
            console.log(res.data)
            if(res.data.status=="ok")
            {
              setModalHeading("Supplier Updated Successfully")
              setModalText("")
               setOpen1(true)
               if(open1==false){
                window.location="/admin/list/supplier/request"
               }
            
            }
            else{
              setModalHeading("Something Went wrong");
              setModalText("Something Went wrong.Please Try again after sometime");
              setOpen1(true);
               console.log("err",res.data.msg)

               if(open1==false){
                window.location="/admin/list/supplier/request"
               }
    
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
    return ( <>
         <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium"><FontAwesomeIcon icon={faUser}className="mr-5" />Edit Supplier</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="flex flex-col w-full sm:justify-center sm:items-center">
        <div class="mb-3 sm:w-1/2 ">
                <label
                  class="flex text-black dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Status
                </label>
                <select onChange={(e)=>{
                    setStatus(e.target.value)
                }} required class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option value={1}>Accept</option>
                  <option value={2}>Reject</option>
                </select>
              </div>
   
       <div className="mb-2 sm:w-1/2">
            <label class="text-blackdark:text-gray-200" for="name">Full Name</label>
            <input placeholder="Full Name" id="name" type="text" 
            value={supplierData.name}
            disabled
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
        </div>

        <div className="mb-2 sm:w-1/2">
            <label class="text-black dark:text-gray-200" for="acra">ACRA / UN Reg. No</label>
            <input placeholder="ACRA / UN Reg. No" id="acrar" type="text"
            value={supplierData.acra_no}
            disabled
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "/>
        </div>
        <div className="mb-2 sm:w-1/2">
            <label class="text-blackdark:text-gray-200" for="email1">Email Address</label>
            <input placeholder="Email address " id="drivernumber" type="text" 
            value={supplierData.email1}
            disabled
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
        </div>


        
        <div className="mb-2 sm:w-1/2">
            <label class="text-blackdark:text-gray-200" for="phonenumberf">Phone Number</label>
            <input placeholder="Phone Number" id="phonenumber" type="text" 
            value={supplierData.phone}
            disabled
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
        </div>
        <div className="mb-2 sm:w-1/2">
            <label class="text-black dark:text-gray-200" for="acra">Company</label>
            <input placeholder="Company" id="company" type="text"
            value={supplierData.company_id.company_name}
            disabled
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "/>
        </div>

        
     { status==1?
    ( <>
        
        <div className="mb-2 sm:w-1/2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">Role</label>
            <select 
            required
            onChange={(e)=>{
                setRole(e.target.value)
            }}
            id="Vechicletype" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option value={-1}>---Choose Role---</option>
                {
                    roleList.map((role_name,index)=>{
                        return <>
                        {role===role_name?<option selected value={role_name}>{role_name}</option>:<option value={role_name}>{role_name}</option>}
                        </> 
                    })
                }
                
                
            </select>
        </div>
        <div className="mb-2 sm:w-1/2">
                <label
                    class="flex text-black dark:text-gray-200"
                    for="company"
                >
                    Supplier Group{" "}
                    <p className="pl-1 text-red-600">*</p>
                </label>
                <select
                    required
                    onChange={(e) => {
                    setSupplierGroupSelected(e.target.value)
                    }}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                >
                    <option value={-1}>---Supplier Group---</option>
                
                    {suppliergroup.map((c, index) => {
                    return <>{supplier_groupselected===c._id?<option selected value={c._id}>{c.group_name}</option>:<option value={c._id}>{c.group_name}</option>}</>
                    
                    })}
                </select>
                </div>
     </> ):(<></>)     
       
    }

     


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
                      <p className="m-1 text-blue-600"><Link to="/admin/list/supplier/request">Cancel</Link></p>
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
    
    </> );
}
 
export default SupplierRequestForm;
