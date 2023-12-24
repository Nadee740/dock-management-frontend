import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrReader from 'react-qr-scanner';
import {
    faQrcode,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import qrcodeimg from "../../images/qrcode.jpg"
import { UserContext } from "../../Contexts/UserContexts";
import Failed_Popup from "../../Components/Failed_Popup";
import ConfirmModal from "../../Components/ConfirmPopup";
import ConfirWQualityCheckStatusModal from "../../Components/Modals/confirmqualitycheckStatus";
import QRCode from "react-qr-code";

const GetQRBookingDetails = () => {
    const {setLoading,Token}=useContext(UserContext)
    const [readyToScan,setReadytoScan]=useState(false);
    const [open_failed_modal,set_open_failed_modal]=useState(false)

    const [message,set_message]=useState("")
    const [open_confirm,set_open_confirm]=useState(false)
    const [bookingDetails,setBoookingDetails]=useState();

    const handle_close_failed_pop=()=>{
        set_open_failed_modal(false)
    }
    const handleClose=()=>{
        set_open_confirm(false)
    }

    
    const get_booking_details=async(data)=>{
      setLoading(true)
      setReadytoScan(false)
      console.log(data)
      axios.get(`${baseUrl}/dock/get-qr-details?ciphertext=${data}`,{headers: {
        Authorization: `Bearer ${Token}`,
      }}).then((res)=>{

        set_message("Got Booking Details")
        setBoookingDetails(res.data.data)
        console.log(res.data)
        set_open_confirm(true)
    }).catch((err)=>{
        set_open_failed_modal(true)
        console.log(err.response.data)
        set_message(err.response.data.msg)
       
    }).finally(()=>{
        setLoading(false)
    })
    }

   


  return (
    <>
      <div className="w-full admin-dashboard pr-8">
            <div className=" w-full items-center p-3 justify-between">
          <section class=" text-black w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20">
          <div className=" grid grid-cols-1 md:grid-cols-4">
            <div className=" flex items-center justify-center">
            {readyToScan?<QrReader
            delay={100}
            onScan={(res)=>{
                if(res!=null)
                {   
                  
                  get_booking_details(JSON.parse(res.text))
                }
                
            }}
            onError={()=>{
                set_message("Invalid Qr code");
                set_open_failed_modal(true)

            }}
            ></QrReader>:<img src={qrcodeimg} className="pl-18 h-52 w-52"/>}

            </div>
            <div className="md:col-span-3 lg:col-span-3 flew flew-row bg-green ml-5">
                <p className="text-2xl font-semibold heading-class">Booking Information</p>
                <div onClick={()=>{
                    setReadytoScan(!readyToScan)
                }} className="rounded-md pl-8 p-4 w-full bg-black flex mt-4 ">
               <FontAwesomeIcon icon={faQrcode} className="text-white mr-2 mt-1"></FontAwesomeIcon>
               <p className="text-white">{readyToScan?"Close QR CODE scanner":"Click To Scan QR CODE"}</p>
                </div>
            </div>
          </div>
  {    bookingDetails&&    <div id="pdf-content " >
        <div>
      <div className="p-4 grid grid-cols-3 bg-slate-200">
        <p className="font-semibold text-sm">Job Order NO :<br/>{bookingDetails.job_order_no}</p>
        <p className="font-semibold text-sm">Booking Date :<br/>{bookingDetails.booked_date} </p>
        <p className="font-semibold text-sm">Check in / Check out<br/>{bookingDetails.timeslot}</p>
   
      </div>
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <QRCode
    className="w-28"
    viewBox={`0 0 256 256`} value="agha"/>
<div className="grid grid-cols-2 ">
<div className="mt-4"> 
<p className="flex text-xl font-bold"><FontAwesomeIcon className="px-2 py-1" icon={faUser} />Booking Confirmation </p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className=" w-3/4 justify-between flex"><p className="flex px-2 font-bold">Job Order NO : </p><p className="flex px-2 ">{bookingDetails.job_order_no} </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booked On : </p><p className="flex px-2 ">{bookingDetails.booked_date} </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booking Bill No : </p><p className="flex px-2 ">{bookingDetails.bill_no  }</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Check in / Check Out : </p><p className="flex px-2 ">{bookingDetails.timeslot} </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booking Mode : </p><p className="flex px-2 ">Online </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Dock Type / Dock No : </p><p className="flex px-2 ">{bookingDetails.dock_type_id.dock_type}/{bookingDetails.dock_id.dock_number} </p></div>
</div>
<div className="mt-16"> 
<p className="flex text-xl font-bold"><FontAwesomeIcon className="px-2 py-1" icon={faUser} />Vehicle Information</p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Vehicle Number: </p><p className="flex px-2 ">{bookingDetails.vehicle_id.vehicle_no} </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Vehicle Type: </p><p className="flex px-2 ">{bookingDetails.vehicle_id.vehicle_type}</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Driver Name: </p><p className="flex px-2 ">{bookingDetails.vehicle_id.driver_name}</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<p className="flex text-xl font-bold py-4"><FontAwesomeIcon className="px-2 py-1" icon={faTruck} />Delivery Information</p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Company Delivery To: </p><p className="flex px-2 ">{bookingDetails.delivery_company_id.company_name}</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Building Name: </p><p className="flex px-2 ">{bookingDetails.building_id.building_name }</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>

</div>
</div>
</div>
</div>
      </div>}
          </section>
        </div>
        <Failed_Popup
      open={open_failed_modal}
      setOpen={set_open_failed_modal}
      onClose={handle_close_failed_pop}
      message={message}

      />
      <ConfirmModal
        open={open_confirm}
        onClose={handleClose}
        message={message}
      />   
      
      </div>
     
    </>
  );
};

export default GetQRBookingDetails;
