import ConfirmBooking from "../../Components/ConfirmBookings";

const BookingConfirmPage=()=>{

    return (
        <>
          <div className="w-full admin-dashboard  overflow-y-scroll">
            <div className="flex flex-row w-full w-full items-center p-3 justify-between">
              <section class=" text-black ml-5 w-full p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-scroll">
                <ConfirmBooking/>
              </section>
            </div>
          </div>
        </>
      );
}

export default BookingConfirmPage;