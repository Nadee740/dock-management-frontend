import {useContext, useState} from "react"
import {Link} from "react-router-dom"
import axios from 'axios'

import AlertDialog from "./AlertDialogue"
import ConfirmDialog from "./ConfirmDialog"
import { UserContext } from "../Contexts/UserContexts"
import { baseUrl } from "../utils/baseurl"
function ChangePasswordForm() {
    const {setLoading,Token}=useContext(UserContext);
    
    const [newPassword,setNewPassword]=useState("");
    const [retypeNewPassword,setretypeNewPassword]=useState("");
    const [modalHeading, setModalHeading] = useState("");
    const [modalText, setModalText] = useState("");
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const ChangePasswordPrompt=(e)=>{
        e.preventDefault();
        if(newPassword!=retypeNewPassword)
        {
            setModalHeading("Password do not match")
            setModalText("Please make sur that your passwords match");
            setOpen1(true)
            return;
        }
        setModalHeading("Confirm")
        setModalText("Are You sure you want to change the password")
        setOpen2(true);

    }
    const ChangePassword=()=>{
        setLoading(true)
        axios.post(`${baseUrl}/change-password`,{
            password1:newPassword,
            password2:retypeNewPassword
        },{
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }).then((res)=>{
            setModalHeading("Password changed ")
            setModalText("Your password changed successfully ")
            setOpen1(true)
        }).catch((err)=>{
            console.log("error //// ",err);
            setModalHeading("Oops .")
            setModalText("Something went wrong please try again later")
            setOpen1(true)
        }).finally(()=>{
            setLoading(false)
        })

    }

    return (
        <div className="flex flex-col bg-white w-11/12 text-left bg-white p-10 rounded-xl m-auto">
            <h2 className="heading-class font-bold text-2xl m-2">Change password</h2>
            <div className="m-4">
            <form onSubmit={ChangePasswordPrompt}> 
          
          <div >
                  <label class="text-black dark:text-gray-200" for="password">
                    New Password
                  </label>
                  <input
                  onChange={(e)=>{
                      setNewPassword(e.target.value)
                  }}
                    value={newPassword}
                    id="drivername"
                    type="password"
                    class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label class="text-black dark:text-gray-200" for="retypepassword">
                  Retype Password
                  </label>
                  <input
                  onChange={(e)=>{
                      setretypeNewPassword(e.target.value)
                  }}
                    value={retypeNewPassword}
                    id="retypepassword"
                    type="password"
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
            ChangePassword()
        }}
        />
        </div>
    )
}

export default ChangePasswordForm