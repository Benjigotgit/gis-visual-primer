export const script = [
  {
    name: "place_starting_pin",
    displayName: "Getting Started",
    scrollLocked: true,
    mapInteractions: ["drawPoint"],
    geojsonToRender: null,
    flyToCoords: null,
    text: ["Place a pin on the Earth to get started."],
  },
  {
    name: "step2",
    displayName: "Point description",
    scrollLocked: false,
    mapInteraction: ["drawPoint"],
    geojsonToRender: null,
    flyToCoords: false,
    text: [
      "You placed a pin at 34.810421° latitude and -84.540323° longitude",
      "Latitude and longitude measure positions on our spherical Earth. Combined, these two measurements make up the geographic coordinate system",
      "What if you want to plot your coordinates on a flat map? Flat maps are called projections: stretched representations which represent the curvature of the Earth on a 2-dimensional map.",
    ],
  },
];
