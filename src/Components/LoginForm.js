import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Email, Lock } from "@mui/icons-material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/baseurl";
import ConfirmDialog from "./ConfirmDialog";
import { UserContext } from "../Contexts/UserContexts";
import AlertDialog from "./AlertDialogue";

const LoginForm = () => {
  ///user-login


  const {user,setUser,setLoading,setAuthenticating}=useContext(UserContext)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open,setOpen]=useState(false);
  const [modalText,setModalText]=useState("");
  const [modalHeading,setModalHeading]=useState("SuccessFully Logged IN");
 

  const submitData =(e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      email,
      password,
    };
    axios
      .post(`${baseUrl}/user-login`, data)
      .then((res) => {
      console.log(res.data)
        if(res.data.status==="ok")
        {   localStorage.setItem("EZTOken",res.data.token);
            setUser(res.data.data);
            setLoading(true)
            setAuthenticating(true)
            window.location.href="/"
        }
        else{
            setModalHeading("Ooops Couldn`t Login");
            setOpen(true)
        }
      })
      .catch((err) => {
        setModalHeading("Something Went wrong ");
        setModalText("Something Went wrong.Please Try again after sometime");
        setOpen(true)
      })
      .finally(()=>{
        setLoading(false)
           
      })
  
  };
  return (
    <div className="bg-slate-100 flex flex-col bg-white w-11/12 md:w-3/4 lg:w-1/3 text-left bg-white p-10 rounded-xl m-auto">
      <div className="w-full flex items-center pb-5 justify-center ">
        <h2 className="text-base text-slate-400 ">Sign in with credentials</h2>
      </div>

      <form onSubmit={submitData}>
        <div className="flex flex-col mt-2 pb-4">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </span>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              class="field text-sm md:text-lg lg:text-lg  text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              size="lg"
              type="text"
              placeholder="User Name (or) Email"
            />
          </span>
        </div>
        <div className="flex flex-col mt-2  pb-4">
          <span class="flex shadow-md mb-5 text-xs">
            <span class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              <FontAwesomeIcon size="lg" icon={faLock} />
            </span>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              class="field text-sm md:text-lg lg:text-lg text-gray-600 p-2 px-3 rounded-r w-full focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </span>
        </div>
        <div className="flex items-center justify-between mt-2">
          {/* <p className="text-gray-500">Should contain atleast 8 characters</p> */}
          <Link to="/forgot-password">
            <p className="text-slate-400  cursor-pointer">Forgot Password?</p>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="/signup"
            className="rounded-md text-indigo-500 py-2 px-4 w-2/3 md:w-1/3 lg:w-1/3  border-2 border-indigo-500 "
          >
            <div className="text-sm w-full h-full">
              Sign Up
            </div>
          </Link>
          <div
            className="rounded-md text-white py-2 ml-8 px-4 w-2/3 md:w-1/3 lg:w-1/3 bg-indigo-500"
          >
            <button
              className="w-full h-full "
             type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <AlertDialog
        open={open}
        setOpen={setOpen}
        modalHeading={modalHeading}
        modalText={modalText}
      />
      
    </div>
  );
};

export default LoginForm;
