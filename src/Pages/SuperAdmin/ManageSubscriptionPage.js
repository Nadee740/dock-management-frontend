import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChain,
  faCheckCircle,
  faCircle,
  faCoins,
  faDiamond,
  faEdit,
  faMoneyBill,
  faStar,
  faTruck,
  faTruckRampBox,
  faUpDown,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import AdminDashBoardCharts from "../../Components/DashboardCharts";
import SubscriptionAdminDashboard from "../../Components/subscription";
import AdminDashBoardTable from "../../Components/AdminDashboardTable";
import BooktheViewingComponent from "../../Components/BooktheViewingComponent";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
const ManageSubsriptionPage = () => {
  const { setLoading } = useContext(UserContext);
  const [subscriptionselected, setSubscriptionSelcted] = useState(null);
  const [no_of_suppliers, setSuppliersno] = useState();
  const [no_of_docks, set_no_ofdocks] = useState();
  const [no_of_security, setNoOfsecurity] = useState();
  const [no_ofBuildings, setNoBuildings] = useState();
  const [no_of_warehouse, setNoofWarehouse] = useState();
  const [description,setDescription]=useState();
  const [isActive,setIsActive]=useState();
  const [subscriptionTypes, setSubscriptionTypes] = useState([]);
  const [indexed,setIndexex]=useState({})
  useEffect(() => {
    let obj={}
    setLoading(true);
    axios
      .get(`${baseUrl}/subscription/get/types`)
      .then((res) => {
        if (res.data.status == "ok") 
        {
            setSubscriptionTypes(res.data.data);
            res.data.data.map((d,index)=>{
                if(d.typeofsubscription=="premium"){
                    obj.premium=index;

                }else if(d.typeofsubscription=="basic"){
                    obj.basic=index;
                }
                else if(d.typeofsubscription=="standard"){
                    obj.standard=index;
                }
            })
            setIndexex(obj)
            setLoading(false)
        }
          else throw new Error(res.data.msg);
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  }, []);

  const applyChanges=async()=>{
    setLoading(true);
    const data={
        no_of_suppliers,
        no_of_security,
        no_of_warehouse,
        no_of_docks,
        no_of_buildings:no_ofBuildings,
        isActive
    }
    axios
    .post(`${baseUrl}/superadmin/update/subscription/type?type=${subscriptionselected}`,data)
    .then((res) => {
        if(res.data.status=="ok"){
            setLoading(false);
            alert("updated succesfully");
        }
        else
        throw new Error(res.data.msg)

    }).catch((err)=>{
        setLoading(false)
        console.log(err);
        alert("oops something went wrong");

    })
  }
  return (
    <>
      <div className="w-full admin-dashboard">
        <div className="m-2 flex flex-row-reverse">
          <p className="text-1xl text-white">Nadeem super Admin</p>
          <FontAwesomeIcon
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="mt-1 text-white pr-2"
            size="lg"
            icon={faUser}
          ></FontAwesomeIcon>

          <div
            id="userDropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Bonnie Green</div>
              <div class="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="avatarButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between  p-4 ">
          <h2 className="text-2xl font-medium">
            <FontAwesomeIcon icon={faEdit} /> Choose Subscription To edit
          </h2>
        </div>
        <div className="flex flex-row w-full w-full items-center pl-5 pt-1 justify-between">
          <div class="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              class=""
              onClick={() => {
                setSubscriptionSelcted("premium");
                setSuppliersno(subscriptionTypes[indexed.premium].no_of_suppliers)
                set_no_ofdocks(subscriptionTypes[indexed.premium].no_of_docks)
                setNoOfsecurity(subscriptionTypes[indexed.premium].no_of_security);
                setNoofWarehouse(subscriptionTypes[indexed.premium].no_of_warehouse);
                setNoBuildings(subscriptionTypes[indexed.premium].no_of_buildings)
                setDescription(subscriptionTypes[indexed.premium].description)
                setIsActive(subscriptionTypes[indexed.premium].isActive)
                
              }}
            >
              <div
                class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                    Premium Subscription
                  </h5>
                </div>
                <div className=" flex justify-end w-1/2">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="2xl"
                    style={{ color: "#7cf21c" }}
                  />
                </div>
              </div>
            </div>
            <div
              class=""
              onClick={() => {
                setSubscriptionSelcted("standard");
                setSuppliersno(subscriptionTypes[indexed.standard].no_of_suppliers)
                set_no_ofdocks(subscriptionTypes[indexed.standard].no_of_docks)
                setNoOfsecurity(subscriptionTypes[indexed.standard].no_of_security);
                setNoofWarehouse(subscriptionTypes[indexed.standard].no_of_warehouse);
                setNoBuildings(subscriptionTypes[indexed.standard].no_of_buildings)
                setDescription(subscriptionTypes[indexed.standard].description)
                setIsActive(subscriptionTypes[indexed.standard].isActive)
              }}
            >
              <div
                class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-2xl  font-bold  tracking-tight text-gray-900 dark:text-white">
                    Standard Subscription
                  </h5>
                </div>
                <div className=" flex justify-end w-1/2">
                  <FontAwesomeIcon
                    icon={faDiamond}
                    size="2xl"
                    style={{ color: "#005eff" }}
                  />
                </div>
              </div>
            </div>
            <div
              class="b"
              onClick={() => {
                setSubscriptionSelcted("basic");
                setSuppliersno(subscriptionTypes[indexed.basic].no_of_suppliers)
                set_no_ofdocks(subscriptionTypes[indexed.basic].no_of_docks)
                setNoOfsecurity(subscriptionTypes[indexed.basic].no_of_security);
                setNoofWarehouse(subscriptionTypes[indexed.basic].no_of_warehouse);
                setNoBuildings(subscriptionTypes[indexed.basic].no_of_buildings)
                setDescription(subscriptionTypes[indexed.basic].description)
                setIsActive(subscriptionTypes[indexed.basic].isActive)
              }}
            >
              <div
                class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-2xl  font-bold   tracking-tight text-gray-900 dark:text-white">
                    Basic Subscription
                  </h5>
                </div>
                <div className=" flex justify-end w-1/2">
                  <FontAwesomeIcon
                    icon={faCircle}
                    size="2xl"
                    style={{ color: "#e85211" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {subscriptionselected&&<>
            <div className="flex flex-row w-full w-full items-center p-3 justify-between ">
          <section class="h-max text-black w-5/6 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
            <div className="flex items-center justify-between  p-4 ">
              <h2 className="text-2xl font-medium">
                <FontAwesomeIcon icon={faEdit} /> Edit {subscriptionselected} Subscription
              </h2>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                applyChanges()
              }}
            >
              <div>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label
                      class="flex text-black dark:text-gray-200"
                      for="po_no"
                    >
                      No of Suppliers <p className="ml-2 text-red-500">*</p>
                    </label>
                    <input
                      required
                      value={no_of_suppliers}
                      onChange={(e) => {
                        setSuppliersno(e.target.value);
                      }}
                      id="po_no"
                      type="text"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
                    />
                  </div>

                  <div>
                    <label class="text-blackdark:text-gray-200" for="do_">
                      No Of Docks
                    </label>
                    <input
                      value={no_of_docks}
                      onChange={(e) => {
                        set_no_ofdocks(e.target.value);
                      }}
                      id="do_no"
                      type="text"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      class="text-black dark:text-gray-200"
                      for="airway_bill"
                    >
                      No of Security
                    </label>
                    <input
                      value={no_of_security}
                      onChange={(e) => {
                        setNoOfsecurity(e.target.value);
                      }}
                      id="airway_bill"
                      type="text"
                      class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      class="text-black dark:text-gray-200"
                      for="airway_bill"
                    >
                      No of Buildings
                    </label>
                    <input
                      value={no_ofBuildings}
                      onChange={(e) => {
                        setNoBuildings(e.target.value);
                      }}
                      id="airway_bill"
                      type="text"
                      class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      class="text-black dark:text-gray-200"
                      for="airway_bill"
                    >
                      No of Warehouse
                    </label>
                    <input
                      value={no_of_warehouse}
                      onChange={(e) => {
                        setNoofWarehouse(e.target.value);
                      }}
                      id="airway_bill"
                      type="text"
                      class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      class="text-black dark:text-gray-200"
                      for="airway_bill"
                    >
                      Description
                    </label>
                    <input
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      id="airway_bill"
                      type="text"
                      class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input onChange={(e)=>{
                        setIsActive(!isActive)
                      }} type="checkbox" value={isActive} checked={isActive} class="sr-only peer" />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                     {isActive?"Turn Of":"Turn On"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="m-2 flex mt-5 md:mt-5 lg:mt-5">
                <button
                  type="submit"
                  class="bg-green-400 px-2 md:px-6 lg:px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                >
                  Confirm
                  <FontAwesomeIcon
                    className="ml-2 text-green-500"
                    icon={faCheckCircle}
                  ></FontAwesomeIcon>
                </button>
              </div>
            </form>
          </section>
        </div>
        <div className="h-16"></div>
    
        </>}
        </div>
       
    </>
  );
};

export default ManageSubsriptionPage;
