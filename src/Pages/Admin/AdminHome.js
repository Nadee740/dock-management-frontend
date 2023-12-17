import { Outlet } from "react-router-dom";

const AdminHome = () => {
    return ( 
        <div className='flex w-full flex-row bg-primary h-screen'>
        {/* <div className='w-3/12 '>
            <SideBar myLinks={links} myActiveIndex={0} myOpenedIndex={0}/>
        </div> */}
        <Outlet/>
    </div>
     );
}
 
export default AdminHome;