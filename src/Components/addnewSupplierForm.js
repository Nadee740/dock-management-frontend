import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import { baseUrl } from "../utils/baseurl";
import { UserContext } from "../Contexts/UserContexts";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";

const AddNewSupplierForm= ({suppliergroup,company}) => {
    const [compantSelected,setCompanySelected]=useState('');
    const [acra_no,setAcraNo]=useState('');
    const {setLoading}=useContext(UserContext);
    const [fullname,setFullName]=useState('');
    const [email1,setEmail1]=useState('');
    const [email2,setEmail2]=useState('');
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [role,setRole]=useState('');
    const [supplier_groupselected,setSupplierGroupSelected]=useState('');
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const SubmitButton=(e)=>{
      e.preventDefault();
     let b=password==confirmPassword;
     if(b==false){
      setModalHeading("Passwords don't match");
      setOpen1(true);
     }
      else if(compantSelected==-1 ||supplier_groupselected==-1)
      {
          setModalHeading("Please Fill All Columns");
          setOpen1(true);
  
      }
      else{
          setOpen2(true);
          setModalHeading("Alert")
          setModalText("Are You Sure You Want To Create Supplier  With Provided Details");
      }
  
  }
    const submitData=()=>{
      
       
        setLoading(true)
        const data = {
            name:fullname,
            email1,email2,password,
            acra_no,phone,
            company_id:compantSelected,
            group_id:supplier_groupselected,
            role
            
          
          };
          const token=localStorage.getItem("EZTOken")
          axios.post(`${baseUrl}/create-supplier`,data,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
          })
          .then((res) => {
            console.log(res.data)
            if(res.data.status=="ok")
            {
              setModalHeading("Supplier Created Successfully")
              setModalText("")
               setFullName("");
               setEmail1("")
               setEmail2('');
               setAcraNo('');
               setPhone('');
               setPassword('')
               setConfirmPassword('');
               setCompanySelected('');
               setRole('');
               setSupplierGroupSelected('');
               setOpen1(true)
               
           
              

        
            }
            else{
              setModalHeading("Something Went wrong");
              setModalText("Something Went wrong.Please Try again after sometime");
              setOpen1(true);
               console.log("err",res.data.msg)
    
            }
       
           setLoading(false)
          }).catch((err)=>{
            console.log(err)
          })
    }
    return ( <>
         <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium"><FontAwesomeIcon icon={faUser}className="mr-5" />Add Supplier</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="">
        <div>
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
                        return (
                          <option value={c._id}>
                            {c.company_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
            <div className="mb-2">
                <label class="text-black dark:text-gray-200" for="acra">ACRA / UN Reg. No</label>
                <input placeholder="ACRA / UN Reg. No" id="acrar" type="text"
                value={acra_no}
                onChange={(e)=>{
                    setAcraNo(e.target.value)
                }}
                 class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"/>
            </div>
         

            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="name">Full Name</label>
                <input placeholder="Full Name" id="name" type="text" 
                value={fullname}
                onChange={(e)=>{
                  setFullName(e.target.value)
                }}
                class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="email1">Email Address 1</label>
                <input placeholder="Email address 1" id="drivernumber" type="text" 
                value={email1}
                onChange={(e)=>{
                  setEmail1(e.target.value)
                }}
                class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>


            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="email2">Email Address 2</label>
                <input placeholder="Email Address 2" id="email2" type="text" 
                value={email2}
                onChange={(e)=>{
                  setEmail2(e.target.value)
                }}
                class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="phonenumberf">Phone Number</label>
                <input placeholder="Phone Number" id="phonenumber" type="text" 
                value={phone}
                onChange={(e)=>{
                  setPhone(e.target.value)
                }}
                class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="password">Password</label>
                <input placeholder="Password" id="password" type="text" 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="repass">ReType Password</label>
                <input placeholder="ReType Password" id="phonenumber" type="password" 
                
                 value={confirmPassword}
                 onChange={(e)=>{
                   setConfirmPassword(e.target.value)
                 }}
                class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-black dark:text-gray-200" for="Vechicletype">Supplier</label>
                <select 
                onChange={(e)=>{
                  setRole(e.target.value)
                }}
                id="Vechicletype" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option value={-1}>---Choose Role---</option>
                    <option value={'Admin'}>Admin</option>
                    <option value={'Supplier'}>Supplier</option>
                    <option value={'Company'}>Company</option>
                    <option value={'SubContractor'}>SubContractor</option>
                </select>
            </div>
            <div>
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
                        return (
                          <option value={c._id}>
                            {c.group_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
     
     
     

        
         

        </div>

        <div class="flex justify-end mt-6">
            <button type="submit" class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Submit</button>
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
          <Link to="/"> Cancel</Link>
          </button>
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
 
export default AddNewSupplierForm;
