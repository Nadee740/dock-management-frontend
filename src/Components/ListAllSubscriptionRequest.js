import { faEdit, faEye } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ListAllSubscriptionRequest = ({iseditable,requestList}) => {

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-medium">Subscription Request</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable&&    <div className="flex">
        <Link
        to="/admin/Users/addCompanyAdminUsers"
          className=" flex items-center justify-center text-white p-3 ring-slate-200 bg-green-400 ring-2 rounded-xl outline-none"
        >
        <FontAwesomeIcon icon={faPlus} className="mr-1"></FontAwesomeIcon>
         <p>Add Record</p> 
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
          <th className="p-3 text-sm text-slate-500">NAME</th>
          <th className="p-3 text-sm text-slate-500">Email</th>
          <th className="p-3 text-sm text-slate-500">Phone No</th>
          <th className="p-3 text-sm text-slate-500">Company</th>
          <th className="p-3 text-sm text-slate-500">Subscription type</th>
          {iseditable&&<th className="p-3 text-sm text-slate-500">ACTIONS</th>}
        </tr>
        {requestList.map((data, index) => (
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
                <button
                  className="h-7 flex items-center bg-green-500 text-white p-2 rounded-md text-md mr-5"
                  onClick={() => {}}
                >
                 <FontAwesomeIcon icon={faEdit} className="mt-1 mr-1" size="sm"/>
                  Edit
                </button>
              </td>
            )}
           
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllSubscriptionRequest;
