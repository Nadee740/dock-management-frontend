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

const SecurityDashBoard = () => {
    const {setLoading}=useContext(UserContext)
    const [readyToScan,setReadytoScan]=useState(false);
    const [todayShipments,setTodayShipments]=useState([])

    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios.get(`${baseUrl}/dock/current/booking`, {headers: {
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

    const handleQRScan=async()=>{
        
    }

  return (
    <>
      <div className="w-full admin-dashboard pr-8">
        <div className="m-2 flex flex-row-reverse">
          <p className="text-1xl text-white">Nadeem (Secuirty)</p>
          <FontAwesomeIcon
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="mt-1 text-white pr-2"
            size="lg"
            icon={faUser}
          ></FontAwesomeIcon>
          {/*         
<FontAwesomeIcon icon={faUser} size="sm" id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="mt-1.5 rounded-full cursor-pointer"/> */}

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
                alert(res);
            }}
            ></QrReader>:<img src={qrcodeimg} className="pl-18 h-52 w-52"></img>}

            </div>
            <div className="md:col-span-3 lg:col-span-3 flew flew-row bg-green">
                <p className="text-2xl font-semibold">Security Check</p>
                <div onClick={()=>{
                    setReadytoScan(!readyToScan)
                }} className="rounded-md pl-8 p-4 w-full bg-black flex mt-4 ">
               <FontAwesomeIcon icon={faSearch} className="text-white mr-2 mt-1"></FontAwesomeIcon>
               <p className="text-white">{readyToScan?"Close QR CODE scanner":"Click To Scan QR CODE"}</p>
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
       
      </div>
     
    </>
  );
};

export default SecurityDashBoard;
