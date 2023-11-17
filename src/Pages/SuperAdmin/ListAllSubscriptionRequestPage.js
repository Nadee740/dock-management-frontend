import ListAllAdmin from "../../Components/ListAllAdmin";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { UserContext } from "../../Contexts/UserContexts";
import ListAllSubscriptionRequest from "../../Components/ListAllSubscriptionRequest";
const ListAllSubscribtionRequestPage = ({ iseditable }) => {
    const {setLoading}=useContext(UserContext);
   
    const [requestList,setRequestList]=useState([]);
    //subscription/request/list
    useEffect(()=>{
      setLoading(true);
      const token=localStorage.getItem("EZTOken");
      axios.get(`${baseUrl}/subscription/request/list`,{
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
        setLoading(false);
        console.log("FAILED!!! ", error);
      })
    },[])
    

  return (
    <>
      <div className="w-full admin-dashboard">
        <div className="flex flex-row w-full w-full items-center p-3 justify-between">
          <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5 overflow-x-scroll">
          {requestList &&  <ListAllSubscriptionRequest requestList={requestList} iseditable={iseditable} />}
          </section>
        </div>
      </div>
    </>
  );
};

export default ListAllSubscribtionRequestPage;
