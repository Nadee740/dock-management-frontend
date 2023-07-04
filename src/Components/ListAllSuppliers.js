import { Mail } from "@mui/icons-material";

const ListAllSuppliers = ({isEditable}) => {
    const datas=[{
s_no:"1",
name:"40 Footer",
login_id:"ss00012",
vehicle_type:"24 footer",
vehicle_no:"8888",
acra:"123455",
createdon:"09/09/2002"

}]
  return (
    <>
      <div className="flex items-center justify-between w-4/12 p-4">
        <h2 className="text-2xl font-medium">List of Suppliers</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {isEditable&&    <div className="flex items-center justify-between w-4/12 p">
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
          <th className="p-3 text-sm text-slate-500">S. No</th>
          <th className="p-3 text-sm text-slate-500">NAME</th>
          <th className="p-3 text-sm text-slate-500">LOGIN ID</th>
          <th className="p-3 text-sm text-slate-500">VEHICLE TYPE</th>
          <th className="p-3 text-sm text-slate-500">VEHICLE NO</th>
          <th className="p-3 text-sm text-slate-500">ACRA / UN</th>
          <th className="p-3 text-sm text-slate-500">CREATED ON</th>
          {isEditable&&<th className="p-3 text-sm text-slate-500">ACTIONS</th>}
        </tr>
        {datas.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{data._no}</td>
            <td className="p-3">{data.name}</td>
            <td className="p-3">{data.login_id}</td>
            <td className="p-3">{data.vehicle_type}</td>
            <td className="p-3">{data.vehicle_no}</td>
            <td className="p-3">{data.acra}</td>
            <td className="p-3 text-red-700">{data.createdon}</td>
            {isEditable&& <td className="p-3"> <button
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

export default ListAllSuppliers;
