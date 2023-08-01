const { faSquarePlus, faClock, faPenToSquare, faUser, faBuilding, faQuestionCircle, faCalendar } = require("@fortawesome/free-regular-svg-icons");
const { faTv, faTruckFast, faCheck, faTruck, faPlug, faPlus, faUsers, faUserLock, faUserAstronaut, faShip, faUserGroup, faBagShopping, faChartPie, faTimes } = require("@fortawesome/free-solid-svg-icons");

const SupplierLinks=[{
    title:"Dashboard",
    to:"/supplier",
    icon:faTv,
    color:'#b0b4ba',
    subLinks:false
},
 {
    title:"Dock-Booking",
    to:"/dock-booking",
    icon:faSquarePlus,
    color:"#25b922",
    subLinks:false
},
{
    title:"Todays Shipments",
    icon:faTruckFast,
    color:"#5b3dc7",
     subLinks:[
        {
            title:"Past Shipments",
            to:'/',
            icon:faCheck,
            clasStyle:"mr-2 text-gray-700"
        },
        {
            title:"Failed Shipments",
            to:'/',
            icon:faTimes,
            clasStyle:"mr-2 text-green-500"
        },
        {
            title:"Tommorows Shipments",
            to:'/',
            icon:faClock,
            clasStyle:"mr-2 text-orange-500"
        },
        {
            title:"Upcoming Shipments",
            to:'/',
            icon:faCalendar,
            clasStyle:"mr-2 text-blue-500"
        }
    ]},
    {
        title:"List Vehicles",
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
                    title:"Help",
                    to:"/#help",
                    icon:faQuestionCircle,
                    color:"#72d123",
                    subLinks:false
                },



]

export {SupplierLinks}