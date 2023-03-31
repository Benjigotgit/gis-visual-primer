import type { Expression, Map } from "mapbox-gl";
import { emptyFeatureCollection } from "../components/MapMain";

export const setMercatorProjLineLayer = (map: Map, data: GeoJSON.GeoJSON) => {
  const src = map.getSource("latlng-mercator-proj-linesrc");
  if (!src) {
    map?.addSource("latlng-mercator-proj-linesrc", {
      type: "geojson",
      data: data,
    });

    map.addLayer({
      id: "latlng-mercator-proj-line",
      type: "line",
      source: "latlng-mercator-proj-linesrc",

      paint: {
        "line-color": "red",
        "line-width": 2,
      },
    });
    //@ts-expect-error setData not typed in mb
    return src.setData(data);
  }
};
export const setGlobeProjLineLayer = (map: Map, data: GeoJSON.GeoJSON) => {
  console.log("ok");
  const src = map.getSource("latlng-globe-proj-linesrc");

  if (!src) {
    console.log("noSource");

    map?.addSource("latlng-globe-proj-linesrc", {
      type: "geojson",
      data: data,
    });

    map.addLayer({
      id: "latlng-globe-proj-line",
      type: "line",
      source: "latlng-globe-proj-linesrc",

      paint: {
        "line-color": "blue",
        "line-width": 2,
      },
    });
  }
  //@ts-expect-error setData not typed in mb
  else src.setData(data);
};
