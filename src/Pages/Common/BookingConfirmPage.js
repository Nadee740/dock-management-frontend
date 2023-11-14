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
    const [pdfname,setPdfName]=useState();
    const [dockTypeDetails,setDockTypeDetails]=useState();
    const [response,setResponse]=useState(null)
    const handleDownloadPdf = async (pdf_name) => {
        try {
            setLoading(true)
          console.log(pdf_name);
            const res=await fetch(`${baseUrl}/pdf/get-pdf?name=${pdf_name}`)
      // const res = await fetch(`${baseUrl}/test/generate-pdf`);
     const blob = await res.blob();
          setResponse(blob)
          setPdfName(pdf_name)


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
   
        handleDownloadPdf(v.pdf_name).then(()=>{
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
               {bookingDetails.length && response&& <ConfirmBooking pdfname={pdfname} response={response} bookingDetails={bookingDetails} buildingDetails={building} vehicleDetails={vehicleDetails} companyDetails={companyDetails} dockDetails={dockDetails} dockTypeDetails={dockTypeDetails}/> } 
              </section>
            </div>
          </div>
        </>
      );
}

export default BookingConfirmPage;