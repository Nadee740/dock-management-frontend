const {
    faClock,
    faQuestionCircle
  } = require("@fortawesome/free-regular-svg-icons");
  const {
    faSearch,
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
      title: "Upcoming Check",
      to: "/shipments-list",
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
  
  export { WareHouseLinks };
  