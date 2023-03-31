import mapboxgl from "mapbox-gl";
import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { appStateSelector } from "../state/app/selectors";
import { scriptFuncs } from "../scriptFuncs";
import type { Map } from "mapbox-gl";
import type { Ref, MutableRefObject } from "react";
import type { ScriptObj } from "../types/script";
import { bbox, FeatureCollection } from "@turf/turf";
import { BBox2d } from "@turf/helpers/dist/js/lib/geojson";
import { setNextScript } from "../state/app/appState";

export const emptyFeatureCollection: FeatureCollection<any> = {
  type: "FeatureCollection",
  features: [],
};

export const MapMain = () => {
  const dispatch = useAppDispatch()
  const [zoom, setZoom] = useState(1);
  //starting coords are lofty hq
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [selectedGeojson, setSelectedGeojson] = useState(emptyFeatureCollection);
  const { currStepIndex, currStepObj, sideNavOpen } = useAppSelector(appStateSelector);

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
        interactive: true,
        attributionControl: false,
        scrollZoom: false,
        
      });
      map.current.flyTo({
        center: [-94.15727, 36.07727],
        duration: 1500,
        zoom: 2.2,
      });
    } else {
 
    }

  }, [sideNavOpen]);


  useEffect(() => {
 
if(map.current){
   


  map.current.on('click', (e) => {

    // if (currStepObj.scriptScroll){
      scrollTo(
        currStepObj.scriptScroll
        )
    // }
      
      dispatch(setNextScript(currStepIndex + 1))
  currStepObj.mapInteractions.forEach((interaction) => {
    scriptFuncs[interaction](map.current, currStepObj)

    
  })
  })

}
  }, [currStepIndex])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    })
  }, [])


// useEffect(() => {
//   addEventListener('scroll', () => {
//     console.log(window.scrollY)
  
//   })



// }, [])

  const handleNextStep = (obj: ScriptObj) => {
    if (!map.current) return;
    const { flyToCoords, geojsonToRender, mapInteractions } = obj;

    if (flyToCoords) {
      const bb = bbox(selectedGeojson) as BBox2d;
      map.current.fitBounds(bb, {
        duration: 800,
        padding: 50,
        zoom: 9,
      });
    }
  };

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
