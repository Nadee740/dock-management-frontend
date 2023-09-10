import { useContext, useEffect, useState } from "react";
import EditAdminUserForm from "../../Components/EditAdminForm";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
const EditAdminUser = () => {
    const {setLoading,Token}=useContext(UserContext);
    const [companies,setCompanies]=useState([]);
    
    useEffect(()=>{
        setLoading(true);
        axios
      .get(`${baseUrl}/get-companies`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(function (response) {
        

        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setCompanies(response.data.data);
          setLoading(false);
        
        } else {
          setCompanies(null);
          console.log("errr");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
    },[])
  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
        <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20">
          {companies && <EditAdminUserForm companies={companies}/>}
        </section>
      </div>
    </div>
  );
};

export default EditAdminUser;
