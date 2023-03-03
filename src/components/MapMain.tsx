import { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "./mb-style.css";
import type { Map } from "mapbox-gl";
import type { Ref, MutableRefObject } from "react";

export const MapMain = () => {
  const [zoom, setZoom] = useState(2);
  //starting coords are lofty hq
  const [lng, setLng] = useState(-94.15727);
  const [lat, setLat] = useState(36.07727);

  const map: MutableRefObject<Map | null> = useRef(null);
  const mapContainer: Ref<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [lng, lat],
        zoom: zoom,
        accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
      });
    }
  }, []);

  return <div ref={mapContainer} className="map-container"></div>;
};
