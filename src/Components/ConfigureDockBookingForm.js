import {useContext, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import axios from 'axios'

import AlertDialog from "./AlertDialogue"
import ConfirmDialog from "./ConfirmDialog"
import { UserContext } from "../Contexts/UserContexts"
import { baseUrl } from "../utils/baseurl"
function ConfigureDockBOokingForm() {
    const {setLoading,Token}=useContext(UserContext);
    const [timeLimitToCheck,setTimeLimitToCheck]=useState(15);
    const [modalHeading, setModalHeading] = useState("");
    const [modalText, setModalText] = useState("");
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    useEffect(()=>{
        setLoading(true)
            axios.get(`${baseUrl}/configure-dock/get-configuration`,{
                headers: {
                  Authorization: `Bearer ${Token}`,
                },
              }).then((res)=>{
                setTimeLimitToCheck(res.data.data[0].timelimitforchecking)
            }).catch((err)=>{
                console.log("error //// ",err);
                setModalHeading("Could not complete your request .")
                setModalText("Something went wrong please try again later")
                setOpen1(true)
            }).finally(()=>{
                setLoading(false)
            })
      },[])
    const ConfigurePrompt=(e)=>{
        e.preventDefault();
        setModalHeading("confirm Configuration")
        setModalText("Are you sure you want to change the configuration variables ")
        setOpen2(true);
    }

    const Configure_Dock=async()=>{
        const data={
            timelimitforchecking:timeLimitToCheck
            
        }
        setLoading(true)
        axios.post(`${baseUrl}/configure-dock/update-configuration-variables`,data,{
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }).then((res)=>{
            setModalHeading("Updated")
            setModalText("Your configuration variables are updated successfully")
            setOpen1(true)
        }).catch((err)=>{
            console.log("error //// ",err);
            setModalHeading("Could not complete your request .")
            setModalText("Something went wrong please try again later")
            setOpen1(true)
        }).finally(()=>{
            setLoading(false)
        })
    }

    return (
        <div className="flex flex-col bg-white w-11/12 text-left bg-white p-10 rounded-xl m-auto">
            <h2 className="heading-class font-bold text-2xl m-2">Configure</h2>
            <div className="m-4">
            <form onSubmit={ConfigurePrompt}> 
          
          <div >
                  <label class="text-black dark:text-gray-200" for="timelimit">
                   Time limit for waiting per delivery
                  </label>
                  <input
                    id="timelimit"
                    type="number"
                    value={timeLimitToCheck}
                    min={1}
                    onChange={(e)=>{
                        setTimeLimitToCheck(e.target.value)
                    }}
                   
                    class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              <div className="flex items-center justify-center mt-4">
                  <button   type="submit" className="rounded-xl text-white py-2 px-4 w-3/6 bg-violet-700 ">
                      <button 
                          className="w-full  heading-class h-full"
                      >
                              Submit
                      </button>
                  </button>
              </div>
          </form>
            </div>
       
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
        confirmFunction={()=>{
            Configure_Dock()
        }}
        />
        </div>
    )
}

export default ConfigureDockBOokingForm