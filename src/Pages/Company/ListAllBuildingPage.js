import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { UserContext } from "../../Contexts/UserContexts";
import ListAllBuilding from "../../Components/ListAllCompany";
const ListAllBuildingPage = ({ iseditable }) => {
    const {setLoading}=useContext(UserContext);
    const [buildingData,setBuildingData]=useState([]);
    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios
      .get(`${baseUrl}/get-buildings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setLoading(false);

        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setBuildingData(response.data.data);
        } else {
          setBuildingData(null);
          console.log("errr");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
    },[])
  return (
    <>
      <div className="w-full admin-dashboard ">
        <div className="flex flex-row w-full w-full items-center p-3 justify-between">
          <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5 overflow-x-scroll">
            {buildingData &&<ListAllBuilding buildingDetails={buildingData} iseditable={iseditable} />}
          </section>
        </div>
      </div>
    </>
  );
};

export default ListAllBuildingPage;
