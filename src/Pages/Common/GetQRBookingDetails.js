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
    const [open_quality_check_modal,set_state_quality_check_modal]=useState(false)
    const [message,set_message]=useState("")
    const [open_confirm,set_open_confirm]=useState(false)
    const [data,setData]=useState(null)
    
    const handle_close_failed_pop=()=>{
        set_open_failed_modal(false)
    }
    const handleClose=()=>{
        set_open_confirm(false)
    }
    const handleCloseQAcheck=()=>{
        set_state_quality_check_modal(false);
    }
    
    const get_booking_details=async(req,res)=>{
        
    }

    const captureData=()=>{
        setReadytoScan(false)
        set_message("Do you want to accept the quality of the Item Delivered ?")
        set_state_quality_check_modal(true);

    }


  return (
    <>
      <div className="w-full admin-dashboard pr-8">
        <div className="m-2 flex flex-row-reverse">
          <p className="text-1xl text-white">Nadeem (WareHouse)</p>
          <FontAwesomeIcon
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="mt-1 text-white pr-2"
            size="lg"
            icon={faUser}
          ></FontAwesomeIcon>

          <div
            id="userDropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Bonnie Green</div>
              <div class="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>

  
        <div className=" w-full items-center p-3 justify-between">
          <section class=" text-black w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20">
          <div className=" grid grid-cols-1 md:grid-cols-4">
            <div className=" flex items-center justify-center">
            {readyToScan?<QrReader
            delay={100}
            onScan={(res)=>{
                if(res!=null)
                {   setData(JSON.parse(res.text))
                    captureData(JSON.parse(res.text));
                }
                
            }}
            onError={()=>{
                set_message("Invalid Qr code");
                set_open_failed_modal(true)

            }}
            ></QrReader>:<img src={qrcodeimg} className="pl-18 h-52 w-52"/>}

            </div>
            <div className="md:col-span-3 lg:col-span-3 flew flew-row bg-green">
                <p className="text-2xl font-semibold heading-class">Booking Information</p>
                <div onClick={()=>{
                    setReadytoScan(!readyToScan)
                }} className="rounded-md pl-8 p-4 w-full bg-black flex mt-4 ">
               <FontAwesomeIcon icon={faQrcode} className="text-white mr-2 mt-1"></FontAwesomeIcon>
               <p className="text-white">{readyToScan?"Close QR CODE scanner":"Click To Scan QR CODE"}</p>
                </div>
            </div>
          </div>
          <div id="pdf-content">
        <div>
      <div className="p-4 grid grid-cols-3 bg-slate-200">
        <p className="font-semibold text-sm">Job Order NO :<br/>booking.data.job_order_no</p>
        <p className="font-semibold text-sm">Booking Date :<br/>booking.data.booked_date </p>
        <p className="font-semibold text-sm">Check in / Check out<br/>booking.data.timeslot</p>
   
      </div>
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <QRCode
    className="w-28"
    viewBox={`0 0 256 256`} value="agha"/>
<div className="grid grid-cols-2 ">
<div className="mt-4"> 
<p className="flex text-xl font-bold"><FontAwesomeIcon className="px-2 py-1" icon={faUser} />Booking Confirmation </p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className=" w-3/4 justify-between flex"><p className="flex px-2 font-bold">Job Order NO : </p><p className="flex px-2 ">booking.data.job_order_no </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booked On : </p><p className="flex px-2 ">booking.data.booked_date </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booking Bill No : </p><p className="flex px-2 ">booking.data.bill_no  </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Check in / Check Out : </p><p className="flex px-2 ">booking.data.timeslot </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booking Mode : </p><p className="flex px-2 ">Online </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Dock Type / Dock No : </p><p className="flex px-2 ">dockTypeDetails.dock_type/dockDetails.dock_number </p></div>
</div>
<div className="mt-16"> 
<p className="flex text-xl font-bold"><FontAwesomeIcon className="px-2 py-1" icon={faUser} />Vehicle Information</p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Vehicle Number: </p><p className="flex px-2 ">vehicleDetails.vehicle_no </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Vehicle Type: </p><p className="flex px-2 ">vehicleDetails.vehicle_type</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Driver Name: </p><p className="flex px-2 ">vehicleDetails.driver_name</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<p className="flex text-xl font-bold py-4"><FontAwesomeIcon className="px-2 py-1" icon={faTruck} />Delivery Information</p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Company Delivery To: </p><p className="flex px-2 ">companyDetails.company_nam</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Building Name: </p><p className="flex px-2 ">buildingDetails.building_name </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>

</div>
</div>
</div>
</div>
      </div>
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
      <ConfirWQualityCheckStatusModal 
      Token={Token}
      setLoading={setLoading}
       open={open_quality_check_modal}
        onClose={handleCloseQAcheck}
        message={message}
        set_message={set_message}
        data={data}  
        setReadytoScan={setReadytoScan}
        set_open_confirm={set_open_confirm}
        set_open_failed_modal={set_open_failed_modal}
        />
        
      </div>
     
    </>
  );
};

export default GetQRBookingDetails;
