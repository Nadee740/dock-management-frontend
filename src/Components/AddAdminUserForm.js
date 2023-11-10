import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";
const AddAdminUserForm = () => {
    const {setLoading,Token}=useContext(UserContext);
    const [companies,setCompanies]=useState([]);

    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const [name,setname]=useState("");
    const [email1,setEmail1]=useState("");
    const [email2,setEmail2]=useState("");
    const [password,setPassword]=useState('');
    const [retypePassword,setreTypedPassword]=useState('')
    const [acra_no,setAcra_no]=useState("");
    const [phone,setPhone]=useState('');
    const [role,setRole]=useState(-1);
    const [company,setCompany]=useState(-1);

    
    useEffect(()=>{
        setLoading(true);
        axios
      .get(`${baseUrl}/get-companies`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(function (response) {
        

        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setCompanies(response.data.data);
          setLoading(false);
        
        } else {
          setCompanies(null);
          console.log("errr");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
    },[])
    const SubmitButton=(e)=>{
        e.preventDefault();
        let b=password==retypePassword;
        if(b==false){
         setModalHeading("Passwords don't match");
         setOpen1(true);
        }
         else if(role==-1 || company==-1)
        {
            setModalHeading("Please Fill All Columns");
            setOpen1(true);

        }
        else{
            setOpen2(true);
            setModalHeading("Alert")
            setModalText("Are You Sure You Want To Add Admin With Provideed Details");
        }
    
    }

    const submitData=async()=>{
        setLoading(true)
        const data = {
            name,email1,email2,password,acra_no,phone,role,
            company_id:company
          
          };
          axios.post(`${baseUrl}/add-admin`,data,{
            headers:{
                'Authorization': `Bearer ${Token}`
            }
          })
          .then((res) => {
          
            
            if(res.data.status=="ok")
            {
               setModalHeading("Admin Added Successfully")
               setModalText("")
               setname("");
               setEmail1("")
               setEmail2('');
               setAcra_no('');
               setPhone('');
               setRole('')
               setCompany('')
           
               setOpen1(true)

        
            }
            else{
                setModalHeading("Something Went wrong ");
                setModalText("Something Went wrong.Please Try again after sometime");
                setOpen1(true);
    
            }
       
           setLoading(false)
          }).catch((err)=>{
            console.log(err)
          })
    }
  return (
    <>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium">
          <FontAwesomeIcon icon={faUser} className="mr-5" />
          Add Admin User
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="">
          <div className="mb-2">
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
          </div>
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">
              Company
            </label>
            <select
            onChange={(e)=>{
                setCompany(e.target.value)
            }}
              id="Vechicletype"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Choose Company ---</option>
              {
                companies.map((c,index)=>{
                    return <option value={c._id}>{c.company_name}</option>
                })
              }
              
           
            </select>
          </div>
         {/* <div className="mb-2 pt-2 ">
          <label class="text-black dark:text-gray-200" for="building">
            Alloted Building
          </label>
          <div id="building" class="flex items-center m-4 ">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Inflight Catering Centre 1 (ICC1)
            </label>
          </div>
          <div class="flex items-center m-4">
             <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Inflight Catering Centre 1 (ICC1)
            </label>
          </div>
        </div> */}
          <div className="mb-2">
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
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
            />
          </div>

          <div className="mb-2">
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
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2">
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
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="email2">
              Email Address 2
            </label>
            <input
            value={email2}
            onChange={(e)=>{
                setEmail2(e.target.value)
            }}
              placeholder="Email Address 2"
              id="email2"
              type="text"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2">
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
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="password">
              Password
            </label>
            <input
            value={password}
            onChange={(e)=>{
            setPassword(e.target.value)}}
              placeholder="Password"
              id="password"
              type="password"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="repass">
              ReType Password
            </label>
            <input
              value={retypePassword}
              onChange={(e)=>{
                setreTypedPassword(e.target.value)
              }}
              placeholder="Retype Password"
              id="phonenumber"
              type="password"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
       
        
        </div>

        <div class="flex justify-end mt-6">
          <button type="submit" class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
          <button type="button"  class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            <Link to="/admin/users/listCompanyAdminUsers">Cancel</Link>
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
    </>
  );
};

export default AddAdminUserForm;
