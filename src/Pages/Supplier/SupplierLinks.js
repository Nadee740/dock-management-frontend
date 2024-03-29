const { faSquarePlus, faClock, faPenToSquare, faUser, faBuilding, faQuestionCircle, faCalendar, faFile } = require("@fortawesome/free-regular-svg-icons");
const { faTv, faTruckFast, faCheck, faTruck, faPlug, faPlus, faUsers, faUserLock, faUserAstronaut, faShip, faUserGroup, faBagShopping, faChartPie, faTimes, faQrcode, faLock } = require("@fortawesome/free-solid-svg-icons");

const SupplierLinks=[{
    title:"Dashboard",
    to:"/supplier",
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
                title:"Add Vehicle",
                to:'/add-vehicle',
                icon:faPlus,
                clasStyle:"mr-2 text-green-500"
            }
        ]},
        {
            title:"Booking Details",
            to:'/supplier/booking/details',
            icon:faFile,
            color: "#b0b4ba",
            subLinks: false,

        },
        {
            title:"Change Password",
            to:"/change-password",
            icon:faLock,
            color:"#72d123",
            subLinks:false
        },
          {
                    title:"Help",
                    to:"/#help",
                    icon:faQuestionCircle,
                    color:"#72d123",
                    subLinks:false
                },



]

export {SupplierLinks}