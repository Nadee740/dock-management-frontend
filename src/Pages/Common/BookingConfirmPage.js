import { useContext, useEffect, useState } from "react";
import ConfirmBooking from "../../Components/ConfirmBookings";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { json, useParams } from "react-router-dom";
import CryptoJS  from "crypto-js";
const BookingConfirmPage=()=>{
    const {setLoading}=useContext(UserContext);
    const [bookingDetails,setBookingDetails]=useState([]);
    const [companyDetails,setCompanyDetails]=useState([]);
    const [dockDetails,setDockDetails]=useState();
    const [building,setBulding]=useState();
    const [vehicleDetails,setVehicleDetails]=useState();
    const [dockTypeDetails,setDockTypeDetails]=useState();
    const [response,setResponse]=useState(null)
    const handleDownloadPdf = async () => {
        try {
            setLoading(true)
      const res = await fetch(`${baseUrl}/test/generate-pdf`);
     const blob = await res.blob();
          setResponse(blob)
    
          // Create a link element and trigger the download
        //   const link = document.createElement('a');
        //   link.href = URL.createObjectURL(blob);
        //   link.download = 'output.pdf';
        //   document.body.appendChild(link);
        //   link.click();
        //   document.body.removeChild(link);
        } catch (error) {
          console.error('Error downloading PDF:', error);
        }
      };
    useEffect(()=>{
        setLoading(true);

        const val=sessionStorage.getItem("bookingdata");
        const v=JSON.parse(val);
        setBookingDetails(v.data);
        setCompanyDetails(v.company);
        setBulding(v.building);
        setVehicleDetails(v.vehicle);
        setDockDetails(v.dock);
        setDockTypeDetails(v.docktype);
        handleDownloadPdf().then(()=>{
            setLoading(false);
        }).catch((err)=>{
            console.log(err)
        });
        
    },[])

    return (
        <>
          <div className="w-full admin-dashboard  overflow-y-scroll">
            <div className="flex flex-row w-full w-full items-center p-3 justify-between">
              <section class=" text-black ml-5 w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-scroll">
               {bookingDetails.length && response&& <ConfirmBooking response={response} bookingDetails={bookingDetails} buildingDetails={building} vehicleDetails={vehicleDetails} companyDetails={companyDetails} dockDetails={dockDetails} dockTypeDetails={dockTypeDetails}/> } 
              </section>
            </div>
          </div>
        </>
      );
}

export default BookingConfirmPage;