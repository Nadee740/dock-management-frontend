import { faEdit, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faAdd, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Add, AddAlarm, Mail } from "@mui/icons-material";
import { Button } from "bootstrap";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import removeDuplicates from "../utils/RemoveDuplicates";
import { UserContext } from "../Contexts/UserContexts";
import { baseUrl } from "../utils/baseurl";
import axios from "axios";

const ListAllSuppliers = ({ suppliersData, iseditable, suppliergroupData }) => {
  const { accountDetails } = useContext(UserContext)
  const noOfSupplier = accountDetails.subscription_id.remaining_supplier;
  // const [selectedGroup, setSelectedGroup] = useState(null)
  const [modal, setModal] = useState(null)
  const [selectedsuppliers, setSelectedsuppliers] = useState([]);
  const {setLoading}=useContext(UserContext)
  const backdropClickHandler = (event) => {
    if (event.target === event.currentTarget) {
      setModal(null)
    }
  }
 
  const assigngroup=(values,grp_id)=>{
  
    if(grp_id==null||grp_id==-1){
      alert('Assign supplier group')
    }
    else if(values.length>0){
      setLoading(true);
      const data={
        suppliers:values,
        group_id:grp_id._id
      }
      const token=localStorage.getItem("EZTOken");
      axios.post(`${baseUrl}/assign-groups`,data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function(response){
        if(response.data.status=="ok"){
          alert("success")
          setSelectedsuppliers([])
          // setSelectedGroup(-1)
          setLoading(false)
          RenderModal(selectedsuppliers,-1)
        }
        else{
          alert('failed')
          setLoading(false)
        }
      })
      .catch(function(err){
        console.log(err)
        setLoading(false)
      })
      ;
    }
    else{
      alert("add supplier")
    }
    
   
  }
  const RenderModal = (selectedsupplierslist,assigned_group) => {
  
    setModal(
      <div onClick={backdropClickHandler} className="   bg-slate-500/[.8] z-[999] fixed left-50 inset-0 flex justify-center items-center">
        <div className='flex flex-col bg-white rounded-2xl w-8/12 h-3/4 pt-3 relative '>

          <div
            className='absolute top-1 right-1 cursor-pointer text-red-500 cursor-pointer rounded-full hover:text-red-700'
            onClick={() => {
              setModal(null)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className='text-center font-bold text-black mb-2'>Assign Supplier Groups</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3">

            <div className="h-60   overflow-y-scroll ">
              <table className=' '>
                <tr className='rounded-xl bg-primary text-center'>
                  <input type="text" className="m-4 rounded-sm w-full" placeholder="Search Supplier" ></input>
                  {/* <th className='p-3'>To Date</th>
                       <th className='p-3'>Number of Days</th> */}
                </tr>
                {suppliersData.map((user, index) => (
                  <tr
                    onClick={() => {
                      
                      setSelectedsuppliers([...selectedsuppliers, user])

                      RenderModal([...selectedsupplierslist, user],assigned_group)

                    }}
                    className={'border-b text-center border-slate-200 border-solid hover:bg-gray-300'}
                  >
                    <td className='p-3'>{user.supplier_id.name}</td>

                  </tr>
                ))}
              </table>
            </div>

            <div className="h-60  ml-3 overflow-y-scroll ">
              <table className=' '>
                <tr className='rounded-xl bg-primary text-center'>
                  <input type="text" className="m-4 rounded-sm w-full" placeholder="Search Supplier" ></input>
                  {/* <th className='p-3'>To Date</th>
                       <th className='p-3'>Number of Days</th> */}
                </tr>
                {removeDuplicates(selectedsupplierslist).map((user, index) => (
                  <tr
                    onClick={() => {
                    
                      setSelectedsuppliers(selectedsupplierslist.filter((item, index) => item != user))
                      RenderModal(selectedsupplierslist.filter((item, index) => item != user),assigned_group)
                   
                    }}
                    className={'border-b text-center border-slate-200 border-solid hover:bg-gray-300'}
                  >
                    <td className='p-3'>{user.supplier_id.name}</td>

                  </tr>
                ))}
              </table>
            </div>
            <div className="flex ml-6 mt-1">
              <select

                onChange={(e) => {
                  assigned_group=JSON.parse(e.target.value)
                  // setSelectedGroup(JSON.parse(e.target.value))
                }}
                
                
                id="suppliergroup"
                class="block w-3/4 h-12 md:2/5 lg:2/5 px-4 py-2 m-2  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value={-1}>---Select Group ---</option>
                {
                  suppliergroupData.map((c, index) => {
                    return <>
                    {assigned_group==(JSON.stringify(c))?<option selected value={JSON.stringify(c)}>{c.group_name}</option>:<option value={JSON.stringify(c)}>{c.group_name}</option>}
                  
                    </>
                    })
                }


              </select>
            </div>

          </div> <div
            className="rounded-md text-white py-2 ml-8 px-2 w-2/6 md:w-1/6 lg:w-1/6 bg-indigo-500"
          >
            <button
            onClick={()=>{
             
              assigngroup(selectedsupplierslist,assigned_group)
        
            }}
            className=" w-full h-full hover:bg-blue-400"
          >
            Submit
          </button>
          </div>
         

        </div>
      </div>
    )

  }

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-4xl font-medium heading-class">List of Suppliers</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      {iseditable && noOfSupplier > 0 && <div className="flex items-center">
        <button
          onClick={() => {
            RenderModal(selectedsuppliers,null)
          }}
          className="p-3 mr-4  ml-20 w-48 ring-slate-200 bg-green-700 text-white ring-2 rounded-xl outline-none"
        ><FontAwesomeIcon className="mr-2" icon={faEdit} />
          Assign Group
        </button>
        <Link
          to="/admin/users/add/supplier"
          className="p-3 ring-slate-200 w-48 text-center bg-blue-900 text-white ring-2 rounded-xl outline-none"
        >
          <FontAwesomeIcon className="mr-2" icon={faAdd} />
          Add Supplier
        </Link>
      </div>}
      {modal && modal}
     
      <div className="flex items-center p-3 w-9/12 py-2">
        <input className="  w-4/6 ml-2 ring-slate-200 ring-2 rounded-lg outline-none" placeholder="Search Supplier" onChange={(e) => { }} type="text"></input>
      </div>
      <div className="flex items-center justify-end mb-5">
        <button
          className="w-28 bg-stone-800 text-white p-2 rounded-lg text-sm mr-5"
          onClick={() => { }}
        >
          Copy
        </button>
        <button
          className="w-28 bg-stone-800 text-white p-2 rounded-lg text-sm mr-5"
          onClick={() => { }}
        >
          Excel
        </button>
      </div>
      <div className="flex items-center justify-between w-4/12 py-4">
        <p className="font-semibold">No Of Suppliers : {suppliersData.length}</p>
    
      </div>
      <table className="w-11/12 relative table-auto">
        <tr className="rounded-xl p-3 bg-primary text-center">
          <th className="p-3 text-sm text-slate-500">S. No</th>
          <th className="p-3 text-sm text-slate-500">NAME</th>
          <th className="p-3 text-sm text-slate-500">LOGIN ID</th>
          <th className="p-3 text-sm text-slate-500">COMPANY</th>
          <th className="p-3 text-sm text-slate-500">ROLE</th>
          <th className="p-3 text-sm text-slate-500">SUPPLIER GROUP</th>
          <th className="p-3 text-sm text-slate-500">ACRA / UN</th>
          <th className="p-3 text-sm text-slate-500">CREATED ON</th>
          {iseditable && <th className="p-3 text-sm text-slate-500">ACTIONS</th>}
        </tr>
        {suppliersData.map((data, index) => (
          <tr
            key={index}
            className={
              "border-b text-center border-slate-200 border-solid hover:bg-gray-300"
            }
          >
       
            <td className="p-3 text-blue-400">{index + 1}</td>
            <td className="p-3">{data.supplier_id.name}</td>
            <td className="p-3">{data.supplier_id.email1}</td>
            <td className="p-3">{data.company_id.company_name}</td>
            <td className="p-3">{data.role}</td>
            <td className="p-3">{data.group_id.group_name}</td>
            <td className="p-3">{data.supplier_id.acra_no}</td>
            <td className="p-3 text-red-700">{'18-09-2002'}</td>
            {iseditable && <td className="flex">
              <button
                className="h-7 flex items-center bg-orange-500 text-white p-2 rounded-md text-md mr-5"
                onClick={() => { }}
              >
                <FontAwesomeIcon icon={faPenToSquare} className="mt-1 mr-1" size="sm" />
                <Link to={"/admin/edit/supplier/" + data._id}>Edit</Link>
              </button>
              <button
                className="h-7 flex items-center bg-red-500 text-white p-2 rounded-md text-md mr-5"
                onClick={() => { }}
              >
                <FontAwesomeIcon icon={faPrint} className="mt-1 mr-1" size="sm" />
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
