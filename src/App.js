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
import BackdropLoading from "./Components/BackDropLoading";
import axios from "axios";
import { baseUrl } from "./utils/baseurl";
import LandingPage from "./Pages/LandingPage";
import SuperAdminDashBoard from "./Pages/SuperAdmin/SuperAdminDashboard";
import SuperAdminHome from "./Pages/SuperAdmin/SuperAdminHome";
import ManageSubsriptionPage from "./Pages/SuperAdmin/ManageSubscriptionPage";
import ListAllSubscribedAdminPage from "./Pages/SuperAdmin/ListAllSubscribedAdminPage";
import Page404 from "./Pages/PageNotFound";
import WareHouseDashBoard from "./Pages/WareHouse/WarehouseDashboard";
import WareHouseHome from "./Pages/WareHouse/WarehouseHomePage";
import SubscriptionRequestPage from "./Pages/SendSubscriptionRequest";
import ListAllSubscribtionRequestPage from "./Pages/SuperAdmin/ListAllSubscriptionRequestPage";
import ChangeSubscriptionRequestStatusPage from "./Pages/SuperAdmin/ChangeSubscriptionStatusPage";
import AddSupplierGroupsPage from "./Pages/Admin/AddSupplierGroupsPage";
import UpdateVehiclePage from "./Pages/Vehicle/UpdateVehiclePage";
import EditSupplierGroupsPage from "./Pages/Admin/EditSupplierGroups";
import UpdateSecurityPage from "./Pages/Security/UpdateSecurityPage";
import EditAdminUser from "./Pages/Admin/EditAdminUser";
import EditCompanyPage from "./Pages/Company/EditCompanyPage";
import EditWareHouse from "./Pages/WareHouse/EditWareHousePage";
import EditDockPage from "./Pages/Docks/EditDockPage";
import EditSupplierPage from "./Pages/Supplier/EditSupplierPage";
import BackToTop from "./Components/ScrollToTop";
import ListAllSupplierRequestPage from "./Pages/Admin/SupplierApprovalPage";
import SupplierRequestPage from "./Pages/Admin/SupplierRequestPage";
import ChangePassword from "./Pages/ChangePassword";
import AddNewBuilding from "./Pages/Company/AddNewBuilding";
import ListAllBuildingPage from "./Pages/Company/ListAllBuildingPage";
import COnfirmModal from "./Components/ConfirmPopup";
import ChangePasswordModal from "./Components/ChangePassword";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import QualityCheckPage from "./Pages/WareHouse/QualityCheckPage";
import UnloadingCheckPage from "./Pages/WareHouse/UnloadingCheckPage";
import WarehouseExitPage from "./Pages/WareHouse/WarehouseExitPage";
function App() {
  const [user, setUser] = useState(null);
  const [Token, setToken] = useState(null);
  const [authenticating, setAuthenticating] = useState(true);
  const [loading, setLoading] = useState(false);
  const [accountDetails, setAccountDetails] = useState(null);
  const [show_change_pass_prompt,set_change_pass_prompt]=useState(false)
  Chart.register(CategoryScale);
  const handle_change_password=()=>{
    window.location="/change-password"

  }

  useEffect(() => {

    setAuthenticating(true);
    setLoading(true);
    const token = localStorage.getItem("EZTOken");
    axios
      .get(`${baseUrl}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        if (response.data != "") {
          setUser(response.data.user);
          setAccountDetails(response.data.data);
          setToken(token);
          if(!(response.data.user.changed_password) && !(window.location.href.includes("change-password")))
          set_change_pass_prompt(true)
          setAuthenticating(false);
          setLoading(false);

        } else {
          throw new Error("something went wrong");
        }
      })
      .catch(function (error) {
        setAuthenticating(false);
        setLoading(false);
        console.log("FAILED!!! ", error);
      });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          user,
          setUser,
          setAuthenticating,
          accountDetails,
          setAccountDetails,
          Token,
          setToken,
          loading,
          setLoading,
        }}
      >
        {/* <SideNavBar/> */}
        <BackToTop />
        <BrowserRouter>
          <Routes>
            <Route path="/test" element={<COnfirmModal/>} />
            {user == null && (
              <>
                <Route path="/" element={<LandingPage />} />
                <Route
                  path="/request/subscription/:type"
                  element={<SubscriptionRequestPage />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
        
              </>
            )}

            {user != null && (
              <Route path="/" element={<CommonHome />}>
              <Route path="/change-password" element={<ChangePassword />} />
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
                <Route
                  path="/update-vehicle/:id"
                  element={<UpdateVehiclePage />}
                />

                {/* CompanyROutes */}
                <Route
                  path="/building"
                  element={<ListAllBuildingPage iseditable={true} />}
                />
                <Route path="/building/add" element={<AddNewBuilding />} />
                <Route
                  path="/edit/building/:id"
                  element={<EditCompanyPage />}
                />

                {/* Supplier Routes */}
                <Route
                  path="/supplier-list"
                  element={<ListAllSuppliersPage iseditable={true} />}
                />

                {/* Security Routes */}
                <Route
                  path="/list-all-security"
                  element={<ListAllSecurityPage iseditable={true} />}
                />
                <Route path="/create-security" element={<AddNewSecurity />} />
                <Route
                  path="/update/security/:id"
                  element={<UpdateSecurityPage />}
                />

                {/* WareHouse Routes */}
                <Route
                  path="/list-all-warehouses"
                  element={<ListAllWareHousesPage iseditable={true} />}
                />
                <Route path="/create-warehouse" element={<AddNewWareHouse />} />
                <Route path="/edit/warehouse/:id" element={<EditWareHouse />} />

                {/* Shipment Routes */}
                <Route
                  path="/shipments-list/:Status"
                  element={<ListAllShipmentsPage iseditable={false} />}
                />

                {/* Protected Routes */}
                {user.userType == "superadmin" && (
                  <>
                    <Route path="/" element={<SuperAdminDashBoard />}></Route>
                    <Route path="superadmin" element={<SuperAdminHome />}>
                      <Route index element={<SuperAdminDashBoard />} />
                      <Route
                        path="manage/subscriptions"
                        element={<ManageSubsriptionPage />}
                      />
                      <Route
                        path="change/subscription/status/:id/:typesubscription"
                        element={<ChangeSubscriptionRequestStatusPage />}
                      />
                      <Route
                        path="list/request/subscriptions"
                        element={
                          <ListAllSubscribtionRequestPage iseditable={true} />
                        }
                      />
                      <Route
                        path="users/edit/company/AdminUser/:id"
                        element={<EditAdminUser />}
                      />
                      <Route
                        path="users/list/subscribed/AdminUsers"
                        element={
                          <ListAllSubscribedAdminPage
                            iseditable={true}
                            addadmin={false}
                          />
                        }
                      />
                    </Route>
                  </>
                )}
                {user.userType === "admin" && (
                  <>
                    <Route path="/" element={<AdminDashBoard />}></Route>
                    <Route path="admin" element={<AdminHome />}>
                      <Route index element={<AdminDashBoard />} />
                      <Route
                        path="users/listCompanyAdminUsers"
                        element={
                          <ListAllAdminPage iseditable={true} addadmin={true} />
                        }
                      />
                      <Route
                        path="add/supplier/groups"
                        element={<AddSupplierGroupsPage />}
                      />
                      <Route
                        path="edit/supplier/groups/:id"
                        element={<EditSupplierGroupsPage />}
                      />
                      <Route
                        path="supplier/groups"
                        exact
                        element={
                          <ListAllSupplierGroupsPage iseditable={true} />
                        }
                      />
                      <Route
                        path="list/supplier/request"
                        element={
                          <ListAllSupplierRequestPage iseditable={true} />
                        }
                      />
                      <Route
                        path="change/request/supplier/:id"
                        element={<SupplierRequestPage />}
                      />
                      <Route
                        path="Users/addCompanyAdminUsers"
                        element={<AddAdminUser />}
                      />
                      <Route
                        path="users/edit/company/AdminUser/:id"
                        element={<EditAdminUser />}
                      />
                      <Route
                        path="users/add/supplier"
                        element={<AddNewSupplier />}
                      />
                      <Route
                        path="edit/supplier/:id"
                        element={<EditSupplierPage />}
                      />
                      <Route path="docks" element={<ListAllDocksPage />} />
                      <Route path="add-new-dock" element={<AddNewDock />} />
                      <Route path="edit/dock/:id" element={<EditDockPage />} />
                    </Route>
                  </>
                )}

                {user.userType === "supplier" && (
                  <>
                    <Route path="/" element={<SupplierDashBoard/>}></Route>
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
                {user.userType == "warehouse" && (
                  <>
                    <Route index element={<WareHouseDashBoard />} />
                    <Route path="warehouse" element={<WareHouseHome />}>
                      <Route index element={<WareHouseDashBoard />} />
                      <Route path="quality/check" element={<QualityCheckPage />} />
                      <Route path="unloading/check" element={<UnloadingCheckPage />} />
                      <Route path="exit" element={<WarehouseExitPage />} />
                    </Route>
                  </>
                )}
              </Route>
            )}

            {authenticating == false && loading == false && (
              <Route path="*" element={<Page404 />} />
            )}
          </Routes>
        </BrowserRouter>
        <ChangePasswordModal open={show_change_pass_prompt} onConfirm={handle_change_password}/>
        <BackdropLoading />
      </UserContext.Provider>
    </div>
  );
}

export default App;
