import { useContext, useEffect, useState } from "react";
import ConfirmBooking from "../../Components/ConfirmBookings";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
const BookingConfirmPage=()=>{
    const {setLoading}=useContext(UserContext);
    const [bookingDetails,setBookingDetails]=useState(null);

   
       useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios
      .get(`${baseUrl}/booking/details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {

        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setBookingDetails(response.data);
        } else {
          setBookingDetails(null);
          console.log("errr");
        }
        setLoading(false)
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
    },[])

    return (
        <>
          <div className="w-full admin-dashboard  overflow-y-scroll">
            <div className="flex flex-row w-full w-full items-center p-3 justify-between">
              <section class=" text-black ml-5 w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-scroll">
                <ConfirmBooking bookingDetails={bookingDetails}/>
              </section>
            </div>
          </div>
        </>
      );
}

export default BookingConfirmPage;