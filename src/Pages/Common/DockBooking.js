import { Mail, Password } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DockBooking = () => {
    const {setLoading}=useContext(UserContext)
    
    const times=["00:00 ","00:30 ","01:00 ","01:30 ","02:00 ","02:30 ","03:00 ","03:30 ","04:00 ","04:30 ","05:00 ","05:30 "]
    const [timeSlots,setTimeSlots]=useState([]);
    const [companyData,setCompanyData]=useState([]);
    const [buildingData,setBuildingData]=useState([]);
    const [vehiclesData,setVehiclesData]=useState([]);
    const [docktypes,setDocktypedata]=useState([]);
    const [dockSData,setDocksData]=useState([]);



    const [po_no,setPo_no]=useState(null);
    const [do_no,setDo_no]=useState(null);
    const [airway_bill_no,setairwayBill_no]=useState(null);
    const [bl_no,setbl_no]=useState(null);
    const [company_id,setcompany_id]=useState(null);
    const [building_id,setBUilding_id]=useState(null)
    const [vehicle_id,setVehicle_id]=useState(null);
    const [vehicleType,setVehicleType]=useState("");
    const [driver_name,setDriver_name]=useState(null);
    const [driver_nrif,setDriver_nrif]=useState(null);
    const [dock_type_id,setDock_type_id]=useState(null);
    const [dock_id,set_dock_id]=useState(null);
    const [date,setDate]=useState('');
    const [bookforMultipleDays,setBookforMultipleDays]=useState(1);
    const [selectedtimeSlots,setSelectedTimeSlots]=useState([])

    const addMinutesToTime=(time, minsAdd)=> {
        function z(n){ return (n<10? '0':'') + n;};
        var bits = time.split(':');
        var mins = bits[0]*60 + +bits[1] + +minsAdd;
        return z(mins%(24*60)/60 | 0) + ':' + z(mins%60);
      }

      useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios
      .get(`${baseUrl}/get-companies`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {

        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setCompanyData(response.data.data);
        } else {
          setCompanyData(null);
          console.log("errr");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
 },[])



     useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios
      .get(`${baseUrl}/get-buildings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setBuildingData(response.data.data);
        } else {
          setBuildingData(null);
          console.log("errr");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
 },[])

 useEffect(()=>{
    setLoading(true);
    const token = localStorage.getItem("EZTOken");
    axios
  .get(`${baseUrl}/get-vehicles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(function (response) {
    console.log("success", response, "response.data");
    if (response.data != "") {
      console.log(response.data);
      setVehiclesData(response.data.data);
    } else {
      setVehiclesData(null);
      console.log("errr");
    }
  })
  .catch(function (error) {
    setLoading(false);
    console.log("FAILED!!! ", error);
  });
},[])

useEffect(()=>{
    setLoading(true);
    const token = localStorage.getItem("EZTOken");
    axios
  .get(`${baseUrl}/get-dock-type`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(function (response) {
    console.log("success", response, "response.data");
    if (response.data != "") {
      console.log(response.data);
      setDocktypedata(response.data.data);
    } else {
      setDocktypedata(null);
      console.log("errr");
    }
  })
  .catch(function (error) {
    setLoading(false);
    console.log("FAILED!!! ", error);
  });
},[])

useEffect(()=>{
    setLoading(true);
    const token = localStorage.getItem("EZTOken");
    axios
  .get(`${baseUrl}/get-docks-by-docktype/${dock_type_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(function (response) {
    console.log("success", response, "response.data");
    if (response.data != "") {
      console.log(response.data);
      setDocksData(response.data.data);
      setLoading(false)
    } else {
      setDocksData(null);
      console.log("errr");
    }
  })
  .catch(function (error) {
    setLoading(false);
    console.log("FAILED!!! ", error);
  });
},[dock_type_id])


  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
        <section class="h-max text-black w-5/6 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
          <div className="flex items-center justify-between  p-4 ">
            <h2 className="text-2xl font-medium">
             <FontAwesomeIcon icon={faEdit}/> Add New Booking
            </h2>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="flex text-black dark:text-gray-200" for="po_no">
                P.O No / W.O No <p className="ml-2 text-red-500">*</p>
                </label>
                <input
                required
                value={po_no}
                onChange={(e)=>{
                    setPo_no(e.target.value)
                }}
                  id="po_no"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
                />
              </div>

              <div>
                <label class="text-blackdark:text-gray-200" for="do_">
                D.o Number
                </label>
                <input
                value={do_no}
                onChange={(e)=>{
                    setDo_no(e.target.value)
                }}
                  id="do_no"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-black dark:text-gray-200" for="airway_bill">
                Airway Bill No
                </label>
                <input
                value={airway_bill_no}
                onChange={(e)=>{
                    setairwayBill_no(e.target.value)
                }}
                  id="airway_bill"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-black dark:text-gray-200" for="bl_no">
                B/L No
                </label>
                <input
                value={bl_no}
                onChange={(e)=>{
                    setbl_no(e.target.value)
                }}
                  id="bl_no"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="flex text-black dark:text-gray-200"
                  for="company"
                >
                  Company (Delivery To) <p className="pl-1 text-red-600">*</p>
                </label>
                <select onChange={(e)=>{
                    setcompany_id(JSON.parse(e.target.value)._id)
                }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option value={-1}>---Choose Company---</option>
                  {
                    companyData.map((c,index)=>{
                      
                      return(
                        <option value={JSON.stringify(c)}>{c.company_name}</option>
                      )
                    })
                  }
                
                </select>
              </div>
              <div>
                <label
                  class="flex text-black dark:text-gray-200"
                  for="building"
                >
                  Building Name<p className="pl-1 text-red-600">*</p>
                </label>
                <select onChange={(e)=>{
                    setBUilding_id(JSON.parse(e.target.value)._id)
                }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option value={-1}>---Choose Building---</option>
                  {buildingData.map((b,index)=>{
                    return ( <option value={JSON.stringify(b)}>{b.building_name}</option>)
                  })}
                 
              
                </select>
              </div>
              <div>
                <label
                  class="flex text-black dark:text-gray-200"
                  for="vehicle"
                >
                  Vehicle Number <p className="pl-1 text-red-600">*</p>
                </label>
                <select onChange={(e)=>{
                    setVehicle_id(JSON.parse(e.target.value)._id)
                    console.log(JSON.parse(e.target.value));
                    setVehicleType(JSON.parse(e.target.value).vehicle_type)
                    setDriver_name(JSON.parse(e.target.value).driver_name)
                    setDriver_nrif(JSON.parse(e.target.value).nric_no)
                }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                   <option value={-1}>--- Choose Vehicle Number ---</option>
                  {vehiclesData.map((v,index)=>{
                   
                   return <option value={JSON.stringify(v)}>{v.vehicle_no}</option>
                  })}
                  
                  
                </select>
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="password">
                  Vehicle Type
                </label>
                <input
                readOnly
                value={vehicleType}
                  id="vehicletype"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="password">
                  Driver Name
                </label>
                <input
                readOnly
                value={driver_name}
                  id="drivername"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="password">
                  Driver NRIC/FIN
                </label>
                <input
                readOnly
                value={driver_nrif}
                  id="password"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-black">
                  Attach Documents
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span class="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1 text-black">or drag and drop</p>
                    </div>
                    <p class="text-xs text-black">a File</p>
                  </div>
                </div>
              </div>

              {/* <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Date</label>
                <input id="date" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div> */}
              {/* <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Text Area</label>
                <textarea id="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div> */}
            </div>
            <div className="m-3 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div class=" grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 px-6 pt-5 pb-6 ">
                <div>
                  <label
                    class="flex text-black dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Dock Type <p className="pl-1 text-red-600">*</p>
                  </label>
                  <select onChange={(e)=>{
                    setDock_type_id(e.target.value)
                  }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>---Dock Type ---</option>
                    {
                        docktypes.map((d,index)=>{
                           return(<option value={d._id}>{d.dock_type}</option>)  
                        })
                    }
                  </select>
                </div>
                <div>
                  <label
                    class="flex text-black dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Select Dock<p className="pl-1 text-red-600">*</p>
                  </label>
                  { <select 
                  disabled={dock_type_id==null ||vehicle_id==null ||company_id==null || building_id==null ||po_no==null ||po_no==''}
                  onChange={(e)=>{
                    set_dock_id(e.target.value)
                  }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>--- Select Dock ---</option>
                    {
                        dockSData.map((d,index)=>{
                            return (<option value={d._id}>{d.dock_number}</option>)
                        })
                    }
                  </select>}
            
                </div>
                <div>
                  <label
                    class="text-black dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Date
                  </label>
                  <input
                  value={date}
                  onChange={(e)=>{
                    setDate(e.target.value)
                  }}
                    id="date"
                    type="date"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label
                    class="flex text-black dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Book for multiple days<p className="pl-1 text-red-600">*</p>
                  </label>
                  <select onChange={(e)=>{
                    console.log(Array.from(Array(parseInt(e.target.value)).keys()))
                    setBookforMultipleDays(e.target.value)
                  }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option value={1} >Single Day</option>
                    {[2,3,4,5,6,7,8].map((data,index)=>{
                        return <option value={data}>{data}&nbsp; Day</option>
                    })
                    }
                
                  </select>
                </div>
              </div>
              {date && dock_type_id && dock_id && <div class="w-2/3 m-1 grid grid-cols-1 gap-2 mt-4 sm:grid-cols-5  ">
                {times.map((element, index) => {
                  
                  return (
                    <div id={index} class="bg-green-400 flex items-center pl-3 rounded-lg">
                      <input
                      onChange={(e)=>{
                             if(e.target.checked){
                                setSelectedTimeSlots([...selectedtimeSlots,element +addMinutesToTime(element,30)])
                                console.log(selectedtimeSlots);
                             }
                             else if(!e.target.checked){
                                setSelectedTimeSlots(selectedtimeSlots.filter(elem=>elem!=element +addMinutesToTime(element,30)))
                             }
                      }}
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class=" h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="vue-checkbox-list"
                        class=" py-2 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {element +addMinutesToTime(element,30) }
                      </label>
                    </div>
                  );
                })}
              </div>}
            
            </div>

               {selectedtimeSlots.length>0 &&<>
                <div className="flex items-center justify-between  p-4 ">
            <h2 className="text-2xl font-medium text-blue-600">
             Booking Summary
            </h2>
          </div>
          
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    NO .
                </th>
                <th scope="col" class="px-6 py-3">
                    PO NUMBER / D O
                </th>
                <th scope="col" class="px-6 py-3">
                    DATE
                </th>
                <th scope="col" class="px-6 py-3">
                    TIME
                </th>
            </tr>
        </thead>
        <tbody>
        {
           
           selectedtimeSlots.
           map((data,index)=>{
          
            return Array.from(Array(parseInt(bookforMultipleDays)).keys()).map((el,ind)=>{
                return <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {(index)*bookforMultipleDays+ind+1}
                </th>
                <td class="px-6 py-4">
                    {po_no}
                </td>
                <td class="px-6 py-4">
                    {date}
                </td>
                <td class="px-6 py-4">
                    {data}
                </td>
            </tr>
           })
        
        })
        }
         
        </tbody>
    </table>
</div>

            <div class="flex mt-5 md:mt-5 lg:mt-5">
            <Link to="/booking-confirm/1">
              <button class="bg-green-400 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Confirm & Proceed to Book
                <FontAwesomeIcon className="ml-2 text-green-500" icon={faCheckCircle}></FontAwesomeIcon>
              </button>
              </Link>
            </div>
               </>}
        
          </form>
        </section>
      </div>
    </div>
  );
};

export default DockBooking;
