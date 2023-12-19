import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";
import { useContext } from "react";

const ListAllBuilding = ({ iseditable,buildingDetails }) => {
  const {accountDetails}=useContext(UserContext)
  const noOfBuildings=accountDetails.subscription_id.remaining_buildings;
  return (
    <>
      <div className="flex items-center justify-between w-4/12 p-4">
        <h2 className="text-4xl font-medium heading-class">List of Buildings</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable && noOfBuildings>0 && (
       <div className="flex items-center justify-between ml-20 w-38 p">
          
          <Link
            to="/building/add"
            className="p-3  w-48  items-center  ring-slate-200 bg-blue-900 ring-2 rounded-xl outline-none"
          >
            <p className="sm:text-md text-white text-center "> Add&nbsp;Building</p>

          </Link>
        </div>
      )}

      
      <div className="flex  items-center pt-4 w-full sm:max-md:block">
        <input className="  w-2/6 ml-4 mr-6 h-10 ring-slate-200 ring-2 rounded-lg outline-none" placeholder="Search Building" onChange={(e) => { }} type="text"></input>
   
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
      <div className="flex items-center justify-between w-4/12 py-4 ml-10">
        <p className="font-semibold">No Of Buildings : {buildingDetails.length}</p>

      </div>
      <table className="w-11/12 relative table-auto">
        <tr className="rounded-xl p-5 bg-primary text-center">
          <th className="p-3 text-sm text-slate-500">S. No</th>
          <th className="p-3 text-sm text-slate-500"> BUILDING NAME</th>
          <th className="p-3 text-sm text-slate-500">BUILDING ADDRESS</th>
          {iseditable && (
            <th className="p-3 text-sm text-slate-500">ACTIONS</th>
          )}
        </tr>
        {buildingDetails.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{index+1}</td>
            <td className="p-3">{data.building_name}</td>
            <td className="p-3">{data.building_address}</td>
            {iseditable && (
              <td className="flex">
               
             <button
                  className="h-7 flex items-center bg-orange-500 text-white p-2 rounded-md text-md mt-3 ml-5 mr-5"
                  onClick={() => {}}
                >
                  <FontAwesomeIcon icon={faPenToSquare} className="mt-1 mr-1" size="sm"/>
                 <Link to={"/edit/building/"+data._id}>Edit</Link>
                </button>
              </td>
            )}
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllBuilding;
