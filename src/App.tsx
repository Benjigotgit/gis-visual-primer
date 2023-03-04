import { MapMain } from "./components/MapMain";
import { Provider } from "react-redux";

import "mapbox-gl/dist/mapbox-gl.css";
import { TopicContainer } from "./components/TopicContainer";
import { SideNavMenu } from "./components/SideMenu";
import { store } from "./state/store";

export default () => {
  return (
    <Provider store={store}>
      <div className="h-screen w-screen flex flex-row z-10">
        <SideNavMenu></SideNavMenu>
        <TopicContainer></TopicContainer>
        <div className="h-full w-full">
          <MapMain></MapMain>
        </div>
      </div>
    </Provider>
  );
};
