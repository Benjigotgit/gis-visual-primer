import mapboxgl from "mapbox-gl";
import axios from "axios";

import type { ScriptObj } from "./types/script";
import type { Map, Marker } from "mapbox-gl";
import { PoiStyle } from "./layers/poiLayer";

export type ScriptFuncKeys =
  | "drawPoint"
  | "setProjection"
  | "setBaseMap"
  | "drawPolygon"
  | "drawLine"
  | "flyTo"
  | "removePoints"
  | "addContourLine"
  | "addRaster"
  | "addDEM"
  | "addPOIS";

type ScriptFunc<T> = (map: Map, currStepObj: ScriptObj) => T;

export interface ScriptFuncs {
  drawPoint: ScriptFunc<Marker>;
  setProjection: ScriptFunc<void>;
  setBaseMap: ScriptFunc<Promise<void>>;
  drawPolygon: ScriptFunc<void>;
  drawLine: ScriptFunc<void>;
  flyTo: ScriptFunc<void>;
  removePoints: (markers: Marker[]) => void;
  addContourLine: ScriptFunc<void>;
  addRaster: ScriptFunc<void>;
  addDEM: ScriptFunc<void>;
  addPOIS: ScriptFunc<void>;
}

export const scriptFuncs: ScriptFuncs = {
  drawPoint: (map) => {
    return new mapboxgl.Marker({
      color: "#A020F0",
    })
      .setLngLat([-94.15727, 36.07727])
      .addTo(map);
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

  drawLine: (map, currStepObj) => {
    if (!map.getSource("line-example")) {
      map.addSource("line-example", {
        type: "geojson",
        data: currStepObj.geojsonToRender,
      });
      map.addLayer({
        id: "line-example",
        type: "line",
        source: "line-example",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: {
          "line-color": "black",
          "line-width": 3,
        },
      });
    } else {
    }
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

  addContourLine: (map) => {
    map.addSource("contour_line", {
      type: "vector",
      url: "mapbox://mayapapaya7.bo7g3v48",
    });
    map.addLayer({
      id: "contour_transform-2835n5",
      type: "line",
      source: "contour_line",
      "source-layer": "contour_transform-2835n5",
      paint: {
        "line-color": "#A020F0",
        "line-width": 1,
      },
    });
  },
  // TO DO: find some usable raster layer to show off at step 13, not getting this one to load right
  addRaster: (map) => {
    map.addSource("NAIP-b3u5r5", {
      type: "raster",
      url: "mapbox://mayapapaya7.d05dt6bm",
    });
    map.addLayer({
      id: "NAIP-b3u5r5",
      type: "raster",
      source: "NAIP-b3u5r5",
      "source-layer": "NAIP-b3u5r5",
    });
  },
  addDEM: (map) => {
    map.addSource("raster_transform-aqck0j", {
      type: "raster",
      url: "mapbox://mayapapaya7.6xtekvmp",
    });
    map.addLayer({
      id: "raster_transform-aqck0j",
      type: "raster",
      source: "raster_transform-aqck0j",
      "source-layer": "raster_transform-aqck0j",
    });
  },
  addPOIS: (map, currStepObj) => {
  

    map.addSource('places', {
      'type': 'geojson',
      'data': currStepObj.geojsonToRender
      });
      // Add a layer showing the places.
      map.addLayer(PoiStyle);

      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
        });

      map.on('mouseenter', 'places', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        
         
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = `<img width="100" src="${e.features[0].properties.imageUrl}"/><br/>
        <strong>${e.features[0].properties.title}</strong><br/>
        <h5>${e.features[0].properties.address}</h5>
        ${e.features[0].properties.description}`;
         
    
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
         
    
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });
         
        map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
        });
  }
};
