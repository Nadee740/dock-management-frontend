import AddNewVehicleForm from "../../Components/AddNewVehicleForm";

const AddNewVehiclePage = () => {
  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-center">
        <section class="sm:items-center sm:justify-center text-black w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 ">
          <AddNewVehicleForm />
        </section>
      </div>
    </div>
  );
};

export default AddNewVehiclePage;
