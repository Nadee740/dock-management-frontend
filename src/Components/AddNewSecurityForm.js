import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddNewSecuriyForm = () => {
  return (
    <>
      <div className="flex items-center justify-between  p-4">
        <h2 className="text-2xl font-medium">
          <FontAwesomeIcon icon={faBuilding} className="mr-5" />
          Add New Security
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <form>
        <div class="">
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="company">
              Company
            </label>
            <select
              id="company"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
              <option>---Choose Company---</option>
              <option>Surabaya</option>
              <option>Jakarta</option>
              <option>Tangerang</option>
              <option>Bandung</option>
            </select>
          </div>
          <div className="mb-2">
            <label class="text-black dark:text-gray-200" for="acra">
              ACRA / UN Reg. No
            </label>
            <input
              placeholder="ACRA / UN Reg. No"
              id="acra"
              type="text"
              class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
            />
          </div>
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="s_name">
            Security Name
          </label>
          <input
            placeholder="Security Name"
            id="s_name"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>

        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="email1">
            Email Address 1
          </label>
          <input
            placeholder="Email Address 2"
            id="email1"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="email2">
            Email Address 2
          </label>
          <input
            placeholder="Email Address 1"
            id="email2"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="p_number">
            Phone Number
          </label>
          <input
            placeholder="Phone Number"
            id="p_number"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>
        <div className="mb-2 pt-2 ">
          <label class="text-black dark:text-gray-200" for="building">
            Alloted Building
          </label>
          <div id="building" class="flex items-center m-4 ">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Inflight Catering Centre 1 (ICC1)
            </label>
          </div>
          <div class="flex items-center m-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Inflight Catering Centre 1 (ICC1)
            </label>
          </div>
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="password">
            Password
          </label>
          <input
            placeholder="Password"
            id="password"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>
        <div className="mb-2">
          <label class="text-black dark:text-gray-200" for="r_password">
            Retype Password
          </label>
          <input
            placeholder="Retype Password"
            id="r_password"
            type="text"
            class="block w-3/5 md:2/5 lg:2/5 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring border-2 border-slate-400"
          />
        </div>

        <div class="flex justify-end mt-6">
          <button class="mr-6 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
          <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewSecuriyForm;
