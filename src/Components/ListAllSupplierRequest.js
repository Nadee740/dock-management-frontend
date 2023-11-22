import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faBatteryThreeQuarters, faCheck, faCross, faPlus, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";

const ListAllSupplierRequest = ({iseditable,requestList}) => {
  const [filter,setFilter]=useState(0);
  const {setLoading}=useContext(UserContext)
  const [filteredList,setFilteredList]=useState(requestList);
    const status=['Approve Request','Accepted','Rejected']
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
      <div className="flex items-center justify-between w-2/12 py-4">
        <p className="font-semibold">No Of Requests : {filteredList.length}</p>
    
      </div>
      <table className="w-11/12 relative table-auto">
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
                {data.Requeststatus==0?(<Link
                to={"/admin/change/request/supplier/"+data._id}
                  className="h-7 w-4/5 flex items-center bg-blue-500 text-white p-2 rounded-md text-md mt-2 ml-3 mr-5"
                  
                >
                    
                 <FontAwesomeIcon icon={faEdit} className="mt-1 mr-2" size="sm"/>
                 Approve
                </Link>):
                data.Requeststatus==1?(<Link
                   
                      className="h-7 w-4/5 flex items-center bg-green-500 text-white p-2 rounded-md text-md mt-2 ml-3 mr-5"
                      
                    >
                        
                     <FontAwesomeIcon icon={faCheck} className="mt-1 mr-2" size="sm"/>
                 Accepted
                    </Link>):(
                        <Link
                       
                          className="h-7 w-4/5 flex items-center bg-red-500 text-white p-2 rounded-md text-md mt-2 ml-3 mr-5"
                          
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
    </>}</>
  );
};

export default ListAllSupplierRequest;