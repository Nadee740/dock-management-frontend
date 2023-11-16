import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/baseurl";
import { UserContext } from "../Contexts/UserContexts";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";

const EditWareHouseForm = ({warehouseData}) => {
  const [list_Buildings,setList_buildings]=useState([]);
  const {setLoading}=useContext(UserContext);
  const [open1,setOpen1]=useState(false);
  const [open2,setOpen2]=useState(false);
  const [modalHeading,setModalHeading]=useState("");
  const [modalText,setModalText]=useState("")
  const [company,setCompany]=useState(-1);
  const [building,setBuilding]=useState(-1);
  const [name,setName]=useState(warehouseData.staff_id.name);
  const [email1,setEmail1]=useState(warehouseData.staff_id.email1);
  const [email2,setEmail2]=useState(warehouseData.staff_id.email2);
  const [acra_no,setAcra_no]=useState(warehouseData.staff_id.acra_no);
  const[phone,setPhone]=useState(warehouseData.staff_id.phone);
  const [companies,setCompanies]=useState([])
  useEffect(()=>{
    setLoading(true)
    setCompany(warehouseData.company_id._id);
    setBuilding(warehouseData.building_id._id);

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
   if(company==-1 || building==-1)
    {
        setModalHeading("Please Fill All Columns");
        setOpen1(true);

    }
    else{
        setOpen2(true);
        setModalHeading("Alert")
        setModalText("Are You Sure You Want To Update Warehouse Checker With Provided Details");
    }

}

const submitData=async()=>{
  setLoading(true)
  const data = {
      name,email1,email2,acra_no,phone,
      company_id:company,
      building_id:building,
      
    
    };
    const token=localStorage.getItem("EZTOken")
    axios.post(`${baseUrl}/update-warehouse/${warehouseData._id}`,data,{
      headers:{
          'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log(res.data)
      if(res.data.status=="ok")
      {
         setModalHeading("Warehouse Checker Updated Successfully")
         setModalText("")
        
        setOpen1(true)

  
      }
      else{
          setModalHeading("Something Went wrong");
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
          Edit Warehouse Checker
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
            return <>{company===c._id?<option selected value={c._id}>{c.company_name}</option>:<option value={c._id}>{c.company_name}</option>}</>
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
                    return <>{building===b._id?<option selected value={b._id}>{b.building_name}</option>:<option value={b._id}>{b.building_name}</option>}</>
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
         
          
        
        </div>

        <div class="flex justify-end mt-6">
          <button class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Update
          </button>
          <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
          <Link to="/list-all-warehouses"> Cancel</Link>
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

export default EditWareHouseForm;
