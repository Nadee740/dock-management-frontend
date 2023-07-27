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
import AddNewSupplier from './Pages/Supplier/AddNewSupplier';
import ListAllSecurityPage from './Pages/Security/ListAllSecurityPage';
import AddNewSecurity from './Pages/Security/AddNewSecurity';
import ListAllWareHousesPage from './Pages/WareHouse/ListAllWareHousePage';
import AddNewWareHouse from './Pages/WareHouse/AddNewWareHouse';
import { Dashboard } from '@mui/icons-material';
import StatisticsPage from './Pages/Common/StatisticsPage';
import SupplierHome from './Pages/Supplier/SupplierHome';
import SupplierDashBoard from './Pages/Supplier/SupplierDashboard';
import { useEffect } from 'react';
import BookingConfirmPage from './Pages/Common/BookingConfirmPage';

function App() {

    const [user,setUser]=useState({state:"admin"}); 
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
     
        setUser({state:"supplier"})
    },[])



  return (
    <div className="App">
<UserContext.Provider value={{user,setUser,loading,setLoading}}>
{/* <SideNavBar/> */}
    <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<CommonHome/>}>
        <Route path="/statistics" element={<StatisticsPage/>}/>
        <Route path="/booking-confirm/:id" element={<BookingConfirmPage/>}/>

        <Route path="/dock-booking" element={<DockBooking/>}/>
        <Route path="/real-time-status" element={<RealTimeStatusPage iseditable={false}/>}/>
        
         {/* Vehicle Routes */}
        <Route path="/vehicle" element={<ListAllVehiclesPage iseditable={false}/>}/>
        <Route path="/vehicle-update" element={<ListAllVehiclesPage iseditable={true}/>}/>
        <Route path="/add-vehicle" element={<AddNewVehiclePage/>}/>

        {/* CompanyROutes */}
        <Route path="/company" element={<ListAllCompanyPage iseditable={true}/>}/>
        <Route path="/company/add" element={<AddNewCompany/>}/>
   
         
        {/* Supplier Routes */}
        <Route path="/supplier-list" element={<ListAllSuppliersPage iseditable={true}/>}/>
        <Route path="/create-supplier" element={<AddNewSupplier/>}/>

        {/* Security Routes */}
        <Route path="/security" element={<ListAllSecurityPage iseditable={true}/>}/>
        <Route path="/create-security" element={<AddNewSecurity/>}/>
      
      
        {/* WareHouse Routes */}
        <Route path="/warehouses" element={<ListAllWareHousesPage iseditable={true}/>}/>
        <Route path="/create-warehouse" element={<AddNewWareHouse/>}/>

        {/* Protected Routes */}
        {user.state=='admin' && (
        <Route path="admin" element={<AdminHome/>}>
        <Route index element={<AdminDashBoard/>} /> 
        <Route path='users/listCompanyAdminUsers' element={<ListAllAdminPage iseditable={true}/>} />
        <Route path="Users/addCompanyAdminUsers" element={<AddAdminUser/>}/>
        <Route path="docks" element={<ListAllDocksPage/>}/>
        <Route path="add-new-dock" element={<AddNewDock/>}/>
        </Route>
        
        ) }


        {user.state=='supplier' && (
            <Route path='supplier' element={<SupplierHome/>}>
            <Route index element={<SupplierDashBoard/>} /> 
            </Route>
            
        )}
        </Route>
       
       
        </Routes>
    </BrowserRouter>
</UserContext.Provider>
    </div>
  );
}

export default App;
