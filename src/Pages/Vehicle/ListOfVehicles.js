import { useContext, useEffect } from "react";
import ListAllVehicles from "../../Components/ListAllVehicles";
import { useState } from "react";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";

const ListAllVehiclesPage = ({iseditable}) => {
  const [vehicleData,setVehicle]=useState([]);
  const {setLoading}=useContext(UserContext);
  useEffect(()=>{
    const token = localStorage.getItem("EZTOken");
    axios
    .get(`${baseUrl}/get-vehicles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      if (response.data != "") {
        console.log(response.data);
        setVehicle(response.data.data);
        setLoading(false);
      } else {
        setVehicle(null);
        setLoading(false);
        console.log("errr");
      }
    })
    .catch(function (error) {
      setLoading(false);
      console.log("FAILED!!! ", error);
    });
  },[])
    return ( <>
        <div className="w-full admin-dashboard overflow-x-scroll">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
      <section class="text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-x-scroll">
      <ListAllVehicles vehicleData={vehicleData} iseditable={iseditable}/>
      </section>
      </div>
      </div>
    </> );
}
 
export default ListAllVehiclesPage;