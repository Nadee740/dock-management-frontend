import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../utils/baseurl";
import AlertDialog from "../../Components/AlertDialogue";
import { UserContext } from "../../Contexts/UserContexts";

const ChangeSubscriptionRequestStatusPage = () => {
    const params = useParams();
    const _id=params.id;
    const typesub=params.typesubscription
    const [status,setStatus]=useState(1);
    const [type,setType]=useState();
    const [price,setPrice]=useState();
    const [validity,setValidity]=useState();
    const [noOfadmins,setNoOfadmins]=useState();
    const [noOfsuppliers,setNoOfsuppliers]=useState();
    const [noOfSecurity,setNoOfsecurity]=useState();
    const [noOfWarehouse,setNoOfwarehouse]=useState();
    const [buildings,setBuildings]=useState();
    const [docks,setDocks]=useState();
    const [open1,setOpen1]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const [subscriptionTypes,setSubscriptionTypes]=useState([]);
    const [name,set_name]=useState("")
    const [email,set_email]=useState("")
    const [role,setRole]=useState(-1)
    const [phone_no,set_phone_no]=useState("");
    const [acra_no,set_acra_no]=useState("")
    const {setLoading}=useContext(UserContext)
    useEffect(()=>{
        setLoading(true);
        axios.get(`${baseUrl}/subscription/request?id=${_id}`).then((res)=>{
            const user_data=res.data.data[0];
            console.log("request data = ",user_data)
            set_name(user_data.NameofSubscriber);
            set_email(user_data.email);
            set_acra_no(user_data.acra_no)
        }).catch((err)=>{

        }).finally(()=>{
           setLoading(false)
        })

    },[])
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
          setType(typesub)
          setLoading(false);
          }
          
      else 
      throw new Error(res.data.msg)
      })
      .catch((err) => {
        
          console.log(err)

      });
  },[])
    const submit=(e)=>{
      e.preventDefault();
      
      const data={
        typeofsubscription:type,
        price,
        subscription_validity:validity,
        no_of_admins:noOfadmins,
        no_of_suppliers:noOfsuppliers,
        no_of_security:noOfSecurity,
        no_of_warehouse:noOfWarehouse,
        no_of_buildings:buildings,
        no_of_docks:docks
      }
      
      axios.post(`${baseUrl}/subscription/change/request/status?_id=${_id}&&status=${status}`,data).then((res)=>{
        console.log(res.data)
        if(res.data.status=="ok"){
          console.log(res.data)
      
          window.location='/superadmin/list/request/subscriptions'
        }
        else{
          setModalHeading("Something Went wrong");
          setModalText("Something Went wrong. Please Try again after sometime");
          console.log(res.data)
          setOpen1(true);
        }
      })
      .catch((err)=>{
        console.log("failed",err)
        setModalHeading("Something Went wrong ");
        setModalText("Something Went wrong.Please Try again after sometime");
        setOpen1(true);
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
          <form onSubmit={submit} >
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label
                  class="flex text-black dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Status
                </label>
                <select onChange={(e)=>{
                    setStatus(e.target.value)
                }} required class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option value={1}>Accept</option>
                  <option value={2}>Reject</option>
                </select>
              </div>
              {status==1&& <>
                <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Type of Subscription
                </label>
                <select required 
                value={type}
               onChange={(e)=>{
                setType(e.target.value)
            }}
              
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  {
                    subscriptionTypes.map((type_subsp,index)=>(
                      <option value={type_subsp.typeofsubscription}>{type_subsp.typeofsubscription}</option>
                    ))
                    
                  }
                  
                  <option value="custom">custom</option>
                </select>
              </div>

              <div>
                <label class="text-blackdark:text-gray-200" for="price">
                  Price
                </label>
                <input
                required
                placeholder="Price"
                  id="price"
                  type="text"
                  value={price}
                  onChange={(e)=>{
                    setPrice(e.target.value)
                  }}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-blackdark:text-gray-200" for="name">
                  Name
                </label>
                <input
                required
                placeholder="Name"
                  id="name"
                  type="text"
                  value={name}
                //   onChange={(e)=>{
                //     set_name(e.target.value)
                //   }}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-blackdark:text-gray-200" for="email">
                  Email
                </label>
                <input
                required
                placeholder="Email"
                  id="email"
                  type="text"
                  value={email}
                //   onChange={(e)=>{
                //     set_email(e.target.value)
                //   }}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-blackdark:text-gray-200" for="acra_no">
                  ACRA / NO
                </label>
                <input
                required
                placeholder="ACRA NO"
                  id="acra_no"
                  type="text"
                  value={acra_no}
                //   onChange={(e)=>{
                //     set_acra_no(e.target.value)
                //   }}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">
              Role
            </label>
            <select
            onChange={(e)=>{
                setRole(e.target.value)
            }}
              id="Vechicletype"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option value={-1}>---Choose Role ---</option>
              <option value={"Administrator"}>Administrator</option>
              <option value={"Company"}>Company</option>
            </select>
          </div>

              <div>
                <label class="text-black dark:text-gray-200" for="password">
                  Subscription Validity
                </label>
                <input
                required
                  id="number"
                  type="date"
                  value={validity}
                  onChange={(e)=>{
                    setValidity(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
             
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of admins
                </label>
                <input
                required
                  id="company_name"
                  type="number"
                  value={noOfadmins}
                  onChange={(e)=>{
                    setNoOfadmins(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of Suppliers
                </label>
                <input
                required
                  id="company_name"
                  type="number"
                  value={noOfsuppliers}
                  onChange={(e)=>{
                    setNoOfsuppliers(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of Security
                </label>
                <input
                required
                  id="company_name"
                  type="number"
                  value={noOfSecurity}
                  onChange={(e)=>{
                    setNoOfsecurity(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of Warehouse
                </label>
                <input
                required
                  id="company_name"
                  type="number"
                  value={noOfWarehouse}
                  onChange={(e)=>{
                    setNoOfwarehouse(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of Buildings
                </label>
                <input
                required
                  id="company_name"
                  type="number"
                  value={buildings}
                  onChange={(e)=>{
                    setBuildings(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No of Dock
                </label>
                <input
                required
                  id="company_name"
                  type="number"
                  value={docks}
                  onChange={(e)=>{
                    setDocks(e.target.value)
                  }}
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              </>}
             

            </div>
            <div class="flex mt-5 md:mt-5 lg:mt-5">
            <div >
              <button 
               onClick={(e) => {
                submit(e)
            }}
              class="bg-green-400 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Change Status
                <FontAwesomeIcon icon={faEdit}/>
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
        </section>
      </div>
    </div>
  );
};

export default ChangeSubscriptionRequestStatusPage;