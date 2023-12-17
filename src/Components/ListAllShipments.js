import { faPrint, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const ListAllShipments = ({ iseditable,todayShipments ,name}) => {
  useEffect(()=>{

  },[])
  return (
    <>
      <div className="flex items-center justify-between p-4 ">

        <h2 className="text-3xl  text-black font-medium heading-class">{name}</h2>
       
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
     

      <div className="flex  items-center pt-4 w-full sm:max-md:block">
        <input className="  w-2/6 ml-4 mr-6 h-10 ring-slate-200 ring-2 rounded-lg outline-none" placeholder="Search Shipment" onChange={(e) => { }} type="text"></input>
   
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
      <div className="flex items-center justify-between w-4/12 py-2">
        <p className="font-semibold">No Of Shipments :  {todayShipments.length}</p>
  
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
            <td className="p-3 text-red-700">{data.status=="0"?(  
               <button
               className="h-7 w-24 flex items-center bg-orange-500 text-white p-2 rounded-md  "
               onClick={() => {}}
             >
             <p className="text-sm font-semibold">Not&nbsp;Arrived</p>
             </button>
               ):data.status=="01"?( 
                <button
                className="h-7 w-24 flex items-center bg-green-500 text-white p-2 rounded-md mr-5"
                onClick={() => {}}
              >
              <p className="text-sm flex justify-center w-full font-semibold">Arrived</p>
              </button>
                ):data.status=="10"||data.status=="20"?(
                  <button
                className="h-7 w-24 flex items-center bg-yellow-300 text-white p-2 rounded-md mr-5"
                onClick={() => {}}
              >
              <p className="text-sm flex justify-center w-full font-semibold">Late</p>
              </button>
                ):data.status=="03"?(
                  <button
                className="h-10 w-24 flex items-center bg-green-500 text-white p-2 rounded-md mr-5"
                onClick={() => {}}
              >
              <p className="text-sm flex justify-center w-full font-semibold">WareHouse Cleared</p>
              </button>
                ):data.status=="06"?(<button
                  className="h-15 w-24 flex items-center bg-orange-400 text-white p-2 rounded-md mr-5"
                  onClick={() => {}}
                >
                <p className="text-sm flex justify-center w-full font-semibold">W/H Cleared & Waiting</p>
                </button>):data.status=="04"?(<button
                className="h-9 w-24 flex items-center  bg-green-500 text-white p-2 rounded-md mr-5"
                onClick={() => {}}
              >
              <p className="text-sm flex justify-center  w-full font-semibold">Quality Checked</p>
              </button>):data.status=="30"?(<button
                className="h-14 w-24 flex items-center bg-red-500 text-white p-2 rounded-md mr-5"
                onClick={() => {}}
              >
              <p className="text-sm flex justify-center  w-full font-semibold">Quality Check Failed</p>
              </button>):data.status=="05"?(<button
                className="h-7 w-24 flex items-center bg-green-700 text-white p-2 rounded-md mr-5"
                onClick={() => {}}
              >
              <p className="text-sm flex justify-center w-full font-semibold">Unloaded</p>
              </button>):(<button
                className="h-7 w-24 flex items-center bg-blue-500 text-white p-2 rounded-md mr-5"
                onClick={() => {}}
              >
              <p className="text-sm flex justify-center w-full font-semibold">W/H Exit</p>
              </button>)}</td>
            {true && (
              <td className="flex">
                {/* <button
                  className="h-7 flex items-center bg-orange-500 text-white p-2 rounded-md text-md mr-5"
                  onClick={() => {}}
                >
                  <FontAwesomeIcon icon={faPenToSquare} className="mt-1 mr-1" size="sm"/>
                  Edit
                </button> */}
                <button
                  className="h-7 w-24 flex justify-center items-center bg-red-500 text-white p-2 rounded-md mr-5 mt-3"
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
