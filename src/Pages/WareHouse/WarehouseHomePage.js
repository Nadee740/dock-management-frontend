import { Outlet } from "react-router-dom";

const WareHouseHome = () => {
    return ( 
        <div className='flex w-full flex-row bg-primary h-screen'>
        
        <Outlet/>
    </div>
     );
}
 
export default WareHouseHome;