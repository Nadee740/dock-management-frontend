import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { UserContext } from "../../Contexts/UserContexts";
import ListAllSupplierRequest from "../../Components/ListAllSupplierRequest";

const ListAllSupplierRequestPage = ({ iseditable }) => {
    const {setLoading}=useContext(UserContext);
   
    const [requestList,setRequestList]=useState([]);
  
    useEffect(()=>{
      setLoading(true);
      const token=localStorage.getItem("EZTOken");
      axios.get(`${baseUrl}/get/all/supplier/request`,{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      })
      .then(function(response){
        setLoading(false);
        console.log(response.data);
        if(response.data!=""){
          setRequestList(response.data.data);
        }
        else{
          setRequestList(null);
          throw new Error("something went wrong")
        }
      })
      .catch(function(error){
       
        console.log("FAILED!!! ", error);
      })
      .finally(()=>{
        setLoading(false);
      })
    },[])
    

  return (
    <>
      <div className="w-full admin-dashboard">
        <div className="flex flex-row w-full w-full items-center justify-between">
          <section class=" text-black w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800  overflow-x-scroll">
          {requestList &&  <ListAllSupplierRequest requestList={requestList} iseditable={iseditable} />}

          </section>
        </div>
      </div>
    </>
  );
};

export default ListAllSupplierRequestPage;
