import React from "react";
import ServicesPageRoofTab from "./ServicesPageRoofTab";
import ServicesPageKitchenTab from "./ServicesPageKitchenTab";
import ServicesPageDoorTab from "./ServicesPageDoorTab";
import ServicesPageFloorTab from "./ServicesPageFloorTab";
import ServicesPageSkirtingTab from "./ServicesPageSkirtingTab";
import ServicesPageWindowTab from "./ServicesPageWindowTab";

// Data for the tabs on the services page
const tabData = [
  { eventKey: "roof", title: "Roof", component: <ServicesPageRoofTab /> },
  {
    eventKey: "kitchen",
    title: "Kitchen",
    component: <ServicesPageKitchenTab />,
  },
  { eventKey: "doors", title: "Doors", component: <ServicesPageDoorTab /> },
  { eventKey: "floors", title: "Floors", component: <ServicesPageFloorTab /> },
  {
    eventKey: "skirtings",
    title: "Skirtings",
    component: <ServicesPageSkirtingTab />,
  },
  {
    eventKey: "windows",
    title: "Windows",
    component: <ServicesPageWindowTab />,
  },
];

export default tabData;
