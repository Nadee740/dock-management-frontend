
import { useContext, useEffect, useState } from "react";
import ListAllSupplierGroups from "../../Components/ListAllSuppliersGroups";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";

const ListAllSupplierGroupsPage = ({iseditable}) => {
  const [suppliergrpData,setSuppliergrp]=useState([]);
  const {setLoading}=useContext(UserContext);
  useEffect(()=>{
    setLoading(true);
    const token = localStorage.getItem("EZTOken");
    axios
  .get(`${baseUrl}/get-supplier-groups`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(function (response) {
   

    console.log("success", response, "response.data");
    if (response.data != "") {
      console.log(response.data);
      setSuppliergrp(response.data.data);
      setLoading(false);
    } else {
      setSuppliergrp(null);
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
      <ListAllSupplierGroups suppliergrpData={suppliergrpData} iseditable={iseditable}/>
      </section>
      </div>
      </div>
    </> );
}
 
export default ListAllSupplierGroupsPage;