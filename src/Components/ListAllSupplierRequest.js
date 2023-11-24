import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faBatteryThreeQuarters, faCheck, faCross, faPlus, faTriangleExclamation, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";
import AlertDialog from "./AlertDialogue";
import { Button } from "bootstrap";

const ListAllSupplierRequest = ({iseditable,requestList}) => {
  const [filter,setFilter]=useState(0);
  const {setLoading,accountDetails}=useContext(UserContext)
  const [open1,setOpen1]=useState(false);
  const [modalHeading,setModalHeading]=useState("");
  const [modalText,setModalText]=useState("")
  const [filteredList,setFilteredList]=useState(requestList);
  const remaining_suppliers=accountDetails.subscription_id.remaining_supplier;
    const status=['Approve Request','Accepted','Rejected']


    const warningMsg=()=>{
      setModalHeading("Subscription Limit Over ");
      setModalText("You cannot add any more Suppliers. Please upgrade your subscription.");
      setOpen1(true);
    }
  useEffect(()=>{

    // setLoading(true)
    // setFilter(4);
    // setFilteredList(requestList);
    setLoading(true)
    if(filter==4){
      setFilteredList(requestList);
    }
    else{
      const datas=requestList.filter((list)=>{
        return list.Requeststatus==filter;
      })
      setFilteredList(datas)
    }
    console.log(filteredList,filter);
   
    setLoading(false)
  },[filter,setFilteredList,requestList])
  const changeData=(e)=>{
    setFilter(e.target.value)
   
  }
  return (
   <>
    { filteredList&&<>
      <div className="flex items-center justify-between p-4 mb-1">
        <h2 className="text-4xl font-medium heading-class">Supplier Requests</h2>
        
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div class="flex space-x-4 mb-6 ">
        <div class="flex-auto flex space-x-4"> 
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      
   
        <div className="flex items-center p-3 w-9/12 py-2">
        <input className="  w-4/6 ml-2 ring-slate-200 ring-2 rounded-lg outline-none" placeholder="Search Supplier ..." onChange={(e) => { }} type="text"></input>
      </div>
{/* dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring  */}
        </div>
      
      <div class="flex flex-wrap">
        <label class="text-lg h-8 items-center">Filter</label>
        <select class="block w-full flex-none text-md h-10 px-6 font-semibold rounded-md bg-white-400 text-black mr-5 "
        onChange={changeData}
        value={filter}>
          <option value={0}>Pending request</option>
          <option value={1}>Accepted</option>
          <option value={2}>Rejected</option>
          <option value={4}>All requests</option>
        </select>
      </div>
      </div>
    
      <div className="flex items-center justify-end mb-5">
        <button
          className="w-28 bg-stone-800 text-white p-2 rounded-lg text-sm mr-5"
          onClick={() => {}}
        >
          Copy
        </button>
        <button
          className="w-28 bg-stone-800 text-white p-2 rounded-lg text-sm mr-5"
          onClick={() => {}}
        >
          Excel
        </button>
      </div>
      <div className="flex items-center justify-between w-4/12 py-4 ml-4">
        <p className="font-semibold">No Of Requests : {filteredList.length}</p>
       
      </div>
      <div>
      <p className="font-semibold text-red-700 ml-4">You can add {remaining_suppliers} more suppliers</p>
    
      </div>
      <table className="w-11/12 relative table-auto pt-6">
        <tr className="rounded-xl p-3 bg-primary text-center">
          <th className="p-3 text-sm text-slate-500">Sl. No</th>
          <th className="p-3 text-sm text-slate-500">NAME</th>
          <th className="p-3 text-sm text-slate-500">ACRA / UN Reg. No</th> 
          <th className="p-3 text-sm text-slate-500">Email</th>
          <th className="p-3 text-sm text-slate-500">Phone No</th>
          <th className="p-3 text-sm text-slate-500">Company</th>
          {iseditable&&<th className="p-3 text-sm text-slate-500">ACTIONS</th>}
        </tr>
        {filteredList.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid "
            }
          >
            <td className="p-3 text-blue-400">{index+1}</td>
            <td className="p-3">{data.name}</td>
            <td className="p-3">{data.acra_no}</td>
            <td className="p-3">{data.email1}</td>
            <td className="p-3">{data.phone}</td>
            <td className="p-3">{data.company_id.company_name}</td>
         
            
            
            {iseditable && (
              <td className=" flex">
                {" "}
                {data.Requeststatus==0?remaining_suppliers>0?(<Link
                to={"/admin/change/request/supplier/"+data._id}
                  className="h-7 w-4/5 flex items-center bg-blue-500 text-white p-2 rounded-md text-md mt-2 ml-3 mr-3"
                  
                >
                    
                 <FontAwesomeIcon icon={faEdit} className="mt-1 mr-2" size="sm"/>
                 Approve
                </Link>):(<button
                    className="h-10 w-5/5 flex items-center bg-orange-500 text-white p-2 rounded-md text-sm mt-2 ml-3 mr-3"

                    onClick={()=>{
                     warningMsg();
                    }}
               >
                <FontAwesomeIcon icon={faTriangleExclamation} className="mt-1 mr-2" size="sm"/>
             Cannot Approve
                 </button>):
                data.Requeststatus==1?(<Link
                   
                      className="h-7 w-4/5 flex items-center bg-green-500 text-white p-2 rounded-md text-md mt-2 ml-3 mr-3"
                      
                    >
                        
                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2" size="sm"/>
                 Accepted
                    </Link>):(
                        <Link
                       
                          className="h-7 w-4/5 flex items-center bg-red-500 text-white p-2 rounded-md text-md mt-2 ml-3 mr-3"
                          
                        >
                            
                         <FontAwesomeIcon icon={faX} className="mt-1 mr-2" size="sm"/>
                     Rejected
                        </Link>
                    )}
              
              </td>
            )}
           
          </tr>
        ))}
      </table>
      <AlertDialog
        open={open1}
        setOpen={setOpen1}
        modalHeading={modalHeading}
        modalText={modalText}
      />
    </>}</>
  );
};

export default ListAllSupplierRequest;