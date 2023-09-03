import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from "react";

const BooktheViewingComponent = () => {
 
const days=[
  'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'
]

  const settings = {
    dots: false,
    infinite: true,
    //className: "center",
    speed: 500,
    centerPadding: "6px",
    slidesToShow: 3, 
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      }
    ]
   
  };
  
  const sliderStyle = {
    width: '70vw', 
    height: '100px', 
  
  };

  
  return (
    <div className="calender" >
<div className="days-slider" style={sliderStyle}>
      
      <Slider {...settings}>
       
        {days.map((day,index)=>(
          <div className="bg-purple-500 flex items-center pl-1 w-full py-2" >
            <h3 >{day}
              </h3>
          </div>
        ))}
      </Slider>
    </div>
 
  <div class="days">
    <div class="day mon">
      {/* <div class="date">
        <p class="date-num">9</p>
        <br/>
        <p class="date-day">Mon</p>
      </div> */}

    </div>
    <div class="day tues">
      {/* <div class="date">
        <p class="date-num">12</p>
        <p class="date-day">Tues</p>
      </div> */}
      <div class="events">
        <div class="event start-10 end-12 corp-fi">
        <div class="flex">
            <div class="flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="relative flex flex-col min-w-0 mb-2 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
                      <div c>
                        <p class="flex mb-0 font-sans font-semibold leading-normal text-sm">
                         09:00-10:00
                        </p>
                        <h5 class="flex mb-0 text-sm">
                          Dock&nbsp;number
                          {/* <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                            Book
                          </span> */}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="day wed">
      {/* <div class="date">
        <p class="date-num">11</p>
        <p class="date-day">Wed</p>
      </div> */}
      <div class="events">
        <div class="event start-10 end-12 corp-fi">
        <div class="flex">
            <div class="flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div class="relative flex flex-col min-w-0 mb-2 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
                      <div c>
                        <p class="flex mb-0 font-sans font-semibold leading-normal text-sm">
                         09:00-10:00
                        </p>
                        <h5 class="flex mb-0 text-sm">
                          Dock&nbsp;number
                          {/* <span class="leading-normal text-sm font-weight-bolder text-lime-500">
                            Book
                          </span> */}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* <div class="events">
        <div class="event start-12 end-1 writing">
          <p class="title">Writing Seminar</p>
          <p class="time">11 AM - 12 PM</p>
        </div>
        <div class="event start-2 end-5 securities">
          <p class="title">Securities Regulation</p>
          <p class="time">2 PM - 5 PM</p>
        </div>
      </div> */}
    </div>
    <div class="day thurs">
      {/* <div class="date">
        <p class="date-num">12</p>
        <p class="date-day">Thurs</p>
      </div> */}
      {/* <div class="events">
        <div class="event start-10 end-12 corp-fi">
          <p class="title">Corporate Finance</p>
          <p class="time">10 AM - 12 PM</p>
        </div>
        <div class="event start-1 end-4 ent-law">
          <p class="title">Entertainment Law</p>
          <p class="time">1PM - 4PM</p>
        </div>
      </div> */}
    </div>
    <div class="day fri">
      {/* <div class="date">
        <p class="date-num">13</p>
        <p class="date-day">Fri</p>
      </div> */}
      {/* <div class="events">
      </div> */}
    </div>
  </div>
  
    </div>
  );
};
// export default DaysSlider;
  
 
 
export default BooktheViewingComponent;