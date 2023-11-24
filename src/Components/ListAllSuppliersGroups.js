import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faPrint, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListAllSupplierGroups = ({suppliergrpData,iseditable }) => {

  return (
    <>
      <div className="flex items-center justify-between w-4/12 p-4">
        <h2 className="text-4xl font-medium heading-class">Supplier Groups</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable && (
       <div className="flex items-center justify-between ml-20 w-38 p">
          
          <Link
            to="/admin/add/supplier/groups"
            className="p-3  w-48  items-center  ring-slate-200 bg-blue-900 ring-2 rounded-xl outline-none"
          >
            <p className="sm:text-md text-white text-center "> Add&nbsp;Groups</p>

          </Link>
        </div>
      )}

<div className="flex  items-center pt-4 w-full sm:max-md:block">
        <input className="  w-2/6 ml-4 mr-6 h-10 ring-slate-200 ring-2 rounded-lg outline-none" placeholder="Search Supplier Group" onChange={(e) => { }} type="text"></input>
   
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
      <div className="flex items-center justify-between w-4/12 py-4">
        <p className="font-semibold">No Of Supplier Groups : {suppliergrpData.length}</p>
    
      </div>
      <table className="w-11/12 relative table-auto">
        <tr className="rounded-xl p-3 bg-primary text-center">
          <th className="p-3 text-sm text-slate-500">S NO</th>
          <th className="p-3 text-sm text-slate-500">GROUP NAME</th>
          <th className="p-3 text-sm text-slate-500">BUILDING NAME</th>
          <th className="p-3 text-sm text-slate-500">ALLOTED TIME</th>
          <th className="p-3 text-sm text-slate-500">DOCK TYPES</th>
          <th className="p-3 text-sm text-slate-500">SINGLE&nbsp;QR&nbsp;MULTI&nbsp;ENTRY</th>
          {true && (
            <th className="p-3 text-sm text-slate-500">ACTIONS</th>
          )}
        </tr>
        {suppliergrpData.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{index+1}</td>
            <td className="p-3">{data.group_name}</td>
            <td className="p-3">{data.building_id.building_name}</td> 
            <td className="p-3">{data.timeAlloted.map((time,index)=>{
                return (<>{time}{(index+1)%5==0?(<br/>):(",")}</>)
            })}</td>
             <td className="p-3">{data.dock_type_id.map((type,index)=>{
                return (<>{type.dock_type}{(index+1)%3==0?(<br/>):(",")}</>)
            })}</td>
            <td className="p-3 text-red-700">{data.multi_entry?"Allowed":"Not Allowed"}</td>
            {true && (
              <td className="p-3 text-red-700 ">
              <div className="flex">
              <Link
                  className="h-7 flex items-center bg-orange-500 text-white p-2 rounded-md text-md mr-5"
                  to={"/admin/edit/supplier/groups/"+data._id}
                >
                  <FontAwesomeIcon icon={faPenToSquare} className="mt-1 mr-1" size="sm"/>
                  Edit
                </Link>
                <button
                  className="h-7 flex items-center bg-red-500 text-white p-2 rounded-md text-md mr-5"
                  onClick={() => {}}
                >
                 <FontAwesomeIcon icon={faTrash} className="mt-1 mr-1" size="sm"/>
                  delete
                </button>
              </div>
                
              </td>
            )}
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllSupplierGroups;
