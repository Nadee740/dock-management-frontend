import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { baseUrl } from "../utils/baseurl";
import { UserContext } from "../Contexts/UserContexts";
import ConfirmDialog from "../Components/ConfirmDialog";
import AlertDialog from "../Components/AlertDialogue";

const SubscriptionRequestPage = () => {
  const params=useParams();
  const typedata=params.type;
  const [type,setType]=useState(typedata);
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [Phone_no,setPhone]=useState();
  const {setLoading}=useContext(UserContext);
  const [open1,setOpen1]=useState(false);
  const [open2,setOpen2]=useState(false);
  const [modalHeading,setModalHeading]=useState("");
  const [modalText,setModalText]=useState("")
  const [company,setCompany]=useState();
  const [subscriptionTypes,setSubscriptionTypes]=useState([]);
  const SubmitButton=(e)=>{
    e.preventDefault();
  if(name==""||email==""||Phone_no==""||type=="")
    {
        setModalHeading("Please Fill All Columns");
        setOpen1(true);

    }
    else{
        setOpen2(true);
        setModalHeading("Alert")
        setModalText("Are You Sure You Want To Send Subscription Request");
    }

  }

 
    useEffect(()=>{
        setLoading(true);
        axios.get(`${baseUrl}/subscription/get/types`)
        .then((res) => {
            if(res.data.status=="ok")
            {
              let data=res.data.data.filter((type)=>{
                 return type.isActive==true
              })
              setSubscriptionTypes(data);
            setLoading(false);
            }
            
        else 
        throw new Error(res.data.msg)
        })
        .catch((err) => {
           
            console.log(err)

        });
    },[])
  const submit=async()=>{
    setLoading(true)
    const data={
      typeofsubscription:type,
      NameofSubscriber:name,
      email,
      Phone_no,
      Company_Name:company,

    }
    axios.post(`${baseUrl}/subscription/request`,data).then((res)=>{
      if(res.data.status=="ok")
      {
        setModalHeading("Subscription Request sent Successfully")
        setModalText("")
         setOpen1(true)
         window.location='/'
      
      }
      else{
        if(res.data.msg=="01"){
          setModalHeading("Email Already exists!");
          setModalText("Email ID already exists. Please use another email ID!");
        }
        else{
          setModalHeading("Something Went wrong");
          setModalText("Something Went wrong. Please Try again after sometime");
        }
       
        setOpen1(true);
         console.log("err",res.data.msg)

      }
      setLoading(false)
    })
    .catch((err)=>{
      setModalHeading("Something Went wrong ");
      setModalText("Something Went wrong.Please Try again after sometime");
      setOpen1(true);
      setLoading(false)
      console.log("failed",err)
    })
  }
  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
        <section class="h-max text-black w-5/6 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
          <div className="flex items-center justify-between  p-4 ">
            <h2 className="text-2xl font-medium">
              <FontAwesomeIcon icon={faEdit} className="mr-1"></FontAwesomeIcon> Subscription Request
            </h2>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <form onSubmit={SubmitButton}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label
                  class="flex text-black dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Subscription Type
                </label>
                <select required 
               onChange={(e)=>{
                setType(e.target.value)
            }}
              value={type}
              
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  {
                    subscriptionTypes.map((typesubp)=>(
                      <option value={typesubp.typeofsubscription}>{typesubp.typeofsubscription}</option>
                    ))
                  }
                  
                  
                  <option value="custom">custom</option>
                </select>
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Name
                </label>
                <input
                required
                  id="username"
                  type="text"
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
                />
              </div>

              <div>
                <label class="text-blackdark:text-gray-200" for="emailAddress">
                  Email Address
                </label>
                <input
                required
                  id="emailAddress"
                  type="email"
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-black dark:text-gray-200" for="password">
                  Phone Number
                </label>
                <input
                required
                  id="number"
                  type="text"
                  value={Phone_no}
                  onChange={(e)=>{
                    setPhone(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
             
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                  Company Name
                </label>
                <input
                required
                  id="company_name"
                  type="text"
                  value={company}
                  onChange={(e)=>{
                    setCompany(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div class="flex mt-5 md:mt-8 lg:mt-5">
            <div>
            {/* /booking-confirm/1 */}
              <button 
              type="submit"
              class="bg-green-400 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Send Request
                <Mail className="ml-5"/>
                </button>
              </div>
              <div class="flex ml-3 md:ml-5 lg:ml-3"> 
            
              <button class="bg-green-400 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
          <Link to="/"> Cancel </Link>
          </button>
              </div>
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
        confirmFunction={submit}
      />
        </section>
      </div>
    </div>
  );
};

export default SubscriptionRequestPage;