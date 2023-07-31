import { Mail } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AddNewSupplierGroups = () => {
  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
        <section class="h-max text-black w-5/6 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
          <div className="flex items-center justify-between  p-4 ">
            <h2 className="text-2xl font-medium">
              <Mail className="pb-1" size="lg"></Mail> Add Supplier Group
            </h2>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4">
              <div className="w-5/6 sm:w-1/2">
                <label class="text-black dark:text-gray-200" for="username">
                  Group Name
                </label>
                <input
                placeholder="Supplier Group Name"
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
                />
              </div>
              <div className="w-5/6 sm:w-1/2">
                <label
                  class="flex text-black dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Building Name<p className="pl-1 text-red-600">*</p>
                </label>
                <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option>Inflight Catering Centre 1 (ICC1)</option>
                  <option>Inflight Catering Centre 1 (ICC2)</option>
                </select>
              </div>
              <div className="w-5/6 sm:w-1/2">
                <label
                  class="flex text-black dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Dock Type<p className="pl-1 text-red-600">*</p>
                </label>
                <div class="w-full  grid grid-cols-1 gap-2 sm:grid-cols-5  ">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((element, index) => {
                  return (
                    <div class="flex items-center pl-3 rounded-lg">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class=" h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="vue-checkbox-list"
                        class=" py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                         Dock&nbsp;Type&nbsp;{index + 1}
                      </label>
                    </div>
                  );
                })}
              </div>
              </div>
         
           
        
              
            </div>
            <div className="m-3 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div class=" grid grid-cols-1 gap-6 mt-4 px-6 pt-5 pb-6 ">
              <label class="text-black dark:text-gray-200" for="password">
                  Alloted TIme
                </label>
              <div class="w-full  grid grid-cols-1 gap-2 sm:grid-cols-5  ">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((element, index) => {
                  return (
                    <div class="bg-green-400 flex items-center pl-3 rounded-lg">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class=" h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        for="vue-checkbox-list"
                        class=" py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Timing {index + 1}
                      </label>
                    </div>
                  );
                })}
              </div>
              </div>
           </div>
           <div className="w-5/6 sm:w-1/2 ">
                <label class="text-black dark:text-gray-200 mb-4" for="username">
                 Single QR Multi Entry
                </label>
                <div className="flex"></div>
                <div class="flex items-center mb-4 ">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="mt-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Allow</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Disallow</label>
</div>
              </div>

            <div class="flex mt-5 md:mt-5 lg:mt-5">
            <Link to="/booking-confirm/1">
              <button class=" px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Submit
              </button>
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddNewSupplierGroups;
