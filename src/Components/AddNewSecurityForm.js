import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/baseurl";
import { UserContext } from "../Contexts/UserContexts";
import { Password } from "@mui/icons-material";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";

const AddNewSecuriyForm = () => {
    const {setLoading}=useContext(UserContext);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const [companies,setCompanies]=useState([])
    const [name,setName]=useState('');
    const [email1,setEmail1]=useState('');
    const [email2,setEmail2]=useState('');
    const [acra_no,setAcra_no]=useState('');
    const[phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [retypePassword,setreTypedPassword]=useState('')
    const [company,setCompany]=useState(-1);
    const [building,setBuilding]=useState(-1);

    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios
      .get(`${baseUrl}/get-companies`, {
        headers: {
          Authorization: `Bearer ${token}`,
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
       
        if(company==-1 || building==-1)
        {
            setModalHeading("Please Fill All Columns");
            setOpen1(true);

        }
        else{
            setOpen2(true);
            setModalHeading("Alert")
            setModalText("Are You Sure You Want To Create Admin With Provided Details");
        }
    
    }

    const submitData=async()=>{
        setLoading(true)
        const data = {
            name,email1,email2,password,acra_no,phone,company,building,retypePassword
          
          };
          const token=localStorage.getItem("EZTOken")
          axios.post(`${baseUrl}/add-security`,data,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
          })
          .then((res) => {
            if(res.data.status=="ok")
            {
               setModalHeading("Security Created Successfully")
               setModalText("")
               setName("");
               setEmail1("")
               setEmail2('');
               setAcra_no('');
               setPhone('');
               setPassword('')
               setreTypedPassword('');
               
           
               setOpen1(true)

        
            }
            else{
                setModalHeading("Something Went wrong");
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
          <FontAwesomeIcon icon={faBuilding} className="mr-5" />
          Add New Security
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="">
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="company">
              Company
            </label>
            <select
            onChange={(e)=>{
                setCompany(e.target.value)
            }}
              id="company"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Choose Company---</option>
       {
        companies.map((c,index)=>{
            return <option value={c.company_name}>{c.company_name}</option>
        })
       }
            </select>
          </div>
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="acra">
              ACRA / UN Reg. No
            </label>
            <input
            required
            value={acra_no}
            onChange={(e)=>{
                setAcra_no(e.target.value)
            }}
              placeholder="ACRA / UN Reg. No"
              id="acra"
              type="text"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
            />
          </div>
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="s_name">
            Security Name
          </label>
          <input
          required
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
            placeholder="Security Name"
            id="s_name"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>

        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="email1">
            Email Address 1
          </label>
          <input
          required
          value={email1}
          onChange={(e)=>{
            setEmail1(e.target.value)
          }}
            placeholder="Email Address 2"
            id="email1"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="email2">
            Email Address 2
          </label>
          <input
          required
          value={email2}
          onChange={(e)=>{
            setEmail2(e.target.value)
          }}
            placeholder="Email Address 2"
            id="email2"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="p_number">
            Phone Number
          </label>
          <input
          required
          value={phone}
          onChange={(e)=>{
            setPhone(e.target.value)
          }}
            placeholder="Phone Number"
            id="p_number"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>
        <div className="mb-2 pt-2 ">
          <label class="text-black dark:text-gray-200" for="building">
            Alloted Building
          </label>
          <div id="building" class="flex items-center m-4 ">
            <input
              id="default-radio-1"
              type="radio"
              value="Inflight Catering Centre 1 (ICC1)"
             onChange={(e)=>{
                setBuilding(e.target.value)
                // setBuilding("Inflight Catering Centre 1 (ICC1)")
             }}
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
          onChange={(e)=>{
                setBuilding("Inflight Catering Centre 2 (ICC2)")
             }}
              id="default-radio-1"
              type="radio"
              value="Inflight Catering Centre 2 (ICC2)"
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Inflight Catering Centre 2 (ICC2)
            </label>
          </div>
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="password">
            Password
          </label>
          <input
          required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            placeholder="Password"
            id="password"
            type="password"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="r_password">
            Retype Password
          </label>
          <input
          required
          value={retypePassword}
          onChange={(e)=>{
            setreTypedPassword(e.target.value)
          }}
            placeholder="Retype Password"
            id="r_password"
            type="password"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>

        <div class="flex justify-end mt-6">
          <button type="submit" class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
          <button type="button" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
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
    </>
  );
};

export default AddNewSecuriyForm;
