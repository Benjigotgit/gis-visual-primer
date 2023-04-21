import type { ScriptObj } from "./types/script";

export const script: ScriptObj[] = [
  {
    name: "place_starting_pin",
    displayName: "Getting Started",
    scrollLocked: true,
    mapInteractions: ["removePoints", "setBaseMap", "flyTo"],
    flyToOptions: {
      center: [-94.15727, 36.07727],
      zoom: 2.2,
    },
    mapInteractionArgs: "light-v11",
    text: ["Click map to get started."],
  },
  {
    name: "step2",
    displayName: "Latitude and Longitude",
    scrollLocked: false,
    mapInteractions: ["drawPoint", "setBaseMap", "flyTo"],
    mapInteractionArgs: "light-v11",
    flyToOptions: {
      center: [-94.15727, 36.07727],
      zoom: 6.2,
    },
    text: [
      "You placed a pin at 36.07727° latitude and -94.15727° longitude. Latitude and longitude measure positions on our spherical Earth. Combined, these two measurements make up the geographic coordinate system. What if you want to plot your coordinates on a flat map? Flat maps are called projections: stretched representations which represent the curvature of the Earth on a 2-dimensional map.",
    ],
  },
  {
    name: "step3",
    displayName: "Mercator Projection",
    scrollLocked: false,
    mapInteractions: ["drawPoint", "setBaseMap", "flyTo"],
    mapInteractionArgs: "light-v11",
    flyToOptions: {
      center: [-94.15727, 36.07727],
      zoom: 6.2,
    },
    text: [
      "Mercator projection system. The Mercator projection system is often used for navigation.",
    ],
  },
  {
    name: "step4",
    displayName: "Equal Earth Projection",
    scrollLocked: false,
    mapInteractions: ["setProjection", "setBaseMap", "flyTo"],
    mapInteractionArgs: "light-v11",
    flyToOptions: {
      center: [-94.60745018298526, 36.507038565628505],
      zoom: 1.6,
    },
    text: [
      "One common representation of Earth is called the Equal Earth projection. Equal Earth accurately reflects areas of geography, but shapes will be distorted at further distances North and South. To know where your pin is on this map, we need to use the same transformation used to stretch this map in the first place.",
    ],
  },
  {
    name: "step5",
    displayName: "BaseMaps",
    scrollLocked: false,
    mapInteractions: ["removePoints", "setBaseMap", "flyTo"],
    mapInteractionArgs: "outdoors-v12",
    flyToOptions: {
      center: [-94.60745018298526, 36.507038565628505],
      zoom: 1.6,
    },
    text: [
      "The actual background image of the projection is called a base map. It can include anything from roads, geography, color changes, and more.",
    ],
  },
  {
    name: "step6",
    displayName: "BaseMaps2",
    scrollLocked: false,
    mapInteractions: ["setBaseMap", "setBaseMap", "flyTo"],
    mapInteractionArgs: "satellite-streets-v12",
    flyToOptions: {
      center: [-94.60745018298526, 36.507038565628505],
      zoom: 1.6,
    },
    text: [
      "The actual background image of the projection is called a base map. It can include anything from roads, geography, color changes, and more.",
    ],
  },
  {
    name: "step7",
    displayName: "Polygons",
    scrollLocked: false,
    mapInteractions: ["setBaseMap", "drawPolygon", "flyTo"],
    mapInteractionArgs: "light-v11",
    geojsonToRender: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [
                [-91.20030444282527, 32.97243392969706],
                [-91.13841664297293, 33.18943308273121],
                [-91.20182718443264, 33.387332518046904],
                [-91.14767405917821, 33.76475587911328],
                [-90.71888454510024, 34.324299290068424],
                [-89.68214673495058, 35.91026139684783],
                [-90.3919992419318, 35.95562374469044],
                [-90.03416547094123, 36.3142254927798],
                [-90.15525229483258, 36.467993527633965],
                [-94.60745018298526, 36.507038565628505],
                [-94.39749865982041, 35.423611488544154],
                [-94.49657143065964, 33.660123043653996],
                [-94.31892542469974, 33.614209849896426],
                [-94.07308322426191, 33.56767001462978],
                [-94.02106318183094, 33.02971240615334],
                [-91.20030444282527, 32.97243392969706],
              ],
            ],
            type: "Polygon",
          },
        },
      ],
    },
    flyToOptions: {
      center: [-94.60745018298526, 36.507038565628505],
      zoom: 6.2,
    },
    text: [
      "Basemaps are great, but what if we want to see additional information on the map? Maybe we want to see how much it cost each country to host the World Cup or what the temperature is in every square mile in Arkansas.",
    ],
  },
  {
    name: "step8",
    displayName: "Raster Layers",
    scrollLocked: false,
    mapInteractions: [],
    text: [" "],
  },
  {
    name: "step9",
    displayName: "Vector Layers",
    scrollLocked: false,
    mapInteractions: [],
    text: [" "],
  },
];
