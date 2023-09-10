import EditDockForm from "../../Components/EditDockForm";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContexts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { useParams } from "react-router-dom";


const EditDockPage = () => {
    const params=useParams();
    const _id=params.id;
    const {setLoading}=useContext(UserContext);
    const [dockData,setDockData]=useState();
    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios.get(`${baseUrl}/get-dock/${_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res)=>{
            console.log(res.data);
            if(res.data.status=="ok"){
                setDockData(res.data.data);
                
            }
            else{
                setDockData('')
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
        
            {dockData && <EditDockForm dockData={dockData}/>}
        </section>
        </div>
        </div>
     );
}

export default EditDockPage;