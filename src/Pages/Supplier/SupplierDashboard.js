import { Email, Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faTruck,
  faTruckRampBox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import BooktheViewingComponent from "../../Components/BooktheViewingComponent";
import { BarChart } from "../../Components/Graphs/BarGraph";
import LineChart from "../../Components/Graphs/LineChart";
import PieChart from "../../Components/Graphs/PieChart";
import { NeumorphicDoughnutChart } from "../../Components/Graphs/DoughNutGraph";
import LeveledBoxedComponent from "../../Components/Statistics/LevelBoxedComponent";

const SupplierDashBoard = () => {
  const { setLoading, Token } = useContext(UserContext);
  const [shipments, setShipments] = useState();
  const [buildings, setBuildings] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/get-buildings`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res.data.status == "ok") {
          setBuildings(res.data.data);
          setLoading(false);
        } else throw new Error(res.data.msg);
      })
      .catch((err) => {
        setBuildings([]);
        setLoading(false);
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/dock/current/bookings`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res.data.status == "ok") {
          setShipments(res.data.data);
          setLoading(false);
        } else throw new Error(res.data.msg);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="w-full admin-dashboard">
        <div className="m-2 flex flex-row-reverse">
          <p className="text-1xl text-white">Nadeem</p>
          <FontAwesomeIcon
            id="avatarButton"
            type="button"
            data-dropdown-toggle="userDropdown"
            data-dropdown-placement="bottom-start"
            className="mt-1 text-white pr-2"
            size="lg"
            icon={faUser}
          ></FontAwesomeIcon>
          {/*         
<FontAwesomeIcon icon={faUser} size="sm" id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="mt-1.5 rounded-full cursor-pointer"/> */}

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
        {/* <div className='flex flex-row w-full w-full items-center pl-3 pt-1 justify-between'>
       
        <div class="mt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        <div className="m-5 text-2xl font-bold heading-class">
          <h2>DASHBOARD</h2>
        </div>
        <div className="flex flex-row w-full items-center pl-5 pt-1 justify-between">
          <div class="w-5/6 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div class="m-1">
              <Link
                to="/dock-booking"
                class="flex max-w-sm  p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white heading-class">
                    Book Dock
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
            <div class="m-1">
              <Link
                to="/vehicle-update"
                class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white heading-class">
                    Vehicles
                  </h5>
                </div>
                <div className=" flex justify-end w-1/2">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="xl"
                    className="text-violet-500"
                  />
                </div>
              </Link>
            </div>
            <div class="m-1">
              <Link
                to="/shipments-list/2"
                class="flex max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div className="w-1/2">
                  {" "}
                  <h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white heading-class">
                    Shipments
                  </h5>
                </div>
                <div className=" flex justify-end w-1/2">
                  <FontAwesomeIcon
                    icon={faBox}
                    size="xl"
                    className="text-blue-500"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div class="bg-[#F4F5FA] m-6 rounded-xl border border-gray-300">
          {buildings && <BooktheViewingComponent buildings={buildings} />}
        </div>
        <div className="w-full m-2  grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <BarChart />
          </div>
          <div>
            <LineChart />
          </div>
        </div>
        <div className="w-full m-2  grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex justify-center items-center w-full">
            <NeumorphicDoughnutChart />
          </div>
          <div>
            <LeveledBoxedComponent />
          </div>
        </div>

        <div className="mb-20  md:m-20 lg:m-20 w-full md:w-5/6 lg:w-5/6 h-2/5 border-2 flex justify-center items-center bg-neutral-200 border-slate-200">
          <p className="1-xl text-slate-400">
            Content / Advertisement Comes Here
          </p>
        </div>
      </div>
    </>
  );
};

export default SupplierDashBoard;
