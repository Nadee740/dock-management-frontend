import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContexts";
import axios from "axios";
import { baseUrl } from "../utils/baseurl";
import AlertDialog from "./AlertDialogue";
import ConfirmDialog from "./ConfirmDialog";
import { Link } from "react-router-dom";
const AddSupplierGroupsForm= ({dockTypes,buildings}) => {
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
    const {setLoading,Token}=useContext(UserContext);
    const [companies,setCompanies]=useState([]);
    const [selectedtimeSlots, setSelectedTimeSlots] = useState([]);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [modalHeading,setModalHeading]=useState("");
    const [modalText,setModalText]=useState("")
    const [groupName,setGroupName]=useState('');
    const [allotedBuilding,setAllotedBuilding]=useState(null);
    const [selectedDockTypes,setSelectedDockTypes]=useState([])
    const [singleQRmultiEntry,setSingleQRmultiEntry]=useState(false);
    
     
    const SubmitButton=(e)=>{
        e.preventDefault();
       
        if(false)
        {
            setModalHeading("Please Fill All Columns");
            setOpen1(true);

        }
        else{
            setOpen2(true);
            setModalHeading("Alert")
            setModalText("Are You Sure You Want To Add Admin With Provideed Details");
        }
    
    }

    const submitData=async()=>{
        setLoading(true)
        const data = {
          group_name:groupName,
          building_id:allotedBuilding._id,
          timeAlloted:selectedtimeSlots,
          dock_type_id:selectedDockTypes,
          multi_entry:singleQRmultiEntry
          };
          axios.post(`${baseUrl}/add/supplier/group`,data,{
            headers:{
                'Authorization': `Bearer ${Token}`
            }
          })
          .then((res) => {
            console.log(res.data)
            if(res.data.status=="ok")
            {
               setModalHeading("Supplier Group Added Successfully")
               setOpen1(true)

        
            }
            else{
                setModalHeading("Something Went wrong ");
                setModalText("Something Went wrong. Please Try again after sometime");
                setOpen1(true);
    
            }
       
           setLoading(false)
          }).catch((err)=>{
            console.log(err)
          })
    }
  return (
    <>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium">
          <FontAwesomeIcon icon={faUser} className="mr-5" />
          Add Supplier Group
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form onSubmit={SubmitButton}>
        <div class="">
        <div className="mb-2">
            <label class="text-blackdark:text-gray-200" for="name">
              Group Name
            </label>
            <input
            value={groupName}
            onChange={(e)=>{
                setGroupName(e.target.value)
            }}
              placeholder="User Name"
              id="name"
              type="text"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
                    <label
                      class="flex text-black dark:text-gray-200"
                      for="building"
                    >
                      Building Name<p className="pl-1 text-red-600">*</p>
                    </label>
                    <select
                      required
                      onChange={(e) => {
                       
                        setAllotedBuilding(JSON.parse(e.target.value))
                      }}
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    >
                        <option value="">---Choose Building---</option>
                    
                      {buildings.map((b, index) => {
                        return (
                          <option value={JSON.stringify(b)}>
                            {b.building_name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Dock Type</h3>
<div class="w-5/6 grid grid-cols-1 gap-2 mt-2 sm:grid-cols-4  ">
                    {dockTypes.map((element, index) => {
                      return (
                        <div
                          id={index}
                          class="flex items-center pl-3 rounded-lg"
                        >
                          <input
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedDockTypes([
                                  ...new Set([
                                    ...selectedDockTypes,
                                    element._id,
                                  ]),
                                ]);
                              } else if (!e.target.checked) {
                                setSelectedDockTypes(
                                  selectedDockTypes.filter(
                                    (elem) =>
                                      elem !=
                                      element._id
                                  )
                                );
                              }
                            }}
                            id={"vue-checkbox-list-dock-type"+index}
                            type="checkbox"
                            value=""
                            class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for={"vue-checkbox-list-dock-type"+index}
                            class=" py-1 ml-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            {element.dock_type}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white">Alloted time</h3>
                  <div class="w-5/6 grid grid-cols-1 gap-2 mt-2 sm:grid-cols-5  ">
                    {timeSlots.map((element, index) => {
                      return (
                        <div
                          id={index}
                          class="border-solid border-2 flex items-center pl-3 rounded-lg"
                        >
                          <input
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedTimeSlots([
                                  ...new Set([
                                    ...selectedtimeSlots,
                                    element,
                                  ]),
                                ]);
                              } else if (!e.target.checked) {
                                setSelectedTimeSlots(
                                  selectedtimeSlots.filter(
                                    (elem) =>
                                      elem !=
                                      element
                                  )
                                );
                              }
                            }}
                            id={"vue-checkbox-list"+index}
                            type="checkbox"
                            value=""
                            class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for={"vue-checkbox-list"+index}
                            class=" py-1 ml-1 text-xs font-small text-gray-900 dark:text-gray-300"
                          >
                            {element}
                          </label>
                        </div>
                      );
                    })}
                  </div>
          <div className="mb-2 pt-2 ">
          <label class="text-black dark:text-gray-200" for="building">
            Single QR multi entry
          </label>
          <div id="building" class="flex items-center m-4 ">
            <input
              onChange={(e)=>{
               setSingleQRmultiEntry(e.target.value)
              }}
              id="default-radio-1"
              type="radio"
              value={false}
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Disallow
            </label>
          </div>
          <div class="flex items-center m-4">
            <input
               onChange={(e)=>{
               setSingleQRmultiEntry(e.target.value)
              }}
              id="default-radio-1"
              type="radio"
              value={true}
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
             Allow
            </label>
          </div>
          
          
        </div>
         </div>

        <div class="flex justify-end mt-6">
          <button type="submit" class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
          <button type="button"  class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            <Link to="/supplier/groups">Cancel</Link>
          </button>
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
        confirmFunction={submitData}
      />
    </>
  );
};

export default AddSupplierGroupsForm;
