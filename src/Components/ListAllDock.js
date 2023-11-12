import { Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";
import { useContext } from "react";

const ListAllDocks = ({dockData}) => {
  
const {accountDetails}=useContext(UserContext)
  const noOfDocks=accountDetails.subscription_id.remaining_docks;
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-medium">List of Docks</h2>
      </div>
      <hr class="h-px my-8  bg-gray-200 border-0 dark:bg-gray-700"></hr>
    { noOfDocks>0&& <div className="flex items-center justify-between ml-20 w-38 p">
          <Link
          to="/admin/add-new-dock"
            className="p-3  w-48  items-center  ring-slate-200 bg-blue-900 ring-2 rounded-xl outline-none"
          >
          <p className="sm:text-md text-white text-center ">Add&nbsp;Dock</p>
            
          </Link>
        </div>}
      <div className="flex items-center p-3 w-9/12 py-4">
        <label className=" pr-3 font-semibold">Search</label>
        <input className="  w-3/6 ml-2 ring-slate-200 ring-2 rounded-lg outline-none" onChange={(e) => { }} type="text"></input>
      </div>
      <div className="flex items-center justify-end mb-5">
        <button
          className="w-28 bg-stone-800 text-white p-2 rounded-lg text-sm mr-10"
          onClick={() => {}}
        >
          Copy
        </button>
        <button
          className="w-28 bg-stone-800 text-white p-2 rounded-lg text-sm mr-20"
          onClick={() => {}}
        >
          Excel
        </button>
      </div>
      <div className="flex ml-3 items-center justify-between w-4/12 py-4">
        <p className="font-semibold">No Of Requests : {dockData.length}</p>

      </div>
      <table className="w-11/12 relative table-auto">
        <tr className="rounded-xl p-3 bg-primary text-center">
          <th className="p-3 text-sm text-slate-500">Dock Number</th>
          <th className="p-3 text-sm text-slate-500">Building Name</th>
          <th className="p-3 text-sm text-slate-500">Mode</th>
          <th className="p-3 text-sm text-slate-500">Type</th>
          <th className="p-3 text-sm text-slate-500">Price</th>
          <th className="p-3 text-sm text-slate-500">Status</th>
          <th className="p-3 text-sm text-slate-500">Actions</th>
        </tr>
        {dockData.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{data.dock_number}</td>
            <td className="p-3">{data.building_id.building_name}</td>
            <td className="p-3">{data.mode}</td>
            <td className="p-3">{data.dock_type_id.dock_type}</td>
            <td className="p-3">{data.price}</td>
            <td className="p-3 text-green-700">{data.status}</td>
            <td className="flex"> <button
          className="h-7 flex items-center bg-orange-500 text-white p-2 rounded-md text-md mr-5"
          onClick={() => {}}
        >
            <Mail className="mt-1 mr-1" fontSize="sm"/>
         <Link to ={"/admin/edit/dock/"+data._id} >Edit</Link>
     
        </button>
        
        <button
          className="h-7 flex items-center bg-red-500 text-white p-2 rounded-md text-md mr-5"
          onClick={() => {}}
        >
            <Mail className="mt-1 mr-1" fontSize="sm"/>
         Open
     
        </button>
        </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllDocks;
