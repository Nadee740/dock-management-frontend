import ListRealTimeStatus from "../../Components/ListRealTimeStatus";

const RealTimeStatusPage = ({ iseditable }) => {
  return (
    <>
      <div className="w-full admin-dashboard ">
        <div className="flex flex-row w-full w-full items-center justify-between">
          <section class="text-black w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800  overflow-x-scroll">
            <ListRealTimeStatus iseditable={iseditable} />
          </section>
        </div>
      </div>
    </>
  );
};

export default RealTimeStatusPage;
