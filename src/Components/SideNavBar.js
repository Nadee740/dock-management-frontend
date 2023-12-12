import { faBars, faDashboard, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { AdminLinks } from "../Pages/Admin/AdminLinks";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContexts";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";

const SideNavBar = ({UserLinks}) => {
    const {setLoading,Token,setUser,setAccountDetails,setToken}=useContext(UserContext);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
  const [activeIndex,setActiveIndex]=useState(0)
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobile,setisMobile]=useState(false);
  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  window.addEventListener('resize',()=>{
    const w = window.innerWidth;
    if(w<850)
    {
        setisMobile(true)
    }else{
        setisMobile(false);
    }
  }
  )
  useEffect(()=>{
    const w = window.innerWidth;
    if(w>850){
        setisMobile(false)
      
    }else
    {     
        setisMobile(true)
    }
  })

  const toggleSidebar = () => {

    setIsSidebarVisible(!isSidebarVisible);
  };
  const SubmitButton=()=>{
       setOpen2(true);
        setModalHeading("Alert")
        setModalText("Are You Sure You Want To Logout");
  }
  
  const Logout=()=>{
    setLoading(true)
    axios
    .get(`${baseUrl}/user/logout`, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    })
    .then(function (response) {
      if (response.status="ok") {
        setUser(null);
        setAccountDetails(null)
        setToken(null);
        localStorage.clear();
        window.location='/'
     
      } else {
          throw new Error("something went wrong")
      }
    })
    .catch(function (error) {
      setLoading(false);
      console.log("FAILED!!! ", error);
    });
  }



    return isMobile && !isSidebarVisible? <FontAwesomeIcon className="absolute text-black text-3xl top-5 left-4 cursor-pointer" icon={faBars} size="xs" onClick={()=>{
        toggleSidebar()
    }}/>
 :( 
    <>
        <body class="bg-white z-50">
       
        <div
          class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
        >
          <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
              <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
              <h1 class="font-bold text-gray-200 text-[15px] ml-3">Logo</h1>
              <i
                class="bi bi-x cursor-pointer ml-28 lg:hidden"
                onClick={()=>{toggleSidebar()}}
              ></i>
            </div>
            <div class="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          {/* <div
            class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
          >
            <i class="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div> */}
          {UserLinks.map((link,index)=>{
        return !link.subLinks?( <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          ><Link to={link.to}>
            <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
            <span class="text-[15px] ml-4 text-gray-200 font-bold heading-class">{link.title}</span>
            </Link>
          </div>):(<>
            <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onClick={()=>{setActiveIndex(index)}}
          >
               <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
            <div class="flex justify-between w-full items-center">
              <span class="text-[15px] ml-4 text-gray-200 font-bold heading-class">{link.title}</span>
              <span class="text-sm rotate-180" id="arrow">
                <i class="bi bi-chevron-up"></i>
              </span>
            </div>
          </div>
          {activeIndex==index &&  <div
            class="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
            
          >
          {link.subLinks.map((item,index)=>{
            return ( 
                
                <Link className="flex transition-transform transition-duration: 15000ms; " to={item.to}>
                <FontAwesomeIcon className="p-2 mt-1" icon={item.icon}></FontAwesomeIcon>
                <h1 class="heading-class cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              {item.title}
            </h1>
            </Link> )
          })}
         
           
          </div>}
          </>)
          })}
         

          <div
          onClick={SubmitButton}
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          >
                   
       <button className="" onClick={SubmitButton}>

            <i class="bi bi-box-arrow-in-right"></i>
            <span class="text-[15px] ml-4 text-gray-200 font-bold heading-class">Logout</span>
            </button>
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
        confirmFunction={Logout}
      />
        </div>
      
    
      
      </body>
      <div class="sm:ml-72">

</div>
</>
     );
}
 
export default SideNavBar;