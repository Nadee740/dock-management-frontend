import ListAllSecurity from "../../Components/ListAllSecurity";

const ListAllSecurityPage = ({ iseditable }) => {
  return (
    <>
      <div className="w-full admin-dashboard  overflow-hidden">
        <div className="flex flex-row w-full items-center p-3 justify-between">
          <section class=" text-black w-full ml-3 p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20 overflow-x-scroll">
            <ListAllSecurity iseditable={iseditable} />
          </section>
        </div>
      </div>
    </>
  );
};

export default ListAllSecurityPage;
