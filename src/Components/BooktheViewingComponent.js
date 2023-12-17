import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import ShowBookingDetailsModal from "./Modals/ShowBookingDetailsModal";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";
import Lottie from "lottie-react";
import loading_animation from "../animations/loading_animation.json";

const BooktheViewingSliderComponent = ({
  dockStatus,
  building,
  setOpen,
  set_booking_details,
}) => {
  const timeSlots = [
    "00:00 00:30",
    "00:30 01:00",
    "01:00 01:30",
    "01:30 02:00",
    "02:00 02:30",
    "02:30 03:00",
    "03:00 03:30",
    "03:30 04:00",
    "04:00 04:30",
    "04:30 05:00",
    "05:00 05:30",
    "05:30 06:00",
    "06:00 06:30",
    "06:30 07:00",
    "07:00 07:30",
    "07:30 08:00",
    "08:00 08:30",
    "08:30 09:00",
    "09:00 09:30",
    "09:30 10:00",
    "10:00 10:30",
    "10:30 11:00",
    "11:00 11:30",
    "11:30 12:00",
    "12:00 12:30",
    "12:30 13:00",
    "13:00 13:30",
    "13:30 14:00",
    "14:00 14:30",
    "14:30 15:00",
    "15:00 15:30",
    "15:30 16:00",
    "16:00 16:30",
    "16:30 17:00",
    "17:00 17:30",
    "17:30 18:00",
    "18:00 18:30",
    "18:30 19:00",
    "19:00 19:30",
    "19:30 20:00",
    "20:00 20:30",
    "20:30 21:00",
    "21:00 21:30",
    "21:30 22:00",
    "22:00 22:30",
    "22:30 23:00",
    "23:00 23:30",
    "23:30 00:00",
  ];
  const [is_loading, set_is_loading] = useState(false);
  const [clicked_index, set_clicked_index] = useState(-1);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerPadding: "6px",
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const sliderStyle = {
    width: "60vw",
  };

  const handleClick = async (timeslot, dock_id, index, ind) => {
    const date = new Date();
    const today = dateFormater(date);
    set_clicked_index(index);
    set_is_loading(true);
    axios
      .post(`${baseUrl}/dock/get-dock-booking-by-building-date`, {
        date: dateFormater(today),
        time: timeslot,
        building_id: building._id,
        dock_id: dock_id,
      })
      .then((res) => {
        console.log(res.data);
        set_booking_details(res.data.data);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        set_clicked_index(-1);
        set_is_loading(false);
      });
  };
  return (
    <div className="">
      <div className="flex items-center justify-center w-full m-2">
        <h2 className="font-bold text-2xl heading-class">
          {building.building_name.toUpperCase()}
        </h2>
      </div>
      <div className="m-2 flex justify-center overflow-x-scroll">
        <div class="grid grid-cols-1 md:grid-cols-6">
          <div class="col-span-1 md:col-span-1 ">
            <ul className="ml-2">
              <li>
                <div className="flex  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap -mx-2">
                      <div class="flex-none w-full max-w-full px-3">
                        <h3 className="heading-class text-black">Docks</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {dockStatus.map((dockstatus, index) => {
                const dock_status=dockstatus.dock.current_occupied?"Occupied":"Available"
                const className=dockstatus.dock.current_occupied?"bg-white border-2 text-red-600 border-red-600 rounded-xl":"bg-white text-green-400 border-2 border-green-400 rounded-xl"
                return(
                <li>
                  <div className="m-2 flex bg-blue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div class="flex-auto p-4">
                      <div class="flex flex-wrap -mx-2">
                        <div class="flex w-full max-w-full px-3">
                          <h3 className="heading-class text-black">
                            {dockstatus.dock.dock_number}
                          </h3>
                          <div class="flex px-3">
                            <div className={className}>
                              <p className="ml-2 mr-2 text-sm">{dock_status}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
              })}
            </ul>
          </div>
          <div class="col-span-5 md:col-span-5 ">
            <div className="days-slider" style={sliderStyle}>
              <Slider {...settings}>
                {timeSlots.map((time, index) => (
                  <div>
                    <div className="m-2 flex border bg-white rounded-lg shadow dark:bg-violet-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div class="flex-auto p-4">
                        <div class="flex flex-wrap -mx-1">
                          <div class="flex-none w-full max-w-full px-2">
                            <h3 className="heading-class text-xs">{time}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {dockStatus.map((dockstatus, ind) => {
                      let classname;
                      let text = "";
                      if (dockstatus.dock.status == "close") {
                        classname =
                          "hover:scale-105 transform transition-transform m-2 flex   bg-white border-2 border-red-400 text-red-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";
                        text = "Closed";
                      } else if (dockstatus.timeslot.includes(time)) {
                        classname =
                          "hover:scale-105 transform transition-transform m-2 flex border bg-white border-2 border-green-400 text-green-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";
                        text = "Available";
                      } else {
                        classname =
                          "hover:scale-105 transform transition-transform m-2 flex bg-slate-300 text-slate-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";
                        text = "Booked";
                      }
                      {
                      }
                      return is_loading && index == clicked_index ? (
                        <div>
                          <div className="w-100 items-center justify-center h-12 hover:scale-105 transform transition-transform m-2 flex bg-slate-300 text-slate-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <Lottie
                              className=""
                              animationData={loading_animation}
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            handleClick(time, dockstatus.dock._id, index, ind);
                          }}
                        >
                          <div className={`relative ${classname} group`}>
                            <div className="flex-auto p-4 heading-class">
                              <div className="flex flex-wrap -mx-2">
                                <div className="flex-none w-full max-w-full px-3">
                                  <h4>{text}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* 
  <div>
                          <div className="w-100 items-center justify-center h-12 hover:scale-105 transform transition-transform m-2 flex bg-slate-300 text-slate-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <Lottie className=""  animationData={loading_animation}/>
                          </div>
                        </div>
                        
                        <div
                          onClick={() => {
                            handleClick(time, dockstatus.dock._id);
                          }}
                        >
                          <div className={`relative ${classname} group`}>
                            <div className="flex-auto p-4 heading-class">
                              <div className="flex flex-wrap -mx-2">
                                <div className="flex-none w-full max-w-full px-3">
                                  <h3>{text}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */
}
function dateFormater(inputDate) {
  const date = new Date(inputDate);
  let month = (date.getMonth() + 1).toString();
  let year = date.getFullYear();
  let day = date.getDate().toString();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}

const BooktheViewingComponent = ({ buildings }) => {
  const { setLoading, Token } = useContext(UserContext);
  const date = new Date();
  const [selectedBuilding, setBuilding] = useState(buildings[0]);
  const [dockStatus, setDockStatus] = useState();
  const today = dateFormater(date);
  const [open, setOpen] = useState(false);
  const [booking_details, set_booking_details] = useState(null);
  useEffect(() => {
    if (buildings.length > 0) {
      // setBuilding(buildings[0]);
      setLoading(true);
      axios
        .get(
          `${baseUrl}/dock/available/building?date=${today}&&days=${1}&&building_id=${
            selectedBuilding._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        )
        .then(function (response) {
          if (response.data != "") {
            setDockStatus(response.data.data);
            setLoading(false);
          } else {
            setDockStatus("");
            throw new Error("something went wrong");
          }
        })
        .catch(function (error) {
          setLoading(false);
          console.log("FAILED!!! ", error);
        });
    }
  }, [selectedBuilding]);
  return (
    <div className="">
      <div className="m-2 w-1/2">
        {buildings && (
          <select
            id="countries"
            onChange={(e) => {
              setBuilding(JSON.parse(e.target.value));
            }}
            class="bg-gray-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {buildings.map((building, index) => (
              <>
                {index == 0 ? (
                  <option selected value={JSON.stringify(building)}>
                    {building.building_name}
                  </option>
                ) : (
                  <option value={JSON.stringify(building)}>
                    {building.building_name}
                  </option>
                )}
              </>
            ))}
          </select>
        )}
      </div>
      {buildings.length > 0 && dockStatus && (
        <BooktheViewingSliderComponent
          setOpen={setOpen}
          dockStatus={dockStatus}
          building={selectedBuilding}
          set_booking_details={set_booking_details}
        />
      )}
      <ShowBookingDetailsModal
        open={open}
        setOpen={setOpen}
        bookingdetails={booking_details}
      />
    </div>
  );
};
// export default DaysSlider;

export default BooktheViewingComponent;
