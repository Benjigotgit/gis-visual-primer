import { MapMain } from "./components/MapMain";
import { Provider } from "react-redux";

import "mapbox-gl/dist/mapbox-gl.css";
import { TopicContainer } from "./components/TopicContainer";
import { SideNavMenu } from "./components/SideNavMenu";
import { store } from "./state/store";

import type { Map } from "mapbox-gl";

export default () => {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen flex flex-row z-10">
        <SideNavMenu></SideNavMenu>
        <TopicContainer></TopicContainer>
        <MapMain></MapMain>
      </div>
    </Provider>
  );
};

declare global {
  interface Window {
    mapRef: Map | null;
  }
}

window.mapRef;
