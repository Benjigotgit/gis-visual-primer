import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

export const TopicContainer = () => {
  const [zoom, setZoom] = useState(9);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);

  useEffect(() => {}, []);

  return <div></div>;
};
