import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import { baseUrl } from "../utils/baseurl";
import axios from "axios";
import { Link } from "react-router-dom";

const AddNewVehicleForm = () => {
  const {setLoading}=useContext(UserContext);
  const [vehicle_no,setVehicleNo]=useState();
  const [vehicleType,setVehicleType]=useState();
  const [driver_name,setDriverName]=useState();
  const [driver_no,setDriverNo]=useState();
  const [driver_nric,setDriverNRIC]=useState();
  const submit=(e)=>{
        e.preventDefault();
        ///api/create-vehicle
        const data={
          driver_name,
          nric_no:driver_nric,
          driver_no,
          vehicle_no,
          vehicle_type:vehicleType
        }
        setLoading(true);
        const token = localStorage.getItem("EZTOken");
        axios.post(`${baseUrl}/create-vehicle`,data,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res)=>{
          if(res.data.status=="ok"){
            alert("vehicle created")
            setDriverNRIC('')
            setDriverName('')
            setDriverNo('')
            setVehicleNo('')
            setVehicleType('')

          }
          else{
            alert("err")
            console.log(res.data.msg)
          }
          setLoading(false);
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  return (
    <>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium">
          <FontAwesomeIcon icon={faCar} className="mr-5" />
          Add Vehicle
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={submit}>
        <div class="">
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="vehiclenumber">
              Vehicle Number
            </label>
            <input
              placeholder="Vehicle Number"
              id="vehiclenumber"
              type="text"
              value={vehicle_no}
            onChange={(e)=>{
                setVehicleNo(e.target.value)
            }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
            />
          </div>
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="Vechicletype">
              Vehicle Type
            </label>
            <select
            required
            onChange={(e)=>{
            setVehicleType(e.target.value)
            }}
              id="Vechicletype"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option>---Choose Vehicle Type ---</option>
              <option value="10 Footer">10 Footer</option>
              <option value="10 Tailgate Truck">10 Tailgate Truck</option>
              <option value="14 Footer">14 Footer</option>
              <option value="16 Footer">16 Footer</option>
              <option value="18 Footer">18 Footer</option>
              <option value="20 Tailgate Truck">20 Tailgate Truck</option>
              <option value="22 Footer">22 Footer</option>
              <option value="24 Footer">24 Footer</option>
              <option value="40 Footer">40 Footer</option>
              <option value="CherryPicker">CherryPicker</option>
              <option value="Motorbike">Motorbike</option>
              <option value="Scissor Lift">Scissor Lift</option>
              <option value="Van">Van</option>
            </select>
          </div>

          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="drivername">
              Driver Name
            </label>
            <input
              placeholder="Driver Name"
              id="drivername"
              type="text"
              value={driver_name}
            onChange={(e)=>{
                setDriverName(e.target.value)
            }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="drivernumber">
              Driver Number
            </label>
            <input
              placeholder="Driver Number"
              id="drivernumber"
              type="text"
              value={driver_no}
            onChange={(e)=>{
                setDriverNo(e.target.value)
            }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="drivernrif">
              Driver NRIF/FIN
            </label>
            <input
              placeholder="Driver NRIF/FIN"
              id="drivernrif"
              type="text"
              value={driver_nric}
            onChange={(e)=>{
                setDriverNRIC(e.target.value)
            }}
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button  type="submit" class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
          <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
          <Link to="/"> Cancel</Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewVehicleForm;
