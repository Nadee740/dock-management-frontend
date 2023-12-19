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

const EditSupplierForm= ({suppliergroup,company,supplierData}) => {
    const [companySelected,setCompanySelected]=useState(supplierData.company_id._id);
    const [acra_no,setAcraNo]=useState(supplierData.supplier_id.acra_no);
    const {setLoading}=useContext(UserContext);
    const [fullname,setFullName]=useState(supplierData.supplier_id.name);
    const [email1,setEmail1]=useState(supplierData.supplier_id.email1);
    const [email2,setEmail2]=useState(supplierData.supplier_id.email2);
    const [phone,setPhone]=useState(supplierData.supplier_id.phone);
    const [role,setRole]=useState(supplierData.role);
    const [supplier_groupselected,setSupplierGroupSelected]=useState(supplierData.group_id._id);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const roleList=['Admin','Supplier','Company','SubContractor']
   
    const SubmitButton=(e)=>{
      e.preventDefault();
    if(companySelected==-1 ||supplier_groupselected==-1)
      {
          setModalHeading("Please Fill All Columns");
          setOpen1(true);
  
      }
      else{
          setOpen2(true);
          setModalHeading("Alert")
          setModalText("Are You Sure You Want To Update Supplier  With Provided Details");
      }
  
  }
    const submitData=()=>{
      
       
        setLoading(true)
        const data = {
            name:fullname,
            email1,email2,
            acra_no,phone,
            company_id:companySelected,
            group_id:supplier_groupselected,
            role
            
          
          };
          const token=localStorage.getItem("EZTOken")
          axios.post(`${baseUrl}/update-supplier/${supplierData._id}`,data,{
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
            
            }
            else{
              setModalHeading("Something Went wrong");
              setModalText("Something Went wrong.Please Try again after sometime");
              setOpen1(true);
               console.log("err",res.data.msg)
    
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
        <div className="mb-2 sm:w-1/2">
                    <label
                      class="flex text-black dark:text-gray-200"
                      for="company"
                    >
                      Company (Delivery To){" "}
                      <p className="pl-1 text-red-600">*</p>
                    </label>
                    <select
                      required
                      onChange={(e) => {
                        setCompanySelected(e.target.value)
                      }}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    >
                        <option value={-1}>---Choose Company---</option>
                    
                      {company.map((c, index) => {
                         return <>{companySelected===c._id?<option selected value={c._id}>{c.company_name}</option>:<option value={c._id}>{c.company_name}</option>}</>
                      })}
                    </select>
                  </div>
            <div className="mb-2 sm:w-1/2">
                <label class="text-black dark:text-gray-200" for="acra">ACRA / UN Reg. No</label>
                <input placeholder="ACRA / UN Reg. No" id="acrar" type="text"
                value={acra_no}
                onChange={(e)=>{
                    setAcraNo(e.target.value)
                }}
                 class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "/>
            </div>
         

            <div className="mb-2 sm:w-1/2">
                <label class="text-blackdark:text-gray-200" for="name">Full Name</label>
                <input placeholder="Full Name" id="name" type="text" 
                value={fullname}
                onChange={(e)=>{
                  setFullName(e.target.value)
                }}
                class="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div className="mb-2 sm:w-1/2">
                <label class="text-blackdark:text-gray-200" for="email1">Email Address 1</label>
                <input placeholder="Email address 1" id="drivernumber" type="text" 
                value={email1}
                onChange={(e)=>{
                  setEmail1(e.target.value)
                }}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>


            <div className="mb-2 sm:w-1/2">
            <label class=" flex text-black dark:text-gray-200" for="email2">
            Email Address 2   <p class="text-sm ml-3 text-red-400 pt-1">* Optional</p>
          </label>
                <input placeholder="Email Address 2" id="email2" type="text" 
                value={email2}
                onChange={(e)=>{
                  setEmail2(e.target.value)
                }}
                class="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2 sm:w-1/2">
                <label class="text-blackdark:text-gray-200" for="phonenumberf">Phone Number</label>
                <input placeholder="Phone Number" id="phonenumber" type="text" 
                value={phone}
                onChange={(e)=>{
                  setPhone(e.target.value)
                }}
                class="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            
            <div className="mb-2 sm:w-1/2">
                <label class="text-black dark:text-gray-200" for="Vechicletype">Supplier</label>
                <select 
                onChange={(e)=>{
                  setRole(e.target.value)
                }}
                id="Vechicletype" class="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
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
                      <p className="m-1 text-blue-600"><Link to="/supplier-list">Cancel</Link></p>
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
 
export default EditSupplierForm;
