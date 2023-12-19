import { faBuilding, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../utils/baseurl";
import { UserContext } from "../Contexts/UserContexts";
import { Password } from "@mui/icons-material";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";

const UpdateSecurityForm = ({securityData}) => {
    const {setLoading}=useContext(UserContext);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const [companies,setCompanies]=useState([])
    const [name,setName]=useState(securityData.security_id.name);
    const [email1,setEmail1]=useState(securityData.security_id.email1);
    const [email2,setEmail2]=useState(securityData.security_id.email2);
    const [acra_no,setAcra_no]=useState(securityData.security_id.acra_no);
    const[phone,setPhone]=useState(securityData.security_id.phone);
  
    const [company,setCompany]=useState();
    const [building,setBuilding]=useState();
    const [list_Buildings,setList_buildings]=useState([]);
    useEffect(()=>{
        setBuilding(securityData.building_id._id);
        setCompany(securityData.company_id._id)
    },[])
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
          setModalText("Are You Sure You Want To Update Security With Provided Details");
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
          axios.post(`${baseUrl}/update-security/${securityData._id}`,data,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
          })
          .then((res) => {
            console.log(res.data)
            if(res.data.status=="ok")
            {
               setModalHeading("Security Updated Successfully")
               setModalText("")
              
               
           
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
            setModalHeading("Something Went wrong ");
            setModalText("Something Went wrong.Please Try again after sometime");
            setOpen1(true);
          })
          .finally(()=>{
          
            setLoading(false)
          })
    }
  return (
    <>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium">
          <FontAwesomeIcon icon={faBuilding} className="mr-5" />
          Update Security
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="flex flex-col w-full sm:justify-center sm:items-center">
          <div className="mb-2 sm:w-1/2">
            <label class="text-black dark:text-gray-200" for="company">
              Company
            </label>
            <select
            onChange={(e)=>{
                setCompany(e.target.value)
            }}
              id="company"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Choose Company---</option>
       {
        companies.map((c,index)=>{
            return <>{company===c._id?<option selected value={c._id}>{c.company_name}</option>:<option value={c._id}>{c.company_name}</option>}</>
        })
       }
            </select>
          </div>
          <div className="mb-2 sm:w-1/2">
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
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
            />
          </div>
      
        <div className="mb-2 sm:w-1/2">
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
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
          />
        </div>

        <div className="mb-2 sm:w-1/2">
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
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
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
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
          />
        </div>
        <div className="mb-2 sm:w-1/2">
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
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
          />
        </div>
        <div className="mb-2 sm:w-1/2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">
              Building Name
            </label>
            <select
            onChange={(e)=>{
                setBuilding(e.target.value)
            }}
              id="Vechicletype"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Choose Building ---</option>
            {
                list_Buildings.map((b,index)=>{
                    return <>{building===b._id?<option selected value={b._id}>{b.building_name}</option>:<option value={b._id}>{b.building_name}</option>}</>
                })
            }
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
                      <p className="m-1 text-blue-600"><Link to="/list-all-security">Cancel</Link></p>
                    </button>

                  </div>
                  <div className="flex pt-6 pb-6 pl-6 ">
                  <button
                      type="submit"
                      className="flex justify-end sm:items-center ml-6  w-32 bg-blue-600 px-8 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-blue-400 focus:outline-none focus:bg-gray-600"
                    >
                    <p>Update</p>
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

export default UpdateSecurityForm;
