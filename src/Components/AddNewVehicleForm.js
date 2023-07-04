import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddNewVehicleForm = () => {
    return ( <>
         <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium"><FontAwesomeIcon icon={faCar}className="mr-5" />Add Vehicle</h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form>
        <div class="">
            <div className="mb-2">
                <label class="text-black dark:text-gray-200" for="vehiclenumber">Vehicle Number</label>
                <input placeholder="Vehicle Number" id="vehiclenumber" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"/>
            </div>
            <div className="mb-2">
                <label class="text-black dark:text-gray-200" for="Vechicletype">Vehicle Type</label>
                <select id="Vechicletype" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>---Choose Vehicle Type ---</option>
                    <option>Surabaya</option>
                    <option>Jakarta</option>
                    <option>Tangerang</option>
                    <option>Bandung</option>
                </select>
            </div>

            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="drivername">Driver Name</label>
                <input placeholder="Driver Name" id="drivername" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="drivernumber">Driver Number</label>
                <input placeholder="Driver Number" id="drivernumber" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>


            <div className="mb-2">
                <label class="text-blackdark:text-gray-200" for="drivernrif">Driver NRIF/FIN</label>
                <input placeholder="Driver NRIF/FIN" id="drivernrif" type="text" class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
     

        
         

        </div>

        <div class="flex justify-end mt-6">
            <button class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Submit</button>
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Cancel</button>
        </div>
    </form>
    </> );
}
 
export default AddNewVehicleForm;