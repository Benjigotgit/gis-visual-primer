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
  
  },
  {
    name: "step2",
    displayName: "Latitude and Longitude",
    scrollLocked: false,
    mapInteractions: [],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
      "You placed a pin at 36.07727° latitude and -94.15727° longitude. Latitude and longitude measure positions on our spherical Earth. Combined, these two measurements make up the geographic coordinate system. What if you want to plot your coordinates on a flat map? Flat maps are called projections: stretched representations which represent the curvature of the Earth on a 2-dimensional map.",
    ],
  
  },
  {
    name: "step3",
    displayName: "Mercator Projection",
    scrollLocked: false,
    mapInteractions: ["setProjection"],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
'Mercator projection system. The Mercator projection system is often used for navigation.'
    ],

  },
  {
    name: "step4",
    displayName: "Equal Earth Projection",
    scrollLocked: false,
    mapInteractions: ['setProjection'],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
      "One common representation of Earth is called the Equal Earth projection. Equal Earth accurately reflects areas of geography, but shapes will be distorted at further distances North and South. To know where your pin is on this map, we need to use the same transformation used to stretch this map in the first place."
    ],

  },
  {
    name: "step5",
    displayName: "BaseMaps",
    scrollLocked: false,
    mapInteractions: ['setBaseMap'],
    geojsonToRender: null,
    mapInteractionArgs: 'outdoors-v12',
    flyToCoords: false,
    text: [
'The actual background image of the projection is called a base map. It can include anything from roads, geography, color changes, and more.'
    ],
   
  },
  {
    name: "step6",
    displayName: "Point Description",
    scrollLocked: false,
    mapInteractions: ['setBaseMap'],
    mapInteractionArgs: 'satellite-streets-v12',
    geojsonToRender: null,
    flyToCoords: false,
    text: [
      'The actual background image of the projection is called a base map. It can include anything from roads, geography, color changes, and more.'

    ],
   
  },
  {
    name: "step7",
    displayName: "Polygons",
    scrollLocked: false,
    mapInteractions: ['drawPolygon', ],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
'Basemaps are great, but what if we want to see additional information on the map? Maybe we want to see how much it cost each country to host the World Cup or what the temperature is in every square mile in Arkansas.'
    ],
   
  },
  {
    name: "step8",
    displayName: "Raster Layers",
    scrollLocked: false,
    mapInteractions: [ ],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
    ],
   
  },
  {
    name: "step9",
    displayName: "Vector Layers",
    scrollLocked: false,
    mapInteractions: [ ],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
    ],
   
  },
];
