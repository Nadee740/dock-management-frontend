import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Add, AddAlarm, Mail } from "@mui/icons-material";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const ListAllSecurity = ({iseditable,securityData}) => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-medium">List of Security Check</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable&&    <div className="flex items-center justify-between w-4/12 p">
        <Link
          to="/create-security"
          className="p-3 w-36 ring-slate-200 bg-green-400 ring-2 rounded-xl outline-none"
        >
        <Add/>
          Add Security
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
        {securityData.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{index+1}</td>
            <td className="p-3">{data.security_id.name}</td>
            <td className="p-3">{data.security_id.email1}</td>
            <td className="p-3">{data.security_id.acra_no}</td>
            <td className="p-3">{data.building.building_name}</td>
            <td className="p-3">{'10-10-2020'}</td>
            {iseditable&& (
              <td className="flex">
                <button
                  className="h-7 flex items-center bg-orange-500 text-white p-2 rounded-md text-md mr-5"
                  onClick={() => {}}
                >
                  <FontAwesomeIcon icon={faPenToSquare} className="mt-1 mr-1" size="sm"/>
                  Edit
                </button>
                <button
                  className="h-7 flex items-center bg-red-500 text-white p-2 rounded-md text-md mr-5"
                  onClick={() => {}}
                >
                 <FontAwesomeIcon icon={faPrint} className="mt-1 mr-1" size="sm"/>
                  Open
                </button>
              </td>
            )}
           
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllSecurity;
