import mapboxgl, { LngLat } from "mapbox-gl";

export const scriptFuncs = {


    'drawPoint': (map) => {

        const marker1 = new mapboxgl.Marker()
        .setLngLat([-94.15727, 36.07727])
        .addTo(map);
  
        
    },

    'setProjection': (map, currStepObj) => {

        if (map){
         
            if(currStepObj.displayName === 'Equal Earth Projection'){
                map.setProjection('equalEarth')

            }

            if(currStepObj.displayName === 'Mercator Projection'){
              map.setProjection('mercator')
                

            } else {
                map.setProjection('globe')

            }
      
          
       
      
            
          }
        
    },
    'setBaseMap': (map) => {

        map.setStyle('mapbox://styles/mapbox/outdoors-v12')

    }
}


