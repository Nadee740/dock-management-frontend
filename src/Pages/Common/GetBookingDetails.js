import GetBookingPDF from "../../Components/GetBookingDetails";
import ListRealTimeStatus from "../../Components/ListRealTimeStatus";

const GetBookingDetailsPage = ({ iseditable }) => {
  return (
    <>
      <div className="w-full admin-dashboard ">
        <div className="flex flex-row w-full w-full items-center justify-between">
          <section class="text-black w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800  overflow-x-scroll">
          <GetBookingPDF/>
          </section>
        </div>
      </div>
    </>
  );
};

export default GetBookingDetailsPage;
