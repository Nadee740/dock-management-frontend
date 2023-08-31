import { useContext, useEffect, useState } from "react";
import ConfirmBooking from "../../Components/ConfirmBookings";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { json, useParams } from "react-router-dom";
import CryptoJS  from "crypto-js";
const BookingConfirmPage=()=>{

    function decrypt(data, key) {
        let decData = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
        return CryptoJS.AES.decrypt(decData, key).toString(CryptoJS.enc.Utf8);
      }

    const { id } = useParams()
  

    const {setLoading}=useContext(UserContext);
    const [bookingDetails,setBookingDetails]=useState([]);
    const [companyDetails,setCompanyDetails]=useState([]);
    const [dockDetails,setDockDetails]=useState();
    const [building,setBulding]=useState();
    const [dockTypeDetails,setDockTypeDetails]=useState();
 
   
       useEffect(()=>{
        setLoading(true);
        const val=sessionStorage.getItem("bookingdata");
        const v=JSON.parse(val);
        console.log(v);
        setBookingDetails(v.data);
        setCompanyDetails(v.company);
        setBulding(v.building);
        setDockDetails(v.dock);
        setDockTypeDetails(v.docktype);
        setLoading(false);
    },[])

    return (
        <>
          <div className="w-full admin-dashboard  overflow-y-scroll">
            <div className="flex flex-row w-full w-full items-center p-3 justify-between">
              <section class=" text-black ml-5 w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-scroll">
               {bookingDetails.length && <ConfirmBooking bookingDetails={bookingDetails} buildingDetails={building} companyDetails={companyDetails} dockDetails={dockDetails} dockTypeDetails={dockTypeDetails}/> } 
              </section>
            </div>
          </div>
        </>
      );
}

export default BookingConfirmPage;