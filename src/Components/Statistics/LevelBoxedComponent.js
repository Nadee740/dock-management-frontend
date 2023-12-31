import { faBox, faBoxesPacking, faCircleXmark, faCross, faCube, faGamepad, faGears, faLocation, faTruck, faTruckRampBox, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LeveledBoxedComponent = ({data}) => {
    return (       
    <div className="flex flex-row w-full items-center pl-5 pt-1 justify-center">
    <div class="w-full sm:4/6 mt-5 grid grid-cols-2 ">
    <div className="m-1 mt-4  w-48">
  <div className="flex heading-class max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
    <div className="">
      <p className="flex whitespace-nowrap mb-2 text-sm tracking-tight text-gray-900 dark:text-white heading-class">
        Total Orders 
      </p>
      <p className="flex whitespace-nowrap mb-2 text-md tracking-tight text-gray-900 dark:text-white heading-class">
        {data.total_no_of_orders}
      </p>
    </div>
    <div className="flex justify-end w-1/2">
      <FontAwesomeIcon
        icon={faUserGroup}
        size="xl"
        className="text-green-400"
      />
    </div>
  </div>
</div>
<div className="m-1 mt-8  w-48">
  <div className="flex heading-class max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
    <div className="">
      <p className="flex whitespace-nowrap mb-2 text-sm tracking-tight text-gray-900 dark:text-white heading-class">
        Total Delivery
      </p>
      <p className="flex whitespace-nowrap mb-2 text-md tracking-tight text-gray-900 dark:text-white heading-class">
        {data.total_no_of_orders_delivered}
      </p>
    </div>
    <div className="flex justify-end w-1/2">
      <FontAwesomeIcon
        icon={faBoxesPacking}
        size="xl"
        className="text-orange-400"
      />
    </div>
  </div>
</div>
<div className="m-1 mt-4  w-48">
  <div className="flex heading-class max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
    <div className="">
      <p className="flex whitespace-nowrap mb-2 text-sm tracking-tight text-gray-900 dark:text-white heading-class">
        Failed Count 
      </p>
      <p className="flex whitespace-nowrap mb-2 text-md tracking-tight text-gray-900 dark:text-white heading-class">
        23
      </p>
    </div>
    <div className="flex justify-end w-1/2">
      <FontAwesomeIcon
        icon={faCircleXmark}
        size="xl"
        className="text-red-800"
      />
    </div>
  </div>
</div>
<div className="m-1 mt-8  w-48">
  <div className="flex heading-class max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
    <div className="">
      <p className="flex whitespace-nowrap mb-2 text-sm tracking-tight text-gray-900 dark:text-white heading-class">
        Total Docks 
      </p>
      <p className="flex whitespace-nowrap mb-2 text-md tracking-tight text-gray-900 dark:text-white heading-class">
        {data.total_no_of_docks}
      </p>
    </div>
    <div className="flex justify-end w-1/2">
      <FontAwesomeIcon
        icon={faLocation}
        size="xl"
        className="text-blue-400"
      />
    </div>
  </div>
</div>
<div className="m-1 mt-4  w-48">
  <div className="flex heading-class max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
    <div className="">
      <p className="flex whitespace-nowrap mb-2 text-sm tracking-tight text-gray-900 dark:text-white heading-class">
        Late Deliveries
      </p>
      <p className="flex whitespace-nowrap mb-2 text-md tracking-tight text-gray-900 dark:text-white heading-class">
        {data.total_no_of_late_orders}
      </p>
    </div>
    <div className="flex justify-end w-1/2">
      <FontAwesomeIcon
        icon={faGears}
        size="xl"
        className="text-red-600"
      />
    </div>
  </div>
</div>
<div className="m-1 mt-8  w-48">
  <div className="flex heading-class max-w-sm p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
    <div className="">
      <p className="flex whitespace-nowrap mb-2 text-sm tracking-tight text-gray-900 dark:text-white heading-class">
        No: Suppliers
      </p>
      <p className="flex whitespace-nowrap mb-2 text-md tracking-tight text-gray-900 dark:text-white heading-class">
        {data.supplier_count}
      </p>
    </div>
    <div className="flex justify-end w-1/2">
      <FontAwesomeIcon
        icon={faCube}
        size="xl"
        className="text-blue-800"
      />
    </div>
  </div>
</div>


    </div>
  </div>);
}
 
export default LeveledBoxedComponent;