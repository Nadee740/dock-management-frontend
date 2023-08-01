import ListAllDocks from "../../Components/ListAllDock";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { UserContext } from "../../Contexts/UserContexts";
const ListAllDocksPage = () => {
    const {setLoading}=useContext(UserContext);
    const [dockData,setDockData]=useState([]);
    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios
      .get(`${baseUrl}/get-docks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setLoading(false);

        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setDockData(response.data.data);
        } else {
          setDockData(null);
          console.log("errr");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
    },[])
    return ( <>
        <div className="w-full admin-dashboard overflow-x-scroll ">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
      <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-x-scroll">
      <ListAllDocks dockData={dockData}/>
      </section>
      </div>
      </div>
    </> );
}
 
export default ListAllDocksPage;