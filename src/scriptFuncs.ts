import mapboxgl from "mapbox-gl";
import axios from "axios";

import type { ScriptObj } from "./types/script";
import type { Map, Marker } from "mapbox-gl";

export type ScriptFuncKeys =
  | "drawPoint"
  | "setProjection"
  | "setBaseMap"
  | "drawPolygon"
  | "flyTo"
  | "removePoints";

type ScriptFunc<T> = (map: Map, currStepObj: ScriptObj) => T;

export interface ScriptFuncs {
  drawPoint: ScriptFunc<Marker>;
  setProjection: ScriptFunc<void>;
  setBaseMap: ScriptFunc<Promise<void>>;
  drawPolygon: ScriptFunc<void>;
  flyTo: ScriptFunc<void>;
  removePoints: (markers: Marker[]) => void;
}

export const scriptFuncs: ScriptFuncs = {
  drawPoint: (map) => {
    map.flyTo({
      center: [-91.20030444282527, 32.97243392969706],
      zoom: 3.2,
    });

    return new mapboxgl.Marker({
      color: "#A020F0",
    })
      .setLngLat([-94.15727, 36.07727])
      .addTo(map);
  },

  setProjection: (map: Map, currStepObj: ScriptObj) => {
    if (map) {
      if (currStepObj.displayName === "Equal Earth Projection") {
        map.setProjection("equalEarth");
      }
      if (currStepObj.displayName === "Mercator Projection") {
        map.setProjection("mercator");
      } else {
        map.setProjection("globe");
      }
    }
  },

  setBaseMap: async (map, currStepObj) => {
    if (!map || !map.isStyleLoaded()) return;
    const currentStyle = map.getStyle().name?.toLowerCase().split(" ")[1];

    if (!currentStyle || !currStepObj.mapInteractionArgs) return;
    if (currStepObj.mapInteractionArgs.split("-")[0] === currentStyle) return;

    const url = `https://api.mapbox.com/styles/v1/mapbox/${currStepObj.mapInteractionArgs}`;
    const params = { access_token: import.meta.env.VITE_MAPBOX_TOKEN };

    const { data } = await axios.get(url, { params });
    map.setStyle(data);
  },

  drawPolygon: (map, currStepObj) => {

    setTimeout(() => {
      if (!map.getSource("arkansas")) {
        map.addSource("arkansas", {
          type: "geojson",
          data: currStepObj.geojsonToRender,
        });
  
        // Add a new layer to visualize the polygon.
        map.addLayer({
          id: "arkansas",
          type: "fill",
          source: "arkansas", // reference the data source
          layout: {},
          paint: {
            "fill-color": "#A020F0",
            "fill-opacity": 0.3,
          },
        });
        // Add a black outline around the polygon.
        map.addLayer({
          id: "outline",
          type: "line",
          source: "arkansas",
          layout: {},
          paint: {
            "line-color": "black",
            "line-width": 1,
          },
        });
      } else {
      }
    }, 1000)
   
  },
  flyTo: (map, currStepObj) => {
    map.flyTo({
      ...currStepObj.flyToOptions,
      duration: 1000,
    });
  },
  removePoints: (markers: Marker[]) => {
    markers.forEach((marker) => {
      marker.remove();
    });
    while (markers.length) {
      markers.pop();
    }
  },
};
