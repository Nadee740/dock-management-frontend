import { faCancel, faCar, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import { baseUrl } from "../utils/baseurl";
import axios from "axios";
import { Link } from "react-router-dom";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { useEffect } from "react";

const AddNewVehicleForm = () => {
  const { setLoading, Token, user } = useContext(UserContext);
  console.log(user)
  const [vehicle_no, setVehicleNo] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [driver_name, setDriverName] = useState();
  const [driver_no, setDriverNo] = useState();
  const [driver_nric, setDriverNRIC] = useState();
  const [suppliers_list,set_supplier_list]=useState([])
  const [selected_supplier,setSelectedSupplier]=useState("invalid")
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalText, setModalText] = useState("");
  useEffect(()=>{
    axios.get(`${baseUrl}/get-suppliers`,{
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then( function (response){
        if(response.data!=""){
          set_supplier_list(response.data.data);
          console.log(response.data.data)
        }
        else{
          set_supplier_list(null);
        
        }
        
      })
      .catch(function (err){
        
        console.log("FAILED! ",err);
      }).finally(()=>{
        setLoading(false);
      })
  },[])

  const SubmitButton = (e) => {
    e.preventDefault();
    console.log(user.userType)
    console.log(selected_supplier)
    if(user.userType == "admin"  && selected_supplier=="invalid")
    {
        setModalHeading("Invalid")
        setModalText("please select supplier ")
        setOpen1(true)
        return;
    }
    if(user.userType=="supplier"){
        setSelectedSupplier(user._id)
    }
    setOpen2(true);
    setModalHeading("Confirm ");
    setModalText(
      "Are You Sure You Want To Create Vehicle With Provided Details"
    );
  };

  const submit = (e) => {
    const data = {
     supplier_id:selected_supplier,
      driver_name,
      nric_no: driver_nric,
      driver_no,
      vehicle_no,
      vehicle_type: vehicleType,
    };
    setLoading(true);
    const token = localStorage.getItem("EZTOken");
    axios
      .post(`${baseUrl}/create-vehicle`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status == "ok") {
          setModalHeading("Vehicle Created Successfully");
          setModalText("Your vehicle have been created successfully . Thanks For Using our Service");
          setDriverNRIC("");
          setDriverName("");
          setDriverNo("");
          setVehicleNo("");
          setVehicleType("");
          setOpen1(true);
        } else {
          setModalHeading("Something Went wrong");
          setModalText("Something Went wrong.Please Try again after sometime");
          setOpen1(true);
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        setModalHeading("Something Went wrong ");
        setModalText("Something Went wrong.Please Try again after sometime");
        setOpen1(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium">
          <FontAwesomeIcon icon={faCar} className="mr-5" />
          Add Vehicle
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="flex flex-col w-full sm:justify-center sm:items-center">
          {user.userType == "admin" && (
            <div className="mb-2 sm:w-1/2">
              <label class="heading-class text-black dark:text-gray-200" for="Vechicletype">
                Supplier
              </label>
              <select
                required
                onChange={(e) => {
                  setSelectedSupplier(e.target.value)
                }}
                id="Vechicletype"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option value={"invalid"} >---Select Supplier ---</option>
                
                {suppliers_list.map((supplier,index)=>(
                    <option value={supplier.supplier_id._id}>{supplier.supplier_id.name}</option>
                ))}

              </select>
            </div>
          )}
          <div className="mb-2 sm:w-1/2">
            <label class="heading-class text-black dark:text-gray-200" for="vehiclenumber">
              Vehicle Number
            </label>
            <input
              placeholder="Vehicle Number"
              id="vehiclenumber"
              type="text"
              required
              value={vehicle_no}
              onChange={(e) => {
                setVehicleNo(e.target.value);
              }}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
            />
          </div>
          <div className="mb-2 sm:w-1/2">
            <label class="heading-class text-black dark:text-gray-200 heading-class" for="Vechicletype">
              Vehicle Type
            </label>
            <select
              required
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              id="Vechicletype"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
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

          <div className="mb-2 sm:w-1/2">
            <label class="heading-class text-blackdark:text-gray-200" for="drivername">
              Driver Name
            </label>
            <input
              placeholder="Driver Name"
              id="drivername"
              type="text"
              required
              value={driver_name}
              onChange={(e) => {
                setDriverName(e.target.value);
              }}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2 sm:w-1/2">
            <label class="heading-class text-blackdark:text-gray-200" for="drivernumber">
              Driver Number
            </label>
            <input
              placeholder="Driver Number"
              id="drivernumber"
              type="text"
              value={driver_no}
              onChange={(e) => {
                setDriverNo(e.target.value);
              }}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div className="mb-2 sm:w-1/2">
            <label class="heading-class text-blackdark:text-gray-200" for="drivernrif">
              Driver NRIF/FIN
            </label>
            <input
              placeholder="Driver NRIF/FIN"
              id="drivernrif"
              type="text"
              required
              value={driver_nric}
              onChange={(e) => {
                setDriverNRIC(e.target.value);
              }}
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
            
        <div className="flex justify-between sm:w-1/2 ">
                  <div className="flex justify-start pr-6 pt-6 pb-6 ">
                  <button
                      type="button "
                      onClick={()=>{
                      }}
                      className="flex justify-start mr-4  w-32 border-2 border-blue-500 rounded  text-blue-600 px-2 py-1 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-slate-200 focus:outline-none focus:bg-gray-600"
                    >
                    
                      <FontAwesomeIcon
                        className=" text-blue-600 m-1 mt-2"
                        icon={faCancel}
                      ></FontAwesomeIcon>
                      <p className="m-1 text-blue-600">Cancel</p>
                    </button>

                  </div>
                  <div className="flex pt-6 pb-6 pl-6 ">
                  <button
                      type="submit"
                      className="flex justify-end sm:items-center ml-6  w-32 bg-blue-600 px-8 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-blue-400 focus:outline-none focus:bg-gray-600"
                    >
                    <p>Submit</p>
                      <FontAwesomeIcon
                        className="ml-2 mt-1 text-white"
                        icon={faCheckCircle}
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                   </div>
        </div>
      
      </form>
      <AlertDialog
        open={open1}
        setOpen={setOpen1}
        modalHeading={modalHeading}
        modalText={modalText}
      />
      <ConfirmDialog
        open={open2}
        setOpen={setOpen2}
        modalHeading={modalHeading}
        modalText={modalText}
        confirmFunction={submit}
      />
    </>
  );
};

export default AddNewVehicleForm;
