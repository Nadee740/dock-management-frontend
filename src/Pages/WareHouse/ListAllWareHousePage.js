import { useContext } from "react";
import ListAllVehicles from "../../Components/ListAllVehicles";
import ListAllWareHouse from "../../Components/ListAllWareHouse";
import { UserContext } from "../../Contexts/UserContexts";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { useEffect } from "react";

const ListAllWareHousesPage= ({iseditable}) => {
  const {setLoading}=useContext(UserContext);
  const [warehouseData,setWarehouseData]=useState([]);
  useEffect(()=>{
      setLoading(true);
      const token = localStorage.getItem("EZTOken");
      axios
    .get(`${baseUrl}/get-ware_houses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      setLoading(false);

      console.log("success", response, "response.data");
      if (response.data != "") {
        console.log(response.data);
        setWarehouseData(response.data.data);
      } else {
        setWarehouseData(null);
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
      <section class="text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-scroll">
<ListAllWareHouse warehouseData={warehouseData} iseditable={iseditable}/>
      </section>
      </div>
      </div>
    </> );
}
 
export default ListAllWareHousesPage;
