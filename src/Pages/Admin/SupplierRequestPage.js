import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";

import { useParams } from "react-router-dom";
import SupplierRequestForm from "../../Components/SupplierRequestForm";
const SupplierRequestPage = () => {
    const params=useParams();
    const _id=params.id;
    const {Token,setLoading}=useContext(UserContext);
    const [supplierData,setSupplierData]=useState();
    const [supplierGroups,setSupplierGroups]=useState([]);
    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios.get(`${baseUrl}/get/supplier/request/${_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res)=>{
            console.log(res.data);
            if(res.data.status=="ok"){
                setSupplierData(res.data.data);
                
            }
            else{
                setSupplierData('')
                console.log(res.data.msg)
            }
            setLoading(false);
          })
          .catch((err)=>{
            console.log(err)
          })
    },[])
   
      useEffect(() => {
        setLoading(true);
        axios
          .get(`${baseUrl}/get-supplier-groups`, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          })
          .then(function (response) {
            console.log("success", response, "response.data");
            if (response.data != "") {
              console.log(response.data);
              setSupplierGroups(response.data.data);
            } else {
              setSupplierGroups(null);
              console.log("errr");
            }
            setLoading(false);
          })
          .catch(function (error) {
            setLoading(false);
            console.log("FAILED!!! ", error);
          });
      }, []);
  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
        <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20">
          {supplierGroups &&supplierData&&<SupplierRequestForm suppliergroup={supplierGroups} supplierData={supplierData}/>}
        </section>
      </div>
    </div>
  );
};

export default SupplierRequestPage;
