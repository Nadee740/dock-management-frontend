import {useContext, useState} from "react"
import {Link} from "react-router-dom"
import axios from 'axios'

import AlertDialog from "./AlertDialogue"
import ConfirmDialog from "./ConfirmDialog"
import { UserContext } from "../Contexts/UserContexts"
import { baseUrl } from "../utils/baseurl"
function ForgotPasswordForm() {
    const {setLoading,Token}=useContext(UserContext);
    const [email,setEmail]=useState();
    const [otp,setOTP]=useState();
    const [verifyotp,setverifyOTP]=useState()
    const [newPassword,setNewPassword]=useState("");
    const [retypeNewPassword,setretypeNewPassword]=useState("");
    const [modalHeading, setModalHeading] = useState("");
    const [modalText, setModalText] = useState("");
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [step,setStep]=useState(1);
    const [verified,setVerified]=useState(false);
    
    const sendMail=()=>{
        
        
        axios.post(`${baseUrl}/send-user-mail?email=${email}`).then((res)=>{
           
            if(res.data.status=="ok")
          {
              setOTP(res.data.otp)
           
           setStep(2)
        }
          
        }).catch((err)=>{
            console.log("error //// ",err);
            setModalHeading("Oops. Something went wrong")
            setModalText("Please check Your email or try again later")
            setOpen1(true)
        })
    }

    const verifyOTP=()=>{
        console.log(email);
        if(otp==verifyotp){
            setVerified(true)
           setStep(3)
        }
        else{
            setModalHeading("Wrong OTP ")
            setModalText("Please enter correct OTP ")
            setOpen1(true)
        }
    }
    const ForgotPasswordPrompt=(e)=>{
        e.preventDefault();
        if(newPassword!=retypeNewPassword)
        {
            setModalHeading("Password do not match")
            setModalText("Please make sure that your passwords match");
            setOpen1(true)
            return;
        }
        setModalHeading("Confirm")
        setModalText("Are You sure you want to change the password")
        setOpen2(true);

    }
    const ForgotPassword=()=>{
        setLoading(true)
        console.log(email);
        if(verified&&email!=null)
        {
            axios.post(`${baseUrl}/reset-password`,{
                email,
                password1:newPassword,
                password2:retypeNewPassword
            },{
                headers: {
                Authorization: `Bearer ${Token}`,
                },
            }).then((res)=>{
                setModalHeading("Password changed ")
                setModalText("Your password changed successfully . Go Back to Login Page")
                setOpen1(true)
                setEmail("")
                setNewPassword("")
                setretypeNewPassword("")
            
            }).catch((err)=>{
                console.log("error //// ",err);
                setModalHeading("Oops.")
                setModalText("Something went wrong please try again later")
                setOpen1(true)
            }).finally(()=>{
                setLoading(false)
            })
        }
        else{
            setModalHeading("Oops.")
            setModalText("Something went wrong please try again later")
            setOpen1(true)
        }

    }

    return (
        <div className="flex flex-col bg-white w-11/12 text-left bg-white p-10 rounded-xl m-auto">
            <h2 className="heading-class font-bold text-2xl m-2">Change password</h2>
            <div className="m-4">
                {step<=2&&
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if(step==1)
                    sendMail()
                    else if(step==2)
                    verifyOTP()
                    

                  }}>
                  
                     <input
                        value={email}
                        onChange={(e) => {
                        setEmail(e.target.value);
                        }}
                        required
                        className="w-5/6 px-8 py-2 m-4 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
                        size="lg"
                        type="text"
                        placeholder= "Enter your registered email ID"
                        disabled={step>=2}
                        />
                       {step==2&&  <input
                        value={verifyotp}
                        onChange={(e) => {
                        setverifyOTP(e.target.value);
                        }}
                        
                        className="w-5/6 px-8 py-2 m-4 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
                        size="lg"
                        type="text"
                        placeholder="Enter OTP"
                        />}
                         <div className="flex items-center justify-center mt-4">
                {  step==1?(<><button   type="submit" className=" w-2/3 heading-class h-full rounded-xl text-white py-2 px-4 w-3/6 bg-red-700 ">
                    
                    Send Email
         
        </button></>):(<><button   type="submit" className=" w-2/3 heading-class h-full rounded-xl text-white py-2 px-4 w-3/6 bg-green-700 ">
                    
                   Verify OTP
         
        </button></>)}
              </div>
                    
                    </form>}
                    {
                        step==3&&verified&& <form onSubmit={ForgotPasswordPrompt}> 
                        <div >
                            <p className="text-green-500 mb-2"> OTP verified successfully !</p>
                        </div>
          
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
                    placeholder="Enter your new password"
                    type="password"
                    required
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
                    required
                    placeholder="Retype your password"
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
            }
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
            ForgotPassword()
        }}
        />
        </div>
    )
}

export default ForgotPasswordForm