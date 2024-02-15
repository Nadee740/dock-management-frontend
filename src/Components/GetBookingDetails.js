import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faCheck, faPrint, faSearch, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";
import { baseUrl } from "../utils/baseurl";
import axios from "axios";


function dateFormater(inputDate) {
  const date = new Date(inputDate);
  let month = (date.getMonth() + 1).toString();
  let year = date.getFullYear();
  let day = date.getDate().toString();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}

const GetBookingPDF=()=>{

    const [buildingData, setBuildingData] = useState([]);
    const [docksData,setDocksData]=useState([]);
    const { setLoading, Token, user } = useContext(UserContext);
    const [building_id, setBUilding_id] = useState(null);
    const [bookingDetails,setBookingDetails]=useState([]);
    const [date, setDate] = useState("");
    const [building_name, setBuildingName] = useState(null);
    const [dock_id, set_dock_id] = useState(-1);
    const [dock_name, setDockName] = useState(null);
    const [response,setResponse]=useState(null)


    useEffect(()=>{
        setLoading(true);
        axios
          .get(`${baseUrl}/get-buildings`, {
            headers: {
              Authorization: `Bearer ${Token}`,
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
            setLoading(false);
          })
          .catch(function (error) {
            setLoading(false);
            console.log("FAILED!!! ", error);
          });
    },[])

    useEffect(() => {
      
      
      if(date!=""&&building_id!=null){
          setLoading(true);
          const today = dateFormater (date);
          axios
          .get(`${baseUrl}/dock/available/building?date=${today}&&days=${1}&&building_id=${
            building_id
          }`, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          })
          .then(function (response) {
            console.log("success", response, "response.data");
            if (response.data != "") {
              console.log(response.data);
              
              setDocksData(response.data.data);
              
            } else {
              setDocksData(null);
              console.log("errr");
            }
            
        set_dock_id=-1
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }
      

    }, [date,building_id]);


    const handleSubmit=async()=>{

        try {
            
            setLoading(true);
            axios
            .get(`${baseUrl}/dock/get-booking-details?building_id=${building_id}&&date=${date}&&dock_id=${dock_id}`, {
              headers: {
                Authorization: `Bearer ${Token}`,
              },
            })
            .then(function(res){
                setBookingDetails(res.data.data);
                console.log(res.data);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
                console.log("FAILED!!! ", error);
              });

        } catch (e) {
            console.log(e)
        }
    }

   
    const generatePDF=async(booking)=>{

        try{
          
          setLoading(true)
            let pdf_name=booking.job_order_no+booking.createdAt.substring(0,10).split('-').reverse().join('-'); ;
            console.log(pdf_name)
          const res=await fetch(`${baseUrl}/pdf/get-pdf?name=${pdf_name}`)
        console.log(res);
        if(res!=null){
           const blob = await res.blob();
              setResponse(blob)
              
              const link = document.createElement('a');
              console.log(link);
              link.href = URL.createObjectURL(response);
              link.download = pdf_name+'.pdf'
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);

        }

        }catch(err){
            console.log(err)
        }
        finally{
          setLoading(false);
        }
    }

    return(
        <div id='booking-confirmed-page'>
        <div className="flex items-center justify-between w-4/12 p-4">
        <h2 className="text-3xl font-medium heading-class">Booking Details</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
   
      <div className="md:grid md:grid-cols-4 ">
      <div className="sm:w-4/5 md:col-span-1">
                    <label
                      class="flex text-black dark:text-gray-200"
                      for="building"
                    >
                      Building Name
                    </label>
                    <select
                      required
                      onChange={(e) => {
                        setBUilding_id(JSON.parse(e.target.value)._id);
                        setBuildingName(JSON.parse(e.target.value));
                      }}
                      class="block w-4/5 mr-2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    >
                      {building_id ? (
                        <></>
                      ) : (
                        <option value={-1}>---Choose Building---</option>
                      )}
                      {buildingData.map((b, index) => {
                        return (
                          <option value={JSON.stringify(b)}>
                            {b.building_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="sm:w-4/5  md:col-span-1">
                      <label
                        class="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Date
                      </label>
                      <input
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                 
                        }}
                        id="date"
                        type="date"
                     
                        class="block w-4/5 mr-2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    { <div className="sm:w-4/5  md:col-span-1">
                      <label
                        class="flex text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Select Dock
                      </label>
                      {
                        <select
                          required
                         disabled={
                            date===null||
                            building_id===null
                         }
                
                          onChange={(e) => {
                            set_dock_id(JSON.parse(e.target.value).dock._id);
                            setDockName(JSON.parse(e.target.value));
                 
                          }}
                          class="block w-4/5 mr-2 px-4 py-2 mt-2 text-black border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        >
                          {dock_id == -1 ? (
                            <option value={-1}>--- Select Dock ---</option>
                          ) : (
                            <></>
                          )}
                          {docksData.map((d, index) => {
                            return (
                              <option value={JSON.stringify(d)}>
                                {d.dock.dock_number}
                              </option>
                            );
                          })}
                        </select>
                      }
                    </div> }
                    <div className="flex justify-start pr-6  md:col-span-1">
                  <button
                      type="submit"
                      onClick={(e)=>{
                        e.preventDefault();
                        handleSubmit();
                      }}
                      className="flex justify-start mr-4 h-1/2 mt-8  w-36 border-2 border-blue-500 rounded  text-blue-600 px-2 py-1 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-slate-200 focus:outline-none focus:bg-gray-600"
                    >
                    
                      <FontAwesomeIcon
                        className=" text-blue-600 m-1 mt-2"
                        icon={faSearch}
                      ></FontAwesomeIcon>
                      <p className="m-1 text-blue-600">Search</p>
                    </button>

                  </div>
                  </div>
                  <hr class="h-px full my-7 bg-gray-200 border-0 dark:bg-gray-700"></hr>

 { bookingDetails&&  <div id="pdf-content ">
     {bookingDetails.map((booking,index)=>(
        <div>
      <div className="p-4 grid grid-cols-4 bg-slate-200">
        <p className="font-semibold text-sm">Job Order NO :<br/>{booking.job_order_no}</p>
        <p className="font-semibold text-sm">Booking Date :<br/>{booking.booked_date} </p>
        <p className="font-semibold text-sm">Check in / Check out<br/>{booking.timeslot}</p>
        <button
          className="flex w-28 bg-indigo-800 text-white p-2 rounded-lg text-sm mr-5"
          onClick={() => generatePDF(booking)}
        >
        <FontAwesomeIcon icon={faPrint } className="m-2"></FontAwesomeIcon>
          <p className="font-bold mt-1 text-md">Print</p>
        </button>
   
      </div>
    <div >
    {/* <QRCode 
    className="w-28"
    viewBox={`0 0 256 256`} value={booking.ciphertext}/> */}
<div className="grid grid-cols-2 ">
<div className="mt-4"> 
<p className="flex text-xl font-bold"><FontAwesomeIcon className="px-2 py-1" icon={faUser} />Booking Confirmation </p>
<hr class="h-px w-full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className=" w-3/4 justify-between flex"><p className="flex px-2 font-bold">Job Order NO : </p><p className="flex px-2 ">{booking.job_order_no} </p></div>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booked On : </p><p className="flex px-2 ">{booking.booked_date} </p></div>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booking Bill No : </p><p className="flex px-2 ">{booking.bill_no}  </p></div>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Check in / Check Out : </p><p className="flex px-2 ">{booking.timeslot} </p></div>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booking Mode : </p><p className="flex px-2 ">Online </p></div>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between"><p className="flex px-2 font-bold">Dock Type / Dock No : </p><p className="flex px-2 ">{booking.dock_type_id.dock_type}/{booking.dock_id.dock_number} </p></div>
</div>
<div className="mt-4"> 
<p className="flex text-xl font-bold"><FontAwesomeIcon className="px-2 py-1" icon={faUser} />Vehicle Information</p>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Vehicle Number: </p><p className="flex px-2 ">{booking.vehicle_id.vehicle_no} </p></div>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Vehicle Type: </p><p className="flex px-2 ">{booking.vehicle_id.vehicle_type}</p></div>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Driver Name: </p><p className="flex px-2 ">{booking.vehicle_id.driver_name}</p></div>
<hr class="h-px full my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<p className="flex text-xl font-bold "><FontAwesomeIcon className="px-2 py-1" icon={faTruck} />Delivery Information</p>
<hr class="h-px full my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Company Delivery To: </p><p className="flex px-2 ">{booking.delivery_company_id.company_name}</p></div>
<hr class="h-px full my-7 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Building Name: </p><p className="flex px-2 ">{booking.building_id.building_name} </p></div>


</div>
</div>
</div>
<hr class="h-px my-8 bg-blue-200 border-0 dark:bg-gray-700"></hr>
</div>
      ))}
      </div>}
   
 </div>
    )

}

export default GetBookingPDF;