import { Add, AddAlarm, Mail } from "@mui/icons-material";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const ListAllSecurity = ({iseditable}) => {
    const datas=[{
s_no:"1",
name:"security",
login_id:"ss000122@gmail.com",
acrana:"124",
building:"8888",
createdon:"12/03/09",

}]
  return (
    <>
      <div className="flex items-center justify-between w-4/12 p-4">
        <h2 className="text-2xl font-medium">List of Security Check</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable&&    <div className="flex items-center justify-between w-4/12 p">
        <Link
          to="/create-security"
          className="p-3 w-36 ring-slate-200 bg-green-400 ring-2 rounded-xl outline-none"
        >
        <Add/>
          Add Record
        </Link>
      </div>}
   
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
          <th className="p-3 text-sm text-slate-500">S. No</th>
          <th className="p-3 text-sm text-slate-500">USER NAME</th>
          <th className="p-3 text-sm text-slate-500">EMAIL ADDRESS</th>
          <th className="p-3 text-sm text-slate-500">ACRA / UN</th>
          <th className="p-3 text-sm text-slate-500">BUILDING</th>
          <th className="p-3 text-sm text-slate-500">CREATED ON</th>
          {iseditable&&<th className="p-3 text-sm text-slate-500">ACTIONS</th>}
        </tr>
        {datas.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{data.s_no}</td>
            <td className="p-3">{data.name}</td>
            <td className="p-3">{data.login_id}</td>
            <td className="p-3">{data.acrana}</td>
            <td className="p-3">{data.building}</td>
            <td className="p-3">{data.createdon}</td>
            {iseditable&& <td className="p-3"> <button
          className=" bg-orange-500 text-white p-2 rounded-lg font-bold text-sm mr-5"
          onClick={() => {}}
        >
            <Mail className="pr-1 pb-1"/>
         Edit
     
        </button>
        
        <button
          className=" bg-green-400 text-white p-2 rounded-lg font-bold text-sm mr-5"
          onClick={() => {}}
        >
            <Mail className="pr-1 pb-0.5"/>
         Open
     
        </button>
        </td>}
           
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllSecurity;
