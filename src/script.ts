import type { ScriptObj } from "./types/script";

export const script: ScriptObj[] = [
  {
    name: "place_starting_pin",
    displayName: "Getting Started",
    scrollLocked: true,
    mapInteractions: ["setBaseMap", "flyTo"],
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
      "You placed a pin at 36.07727° latitude and -94.15727° longitude. Latitude and longitude measure positions on our spherical Earth. Combined, these two measurements make up the geographic coordinate system.",
    ],
  },
  {
    name: "step3",
    displayName: "Projections",
    scrollLocked: false,
    mapInteractions: ["drawPoint", "setBaseMap", "flyTo"],
    mapInteractionArgs: "light-v11",
    flyToOptions: {
      center: [-94.15727, 36.07727],
      zoom: 2,
    },
    text: [
      "What if you want to plot your coordinates on a flat map? You would need to project! Projections are used to represent the curvature of the globe as a 2-dimensional map. There are many different types of projections that are used in specific cases, depending on the location and map medium (print vs web).",
    ],
  },
  {
    name: "step4",
    displayName: "Mercator Projection",
    scrollLocked: false,
    mapInteractions: ["setProjection", "drawPoint", "setBaseMap", "flyTo"],
    mapInteractionArgs: "light-v11",
    flyToOptions: {
      center: [-94.15727, 36.07727],
      zoom: 6.2,
    },
    text: [
      "The Mercator projection system is often used for navigation. Web mercator was developed for web mapping!",
    ],
  },
  {
    name: "step5",
    displayName: "Equal Earth Projection",
    scrollLocked: false,
    mapInteractions: ["setProjection", "setBaseMap", "flyTo"],
    mapInteractionArgs: "light-v11",
    flyToOptions: {
      center: [-94.60745018298526, 36.507038565628505],
      zoom: 1.6,
    },
    text: [
      "One common representation of Earth is called the Equal Earth projection. Equal Earth accurately reflects areas of geography, but shapes will be distorted at further distances North and South. To accurately see your pin on the map, we would also need to transform that pin data to the same projection as the underlying map.",
    ],
  },
  {
    name: "step6",
    displayName: "Basemaps",
    scrollLocked: false,
    mapInteractions: ["removePoints", "setBaseMap", "flyTo"],
    mapInteractionArgs: "outdoors-v12",
    flyToOptions: {
      center: [-94.60745018298526, 36.507038565628505],
      zoom: 1.6,
    },
    text: [
      "The underlying background of a map is called the basemap. Basemaps can include geographical references like terrain, or manmade references like streets and borders. They serve as a base reference for you to overlay other layers of data on top of.",
    ],
  },
  {
    name: "step7",
    displayName: "Satellite Imagery",
    scrollLocked: false,
    mapInteractions: ["setBaseMap"],
    mapInteractionArgs: "satellite-streets-v12",
    text: ["Here is an example of a satellite imagery basemap."],
  },
  {
    name: "step8",
    displayName: "Types of GIS Data",
    scrollLocked: false,
    mapInteractions: ["flyTo", "setBaseMap"],
    mapInteractionArgs: "light-v11",
    flyToOptions: {
      center: [-92.398888, 34.484027],
      zoom: 6,
    },
    text: [
      "Basemaps are great, but what if we want to see additional information on the map? Maybe we want to see how much it cost each country to host the World Cup or what the temperature is in every square mile in Arkansas. We can add two different types of GIS data to the map, vector or raster. Lets explore each kind!",
    ],
  },
  {
    name: "step9",
    displayName: "Vector Layers",
    scrollLocked: false,
    mapInteractions: [],
    text: [
      "Vector data is the most common GIS data that you will come across. It includes:",
    ],
  },
  {
    name: "step10",
    displayName: "Points",
    scrollLocked: false,
    mapInteractions: ["drawPoint"],
    text: ["Points: Helpful for showing distinct data locations such as Lofty HQ. "],
  },
  // Temporary line example, we could populate this with something more interesting like street data!
  {
    name: "step11",
    displayName: "Lines",
    scrollLocked: false,
    mapInteractions: ["drawLine"],
    geojsonToRender: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-94.048626, 35.847524],
          [-90.818646, 34.816831],
        ],
      },
    },
    text: [
      "Lines: Helpful for showing linear features like streets, rivers, or trails. Or, representing the distance from one part of the state to another.",
    ],
  },
  {
    name: "step12",
    displayName: "Polygons",
    scrollLocked: false,
    mapInteractions: ["drawPolygon"],
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
    text: [
      "Polygons: Helpful for showing boundary areas such as the state boundary of Arkansas.",
    ],
  },
  // TO DO: At step 13, we should remove all layers (points, lines & polygons)
  {
    name: "step13",
    displayName: "Raster Layers",
    scrollLocked: false,
    mapInteractions: ["removePoints"],
    text: [
      "Moving on to raster data, which includes any pixelated/grid data where each pixel represents a different geographic location and unique attribute value. Raster data is most commonly found in remotely sensed data, shaded relief and topographic data, satellite imagery, and aerial imagery",
    ],
  },
  {
    name: "step14",
    displayName: "Elevation - Raster",
    scrollLocked: false,
    mapInteractions: ["flyTo", "addDEM"],
    flyToOptions: {
      center: [-94.008, 36.085],
      zoom: 14,
    },
    text: [
      "Elevation data can be portrayed as both raster & vector data. Each pixel cell of this DEM (Digital Elevation Model) raster data represents equal elevation areas, with a greyscale representing low to high elevation. It can actually used to generate contour lines.",
    ],
  },
  {
    name: "step15",
    displayName: "Elevation - Vector",
    scrollLocked: false,
    mapInteractions: ["flyTo", "addContourLine"],
    flyToOptions: {
      center: [-94.008, 36.085],
      zoom: 16,
    },
    text: [
      "Contour lines are created by generating polylines that connect points of equal elevation within a DEM raster dataset",
    ],
  },
  // There is currently a bug where the last two steps in the nav do not respond to scroll/do not load data
  // As a temporary fix, leaving these two empty steps here so the other steps load properly
  {
    name: "",
    displayName: "",
    scrollLocked: false,
    mapInteractions: [],
    text: [],
  },
  {
    name: "",
    displayName: "",
    scrollLocked: false,
    mapInteractions: [],
    text: [],
  },
];
