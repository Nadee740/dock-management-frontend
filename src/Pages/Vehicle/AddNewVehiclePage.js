import AddNewVehicleForm from "../../Components/AddNewVehicleForm";

const AddNewVehiclePage = () => {
  return (
    <div className="w-full admin-dashboard">
      <div className="flex flex-row w-full w-full items-center p-3 justify-between">
        <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20">
            <AddNewVehicleForm />
        </section>
      </div>
    </div>
  );
};

export default AddNewVehiclePage;
