import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";

const ListAllAdmin = ({iseditable,adminData,addadmin}) => {
  const [usertype,setUser]=useState();
  const {accountDetails}=useContext(UserContext);
 const [noofAdmins,setnoadmin]=useState(0);
  useEffect(()=>{
    if(addadmin){
      setnoadmin(accountDetails.subscription_id.remaining_admins);
      setUser("admin")
    
    }
    else{
      setUser("superadmin")
    }
  },[])
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-4xl font-medium heading-class">Admin Users</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {addadmin&& noofAdmins>0&&  <div className="flex items-center justify-between ml-20 w-38 p">
        
        <Link
            to="/admin/Users/addCompanyAdminUsers"
            className="p-3  w-48  items-center  ring-slate-200 bg-blue-900 ring-2 rounded-xl outline-none"
          >
            
            <p className="sm:text-md text-white text-center "> Add&nbsp;Admin</p>

          </Link>
      </div>}
   
      <div className="flex  items-center pt-4 w-full sm:max-md:block">
        <input className="  w-2/6 ml-4 mr-6 h-10 ring-slate-200 ring-2 rounded-lg outline-none" placeholder="Search Admin" onChange={(e) => { }} type="text"></input>
   
      <div className="flex w-4/6 mt-3 ml-9 justify-end mb-5">
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
      </div>
      <div className="flex items-center justify-between w-4/12 py-4 ml-4">
        <p className="font-semibold">No Of Admins : {adminData.length}</p>
    
      </div>
      <table className="w-11/12 relative table-auto">
        <tr className="rounded-xl p-3 bg-primary text-center">
          <th className="p-3 text-sm text-slate-500">S. No</th>
          <th className="p-3 text-sm text-slate-500">NAME</th>
          <th className="p-3 text-sm text-slate-500">Role</th>
          <th className="p-3 text-sm text-slate-500">Email Address</th>
          <th className="p-3 text-sm text-slate-500">ACRA / UN</th>
          <th className="p-3 text-sm text-slate-500">CREATED ON</th>
          {iseditable&&<th className="p-3 text-sm text-slate-500">ACTIONS</th>}
        </tr>
        {adminData.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{index+1}</td>
            <td className="p-3">{data.admin_id.name}</td>
            <td className="p-3">{data.role}</td>
            <td className="p-3">{data.admin_id.email1}</td>
            <td className="p-3">{data.admin_id.acra_no}</td>
            <td className="p-3 text-red-700">{'10-90-2020'}</td>
            {iseditable && (
              <td className="p-3 flex">
                {" "}
                <button
                  className="h-7 flex items-center bg-blue-500 text-white p-2 rounded-md text-md mr-5"
                  onClick={() => {}}
                >
                  <FontAwesomeIcon
                    icon={faEye}
                    className="mt-1 mr-1"
                    size="sm"
                  />
                  View
                </button>
                <Link
                  className="h-7 flex items-center bg-green-500 text-white p-2 rounded-md text-md mr-5"
                  to={"/"+usertype+"/users/edit/company/AdminUser/"+data._id}
                >
                 <FontAwesomeIcon icon={faEdit} className="mt-1 mr-1" size="sm"/>
                  Edit
                </Link>
              </td>
            )}
           
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllAdmin;
