import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faPrint, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QRCode from "react-qr-code";

const ConfirmBooking=({bookingDetails,buildingDetails,companyDetails, dockDetails,dockTypeDetails})=>{
    return(
        <div id='booking-confirmed-page' >
        <div className="flex items-center justify-between w-4/12 p-4">
        <h2 className="text-2xl font-medium">Booking Confirmed</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
   
   
      <div className="flex text-xl items-center pl-3 w-full py-2">
       <p className="text-md">Your Job Order No : ${bookingDetails[0].data.job_order_no}</p>
      </div>
      <div className="flex items-center pl-3 w-full py-2">
       <p className="text-xl font-bold text-green-400">Success ! Your bookings is confirmed . </p>
      </div>
      <div className="flex items-center pl-3 w-full py-2">
       <p className="text-md">Below booking details email to your registered email address</p>
      </div>
      <div className="flex items-center justify-end mb-5">
      <button
          className="flex bg-green-400 text-white p-2 rounded-lg text-sm mr-5"
          onClick={() => {}}
        >
        <FontAwesomeIcon icon={faCheck } className="m-2"></FontAwesomeIcon>
          <p className="font-bold mt-1 text-md">Next Booking</p>
        </button>
        <button
          className="flex w-28 bg-indigo-800 text-white p-2 rounded-lg text-sm mr-5"
          onClick={() => {
            
          }}
        >
        <FontAwesomeIcon icon={faPrint } className="m-2"></FontAwesomeIcon>
          <p className="font-bold mt-1 text-md">Print</p>
        </button>
      </div>
   <div id="pdf-content">
     {bookingDetails.map((booking,index)=>(
        <div>
      <div className="p-4 grid grid-cols-3 bg-slate-200">
        <p className="font-semibold text-sm">Job Order NO :<br/>{booking.data.job_order_no}</p>
        <p className="font-semibold text-sm">Booking Date :<br/>{booking.data.booked_date} </p>
        <p className="font-semibold text-sm">Check in / Check out<br/>{booking.data.timeslot}</p>
   
      </div>
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <QRCode 
    className="w-28"
    viewBox={`0 0 256 256`} value={booking.ciphertext}/>
<div className="grid grid-cols-2 ">
<div className="mt-4"> 
<p className="flex text-xl font-bold"><FontAwesomeIcon className="px-2 py-1" icon={faUser} />Booking Confirmation </p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className=" w-3/4 justify-between flex"><p className="flex px-2 font-bold">Job Order NO : </p><p className="flex px-2 ">{booking.data.job_order_no} </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booked On : </p><p className="flex px-2 ">{booking.data.booked_date} </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booking Bill No : </p><p className="flex px-2 ">{booking.data.bl_no}  </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Check in / Check Out : </p><p className="flex px-2 ">{booking.data.timeslot} </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Booking Mode : </p><p className="flex px-2 ">Online </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Dock Type / Dock No : </p><p className="flex px-2 ">{dockDetails.dock_number} </p></div>
</div>
<div className="mt-16"> 
<p className="flex text-xl font-bold"><FontAwesomeIcon className="px-2 py-1" icon={faUser} />Vehicle Information</p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Vehicle Number: </p><p className="flex px-2 ">Vechicle NO </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Vehicle Type: </p><p className="flex px-2 ">Vandi </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Driver Name: </p><p className="flex px-2 ">driver name </p></div>
<p className="flex text-xl font-bold py-4"><FontAwesomeIcon className="px-2 py-1" icon={faTruck} />Delivery Information</p>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Company Delivery To: </p><p className="flex px-2 ">{companyDetails.company_name}</p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
<div className="flex w-3/4 justify-between "><p className="flex px-2 font-bold">Building Name: </p><p className="flex px-2 ">{buildingDetails.building_name} </p></div>
<hr class="h-px w-72 my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>

</div>
</div>
</div>
</div>
      ))}
      </div>
   
 </div>
    )

}

export default ConfirmBooking;