import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";

const AddNewBuildingForm = () => {
    const {setLoading,Token}=useContext(UserContext);
    const [building,setBuilding]=useState();
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
   
    const [building_address,setBuildingAddress]=useState("");
    // useEffect(()=>{
    //     setLoading(true);
    //     axios
    //   .get(`${baseUrl}/get-buildings`, {
    //     headers: {
    //       Authorization: `Bearer ${Token}`,
    //     },
    //   })
    //   .then(function (response) {
    //     if (response.data != "") {
    //       setBuilding(response.data.data);
    //       setLoading(false);
        
    //     } else {
    //       setBuilding(null);
    //     }
    //   })
    //   .catch(function (error) {
    //     setLoading(false);
    //     console.log("FAILED!!! ", error);
    //   });
    // },[])
    const SubmitButton=(e)=>{
        e.preventDefault();
       
        if(building=="")
        {
            setModalHeading("Please fill building name");
            setOpen1(true);

        }
        else{
            setOpen2(true);
            setModalHeading("Alert")
            setModalText("Are You Sure You Want To Add The Building");
        }
    
    }

    const submitData=async()=>{
        setLoading(true)
        const data = {
         
            building_name:building,
            building_address
          };
          axios.post(`${baseUrl}/add-building`,data,{
            headers:{
                'Authorization': `Bearer ${Token}`
            }
          })
          .then((res) => {
            if(res.data.status=="ok")
            {
               setModalHeading("Building Added Successfully")
               setModalText("")
               setBuilding("")
               setBuildingAddress("")
               setOpen1(true)

        
            }
            else{
                setModalHeading("Something Went wrong ");
                setModalText("Something Went wrong.Please Try again after sometime");
                setOpen1(true);
    
            }
       
          }).catch((err)=>{
            setModalHeading("Something Went wrong ");
            setModalText("Something Went wrong.Please Try again after sometime");
            setOpen1(true);
            console.log(err)
          })
          .finally(()=>{
      
            setLoading(false)
          })
    }
    return ( <>
         <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium"><FontAwesomeIcon icon={faBuilding}className="mr-5" />Add New Building</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton} >
        <div class="">
            <div className="mb-2">
                <label class="text-black dark:text-gray-200" for="companyname">Building Name</label>
                <input required value={building}  onChange={(e)=>{
                    setBuilding(e.target.value)
                }} placeholder="Building Name" id="companyname" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"/>
            </div>
            
            {/* <div className="mb-2">
                <label class="text-black dark:text-gray-200" for="buildingname">Building Name</label>
                <select  onChange={(e)=>{
                    setSelectedBuilding(e.target.value)
                }} id="buildingname" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option value={-1}>---Choose Building ---</option>
                    {building.map((b,index)=>{
                        return <option value={b._id}>{b.building_name}</option>
                    })
                      
                  }
                    
                </select>
            </div> */}
             </div>
             <div >
                <label class="text-black dark:text-gray-200" for="buildingaddress">Building Address</label>
                <textarea required value={building_address} onChange={(e)=>{
                    setBuildingAddress(e.target.value)
                }} id="buildingaddres" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>

        <div class="flex justify-end mt-6">
            <button type="submit"  class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Submit</button>
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
          <Link to="/building"> Cancel</Link>
          </button>
        </div>
    </form>
    <AlertDialog
        open={open1}
        setOpen={setOpen1}
        modalHeading={modalHeading}
        modalText={modalText}
      />
      <ConfirmDialog
        open={open2}
        setOpen={setOpen2}
        modalHeading={modalHeading}
        modalText={modalText}
        confirmFunction={submitData}
      />
    </> );
}
 
export default AddNewBuildingForm;