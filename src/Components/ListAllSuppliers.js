import { faEdit, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faAdd, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Add, AddAlarm, Mail } from "@mui/icons-material";
import { Button } from "bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import removeDuplicates from "../utils/RemoveDuplicates";

const ListAllSuppliers = ({suppliersData,iseditable}) => {
    console.log(suppliersData)
    const [modal,setModal]=useState(null)
    const [selectedsuppliers,setSelectedsuppliers]=useState([]);

    const backdropClickHandler = (event) => {
        if (event.target === event.currentTarget) {
            setModal(null)
        }
      }
    const RenderModal=(selectedsupplierslist)=>{
        setModal(
            <div onClick={backdropClickHandler} className=" ml-8  bg-slate-500/[.8] z-[999] fixed left-50 inset-0 flex justify-center items-center">
              <div className='flex flex-col bg-white rounded-2xl w-8/12 h-3/4 pt-3 relative '>
     
                <div
                    className='absolute top-1 right-1 cursor-pointer text-red-500 cursor-pointer rounded-full hover:text-red-700'
                    onClick={()=>{
                      setModal(null)
                    }}
                    >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                      </div>
                      <h1 className='text-center font-bold text-black mb-2'>May 2022 - Messouts</h1>
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                     
                     <div className="h-60   overflow-y-scroll ">
                     <table className=' '>
                     <tr className='rounded-xl bg-primary text-center'>
                       <input type="text" className="m-4 rounded-sm w-full" placeholder="Search Supplier" ></input>
                       {/* <th className='p-3'>To Date</th>
                       <th className='p-3'>Number of Days</th> */}
                     </tr>
                     {suppliersData.map((user, index)=>(
                       <tr 
                       onClick={()=>{
                        setSelectedsuppliers([...selectedsuppliers,index])
                   
                        RenderModal([...selectedsupplierslist,index])

                       }}
                         className={'border-b text-center border-slate-200 border-solid hover:bg-gray-300'}
                       >
                         <td className='p-3'>{"supplier "+index+1}</td>
                 
                       </tr>
                     ))}
                 </table>
                     </div>
                    
                     <div className="h-60   overflow-y-scroll ">
                     <table className=' '>
                     <tr className='rounded-xl bg-primary text-center'>
                       <input type="text" className="m-4 rounded-sm w-full" placeholder="Search Supplier" ></input>
                       {/* <th className='p-3'>To Date</th>
                       <th className='p-3'>Number of Days</th> */}
                     </tr>
                     { removeDuplicates(selectedsupplierslist).map((user, index)=>(
                       <tr 
                       onClick={()=>{
                        setSelectedsuppliers(selectedsupplierslist.filter((item,index) => item!=user))
                        RenderModal(selectedsupplierslist.filter((item,index) => item!=user))
                       }}
                         className={'border-b text-center border-slate-200 border-solid hover:bg-gray-300'}
                       >
                         <td className='p-3'>{"supplier "+user+1}</td>
                 
                       </tr>
                     ))}
                 </table>
                     </div>
                     <div className="flex">
                     <select
            onChange={(e)=>{
               
            }}
              id="Vechicletype"
              class="block w-3/4 h-16 md:2/5 lg:2/5 px-4 py-2 m-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Select Group ---</option>
              {/* {
                companies.map((c,index)=>{
                    return <option value={c._id}>{c.company_name}</option>
                })
              } */}
              
           
            </select>
                     </div>
              
                      </div>
     
                      <div className="flex font-bold mt-6 ml-6"><p>
                         Total Amount :100
                      </p></div>
                     
                      
                      
                  </div>
              </div>
          )
     
      }

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-medium">List of Suppliers</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable&&    <div className="flex items-center">
        <button
        onClick={(e)=>{
        RenderModal(selectedsuppliers)
        }}
          className="p-3 mr-4  ring-slate-200 bg-green-400 ring-2 rounded-xl outline-none"
        ><FontAwesomeIcon className="mr-2" icon={faEdit}/>
          Assign Group
        </button>
        <Link
          to="/create-supplier"
          className="p-3 ring-slate-200 bg-green-400 ring-2 rounded-xl outline-none"
        >
        <FontAwesomeIcon className="mr-2" icon={faAdd}/>
          Add Supplier
        </Link>
      </div>}
      {modal &&modal}
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
          {iseditable&&<th className="p-3 text-sm text-slate-500">ACTIONS</th>}
        </tr>
        {suppliersData.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
            <td className="p-3 text-blue-400">{index+1}</td>
            <td className="p-3">{"supplier" +index+1}</td>
            <td className="p-3">{data[0].supplier_reg_no}</td>
            <td className="p-3">data.vehicle_type</td>
            <td className="p-3">data.vehicle_no</td>
            <td className="p-3">{data[0].group}</td>
            <td className="p-3 text-red-700">{'18-09-2002'}</td>
            {iseditable&&  <td className="flex">
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
              </td>}
           
          </tr>
        ))}
      </table>
    </>
  );
};

export default ListAllSuppliers;
