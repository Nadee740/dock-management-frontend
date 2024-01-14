const { faSquarePlus, faClock, faPenToSquare, faUser, faBuilding } = require("@fortawesome/free-regular-svg-icons");
const { faTimes,faCalendar,faTv, faTruckFast, faCheck, faTruck, faPlug, faPlus, faUsers, faUserLock, faUserAstronaut, faShip, faUserGroup, faBagShopping, faChartPie, faQrcode, faLock } = require("@fortawesome/free-solid-svg-icons");

const AdminLinks=[{
    title:"Dashboard",
    to:"/admin",
    icon:faTv,
    color:'#b0b4ba',
    subLinks:false
},
 {
    title:"Book Dock",
    to:"/dock-booking",
    icon:faSquarePlus,
    color:"#25b922",
    subLinks:false
},
{
    title:"Real Time Status",
    to:"/shipments-list/2",
    icon:faClock,
    color:"#24691b",
    subLinks:false
},
{
    title:"Shipments",
    icon:faTruckFast,
    color:"#5b3dc7",
     subLinks:[
        {
            title:"Past Shipments",
            to:'/shipments-list/0',
            icon:faCheck,
            clasStyle:"mr-2 text-gray-700"
        },
        {
            title:"Failed Shipments",
            to:'/shipments-list/1',
            icon:faTimes,
            clasStyle:"mr-2 text-green-500"
        },
        {
            title:"Tommorows Shipments",
            to:'/shipments-list/3',
            icon:faClock,
            clasStyle:"mr-2 text-orange-500"
        },
        {
            title:"Upcoming Shipments",
            to:'/shipments-list/2',
            icon:faCalendar,
            clasStyle:"mr-2 text-blue-500"
        }
    ]},
    {
        title: "Scan QR",
        to: "/qr-details",
        icon: faQrcode,
        color: "#b0b4ba",
        subLinks: false,
      },
    {
        title:"Vehicles",
        icon:faTruck,
        color:"#5b3dc7",
         subLinks:[
            {
                title:"Update Vehicle Status",
                to:'/vehicle-update',
                icon:faPenToSquare,
                clasStyle:"mr-2 text-indigo-500"
            },
            {
                title:"Add-Vehicle",
                to:'/add-vehicle',
                icon:faPlus,
                clasStyle:"mr-2 text-green-500"
            }
        ]},
        {
            title:"Suppliers",
            icon:faUsers,
            color:"#5b3dc7",
             subLinks:[
                {
                    title:"Supplier Groups",
                    to:'/admin/supplier/groups',
                    icon:faUser,
                    clasStyle:"mr-2"
                },
            ]},
            {
                title:"Manage",
                icon:faUserLock,
                color:"#5b3dc7",
                 subLinks:[
                    {
                        title:"Building Details",
                        to:'/building',
                        icon:faBuilding,
                        clasStyle:"mr-2 text-indigo-500"
                    },
                    {
                        title:"Admin Details",
                        to:'/admin/users/listCompanyAdminUsers',
                        icon:faUserAstronaut,
                        clasStyle:"mr-2 text-indigo-500"
                    },
                    {
                        title:"Dock Details",
                        to:'/admin/docks',
                        icon:faShip,
                        clasStyle:"mr-2 text-indigo-500"
                    },
                    {
                        title:"Supplier Details",
                        to:'/supplier-list',
                        icon:faUserGroup,
                        clasStyle:"mr-2 text-indigo-500"
                    },
                    {
                        title:"Security Details",
                        to:'/list-all-security',
                        icon:faUserLock,
                        clasStyle:"mr-2 text-indigo-500"
                    },
                    {
                        title:"Warehouse Details",
                        to:'/list-all-warehouses',
                        icon:faBagShopping,
                        clasStyle:"mr-2 text-indigo-500"
                    },
                ]},
                {
                    title:"Approval Pending",
                    to:"/admin/list/supplier/request",
                    icon:faCheck,
                    color:"#72d123",
                    subLinks:false
                },
                {
                    title:"Status & Reports",
                    to:"/statistics",
                    icon:faChartPie,
                    color:"#dcd618",
                    subLinks:false
                },
                {
                    title:"Change Password",
                    to:"/change-password",
                    icon:faLock,
                    color:"#72d123",
                    subLinks:false
                },
               



]

export {AdminLinks}