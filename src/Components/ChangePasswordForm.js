import {useContext, useState} from "react"
import {Link} from "react-router-dom"
import axios from 'axios'

import AlertDialog from "./AlertDialogue"
import ConfirmDialog from "./ConfirmDialog"
function ChangePasswordForm() {
    
    const [newPassword,setNewPassword]=useState("");
    const [retypeNewPassword,setretypeNewPassword]=useState("");
    const [modalHeading, setModalHeading] = useState("");
    const [modalText, setModalText] = useState("");
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    
    const ChangePassword=()=>{
        
    }

    return (
        <div className="flex flex-col bg-white w-11/12 text-left bg-white p-10 rounded-xl m-auto">
            <h2 className="font-bold text-2xl">Change password</h2>
            <p>Please remember your password for god sake</p>
            <form action=""> 
                <div className="flex flex-col mt-2">
                    <label htmlFor="">New Password</label>
                    <input 
                        type="password" 
                        className="w-full py-2 px-3 rounded-xl ring-2 ring-slate-300 focus:outline-none" 
                        placeholder="New password"
                        value={newPassword}
                        onChange={(e)=>{setNewPassword(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col mt-2">
                    <label htmlFor="">Retype Password</label>
                    <input 
                        type="password" 
                        className="w-full py-2 px-3 rounded-xl ring-2 ring-slate-300 focus:outline-none" 
                        placeholder="Retype Password"
                        value={retypeNewPassword}
                        onChange={(e)=>{setretypeNewPassword(e.target.value)}}
                    />
                </div>
                <div className="flex items-center justify-center mt-4">
                    <Link to="" className="rounded-xl text-white py-2 px-4 w-3/6 bg-stone-800">
                        <button 
                            className="w-full h-full"
                            onClick={()=>{
                                // setUser({
                                //     userName:"",
                                //     password:"",
                                //     roles:["hod","warden","staff advisor"]
                                // })
                                ChangePassword()
                            }}
                        >
                                Submit
                        </button>
                    </Link>
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
        confirmFunction={()=>{
            setretypeNewPassword('');
            setNewPassword('')
        window.location.href="/"
        }}
        />
        </div>
    )
}

export default ChangePasswordForm