import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from "react";

const BooktheViewingSliderComponent=()=>{
    
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
    width: '60vw', 
  
  };
    return(
        <div className="" >
    <div className="flex items-center justify-center w-full m-2">
        <h2 className="font-bold text-2xl" >
            Catering Building 1
        </h2>
    </div>
    <div className="m-2 flex justify-center overflow-x-scroll">
    <div class="grid grid-cols-1 md:grid-cols-6">

    <div class="col-span-1 md:col-span-1 ">
  <ul className="ml-2">
    <li>
    <div className="flex bg-blue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
            <h3 >Docks 
              </h3>
          </div>
          </div>
            </div>
            </div>
    </li>
    <li>
    <div className="m-2 flex bg-blue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
            <h3 >Dock 1 
              </h3>
          </div>
          </div>
            </div>
            </div> 
    </li>
    <li>
    <div className="m-2 flex bg-blue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
            <h3 >Dock 2
              </h3>
          </div>
          </div>
            </div>
            </div> 
    </li>
    <li>
    <div className="m-2 flex bg-blue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
            <h3 >Dock 1 
              </h3>
          </div>
          </div>
            </div>
            </div> 
    </li>
  </ul>
  </div>
  <div class="col-span-5 md:col-span-5 ">
  <div className="days-slider" style={sliderStyle}>
      
      <Slider {...settings}>
       
        {timeSlots.map((day,index)=>(
          <div>
              <div className="m-2 flex bg-blue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
            <h3 >{day}
              </h3>
          </div>
          </div>
            </div>
            </div>
          <div className=" m-2 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
          <h3 >Available
            </h3>
            </div>
            </div>
            </div>
        </div>
        <div className="m-2 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
          <h3 >Available
            </h3>
            </div>
            </div>
            </div>
        </div>
        <div className="m-2 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
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
  </div>
   
 
</div>
 </div>

 

  
    </div>
    )
}

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
    slidesToShow: 1, 
    slidesToScroll: 1,
    centerMode: true, 
	initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, 
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
        },
      }
    ]
   
  };
  
  const sliderStyle = {
    width: '80vw', 
  
  };
    return(
        <div className="" >
        <BooktheViewingSliderComponent/>
        
 </div>
)
};
// export default DaysSlider;
  
 
 
export default BooktheViewingComponent;