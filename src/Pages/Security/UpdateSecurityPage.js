import { useParams } from "react-router-dom";
import UpdateSecurityForm from "../../Components/UpdateSecurityForm";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContexts";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { useState } from "react";


const UpdateSecurityPage = () => {
    const params=useParams();
    const _id=params.id;
    const {setLoading}=useContext(UserContext);
    const [securityData,setSecurityData]=useState();
    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios.get(`${baseUrl}/get-security/${_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res)=>{
            console.log(res.data);
            if(res.data.status=="ok"){
                setSecurityData(res.data.data);
                
            }
            else{
                setSecurityData('')
                console.log(res.data.msg)
            }
            setLoading(false);
          })
          .catch((err)=>{
            console.log(err)
          })
    },[])
  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
        <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20">
          {securityData && <UpdateSecurityForm securityData={securityData}/>}
        </section>
      </div>
    </div>
  );
};

export default UpdateSecurityPage
