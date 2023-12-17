import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/baseurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrReader from 'react-qr-scanner';
import {
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import qrcodeimg from "../../images/qrcode.jpg"
import ListAllShipments from "../../Components/ListAllShipments";
import { UserContext } from "../../Contexts/UserContexts";
import Failed_Popup from "../../Components/Failed_Popup";
import ConfirmModal from "../../Components/ConfirmPopup";

const WareHouseDashBoard = () => {
    const {setLoading,Token}=useContext(UserContext)
    const [readyToScan,setReadytoScan]=useState(false);
    const [todayShipments,setTodayShipments]=useState([]);
    const [open_failed_modal,set_open_failed_modal]=useState(false)
    const [message,set_message]=useState("")
    const [open_confirm,set_open_confirm]=useState(false)

    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios.get(`${baseUrl}/dock/current/booking/users`, {headers: {
            Authorization: `Bearer ${token}`,
          }},)
        .then((res) => {
        if(res.data.status==="ok")
          {  
            console.log(res.data.data)
            setTodayShipments(res.data.data);
          }
        })
        .catch((err) => {
            console.log(err,"error");
        
        });
        setLoading(false);
    },[])

    const handleQRScan=async(data)=>{
      setLoading(true)
      setReadytoScan(false)
      axios.post(`${baseUrl}/dock/scan/warehouse`,{ciphertext:data},{headers: {
          Authorization: `Bearer ${Token}`,
        }}).then((res)=>{
  
          set_message(res.data.msg)
          set_open_confirm(true)
      }).catch((err)=>{
          set_open_failed_modal(true)
          set_message(err.response.data.msg)
          // console.log("erorr",err.response.data.msg)

      }).finally(()=>{
          setLoading(false)
      })
    }
    
    const handle_close_failed_pop=()=>{
      set_open_failed_modal(false)
  }
  const handleClose=()=>{
      set_open_confirm(false)
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
            onError={()=>{
                set_message("Please Grant permission to access camera")
                set_open_failed_modal(true)
            }}
            onScan={(res)=>{
                if(res!=null)
                handleQRScan(JSON.parse(res.text));
            }}
            ></QrReader>:<img src={qrcodeimg} className="pl-18 h-52 w-52"></img>}

            </div>
            <div className="md:col-span-3 lg:col-span-3 flew flew-row bg-green">
                <p className="text-2xl font-semibold">WareHouse Check</p>
                <div onClick={()=>{
                    setReadytoScan(!readyToScan)
                }} className="rounded-md pl-8 p-4 w-full bg-black flex mt-4 ">
               <FontAwesomeIcon icon={faSearch} className="text-white mr-2 mt-1"></FontAwesomeIcon>
               <button className="text-white">{readyToScan?"Close QR CODE scanner":"Click To Scan QR CODE"}</button>
                </div>
            </div>
          </div>
          </section>
        </div>
      <div className="bg-white">
      <div className=" w-full items-center p-3 justify-between">
          <section class=" text-black p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10 overflow-x-scroll">
           {todayShipments && <ListAllShipments todayShipments={todayShipments} iseditable={false}/>}
          </section>
        </div>
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

export default WareHouseDashBoard;
