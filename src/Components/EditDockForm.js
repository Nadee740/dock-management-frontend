import { Mail } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import { baseUrl } from "../utils/baseurl";
import axios from "axios";
import ConfirmDialog from "./ConfirmDialog";
import AlertDialog from "./AlertDialogue";
import { Link } from "react-router-dom";

const EditDockForm = ({dockData}) => {
    const {setLoading}=useContext(UserContext)
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")

    const [dock_number,setDock_number]=useState(dockData.dock_number);
    const [building,setBuilding]=useState(-1);
    const [mode,setMode]=useState(dockData.mode);
    const [dock_type,setDockType]=useState();
    const [price,setPrice]=useState(dockData.price);
    const [status,setStatus]=useState(dockData.status)
    const [listDockTypes,setList_dock_types]=useState([])
    const [list_Buildings,setList_buildings]=useState([]);
    const statusList=["open","close"]
  
    useEffect(()=>{
      setLoading(true);
      setBuilding(dockData.building_id._id);
      setDockType(dockData.dock_type_id._id);
      setStatus(dockData.status);
      
      const token = localStorage.getItem("EZTOken");
      axios
    .get(`${baseUrl}/get-dock-type`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      

      console.log("success", response, "response.data");
      if (response.data != "") {
       setList_dock_types(response.data.data)
        setLoading(false);
      
      } else {
        setList_dock_types(null)
        console.log("errr");
      }
    })
    .catch(function (error) {
      setLoading(false);
      console.log("FAILED!!! ", error);
    });

    },[])
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
        

        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setList_buildings(response.data.data);
          setLoading(false);
        
        } else {
          setList_buildings(null);
          console.log("errr");
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });

    },[])

    const SubmitButton=(e)=>{
        e.preventDefault();
       
        if(building ===-1 || mode===-1 || dock_type===-1)
        {
            setModalHeading("Please Choose All Fields");
            setOpen1(true);

        }
        else{
            setOpen2(true);
            setModalHeading("Alert")
            setModalText("Are You Sure You Want To Update The Dock ");
        }
    
    }

    const submitData=async()=>{
        setLoading(true)
        console.log("hiiiii",status)
        const data = {
            dock_number,
            building_id:building,
            mode,
            dock_type_id:dock_type,
            price,
            status
          };
          const token=localStorage.getItem("EZTOken")
          axios.post(`${baseUrl}/update-dock/${dockData._id}`,data,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
          })
          .then((res) => {
            console.log(res.data);
            if(res.data.status=="ok")
            {
               setModalHeading("Dock Updated Successfully")
               setModalText("")
               
               setOpen1(true)

        
            }
            else{
              
                setModalHeading("Something Went wrong ");
                setModalText("Something Went wrong.Please Try again after sometime");
                setOpen1(true);
    
            }
       
           setLoading(false)
          }).catch((err)=>{
            console.log(err)
          })
    }

    return ( <>
         <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium"><Mail className="pb-1" size='lg'></Mail> Edit Dock</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="">
        <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">
              Building Name
            </label>
            <select
            onChange={(e)=>{
                setBuilding(e.target.value)
            }}
              id="Vechicletype"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Choose Building ---</option>
            {
                list_Buildings.map((b,index)=>{
                    return <>
                    {building===b._id?<option selected value={b._id}>{b.building_name}</option>:<option value={b._id}>{b.building_name}</option>}
                    </> 
                })
            }
            </select>
          </div>
            <div className="mb-2">
                <label class="text-black dark:text-gray-200" for="dockno">Dock No</label>
                <input value={dock_number} onChange={(e)=>{
                    setDock_number(e.target.value)
                }} placeholder="Dock No" id="dockno" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"/>
            </div>

            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="price">Price ($)</label>
                <input 
                value={price}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}  placeholder="Price" id="price" type="number" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="mode">Mode</label>
                <select onChange={(e)=>{
                    setMode(e.target.value)
                }} id="mode" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option value={-1}>--- Choose Mode ---</option>
                    <option selected value={"Normal"}>Normal</option>
                </select>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="docktype">Dock Type</label>
                <select onChange={(e)=>{
                    setDockType(e.target.value)
                }} id="mode" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option value={-1}>--- Choose Dock Type ---</option>
                    {
                listDockTypes.map((d,index)=>{
                    return <>
                        {dock_type===d._id?<option selected value={d._id}>{d.dock_type}</option>:<option value={d._id}>{d.dock_type}</option>}
                        </> 
                })
            }

                </select>
            </div>
            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="dockstatus">Status of Dock</label>
                <select onChange={(e)=>{
                    setStatus(e.target.value)
                }} id="mode" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                   
                    {
                statusList.map((s,index)=>{
                    return <>
                        {status===s?<option selected value={s}>{s}</option>:<option value={s}>{s}</option>}
                        </> 
                })
            }

                </select>
            </div>
        </div>

        <div class="flex justify-end mt-6">
            <button type="submit" class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Submit</button>
            <button type="button" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"><Link to="/admin/docks"> Cancel</Link> </button>
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
 
export default EditDockForm;