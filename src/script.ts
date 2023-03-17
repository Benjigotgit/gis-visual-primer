import { ScriptObj } from "./types/script";

export const script: ScriptObj[] = [
  {
    name: "place_starting_pin",
    displayName: "Getting Started",
    scrollLocked: true,
    mapInteractions: ["drawPoint"],
    geojsonToRender: null,
    flyToCoords: false,
    text: ["Click map to get started."],
    scriptScroll: {
      top: 800,
      left: 100,
      behavior: "smooth",
    }
  },
  {
    name: "step2",
    displayName: "Point description",
    scrollLocked: false,
    mapInteractions: ["drawPoint"],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
      "You placed a pin at 36.07727° latitude and -94.15727° longitude",
      "Latitude and longitude measure positions on our spherical Earth. Combined, these two measurements make up the geographic coordinate system",
      "What if you want to plot your coordinates on a flat map? Flat maps are called projections: stretched representations which represent the curvature of the Earth on a 2-dimensional map.",
    ],
    scriptScroll: {
      top: 1600,
      left: 100,
      behavior: "smooth",
    }
  },
  {
    name: "step3",
    displayName: "Point description",
    scrollLocked: false,
    mapInteractions: ["drawPoint"],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
'Mercator projection system'
    ],
    scriptScroll: {
      top: 2000,
      left: 100,
      behavior: "smooth",
    }
  },
  {
    name: "step4",
    displayName: "Point description",
    scrollLocked: false,
    mapInteractions: ["drawPoint"],
    geojsonToRender: null,
    flyToCoords: false,
    text: [

    ],
    scriptScroll: {
      top: 2400,
      left: 100,
      behavior: "smooth",
    }
  },
];
