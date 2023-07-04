import ListAllAdmin from "../../Components/ListAllAdmin";

const ListAllAdminPage = ({ iseditable }) => {
  return (
    <>
      <div className="w-full admin-dashboard  overflow-x-scroll">
        <div className="flex flex-row w-full w-full items-center p-3 justify-between">
          <section class=" text-black w-5/6 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-scroll">
            <ListAllAdmin iseditable={iseditable} />
          </section>
        </div>
      </div>
    </>
  );
};

export default ListAllAdminPage;
