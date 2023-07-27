import { Mail } from "@mui/icons-material";

const ListRealTimeStatus = ({iseditable}) => {
    const datas=[{
job_order_no:"1",
booking_mode:"40 Footer",
company:"ss00012",
vehicle_driver:"24 footer",
dock_type:"8888",
booked_time:"123455",
actual_in_out:"09/09/2002",
status:"1"

}]
  return (
    <>
      <div className="flex items-center justify-between w-4/12 p-4">
        <h2 className="text-2xl font-medium">Real Time</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable&&    <div className="flex items-center justify-between w-4/12 p">
        <button
          onChange={(e) => {}}
          className="p-3 w-36 ring-slate-200 bg-green-400 ring-2 rounded-xl outline-none"
        >
        <Mail/>
          Add Dock
        </button>
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
          <th className="p-3 text-sm text-slate-500">Job Order No</th>
          <th className="p-3 text-sm text-slate-500">Booking Mode</th>
          <th className="p-3 text-sm text-slate-500">Company</th>
          <th className="p-3 text-sm text-slate-500">VEHICLE TYPE</th>
          <th className="p-3 text-sm text-slate-500">VEHICLE & Driver</th>
          <th className="p-3 text-sm text-slate-500">Dock Type</th>
          <th className="p-3 text-sm text-slate-500">Booked Time</th>
          <th className="p-3 text-sm text-slate-500">Status</th>
          {iseditable&&<th className="p-3 text-sm text-slate-500">Actual In/Out Time</th>}
        </tr>
        {datas.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{data.job_order_no}</td>
            <td className="p-3">{data.booking_mode}</td>
            <td className="p-3">{data.company}</td>
            <td className="p-3">{data.vehicle_driver}</td>
            <td className="p-3">{data.dock_type}</td>
            <td className="p-3">{data.booked_time}</td>
            <td className="p-3 text-red-700">{data.actual_in_out}</td>
            <td className="p-3 text-red-700">{data.status}</td>
            {iseditable&& <td className="p-3"> <button
          className="h-7 bg-orange-500 text-white p-2 rounded-lg font-bold text-sm mr-5"
          onClick={() => {}}
        >
            <Mail className="pr-1 pb-1"/>
         Edit
     
        </button>
        
        <button
          className="h-7 bg-green-400 text-white p-2 rounded-lg font-bold text-sm mr-5"
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

export default ListRealTimeStatus;
