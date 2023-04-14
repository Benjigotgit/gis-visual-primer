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
    displayName: "Projections",
    scrollLocked: false,
    mapInteractions: [],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
      "What if you want to plot your coordinates on a flat surface map? Projections are used to represent the curvature of the globe as a 2-dimensional map. There are many different types of projections that are used in specific cases, depending on the location and map medium (print vs web).",
    ],
  
  },
  {
    name: "step4",
    displayName: "Mercator Projection",
    scrollLocked: false,
    mapInteractions: ["setProjection"],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
'The Mercator projection system is often used for navigation. Web mercator is used for web maps!'
    ],

  },
  {
    name: "step5",
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
    name: "step6",
    displayName: "Basemaps",
    scrollLocked: false,
    mapInteractions: ['setBaseMap'],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
'The underlying background of a map is called the basemap. They serve as a base reference for you to overlay other layers of data on top of.'
    ],
   
  },
  {
    name: "step7",
    displayName: "Outdoor Basemap",
    scrollLocked: false,
    mapInteractions: ['setBaseMap'],
    geojsonToRender: null,
    mapInteractionArgs: 'outdoors-v12',
    flyToCoords: false,
    text: [
'Basemaps can include geographical references such terrain, or manmade references such as streets. This basemap features wilderness locations as a resource for outdoor activities.'
    ],
   
  },
  {
    name: "step8",
    displayName: "Satellite Imagery Basemap",
    scrollLocked: false,
    mapInteractions: ['setBaseMap'],
    mapInteractionArgs: 'satellite-streets-v12',
    geojsonToRender: null,
    flyToCoords: false,
    text: [
      'Here is an example of a satellite imagery basemap.'

    ],
   
  },
  {
    name: "step9",
    displayName: "Vector & Raster Data",
    scrollLocked: false,
    mapInteractions: ['drawPolygon', ],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
'Basemaps are great, but what if we want to see additional information on the map? Maybe we want to see how much it cost each country to host the World Cup or what the temperature is in every square mile in Arkansas. We can add different types of data to a map, such as vector or raster layers. Lets explore each kind!'
    ],
   
  },
  {
    name: "step10",
    displayName: "Vector Layers",
    scrollLocked: false,
    mapInteractions: [ ],
    geojsonToRender: null,
    flyToCoords: false,
    text: [ 'Vector data includes points, lines and polygons.'
    ],
   
  },
  {
    name: "step11",
    displayName: "Raster Layers",
    scrollLocked: false,
    mapInteractions: [ ],
    geojsonToRender: null,
    flyToCoords: false,
    text: [ 'Raster data includes any pixelated/grid data where each pixel represents a different geographic location and unique data value.'
    ],
   
  },
];
