import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { UserContext } from './Contexts/UserContexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import CommonHome from './Pages/CommonHome';
import AdminHome from './Pages/Admin/AdminHome';
import AdminDashBoard from './Pages/Admin/AdminDashBoard';
import DockBooking from './Pages/Admin/DockBooking';
import ListAllDocksPage from './Pages/Admin/ListAllDocksPage';
import AddNewDock from './Pages/Admin/AddNewDock';
import ListAllVehiclesPage from './Pages/Common/ListOfVehicles';
import ListAllSuppliersPage from './Pages/Common/ListAllSuppliersPage';
import RealTimeStatusPage from './Pages/Common/RealTimeStatusPage';
import AddNewVehiclePage from './Pages/Vehicle/AddNewVehiclePage';
import ListAllCompanyPage from './Pages/Company/ListAllCompanyPage';
import AddNewCompany from './Pages/Company/AddNewCompany';
import ListAllAdminPage from './Pages/Admin/ListAllAdminPage';
import AddAdminUser from './Pages/Admin/AddAdminUser';

function App() {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false);




  return (
    <div className="App">
<UserContext.Provider value={{user,setUser,loading,setLoading}}>
{/* <SideNavBar/> */}
    <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        {/* <Route path="/" element={<CommonHome/>}> */}
        <Route path="/" element={<Login/>}>


        <Route path="/dock-booking" element={<DockBooking/>}/>
        <Route path="/real-time-status" element={<RealTimeStatusPage iseditable={false}/>}/>
        
         {/* Vehicle Routes */}
        <Route path="/vehicle" element={<ListAllVehiclesPage iseditable={false}/>}/>
        <Route path="/vehicle-update" element={<ListAllVehiclesPage iseditable={true}/>}/>
        <Route path="/add-vehicle" element={<AddNewVehiclePage/>}/>

        {/* CompanyROutes */}
        <Route path="/company" element={<ListAllCompanyPage iseditable={true}/>}/>
        <Route path="/company/add" element={<AddNewCompany/>}/>
   
         

        <Route path="/supplier" element={<ListAllSuppliersPage iseditable={false}/>}/>
        
        {true && ( <Route path="admin" element={<AdminHome/>}>
        <Route index element={<AdminDashBoard/>} /> 
        <Route path='users/listCompanyAdminUsers' element={<ListAllAdminPage iseditable={true}/>} />
        <Route path="Users/addCompanyAdminUsers" element={<AddAdminUser/>}/>
        <Route path="docks" element={<ListAllDocksPage/>}/>
        <Route path="add-new-dock" element={<AddNewDock/>}/>
        </Route>
        
        ) }
        </Route>
       
       
        </Routes>
    </BrowserRouter>
</UserContext.Provider>
    </div>
  );
}

export default App;
