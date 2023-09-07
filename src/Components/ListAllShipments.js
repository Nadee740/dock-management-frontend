import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPrint, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ListAllShipments = ({ iseditable,todayShipments }) => {
    console.log(todayShipments)
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-medium">Upcoming Shipments</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable && (
        <div className="flex items-center justify-between ">
          <Link
          to="/add-vehicle"
            className="flex p-3 max-w-42 ring-slate-200 bg-green-400 ring-2 rounded-xl outline-none"
          >

           <p className="text-white text-sm font-bold flex">Add Vehicles</p> 
          </Link>
        </div>
      )}

      <div className="flex items-center p-3 w-4/12 py-4">
        <label className=" pr-3 font-semibold">Search</label>
        <input
          className="p-3 w-52 ring-slate-200 ring-2 rounded-xl outline-none"
          onChange={(e) => {}}
          type="text"
        ></input>
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
          <th className="p-3 text-sm text-slate-500">JOB ORDER NO</th>
          <th className="p-3 text-sm text-slate-500">SUPPLIER NAME</th>
          <th className="p-3 text-sm text-slate-500">VEHICLE NO</th>
          <th className="p-3 text-sm text-slate-500">DOCK</th>
          <th className="p-3 text-sm text-slate-500">ALLOTED DATE</th>
          <th className="p-3 text-sm text-slate-500">ALLOTED TIME</th>
          <th className="p-3 text-sm text-slate-500">STATUS</th>
          {true && (
            <th className="p-3 text-sm text-slate-500">Actions</th>
          )}
        </tr>
        {todayShipments.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{data.job_order_no}</td>
            <td className="p-3">{data.user_id.name}</td>
            <td className="p-3">{data.vehicle_id.vehicle_no}</td>
            <td className="p-3">{data.dock_id.dock_number}</td>
            <td className="p-3">{data.booked_date}</td>
            <td className="p-3 text-red-700">{data.timeslot}</td>
            <td className="p-3 text-red-700">{data.status!="0"?(  
                <button
                  className="h-7 w-24 flex items-center bg-green-500 text-white p-2 rounded-md mr-5"
                  onClick={() => {}}
                >
                <p className="text-sm flex justify-center w-full font-semibold">Arrived</p>
                </button>):( 
                 <button
                  className="h-7 w-24 flex items-center bg-orange-500 text-white p-2 rounded-md  "
                  onClick={() => {}}
                >
                <p className="text-sm font-semibold">Not&nbsp;Arrived</p>
                </button>)}</td>
            {true && (
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
                  Print
                </button>
              </td>
            )}
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllShipments;
