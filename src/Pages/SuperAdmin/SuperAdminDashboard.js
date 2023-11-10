import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChain,
    faCoins,
    faMoneyBill,
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
const SuperAdminDashBoard = () => {
    const {setLoading}=useContext(UserContext)
    const [subscriptionTypes,setSubscriptionTypes]=useState([]);
    useEffect(()=>{
        setLoading(true);
        

        axios.get(`${baseUrl}/subscription/get/types`)
        .then((res) => {

            if(res.data.status=="ok")
            {
                setSubscriptionTypes(res.data.data);
                setLoading(false)
            }
        
        
        else 
        throw new Error(res.data.msg)
        })
        .catch((err) => {
            setLoading(true);
            console.log(err)

        });
    },[])
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
        <div className="flex flex-row w-full w-full items-center pl-5 pt-1 justify-between">
          <div class="mt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="">
              <Link
                to="/superadmin/manage/subscriptions"
                class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                    Manage Subscription
                  </h5>
                </div>
                <div className=" flex justify-end w-1/2">
                  <FontAwesomeIcon
                    icon={faTruckRampBox}
                    size="2xl"
                    style={{ color: "#7cf21c" }}
                  />
                </div>
              </Link>
            </div>
            <div class="">
              <Link
                to="users/list/subscribed/AdminUsers"
                class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-2xl  font-bold  tracking-tight text-gray-900 dark:text-white">
                    Manage Subcribers
                  </h5>
                </div>
                <div className=" flex justify-end w-1/2">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2xl"
                    style={{ color: "#005eff" }}
                  />
                </div>
              </Link>
            </div>
            <div class="b">
              <Link
                to="/superadmin/list/request/subscriptions"
                class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-2xl  font-bold   tracking-tight text-gray-900 dark:text-white">
                    Subscription Request
                  </h5>
                </div>
                <div className=" flex justify-end w-1/2">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    size="2xl"
                    style={{ color: "#e85211" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="m-16"> 
        <AdminDashBoardCharts/>
        </div>

        <div className="m-16 flex flex-row grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
           
          <div class="flex">
            <div class="flex p-2 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-3">
                    <div class="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 class="mb-0 font-bold">
                          $53,000
                          <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div class="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <FontAwesomeIcon
                          icon={faUpDown}
                          class=" m-3 text-white"
                          aria-hidden="true"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="flex p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-3">
                    <div class="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 class="mb-0 font-bold">
                          $53,000
                          <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div class="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <FontAwesomeIcon
                          icon={faChain}
                          class=" m-3 text-white"
                          aria-hidden="true"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="flex p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-3">
                    <div class="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 class="mb-0 font-bold">
                          $53,000
                          <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div class="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <FontAwesomeIcon
                          icon={faCoins}
                          class=" m-3 text-white"
                          aria-hidden="true"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="flex p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-3">
                    <div class="flex-none w-2/3 max-w-full px-3">
                      <div>
                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">
                          Today's Money
                        </p>
                        <h5 class="mb-0 font-bold">
                          $53,000
                          <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div class="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                      <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                        <FontAwesomeIcon
                          icon={faTruck}
                          class=" m-3 text-white"
                          aria-hidden="true"
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 m-10">
          <div class="relative shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="flex-auto p-4">
              <div class="flex flex-wrap -mx-3">
                <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
                  <div class="flex flex-col h-full">
                    <p class="pt-2 mb-1 font-semibold">Some Content</p>
                    <h5 class="font-bold">Todays Booking has increased by 5%</h5>
                    <p class="mb-12">
                    Content Writing Examples and How-To Tips for Website Articles ... It's easy to stick to some content length rules and preferenc
                    </p>
                
                  </div>
                </div>
                <div class="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                  <div class="h-full bg-gradient-to-tl from-purple-700 to-pink-500 rounded-xl">
                    <img
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/shapes/waves-white.svg"
                      class="absolute top-0 hidden w-1/2 h-full lg:block"
                      alt="waves"
                    />
                    <div class="relative flex items-center justify-center h-full">
                      <img
                        class="relative z-20 w-full pt-6"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"
                        alt="rocket"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div >
            <SubscriptionAdminDashboard subscriptionTypes={subscriptionTypes}/>
        </div> */}
        {/* <div className="mt-4">
          <AdminDashBoardTable/>
        </div> */}
    
      </div>
    </>
  );
};

export default SuperAdminDashBoard;
