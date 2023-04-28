import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { appStateSelector } from "../state/app/selectors";
import { script } from "../script";
import { FeatureCollection } from "@turf/turf";
import { setNextScript, resetState } from "../state/app/appState";
import { scrollToScript } from "../utils/scrollToScript";
import { runScriptFuncs } from "../utils/runScriptFuncs";

import type { Map, Marker } from "mapbox-gl";
import type { Ref, MutableRefObject } from "react";

export const emptyFeatureCollection: FeatureCollection<any> = {
  type: "FeatureCollection",
  features: [],
};
const markers: Marker[] = [];

export const MapMain = () => {
  const dispatch = useAppDispatch();
  const { currStepIndex, currStepObj, sideNavOpen, scriptBlockOffsets } =
    useAppSelector(appStateSelector);

  const map: MutableRefObject<Map | null> = useRef(null);
  const mapContainer: Ref<HTMLDivElement> = useRef(null);
  const handleReload = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    })
    dispatch(resetState)
  };

  useEffect(() => {
    handleReload();
  }, [])

  useEffect(() => {
    if (!mapContainer.current) return;
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [0, 0],
        zoom: 1,
        accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
        interactive: true,
        attributionControl: false,
        scrollZoom: false,
      });
      window.mapRef = map.current;
      runScriptFuncs(map.current, currStepObj, markers);
    }
  }, [sideNavOpen]);

  useEffect(() => {
    if (script.length >= currStepIndex + 1) {
      if (window.mapRef) {
        window.mapRef.on("click", (e) => {
          dispatch(setNextScript(currStepIndex + 1));
          scrollToScript(scriptBlockOffsets[currStepIndex], true);
        });
      }
      dispatch(setNextScript(currStepIndex));
    }
  }, []);

  return (
    <>
      <span className="fixed bottom-5 right-5 z-10">MAPBOX LOGO</span>
      <div
        className={`${
          sideNavOpen ? "translate-x-28 scale-95" : ""
        } transition ease-out duration-300 h-full w-full fixed top-0 left-0`}
      >
        <div ref={mapContainer} className={` w-full h-full `}></div>
      </div>
    </>
  );
};
