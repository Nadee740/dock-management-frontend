import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { UserContext } from "./Contexts/UserContexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import CommonHome from "./Pages/CommonHome";
import AdminHome from "./Pages/Admin/AdminHome";
import AdminDashBoard from "./Pages/Admin/AdminDashBoard";
import DockBooking from "./Pages/Common/DockBooking";
import ListAllDocksPage from "./Pages/Docks/ListAllDocksPage";
import AddNewDock from "./Pages/Docks/AddNewDock";
import ListAllSuppliersPage from "./Pages/Supplier/ListAllSuppliersPage";
import RealTimeStatusPage from "./Pages/Common/RealTimeStatusPage";
import AddNewVehiclePage from "./Pages/Vehicle/AddNewVehiclePage";
import ListAllCompanyPage from "./Pages/Company/ListAllCompanyPage";
import AddNewCompany from "./Pages/Company/AddNewCompany";
import ListAllAdminPage from "./Pages/Admin/ListAllAdminPage";
import AddAdminUser from "./Pages/Admin/AddAdminUser";
import AddNewSupplier from "./Pages/Supplier/AddNewSupplier";
import ListAllSecurityPage from "./Pages/Security/ListAllSecurityPage";
import AddNewSecurity from "./Pages/Security/AddNewSecurity";
import ListAllWareHousesPage from "./Pages/WareHouse/ListAllWareHousePage";
import AddNewWareHouse from "./Pages/WareHouse/AddNewWareHouse";
import StatisticsPage from "./Pages/Common/StatisticsPage";
import SupplierHome from "./Pages/Supplier/SupplierHome";
import SupplierDashBoard from "./Pages/Supplier/SupplierDashboard";
import { useEffect } from "react";
import BookingConfirmPage from "./Pages/Common/BookingConfirmPage";
import SecurityHome from "./Pages/Security/SecurityHome";
import SecurityDashBoard from "./Pages/Security/SecuirtyDashboar";
import ListAllVehiclesPage from "./Pages/Vehicle/ListOfVehicles";
import ListAllShipmentsPage from "./Pages/Shipments/ListAllShipmentsPage";
import HelpPage from "./Pages/Common/HelpPage";
import ListAllSupplierGroupsPage from "./Pages/Supplier/SupplierGroupsPage";
import AddNewSupplierGroups from "./Pages/Supplier/AddNewSupplierGroupsPage";
import BackdropLoading from "./Components/BackDropLoading";
import axios from "axios";
import { baseUrl } from "./utils/baseurl";
import LandingPage from "./Pages/LandingPage";
import SuperAdminDashBoard from "./Pages/SuperAdmin/SuperAdminDashboard";
import SuperAdminHome from "./Pages/SuperAdmin/SuperAdminHome";
import ManageSubsriptionPage from "./Pages/SuperAdmin/ManageSubscriptionPage";
import ListAllSubscribedAdminPage from "./Pages/SuperAdmin/ListAllSubscribedAdminPage";       
import Page404 from './Pages/PageNotFound'
import WareHouseDashBoard from "./Pages/WareHouse/WarehouseDashboard";
import WareHouseHome from "./Pages/WareHouse/WarehouseHomePage";
import SubscriptionRequestPage from "./Pages/SendSubscriptionRequest";
import ListAllSubscribtionRequestPage from "./Pages/SuperAdmin/ListAllSubscriptionRequestPage";
import ChangeSubscriptionRequestStatusPage from "./Pages/SuperAdmin/ChangeSubscriptionStatusPage";
function App() {
  const [user, setUser] = useState(null);
  const [Token,setToken]=useState(null);
  const [authenticating,setAuthenticating]=useState(false);
  const [loading, setLoading] = useState(false);
  const [accountDetails,setAccountDetails]=useState(null);

  useEffect(() => {
//     setUser({
//     "_id": "64c4e2c9c7d0e5fc17b300d4",
//     "name": "Nadeem Haris",
//     "email1": "nadeemblayparambil@gmail.com",
//     "email2": "nadeemblayparambil@gmail.com",
//     "acra_no": "12",
//     "userType": "supplier",
//     "phone": "89299292",
//     "isVerified": true,
//     "createdAt": "2023-07-29T09:58:33.450Z",
//     "updatedAt": "2023-09-07T09:14:59.912Z",
//     "__v": 22})
// setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM0ZTJjOWM3ZDBlNWZjMTdiMzAwZDQiLCJpYXQiOjE2OTQwNzgwOTl9.8jn8WA3R2FT67nREBTNW78NXL5GZNMYYiLIBnJ_mZcg")

    setAuthenticating(true)
    setLoading(true)
    const token = localStorage.getItem("EZTOken");
    axios
      .get(`${baseUrl}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.data != "") {
            console.log(response.data)
          setUser(response.data.user);
          setAccountDetails(response.data.data)
          setToken(token);
          setAuthenticating(false)
          setLoading(false);
        } else {
            throw new Error("somethin went wrong")
        }
      })
      .catch(function (error) {
        setAuthenticating(false)
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user,setUser,accountDetails,Token,setToken, loading, setLoading }}>
        {/* <SideNavBar/> */}
        <BrowserRouter>
          <Routes>
          {user==null && <>
           <Route path="/" element={<LandingPage/>} />
           <Route path="/request/subscription" element={<SubscriptionRequestPage/>} />
           <Route path="/change/subscription/status/:id" element={<ChangeSubscriptionRequestStatusPage/>} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
           
            
            </>
            }
          
            {user != null && (
              <Route path="/" element={<CommonHome />}>
              <Route path="/statistics" element={<StatisticsPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route
                  path="/booking-confirm/:id"
                  element={<BookingConfirmPage />}
                />

                <Route path="/dock-booking" element={<DockBooking />} />
                <Route
                  path="/real-time-status"
                  element={<RealTimeStatusPage iseditable={false} />}
                />

                {/* Vehicle Routes */}
                <Route
                  path="/vehicle"
                  element={<ListAllVehiclesPage iseditable={false} />}
                />
                <Route
                  path="/vehicle-update"
                  element={<ListAllVehiclesPage iseditable={true} />}
                />
                <Route path="/add-vehicle" element={<AddNewVehiclePage />} />

                {/* CompanyROutes */}
                <Route
                  path="/company"
                  element={<ListAllCompanyPage iseditable={true} />}
                />
                <Route path="/company/add" element={<AddNewCompany />} />

                {/* Supplier Routes */}
                <Route
                  path="/supplier-list"
                  element={<ListAllSuppliersPage iseditable={true} />}
                />
                <Route
                  path="/supplier/groups"
                  exact
                  element={<ListAllSupplierGroupsPage iseditable={true} />}
                />
                <Route path="/create-supplier" element={<AddNewSupplier />} />
                <Route
                  path="/supplier/groups/add"
                  exact
                  element={<AddNewSupplierGroups />}
                />

                {/* Security Routes */}
                <Route
                  path="/list-all-security"
                  element={<ListAllSecurityPage iseditable={true} />}
                />
                <Route path="/create-security" element={<AddNewSecurity />} />

                {/* WareHouse Routes */}
                <Route
                  path="/warehouses"
                  element={<ListAllWareHousesPage iseditable={true} />}
                />
                <Route path="/create-warehouse" element={<AddNewWareHouse />} />

                {/* Shipment Routes */}
                <Route
                  path="/shipments-list"
                  element={<ListAllShipmentsPage iseditable={false} />}
                />

                {/* Protected Routes */}
                {
                    user.userType=="superadmin" &&(
                        <>
                 <Route path="/" element={<SuperAdminDashBoard/>}></Route>
                  <Route path="superadmin" element={<SuperAdminHome/>}>
                    <Route index element={<SuperAdminDashBoard/>} />
                    <Route
                      path="manage/subscriptions"
                      element={<ManageSubsriptionPage />}
                    />
                    <Route
                      path="list/request/subscriptions"
                      element={<ListAllSubscribtionRequestPage iseditable={true}/>}
                    />
                    <Route
                      path="users/list/subscribed/AdminUsers"
                      element={<ListAllSubscribedAdminPage
                       iseditable={true} />}
                    />
                    <Route
                      path="Users/addCompanyAdminUsers"
                      element={<AddAdminUser />}
                    />
                    
                  </Route>

                        </>
                    )
                }
                { user.userType==="admin"&& (
                    <>
                    <Route path="/" element={<AdminDashBoard/>}></Route>
                  <Route path="admin" element={<AdminHome />}>
                    <Route index element={<AdminDashBoard />} />
                    <Route
                      path="users/listCompanyAdminUsers"
                      element={<ListAllAdminPage iseditable={true} />}
                    />
                    <Route
                      path="Users/addCompanyAdminUsers"
                      element={<AddAdminUser />}
                    />
                    <Route path="docks" element={<ListAllDocksPage />} />
                    <Route path="add-new-dock" element={<AddNewDock />} />
                  </Route>
                  </>
                )}

                {user.userType==="supplier" && (
                    <>
                    <Route path="/" element={<AdminDashBoard/>}></Route>
                  <Route path="supplier" element={<SupplierHome />}>
                    <Route index element={<SupplierDashBoard />} />
                  </Route>
                  </>
                )}

                {user.userType == "security" && (
                    <>
                    <Route index element={<SecurityDashBoard />} />
                  <Route path="security" element={<SecurityHome />}>
             
                    <Route index element={<SecurityDashBoard />} />
                  </Route>
                  
                  </>
                )}
                {
                    user.userType=="warehouse"&&(
                      <>
                      <Route index element={<WareHouseDashBoard />} />
                    <Route path="warehouse" element={<WareHouseHome />}>
               
                      <Route index element={<WareHouseDashBoard />} />
                    </Route>
                    
                    </>
                    )
                }
                   
              </Route>
            )}
           {authenticating==false && <Route path="*" element={<Page404/>}/>} 
          </Routes>
        </BrowserRouter>
        <BackdropLoading />
      </UserContext.Provider>
    </div>
  );
}

export default App;
