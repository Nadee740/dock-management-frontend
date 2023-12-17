import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../utils/baseurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrReader from 'react-qr-scanner';
import {
    faSearch,
  faTruck,
  faTruckRampBox,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import qrcodeimg from "../../images/qrcode.jpg"
import ListAllShipments from "../../Components/ListAllShipments";
import { UserContext } from "../../Contexts/UserContexts";
import Failed_Popup from "../../Components/Failed_Popup";
import ConfirmModal from "../../Components/ConfirmPopup";

const QualityCheckPage= () => {
    const {setLoading,Token}=useContext(UserContext)
    const [readyToScan,setReadytoScan]=useState(false);
    const [open_failed_modal,set_open_failed_modal]=useState(false)
    const [message,set_message]=useState("")
    const [open_confirm,set_open_confirm]=useState(false)
    const [status,setStatus]=useState(true);

    const handleQRScan=async(data)=>{
        setLoading(true)
        setReadytoScan(false)
        axios.post(`${baseUrl}/dock/check/load?isvalid=${status}`,{ciphertext:data},{headers: {
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
            onScan={(res)=>{
                if(res!=null)
                handleQRScan(JSON.parse(res.text));
            }}
            ></QrReader>:<img src={qrcodeimg} className="pl-18 h-52 w-52"></img>}

            </div>
            <div className="md:col-span-3 lg:col-span-3 flew flew-row bg-green">
                <p className="text-2xl font-semibold">Quality Check</p>
               <div onClick={()=>{
                    setReadytoScan(!readyToScan)
                }}
                
                className="rounded-md pl-8 p-4 w-full bg-black flex mt-4 ">
               <FontAwesomeIcon icon={faSearch} className="text-white mr-2 mt-1"></FontAwesomeIcon>
               <button className="text-white">{readyToScan?"Close QR CODE scanner":"Click To Scan QR CODE"}</button>
                </div>
                
                <div class="inline-flex rounded-md shadow-sm mt-5" role="group">
                <button type="button" class="px-10 py-2 mr-4 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-green-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-green-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                onClick={()=>{
                    setStatus(true)
                }}
                defaultChecked>
                    Accept
                </button>
                <button type="button" class="px-10 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-red-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-100 focus:bg-red-600 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  onClick={()=>{
                    setStatus(false)
                }}>  
                Reject
                </button>
                    

                </div>
                {/* <div>
                <button class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
          Submit
          </button>
                </div> */}
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
            </div>
        </>
    )
}

export default QualityCheckPage;