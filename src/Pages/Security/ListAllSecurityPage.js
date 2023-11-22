import ListAllSecurity from "../../Components/ListAllSecurity";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { UserContext } from "../../Contexts/UserContexts";
const ListAllSecurityPage = ({ iseditable }) => {
    const {setLoading}=useContext(UserContext);
    const [securityData,setSecurityData]=useState([]);
    useEffect(()=>{
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios
      .get(`${baseUrl}/get-securitys`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        setLoading(false);

        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setSecurityData(response.data.data);
        } else {
          setSecurityData(null);
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
      <div className="w-full admin-dashboard">
        <div className="flex flex-row w-full items-center p-3 justify-between">
        <section class="text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5 overflow-x-scroll">
            {securityData&&<ListAllSecurity securityData={securityData} iseditable={iseditable} />}
          </section>
        </div>
      </div>
    </>
  );
};

export default ListAllSecurityPage;
