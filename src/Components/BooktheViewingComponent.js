import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";

const BooktheViewingSliderComponent=({dockStatus,building,name})=>{    
    const timeSlots=[
      '00:00 00:30', '00:30 01:00', '01:00 01:30',
      '01:30 02:00', '02:00 02:30', '02:30 03:00',
      '03:00 03:30', '03:30 04:00', '04:00 04:30',
      '04:30 05:00', '05:00 05:30', '05:30 06:00',
      '06:00 06:30', '06:30 07:00', '07:00 07:30',
      '07:30 08:00', '08:00 08:30', '08:30 09:00',
      '09:00 09:30', '09:30 10:00', '10:00 10:30',
      '10:30 11:00', '11:00 11:30', '11:30 12:00',
      '12:00 12:30', '12:30 13:00', '13:00 13:30',
      '13:30 14:00', '14:00 14:30', '14:30 15:00',
      '15:00 15:30', '15:30 16:00', '16:00 16:30',
      '16:30 17:00', '17:00 17:30', '17:30 18:00',
      '18:00 18:30', '18:30 19:00', '19:00 19:30',
      '19:30 20:00', '20:00 20:30', '20:30 21:00',
      '21:00 21:30', '21:30 22:00', '22:00 22:30',
      '22:30 23:00', '23:00 23:30', '23:30 00:00'
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
        <h2 className="font-bold text-2xl heading-class" >
        {name.toUpperCase()}
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
    {dockStatus.map((dockstatus,index)=>(
      <li>
    <div className="m-2 flex bg-blue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
            <h3 >{dockstatus.dock.dock_number}
              </h3>
          </div>
          </div>
            </div>
            </div> 
    </li>
    ))}
    
  </ul>
  </div>
  <div class="col-span-5 md:col-span-5 ">
  <div className="days-slider" style={sliderStyle}>
      
      <Slider {...settings}>
       
        {timeSlots.map((time,index)=>(
          <div>
              <div className="m-2 flex bg-blue border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
            <h3 >{time}
              </h3>
          </div>
          </div>
            </div>
            </div>
            {dockStatus.map((dockstatus,ind)=>(
              <div className=" m-2 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div class="flex-auto p-4">
                  <div class="flex flex-wrap -mx-2">
                    <div class="flex-none w-full max-w-full px-3">
          {dockstatus.dock.status=='close'?<h3>Closed</h3>:(dockstatus.bookedslot.includes(time)?<h3>Booked</h3>:<h3>Available</h3>)}
          
            </div>
            </div>
            </div>
        </div>
            ))}
          
        
        
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

const BooktheViewingComponent = ({buildings}) => {
    const {setLoading,Token}=useContext(UserContext);
    const date=new Date();
    const [selectedBuilding,setBuilding]=useState(buildings[0]);
    const [dockStatus,setDockStatus]=useState();
    const today=dateFormater(date);
    const [name,setName]=useState(buildings[0].building_name);
   
   
    useEffect(()=>{
    if(buildings.length>0){
        
    setBuilding(buildings[0])
      setLoading(true)
       axios
      .get(`${baseUrl}/dock/available/building?date=${today}&&days=${1}&&building_id=${selectedBuilding._id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(function (response) {
        if (response.data != "") {
          console.log(response.data);
          setDockStatus(response.data.data)
          setLoading(false);
        } else {
          setDockStatus("")
            throw new Error("something went wrong")
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
    }
    },[selectedBuilding,setBuilding])
    return(
        <div className="" >
        <div className="m-2 w-1/2"> 
{buildings && <select id="countries" 
 onChange={(e)=>{
  
  setBuilding(JSON.parse(e.target.value))
  setName(JSON.parse(e.target.value).building_name)
}}
class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  
  
  {buildings.map((building,index)=>(
    <>
    {index==0?
    <option selected value={JSON.stringify(building)}>{building.building_name}</option>:
      <option value={JSON.stringify(building)}>{building.building_name}</option>}
    
    </>
     
  ))}
</select>}

</div>
       {buildings.length>0 && dockStatus && <BooktheViewingSliderComponent dockStatus={dockStatus} building={selectedBuilding} name={name}/>} 
        
 </div>
)
};
// export default DaysSlider;
  
 
 
export default BooktheViewingComponent;