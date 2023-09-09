import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const AddNewSupplierForm= ({suppliergroup,company}) => {
    const [compantSelected,setCompanySelected]=useState('');
    const [acra_no,setAcraNo]=useState('');
    const [fullname,setFullName]=useState('');
    const [email1,setEmail1]=useState('');
    const [email2,setEmail2]=useState('');
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [role,setRole]=useState('');
    const [supplier_groupselected,setSupplierGroupSelected]=useState('');

    const submitData=()=>{
        ///create-supplier
    }
    return ( <>
         <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium"><FontAwesomeIcon icon={faUser}className="mr-5" />Add Supplier</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={submitData}>
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
                        <option value="">---Choose Company---</option>
                    
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
                <input placeholder="ACRA / UN Reg. No" id="acrar" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"/>
            </div>
         

            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="name">Full Name</label>
                <input placeholder="Full Name" id="name" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="email1">Email Address 1</label>
                <input placeholder="Email address 1" id="drivernumber" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>


            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="email2">Email Address 2</label>
                <input placeholder="Email Address 2" id="email2" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="phonenumberf">Phone Number</label>
                <input placeholder="Phone Number" id="phonenumber" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="password">Password</label>
                <input placeholder="Password" id="password" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="repass">ReType Password</label>
                <input placeholder="repass" id="phonenumber" type="password" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-black dark:text-gray-200" for="Vechicletype">Supplier</label>
                <select id="Vechicletype" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>---Choose Role---</option>
                    <option>Admin</option>
                    <option>Supplier</option>
                    <option>Company</option>
                    <option>SubContractor</option>
                </select>
            </div>
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
                        <option value="">---Supplier Group---</option>
                    
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
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Cancel</button>
        </div>
    </form>
    </> );
}
 
export default AddNewSupplierForm;
