import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "@mui/icons-material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ChangeSubscriptionRequestStatusPage = () => {
    const params = useParams();
    const _id=params.id;
    const [status,setStatus]=useState(1);
  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
        <section class="h-max text-black w-5/6 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
          <div className="flex items-center justify-between  p-4 ">
            <h2 className="text-2xl font-medium">
              <FontAwesomeIcon icon={faEdit} className="mr-1"></FontAwesomeIcon> Subscription Request
            </h2>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label
                  class="flex text-black dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Status
                </label>
                <select onChange={(e)=>{
                    setStatus(e.target.value)
                }} required class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option value={1}>Accept</option>
                  <option value={2}>Reject</option>
                </select>
              </div>
              {status==1&& <>
                <div>
                <label class="text-black dark:text-gray-200" for="username">
                  Type of Subscription
                </label>
                <input
                required
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
                />
              </div>

              <div>
                <label class="text-blackdark:text-gray-200" for="emailAddress">
                  Price
                </label>
                <input
                required
                  id="emailAddress"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label class="text-black dark:text-gray-200" for="password">
                  Subscription Validity
                </label>
                <input
                required
                  id="number"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
             
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of admins
                </label>
                <input
                required
                  id="company_name"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of Suppliers
                </label>
                <input
                required
                  id="company_name"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of Security
                </label>
                <input
                required
                  id="company_name"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of Warehouse
                </label>
                <input
                required
                  id="company_name"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No  of Buildings
                </label>
                <input
                required
                  id="company_name"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-black dark:text-gray-200" for="company_Name">
                 No of Dock
                </label>
                <input
                required
                  id="company_name"
                  type="text"
                  class="border-black-200 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              </>}
             

            </div>
            <div class="flex mt-5 md:mt-5 lg:mt-5">
            <div >
              <button class="bg-green-400 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                Change Status
                <FontAwesomeIcon icon={faEdit}/>
              </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ChangeSubscriptionRequestStatusPage;