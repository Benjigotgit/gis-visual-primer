import { useState } from "react";
import { MapMain } from "./components/MapMain";
import { Provider } from "react-redux";

import "mapbox-gl/dist/mapbox-gl.css";
import { TopicContainer } from "./components/TopicContainer";
import { SideNavMenu } from "./components/SideMenu";
import { store } from "./state/store";

export default () => {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen flex flex-row">
        <SideNavMenu></SideNavMenu>
        <div className="h-full w-full -z-50">
          <MapMain></MapMain>
        </div>
        <TopicContainer></TopicContainer>
      </div>
    </Provider>
  );
};
