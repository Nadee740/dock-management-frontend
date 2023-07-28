import { Outlet } from "react-router-dom";
import { AdminLinks } from "../Pages/Admin/AdminLinks";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContexts";
import { SupplierLinks } from "./Supplier/SupplierLinks";
import { SecurityLinks } from "./Security/SecurityLinks";
import SideNavBar from "../Components/SideNavBar";
const CommonHome = () => {
    const {user}=useContext(UserContext)

    return ( 
        <div className='flex w-full flex-row bg-primary h-screen'>
 
        {user.state=="supplier" && <SideNavBar UserLinks={SupplierLinks}/>}
        {user.state=="admin" && <SideNavBar UserLinks={AdminLinks}/>}
        {user.state=="security" && <SideNavBar UserLinks={SecurityLinks}/>}
            <Outlet/>
        </div>

    );
}
 
export default CommonHome;