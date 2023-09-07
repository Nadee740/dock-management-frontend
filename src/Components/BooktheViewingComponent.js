import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from "react";

const BooktheViewingComponent = () => {
 
  const timeSlots=[
    '00:00-00:30', '00:30-01:00', '01:00-01:30',
    '01:30-02:00', '02:00-02:30', '02:30-03:00',
    '03:00-03:30', '03:30-04:00', '04:00-04:30',
    '04:30-05:00', '05:00-05:30', '05:30-06:00',
    '06:00-06:30', '06:30-07:00', '07:00-07:30',
    '07:30-08:00', '08:00-08:30', '08:30-09:00',
    '09:00-09:30', '09:30-10:00', '10:00-10:30',
    '10:30-11:00', '11:00-11:30', '11:30-12:00',
    '12:00-12:30', '12:30-13:00', '13:00-13:30',
    '13:30-14:00', '14:00-14:30', '14:30-15:00',
    '15:00-15:30', '15:30-16:00', '16:00-16:30',
    '16:30-17:00', '17:00-17:30', '17:30-18:00',
    '18:00-18:30', '18:30-19:00', '19:00-19:30',
    '19:30-20:00', '20:00-20:30', '20:30-21:00',
    '21:00-21:30', '21:30-22:00', '22:00-22:30',
    '22:30-23:00', '23:00-23:30', '23:30-00:00'
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
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
        },
      }
    ]
   
  };
  
  const sliderStyle = {
    width: '50vw', 
    height: '100px', 
  
  };

  
  return (
    <div className="calender" >
<div className="days-slider" style={sliderStyle}>
      
      <Slider {...settings}>
       
        {timeSlots.map((day,index)=>(
          <div>
              <div className="flex bg-blue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
            <h3 >{day}
              </h3>
          </div>
          </div>
            </div>
            </div>
          <div className="flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
          <h3 >Available
            </h3>
            </div>
            </div>
            </div>
        </div>
        <div className="flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
          <h3 >Available
            </h3>
            </div>
            </div>
            </div>
        </div>
        <div className="flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
          <h3 class="flex mb-0 text-l">Available
            </h3>
            </div>
            </div>
            </div>
        </div>
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