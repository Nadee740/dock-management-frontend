import { Email, Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faTruckRampBox, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import ConfirmDialog from "../../Components/ConfirmDialog";
import { useState } from "react";


const SupplierDashBoard = () => {
   
    return ( 
        <>
      
        <div className='w-full admin-dashboard'>
        <div className="m-2 flex flex-row-reverse">
        <p className="text-1xl text-white">
        Nadeem
        </p>
        <FontAwesomeIcon id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"  className="mt-1 text-white pr-2" size="lg" icon={faUser}></FontAwesomeIcon>
{/*         
<FontAwesomeIcon icon={faUser} size="sm" id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="mt-1.5 rounded-full cursor-pointer"/> */}

<div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>

        </div>
        <div className='flex flex-row w-full w-full items-center pl-3 pt-1 justify-between'>
       
        <div class="mt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="">
  <Link to='/dock-booking' class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className="w-1/2"> <h5 class="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">New Dock Booking</h5></div>
   <div className=" flex justify-end w-1/2"><FontAwesomeIcon icon={faTruckRampBox} size="2xl" style={{color: "#7cf21c",}} /></div>

</Link>
</div>
  <div class="">
  <Link to='/vehicle' class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className="w-1/2"> <h5 class="mb-2 text-2xl  font-bold  tracking-tight text-gray-900 dark:text-white">Manage Vehicles</h5></div>
    <div className=" flex justify-end w-1/2"><FontAwesomeIcon icon={faTruck} size="2xl" style={{color: "#005eff",}} /></div>

</Link>
</div>
  <div class="b">
  <Link to='/supplier' class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className="w-1/2"> <h5 class="mb-2 text-2xl  font-bold   tracking-tight text-gray-900 dark:text-white">Manage Supplier</h5></div>
   <div className=" flex justify-end w-1/2"><FontAwesomeIcon icon={faUserGroup} size="2xl" style={{color: "#e85211",}} /></div>

</Link>
</div>

</div>


        </div>
        <div className="mb-20  md:m-20 lg:m-20 w-full md:w-5/6 lg:w-5/6 h-2/5 border-2 flex justify-center items-center bg-neutral-200 border-slate-200">
        <p className="1-xl text-slate-400">Content / Advertisement Comes Here</p></div>
        </div> 
       
        </>
        
);
}
 
export default SupplierDashBoard;