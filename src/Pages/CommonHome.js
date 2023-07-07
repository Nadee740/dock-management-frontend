import { Outlet } from "react-router-dom";
import SideNavBar from "../Components/SideNavBar";
import { useEffect, useState } from "react";

const CommonHome = () => {

    return ( 
        <div className='flex w-full flex-row bg-primary h-screen'>
        
        <SideNavBar/>
            <Outlet/>
        </div>

    );
}
 
export default CommonHome;