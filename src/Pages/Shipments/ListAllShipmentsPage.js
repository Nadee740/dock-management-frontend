import ListAllShipments from "../../Components/ListAllShipments";
import { UserContext } from "../../Contexts/UserContexts";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { useParams } from "react-router-dom";
const ListAllShipmentsPage = ({iseditable}) => {
  const params=useParams()
  const Status=params.Status;
    const {setLoading}=useContext(UserContext);
    const [todayShipments,setTodayShipments]=useState([])

    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios.get(`${baseUrl}/dock/all/bookings?status=${Status}`, {headers: {
            Authorization: `Bearer ${token}`,
          }},)
        .then((res) => {
        if(res.data.status==="ok")
          {  
            console.log(res.data)
            setTodayShipments(res.data.data);
          }
        })
        .catch((err) => {
            console.log(err,"error");
        
        });
        setLoading(false);
    },[Status])
    return ( <>
        <div className="w-full admin-dashboard overflow-x-scroll">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
      <section class="text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-x-scroll">
      {todayShipments && <ListAllShipments todayShipments={todayShipments} iseditable={false}/>}
      </section>
      </div>
      </div>
    </> );
}
 
export default ListAllShipmentsPage;