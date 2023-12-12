import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/baseurl";
import { UserContext } from "../Contexts/UserContexts";
import AlertDialog from "./AlertDialogue";
import Failed_Popup from "./Failed_Popup";

const LoginForm = () => {
  ///user-login


  const {user,setUser,setLoading,setAuthenticating}=useContext(UserContext)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open,setOpen]=useState(false);
  const [modalText,setModalText]=useState("");
  const [modalHeading,setModalHeading]=useState("SuccessFully Logged IN");
  const [open_failed_modal,set_open_failed_modal]=useState(false)
  const [message,set_message]=useState("")
  
  const handle_close_failed_pop=()=>{
    set_open_failed_modal(false)
  }

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
        if(res.data.status==="ok")
        {   localStorage.setItem("EZTOken",res.data.token);
            setUser(res.data.data);
            setLoading(true)
            setAuthenticating(true)
            window.location="/"
        }
        else{
            setModalHeading("Ooops Couldn`t Login");
            setOpen(true)
        }
      })
      .catch((err) => {
        set_message("Seems like You entered an invalid Credential. \nSign Up if you do not have an account with us.");
        set_open_failed_modal(true)
      })
      .finally(()=>{
        setLoading(false)
           
      })
  
  };
  return (
    <div className="mb-4 text-center pb-7">
    <form onSubmit={submitData}>
   
        <input
        value={email}
        onChange={(e) => {
        setEmail(e.target.value);
        }}
        required
        className="w-3/6 px-8 py-2 m-4 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
        size="lg"
        type="text"
        placeholder="Email"
        />
        <input
        value={password}
        onChange={(e) => {
        setPassword(e.target.value);
        }}
        required
        className="w-3/6 px-8 py-2 m-3 justify-center rounded-2xl border bg-gray-100 border-gray-200 focus:outline-none"
        size="lg"
        type="password"
        placeholder="Password"
        />
        <div className="mb-4 pb-10 ">
        <button
        type="submit"
        className="w-1/4 px-4 py-2 m-5 justify-center rounded-3xl bg-[#31304D]  text-white font-medium hover:bg-violet-400 "
        >
        Sign In
        </button>
        </div>

            </form>
            <AlertDialog
        open={open}
        setOpen={setOpen}
        modalHeading={modalHeading}
        modalText={modalText}
      />
      <Failed_Popup
      open={open_failed_modal}
      setOpen={set_open_failed_modal}
      onClose={handle_close_failed_pop}
      message={message}

      />
        </div>
  );
};

export default LoginForm;
