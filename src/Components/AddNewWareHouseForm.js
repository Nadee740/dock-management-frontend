import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/baseurl";
import { UserContext } from "../Contexts/UserContexts";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";

const AddNewWareHouseForm = () => {
  const [list_Buildings,setList_buildings]=useState([]);
  const {setLoading}=useContext(UserContext);
  const [open1,setOpen1]=useState(false);
  const [open2,setOpen2]=useState(false);
  const [modalHeading,setModalHeading]=useState("");
  const [modalText,setModalText]=useState("")
  const [company,setCompany]=useState(-1);
  const [building,setBuilding]=useState(-1);
  const [name,setName]=useState('');
    const [email1,setEmail1]=useState('');
    const [email2,setEmail2]=useState('');
    const [acra_no,setAcra_no]=useState('');
    const[phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const [retypePassword,setreTypedPassword]=useState('')
  const [companies,setCompanies]=useState([])
  useEffect(()=>{
    setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios
      .get(`${baseUrl}/get-buildings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        

        console.log("success", response, "response.data");
        if (response.data != "") {
          
          setList_buildings(response.data.data);
          setLoading(false);
        
        } else {
          setList_buildings(null);
          console.log("errr");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });

    },[])
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
   let b=password==retypePassword;
   if(b==false){
    setModalHeading("Passwords don't match");
    setOpen1(true);
   }
    else if(company==-1 || building==-1)
    {
        setModalHeading("Please Fill All Columns");
        setOpen1(true);

    }
    else{
        setOpen2(true);
        setModalHeading("Alert")
        setModalText("Are You Sure You Want To Create Warehouse Checker With Provided Details");
    }

}

const submitData=async()=>{
  setLoading(true)
  const data = {
      name,email1,email2,password,acra_no,phone,
      company_id:company,
      building_id:building,
      
    
    };
    const token=localStorage.getItem("EZTOken")
    axios.post(`${baseUrl}/add-warehouse`,data,{
      headers:{
          'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data)
      if(res.data.status=="ok")
      {
         setModalHeading("Warehouse Checker Created Successfully")
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
          <FontAwesomeIcon icon={faUser} className="mr-5" />
          Add Warehouse Check
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
            return <option value={c._id}>{c.company_name}</option>
        })
       }
            </select>
          </div>
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">
              Building Name
            </label>
            <select
            onChange={(e)=>{
                setBuilding(e.target.value)
            }}
              id="Vechicletype"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Choose Building ---</option>
            {
                list_Buildings.map((b,index)=>{
                    return <option value={b._id}>{b.building_name}</option>
                })
            }
            </select>
          </div>
        
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="acra">
              ACRA / UN Reg. No
            </label>
            <input
              placeholder="ACRA / UN Reg. No"
              id="acrar"
              type="text"
              value={acra_no}
              onChange={(e)=>{
                  setAcra_no(e.target.value)
              }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
            />
          </div>

          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="name">
              WareHouse Checker Name
            </label>
            <input
              placeholder="WareHouse Checker Name"
              id="name"
              type="text"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="email1">
              Email Address 1
            </label>
            <input
              placeholder="Email address 1"
              id="drivernumber"
              type="text"
              required
              value={email1}
              onChange={(e)=>{
                setEmail1(e.target.value)
              }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="email2">
              Email Address 2
            </label>
            <input
              placeholder="Email Address 2"
              id="email2"
              type="text"
              value={email2}
              onChange={(e)=>{
                setEmail2(e.target.value)
              }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="phonenumberf">
              Phone Number
            </label>
            <input
              placeholder="Phone Number"
              id="phonenumber"
              type="text"
              value={phone}
              onChange={(e)=>{
                setPhone(e.target.value)
              }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="password">
              Password
            </label>
            <input
              placeholder="Password"
              id="password"
              type="text"
              value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="repass">
              ReType Password
            </label>
            <input
              placeholder="ReType Password"
              id="repass"
              type="password"
              value={retypePassword}
          onChange={(e)=>{
            setreTypedPassword(e.target.value)
          }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
       
        
        </div>

        <div class="flex justify-end mt-6">
          <button class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
          <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Cancel
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

export default AddNewWareHouseForm;
