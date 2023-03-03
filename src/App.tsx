import { useState } from "react";
import { MapMain } from "./components/MapMain";
import "mapbox-gl/dist/mapbox-gl.css";
import { TopicContainer } from "./components/TopicContainer";
import { SideNavMenu } from "./components/SideMenu";

export default () => {
  return (
    <div className="h-screen w-screen">
      <SideNavMenu></SideNavMenu>
      <div className="h-screen w-screen -z-50">
        <TopicContainer></TopicContainer>

        <MapMain></MapMain>
      </div>
    </div>
  );
};
