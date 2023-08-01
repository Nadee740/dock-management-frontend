import { Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ListAllDocks = ({dockData}) => {
    const datas=[{
dock_no:"Dock C3",
Building_Name:"ICCS-APS",
Mode:"Normal",
Type:"Chilled",
Price:0,
Status:"Closed"

}]
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-medium">List of Docks</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center justify-between w-4/12 p">
          <Link
          to="/admin/add-new-dock"
            className="p-3 ring-slate-200 bg-green-400 ring-2 rounded-xl outline-none"
          >
          <p className="sm:text-md text-white">Add&nbsp;Dock</p>
            
          </Link>
        </div>
      <div className="flex items-center p-3 w-4/12 py-4">
        <label className=" pr-3 font-semibold">Search</label>
        <input className="p-3 w-52 ring-slate-200 ring-2 rounded-xl outline-none" onChange={(e) => {}} type="text"></input>
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
            <td className="p-3 text-blue-400">{index+1}</td>
            <td className="p-3">{data.building}</td>
            <td className="p-3">{data.mode}</td>
            <td className="p-3">{data.dock_type}</td>
            <td className="p-3">{data.price}</td>
            <td className="p-3 text-red-700">{data.status}</td>
            <td className="flex"> <button
          className="h-7 flex items-center bg-orange-500 text-white p-2 rounded-md text-md mr-5"
          onClick={() => {}}
        >
            <Mail className="mt-1 mr-1" fontSize="sm"/>
         Edit
     
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