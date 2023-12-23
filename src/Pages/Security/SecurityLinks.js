const {
  faSquarePlus,
  faClock,
  faPenToSquare,
  faUser,
  faBuilding,
  faQuestionCircle,
  faCalendar,
} = require("@fortawesome/free-regular-svg-icons");
const {
  faTv,
  faTruckFast,
  faCheck,
  faTruck,
  faPlug,
  faPlus,
  faUsers,
  faUserLock,
  faUserAstronaut,
  faShip,
  faUserGroup,
  faBagShopping,
  faChartPie,
  faTimes,
  faSearch,
} = require("@fortawesome/free-solid-svg-icons");

const SecurityLinks = [
  {
    title: "Security Check",
    to: "/security",
    icon: faSearch,
    color: "#b0b4ba",
    subLinks: false,
  },
  {
    title: "Scan QR",
    to: "/qr-details",
    icon: faSearch,
    color: "#b0b4ba",
    subLinks: false,
  },
  {
    title: "Upcoming Check",
    to: "/shipments-list/2",
    icon: faClock,
    color: "#25b922",
    subLinks: false,
  },

  {
    title: "Help",
    to: "/#help",
    icon: faQuestionCircle,
    color: "#72d123",
    subLinks: false,
  },
];

export { SecurityLinks };
