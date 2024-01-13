const {
    faClock,
    faQuestionCircle,
    faCheckCircle
  } = require("@fortawesome/free-regular-svg-icons");
  const {
    faSearch, faTruckLoading, faWarehouse, faSignOut, faQrcode, faLock,
  } = require("@fortawesome/free-solid-svg-icons");
  
  const WareHouseLinks = [
    {
      title: "Warehouse Check",
      to: "/warehouse",
      icon: faSearch,
      color: "#b0b4ba",
      subLinks: false,
    },
    {
        title: "Quality Check",
        to: "warehouse/quality-check",
        icon: faCheckCircle,
        color: "#b0b4ba",
        subLinks: false,
    },
    {
        title: "Unloading Check",
        to: "warehouse/unloading-check",
        icon: faTruckLoading,
        color: "#b0b4ba",
        subLinks: false,
    },
    {
      title: "Exit Scan",
      to: "warehouse/exit",
      icon: faWarehouse,
      color: "#25b922",
      subLinks: false,
    },
    {
      title: "Checkout Scan",
      to: "warehouse/checkout",
      icon: faSignOut,
      color: "#25b922",
      subLinks: false,
    },
    {
      title: "Scan QR",
      to: "/qr-details",
      icon: faQrcode,
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
      title: "Help",
      to: "/#help",
      icon: faQuestionCircle,
      color: "#72d123",
      subLinks: false,
    },
  ];
  
  export { WareHouseLinks };
  