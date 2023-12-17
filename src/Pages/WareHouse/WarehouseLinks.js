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
        title: "Quality Check",
        to: "warehouse/quality-check",
        icon: faSearch,
        color: "#b0b4ba",
        subLinks: false,
    },
    {
        title: "Loading Check",
        to: "warehouse/unloading-check",
        icon: faSearch,
        color: "#b0b4ba",
        subLinks: false,
    },
    {
      title: "Exit Scan",
      to: "warehouse/exit",
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
  