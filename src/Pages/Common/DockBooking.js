import { useContext, useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../../utils/baseurl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faBackward,
  faCheck,
  faDiagramNext,
} from "@fortawesome/free-solid-svg-icons";
import CryptoJS from "crypto-js";
import AlertDialog from "../../Components/AlertDialogue";

const dateConverter = (inputdate) => {
  const date = new Date(inputdate);
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  let year = date.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
};
const DockBooking = ({ bookingDetail }) => {
  const [step, setStep] = useState(0);
  const { setLoading, Token, user } = useContext(UserContext);
  const [companyData, setCompanyData] = useState([]);
  const [buildingData, setBuildingData] = useState([]);
  const [vehiclesData, setVehiclesData] = useState([]);
  const [docktypes, setDocktypedata] = useState([]);
  const [dockSData, setDocksData] = useState([]);

  const [billType, setBillType] = useState(null);
  const [billno, setBillNo] = useState(null);

  const [company_id, setcompany_id] = useState(null);
  const [company_name, setCompanyName] = useState(null);
  const [building_id, setBUilding_id] = useState(null);
  const [building_name, setBuildingName] = useState(null);
  const [vehicle_id, setVehicle_id] = useState(null);
  const [vehicleName, setVehicleName] = useState(null);
  const [vehicleType, setVehicleType] = useState("");
  const [driver_name, setDriver_name] = useState(null);
  const [driver_nrif, setDriver_nrif] = useState(null);
  const [dock_type_id, setDock_type_id] = useState(null);
  const [docktype_name, setDocktypeName] = useState(null);
  const [suppliers_list, set_supplier_list] = useState([]);
  const [dock_id, set_dock_id] = useState(null);
  const [dock_name, setDockName] = useState(null);
  const [date, setDate] = useState("");
  const [bookforMultipleDays, setBookforMultipleDays] = useState(1);
  const [selectedtimeSlots, setSelectedTimeSlots] = useState([]);
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const today = dateConverter(d);
  const [booked_date_array, setBookedDatesArray] = useState([today]);
  const [availableTimeslots, setAvailableTimeslots] = useState([]);
  const [open1, setOpen1] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalText, setModalText] = useState("");

  const get_min = () => {
    console.log(today);
    return today;
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/get-companies`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(function (response) {
        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setCompanyData(response.data.data);
        } else {
          setCompanyData(null);
          console.log("errr");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/get-buildings`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(function (response) {
        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setBuildingData(response.data.data);
        } else {
          setBuildingData(null);
          console.log("errr");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
  }, []);
  useEffect(() => {
    if (date && dock_type_id && dock_id) {
      setLoading(true);
      axios
        .get(
          `${baseUrl}/dock/available/dock-building?date=${dateConverter(
            date
          )}&&days=${bookforMultipleDays}&&dock_id=${dock_id}`,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then(function (response) {
          if (response.data != "") {
            console.log(response.data.data);
            setAvailableTimeslots(response.data.data[0].timeslot);
            setLoading(false);
          } else {
            throw new Error("something went wrong");
          }
        })
        .catch(function (error) {
          setLoading(false);
          console.log("FAILED!!! ", error);
        });
    }
  }, [bookforMultipleDays, date, dock_id, dock_name]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/get-vehicles`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(function (response) {
        console.log("success", response, "response.data");
        if (response.data != "") {
          setVehiclesData(response.data.data);
        } else {
          setVehiclesData(null);
          console.log("errr");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    // console.log(booked_date_array)
    axios
      .get(`${baseUrl}/get-dock-type`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(function (response) {
        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setDocktypedata(response.data.data);
        } else {
          setDocktypedata(null);
          console.log("errr");
        }
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setAvailableTimeslots([]);
    axios
      .get(`${baseUrl}/get-docks-by-docktype/${dock_type_id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(function (response) {
        console.log("success", response, "response.data");
        if (response.data != "") {
          console.log(response.data);
          setDocksData(response.data.data);
          setLoading(false);
        } else {
          setDocksData(null);
          console.log("errr");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setDockName(-1);
  }, [dock_type_id]);

  useEffect(() => {
    setLoading(true);
    const booked_dates = [];
    let i = 0;
    while (i < bookforMultipleDays) {
      const value = new Date(date);
      value.setDate(value.getDate() + i);
      booked_dates.push(dateConverter(value));
      i++;
    }
    console.log(booked_date_array);
    setBookedDatesArray(booked_dates);
    setLoading(false);
  }, [date, setBookforMultipleDays, bookforMultipleDays]);

  function encrypt(data, key) {
    let encJson = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson));
  }

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true)
    const booked_dates = [];
    let i = 0;
    while (i < bookforMultipleDays) {
      const value = new Date(date);
      value.setDate(value.getDate() + i);
      booked_dates.push(dateConverter(value));
      i++;
    }
    const data = {
      bill_no: billno,
      bill_type: billType,
      delivery_company_id: company_id,
      building_id,
      dock_type_id,
      dock_id,
      booked_dates: booked_dates,
      timeslots: selectedtimeSlots,
      vehicle_id,
    };
    axios
      .post(`${baseUrl}/dock/book/multiple`, data, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        if (res.data.status === "ok") {
          console.log(res.data);
          const val = JSON.stringify(res.data);
          sessionStorage.setItem("bookingdata", val);
          const id = res.data.data[0].data._id;
          const _id = encrypt(id, "keyvalue");
          window.location.href = "/booking-confirm/" + _id;
        } else {
          alert(res.data.msg);
        }
      })
      .catch(function (error) {
        console.log("FAILED!!! ", error);
      }).finally(()=>{
        setLoading(true)
      });
  };

  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center justify-between">
        <section class="h-max text-black w-full p-8 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <div className="flex items-center justify-between  p-4 ">
            <h2 className="text-3xl font-medium heading-class">
              <FontAwesomeIcon icon={faEdit} /> Add New Booking
            </h2>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li
              onClick={() => {
                if (step > 0) setStep(0);
              }}
              class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {step >= 1 ? (
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                ) : (
                  <span class="mr-2">1</span>
                )}
                Bill{" "}
                <span class="hidden sm:inline-flex sm:ml-2">Information</span>
              </span>
            </li>
            <li
              onClick={() => {
                if (step > 1) setStep(1);
              }}
              class="text-blue-600 flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {step >= 2 ? (
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                ) : (
                  <span class="mr-2">2</span>
                )}
                Dock <span class="hidden sm:inline-flex sm:ml-2">Info</span>
              </span>
            </li>
            <li
              onClick={() => {
                if (step > 2) setStep(2);
              }}
              class="text-blue-600 flex items-center"
            >
              <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {step >= 3 ? (
                  <svg
                    class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                ) : (
                  <span class="mr-2">3</span>
                )}
              </span>
              Confirmation
            </li>
          </ol>
          {step == 0 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(1);
              }}
            >
   <div className="w-full mt-10 flex flex-col sm:items-center sm:justify-center">
  {/* <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1"> */}
                  <div className="sm:w-1/2">
                    <label
                      class="flex text-black dark:text-gray-200"
                      for="company"
                    >
                      Bill Type <p className="pl-1 text-red-600">*</p>
                    </label>
                    <select
                      required
                      onChange={(e) => {
                        setBillType(e.target.value);
                      }}
                      class="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    >
                      {billType ? (
                        <></>
                      ) : (
                        <option value="">---Choose Bill Type---</option>
                      )}
                      <option value="P.O No / W.O No">P.O No / W.O No</option>
                      <option value="D.o Number">D.o Number</option>
                      <option value="Airway Bill No">Airway Bill No</option>
                      <option value=" B/L No">B/L No</option>
                    </select>
                  </div>
                  <div  className="sm:w-1/2">
                    <label class="text-black dark:text-gray-200" for="bl_no">
                      Bill No{" "}
                    </label>
                    <input
                      required
                      value={billno}
                      onChange={(e) => {
                        setBillNo(e.target.value);
                      }}
                      id="bl_no"
                      type="text"
                      class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="sm:w-1/2">
                    <label
                      class="flex text-black dark:text-gray-200"
                      for="company"
                    >
                      Company (Delivery To){" "}
                      <p className="pl-1 text-red-600">*</p>
                    </label>
                    <select
                      required
                      onChange={(e) => {
                        setcompany_id(JSON.parse(e.target.value)._id);
                        setCompanyName(JSON.parse(e.target.value));
                      }}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    >
                      {company_id ? (
                        <></>
                      ) : (
                        <option value="">---Choose Company---</option>
                      )}
                      {companyData.map((c, index) => {
                        return (
                          <option value={JSON.stringify(c)}>
                            {c.company_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="sm:w-1/2">
                    <label
                      class="flex text-black dark:text-gray-200"
                      for="building"
                    >
                      Building Name<p className="pl-1 text-red-600">*</p>
                    </label>
                    <select
                      required
                      onChange={(e) => {
                        setBUilding_id(JSON.parse(e.target.value)._id);
                        setBuildingName(JSON.parse(e.target.value));
                      }}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    >
                      {building_id ? (
                        <></>
                      ) : (
                        <option value={-1}>---Choose Building---</option>
                      )}
                      {buildingData.map((b, index) => {
                        return (
                          <option value={JSON.stringify(b)}>
                            {b.building_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="sm:w-1/2">
                    <label
                      class="flex text-black dark:text-gray-200"
                      for="vehicle"
                    >
                      Vehicle Number <p className="pl-1 text-red-600">*</p>
                    </label>
                    <select
                      required
                      onChange={(e) => {
                        console.log(e.target.value);
                        if (
                          e.target.value == -1 ||
                          e.target.value == "-1" ||
                          e.target.value == ""
                        ) {
                          setVehicle_id(null);
                          setVehicleName("");
                          setDriver_name("");
                          setVehicleType("");
                          setDriver_nrif("");
                        } else {
                          setVehicle_id(JSON.parse(e.target.value)._id);
                          setVehicleName(JSON.parse(e.target.value));
                          setVehicleType(
                            JSON.parse(e.target.value).vehicle_type
                          );
                          setDriver_name(
                            JSON.parse(e.target.value).driver_name
                          );
                          setDriver_nrif(JSON.parse(e.target.value).nric_no);
                        }
                      }}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    >
                      {vehicle_id ? (
                        <></>
                      ) : (
                        <option value="">--- Choose Vehicle Number ---</option>
                      )}
                      {vehiclesData.map((v, index) => {
                        return (
                          <option value={JSON.stringify(v)}>
                            {v.vehicle_no}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="sm:w-1/2">
                    <label class="text-black dark:text-gray-200" for="password">
                      Vehicle Type
                    </label>
                    <input
                      readOnly
                      value={vehicleType}
                      id="vehicletype"
                      type="text"
                      class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="sm:w-1/2">
                    <label class="text-black dark:text-gray-200" for="password">
                      Driver Name
                    </label>
                    <input
                      readOnly
                      value={driver_name}
                      id="drivername"
                      type="text"
                      class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="sm:w-1/2">
                    <label class="text-black dark:text-gray-200" for="password">
                      Driver NRIC/FIN
                    </label>
                    <input
                      readOnly
                      value={driver_nrif}
                      id="password"
                      type="text"
                      class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="sm:w-1/2">
                    <label class="block text-sm font-medium text-black">
                      Attach Documents
                    </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span class="">Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                            />
                          </label>
                          <p class="pl-1 text-black">or drag and drop</p>
                        </div>
                        <p class="text-xs text-black">a File</p>
                      </div>
                    </div>
                  </div>
                <div className="w-full flex justify-center p-6">

                    <button
                      type="submit"
                      className="flex items-center justify-center ml-6 mr-4 sm:w-48 bg-green-400 px-6 py-2 leading-5 text-white transition-colors duration-200 transform  rounded-md hover:bg-green-600 focus:outline-none focus:bg-gray-600"
                    >
                    <p className="heading-class">Next</p>
                      <FontAwesomeIcon
                        className="ml-4 text-white"
                        icon={faArrowRight}
                      ></FontAwesomeIcon>
                    </button>
                  </div>
              </div>
            </form>
          )}
          {step == 1 && (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (dock_type_id == null || dock_name == -1 || date == "") {
                    setModalHeading("Please Fill All Columns");

                    setOpen1(true);
                  } else if (selectedtimeSlots.length > 0) setStep(2);
                  else {
                    setModalHeading("Please choose time slot");

                    setOpen1(true);
                  }
                }}
              >
                <div className="w-full mt-10 flex flex-col sm:items-center sm:justify-center m-3 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="sm:w-1/2">
                      <label
                        class="flex text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Dock Type <p className="pl-1 text-red-600">*</p>
                      </label>
                      <select
                        required
                        onChange={(e) => {
                          if (e.target.value != "") {
                            setDock_type_id(JSON.parse(e.target.value)._id);
                            setDocktypeName(JSON.parse(e.target.value));
                            setDockName(-1);
                          }
                        }}
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      >
                        {dock_type_id ? (
                          <></>
                        ) : (
                          <option value="">---Dock Type ---</option>
                        )}
                        {docktypes.map((d, index) => {
                          return (
                            <option value={JSON.stringify(d)}>
                              {d.dock_type}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="sm:w-1/2">
                      <label
                        class="flex text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Select Dock<p className="pl-1 text-red-600">*</p>
                      </label>
                      {
                        <select
                          required
                          disabled={
                            dock_type_id == null ||
                            vehicle_id == null ||
                            company_id == null ||
                            building_id == null ||
                            billno == null ||
                            billno == ""
                          }
                          value={dock_name}
                          onChange={(e) => {
                            set_dock_id(JSON.parse(e.target.value)._id);
                            setDockName(JSON.parse(e.target.value));
                          }}
                          class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        >
                          {dock_name == -1 ? (
                            <option value={-1}>--- Select Dock ---</option>
                          ) : (
                            <></>
                          )}
                          {dockSData.map((d, index) => {
                            return (
                              <option value={JSON.stringify(d)}>
                                {d.dock_number}
                              </option>
                            );
                          })}
                        </select>
                      }
                    </div>
                    <div className="sm:w-1/2">
                      <label
                        class="text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Date
                      </label>
                      <input
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                        id="date"
                        type="date"
                        min={get_min()}
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="sm:w-1/2">
                      <label
                        class="flex text-black dark:text-gray-200"
                        for="passwordConfirmation"
                      >
                        Book for multiple days
                        <p className="pl-1 text-red-600">*</p>
                      </label>
                      <select
                        required
                        value={bookforMultipleDays}
                        onChange={(e) => {
                          setBookforMultipleDays(e.target.value);
                        }}
                        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      >
                        <option value={1}>Single Day</option>
                        {/* )} */}
                        {[2, 3, 4, 5, 6, 7, 8].map((data, index) => {
                          return <option value={data}>{data}&nbsp; Day</option>;
                        })}
                      </select>
                    </div>
               
                  {date && dock_type_id && dock_id && availableTimeslots && (
                    <div class="w-5/6 grid grid-cols-1 gap-2 mt-2 sm:grid-cols-5   ">
                      {availableTimeslots.map((element, index) => {
                        return (
                          <div
                            id={index}
                            class="border-solid border-2 flex items-center pl-3 rounded-lg"
                          >
                            <input
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedTimeSlots([
                                    ...new Set([...selectedtimeSlots, element]),
                                  ]);
                                  console.log(selectedtimeSlots);
                                } else if (!e.target.checked) {
                                  setSelectedTimeSlots(
                                    selectedtimeSlots.filter(
                                      (elem) => elem != element
                                    )
                                  );
                                }
                              }}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class=" py-1 ml-1 text-xs font-small text-gray-900 dark:text-gray-300"
                            >
                              {element}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className="w-full flex justify-center p-6">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(step - 1);
                      }}
                      className="mr-6 w-24 sm:w-48  bg-red-200 px-6 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-red-500 focus:outline-none focus:bg-gray-600"
                    >
                      <FontAwesomeIcon
                        className="ml-2 text-white"
                        icon={faArrowLeft}
                      ></FontAwesomeIcon>
                    </button>

                    <button
                      type="submit"
                      className="flex sm:justify-center sm:items-center ml-6 mr-4 w-24 sm:w-48 bg-green-400 px-6 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-green-600 focus:outline-none focus:bg-gray-600"
                    >
                    <p>Next</p>
                      <FontAwesomeIcon
                        className="ml-4 text-white"
                        icon={faArrowRight}
                      ></FontAwesomeIcon>
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
            </>
          )}

          {selectedtimeSlots.length > 0 && (
            <>
              {step == 2 && (
                <>
                  <form onSubmit={submitForm}>
                    <div className="flex items-center justify-between  p-4 ">
                      <h2 className="text-2xl font-medium text-blue-600">
                        Booking Confirmation
                      </h2>
                    </div>

                    <div class="relative  ">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-scroll">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3">
                              NO .
                            </th>
                            <th scope="col" class="px-6 py-3">
                              BILL NUMBER
                            </th>
                            <th scope="col" class="px-6 py-3">
                              DATE
                            </th>
                            <th scope="col" class="px-6 py-3">
                              TIME
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedtimeSlots.map((data, index) => {
                            return booked_date_array.map((el, ind) => {
                              return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                  >
                                    {index * bookforMultipleDays + ind + 1}
                                  </th>
                                  <td class="px-6 py-4">{billno}</td>
                                  <td class="px-6 py-4">{el}</td>
                                  <td class="px-6 py-4">{data}</td>
                                </tr>
                              );
                            });
                          })}
                        </tbody>
                      </table>
                    </div>

                    <div className="w-full flex justify-center mt-10">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(step - 1);
                      }}
                      className="mr-6 w-24 sm:w-48  bg-red-200 px-6 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-red-500 focus:outline-none focus:bg-gray-600"
                    >
                      <FontAwesomeIcon
                        className="ml-2 text-white"
                        icon={faArrowLeft}
                      ></FontAwesomeIcon>
                    </button>

                    <button
                      type="submit"
                      className="flex sm:justify-center sm:items-center ml-6 mr-4 w-24 sm:w-48 bg-green-400 px-6 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-green-600 focus:outline-none focus:bg-gray-600"
                    >
                    <p>Confirm</p>
                      <FontAwesomeIcon
                        className="ml-4 text-white"
                        icon={faArrowRight}
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                  </form>
                </>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default DockBooking;
