import { useState } from "react";
import { MapMain } from "./components/MapMain";
import "mapbox-gl/dist/mapbox-gl.css";

export default () => {
  return (
    <div className="bg-purple-600 h-screen w-screen">
      <MapMain></MapMain>
      <h1 className="bg-blue-500"> hi</h1>
    </div>
  );
};
