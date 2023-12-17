import { useContext, useEffect, useState } from "react";
import AddSupplierGroupsForm from "../../Components/AddSupplierGroupsForm";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
const AddSupplierGroupsPage = () => {
    const {setLoading,Token}=useContext(UserContext);
    const [buildingData,setBuildingData]=useState([]);
    const[dockTypes,setDocktypedata]=useState([])
    useEffect(() => {
        setLoading(true);
        axios
          .get(`${baseUrl}/get-buildings`, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          })
          .then(function (response) {
            console.log("success", response, "response.data");
            if (response.data != "") {
              console.log(response.data);
              setBuildingData(response.data.data);
            } else {
              setBuildingData(null);
              console.log("errr");
            }
            setLoading(false);
          })
          .catch(function (error) {
            setLoading(false);
            console.log("FAILED!!! ", error);
          });
      }, []);
      useEffect(() => {
        setLoading(true);
        axios
          .get(`${baseUrl}/get-dock-type`, {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          })
          .then(function (response) {
            console.log("success", response, "response.data");
            if (response.data != "") {
              console.log(response.data);
              setDocktypedata(response.data.data);
            } else {
              setDocktypedata(null);
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
         {dockTypes&& buildingData&& <AddSupplierGroupsForm buildings={buildingData} dockTypes={dockTypes}/>}
        </section>
      </div>
    </div>
  );
};

export default AddSupplierGroupsPage ;
