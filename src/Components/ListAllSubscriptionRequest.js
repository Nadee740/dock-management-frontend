import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";

const ListAllSubscriptionRequest = ({iseditable,requestList}) => {
  const [filter,setFilter]=useState(0);
  const {setLoading}=useContext(UserContext)
  const [filteredList,setFilteredList]=useState(requestList);

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
        return list.Status==filter;
      })
      setFilteredList(datas)
    }
   
    setLoading(false)
  },[filter,setFilteredList,requestList])
  const changeData=(e)=>{
    setFilter(e.target.value)
   
  }
  return (
   <>
    { filteredList&&<>
      <div className="flex items-center justify-between p-4 mb-1">
        <h2 className="text-2xl font-medium">Subscription Request</h2>
        
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div class="flex space-x-4 mb-6 ">
        <div class="flex-auto flex space-x-4"> 
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      
   
        <div className="flex items-center p-3 w-4/12 py-4">
        <label className=" pr-3 font-semibold">Search</label>
        <input className="p-3 w-52 ring-slate-200 ring-2 rounded-xl outline-none" onChange={(e) => {}} type="text"></input>
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
      <div className="flex items-center justify-between w-4/12 py-4">
        <p className="font-semibold">No Of Requests :</p>
        <p className="font-semibold">{10} </p>
      </div>
      <table className="w-11/12 relative table-auto">
        <tr className="rounded-xl p-3 bg-primary text-center">
          <th className="p-3 text-sm text-slate-500">S. No</th>
          <th className="p-3 text-sm text-slate-500">NAME</th>
          <th className="p-3 text-sm text-slate-500">Email</th>
          <th className="p-3 text-sm text-slate-500">Phone No</th>
          <th className="p-3 text-sm text-slate-500">Company</th>
          <th className="p-3 text-sm text-slate-500">Subscription type</th>
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
            <td className="p-3">{data.NameofSubscriber}</td>
            <td className="p-3">{data.email}</td>
            <td className="p-3">{data.Phone_no}</td>
            <td className="p-3">{data.Company_Name}</td>
            <td className="p-3">{data.typeofsubscription}</td>
            
            
            {iseditable && (
              <td className="p-3 flex">
                {" "}
                <Link
                to={"/superadmin/change/subscription/status/"+data._id}
                  className="h-7 flex items-center bg-green-500 text-white p-2 rounded-md text-md mr-5"
                  onClick={() => {}}
                >
                 <FontAwesomeIcon icon={faEdit} className="mt-1 mr-1" size="sm"/>
                  Edit
                </Link>
              </td>
            )}
           
          </tr>
        ))}
      </table>
    </>}</>
  );
};

export default ListAllSubscriptionRequest;
