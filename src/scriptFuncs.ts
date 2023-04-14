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
    'setBaseMap': (map, currStepObj) => {


        if(currStepObj.mapInteractionArgs !== ''){
            map.setStyle('mapbox://styles/mapbox/' + currStepObj.mapInteractionArgs)

        }

    },
    'drawPolygon': (map) => {
        map.addSource('maine', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'geometry': {
            'type': 'Polygon',
            // These coordinates outline Maine.
            'coordinates': [
            [
            [-67.13734, 45.13745],
            [-66.96466, 44.8097],
            [-68.03252, 44.3252],
            [-69.06, 43.98],
            [-70.11617, 43.68405],
            [-70.64573, 43.09008],
            [-70.75102, 43.08003],
            [-70.79761, 43.21973],
            [-70.98176, 43.36789],
            [-70.94416, 43.46633],
            [-71.08482, 45.30524],
            [-70.66002, 45.46022],
            [-70.30495, 45.91479],
            [-70.00014, 46.69317],
            [-69.23708, 47.44777],
            [-68.90478, 47.18479],
            [-68.2343, 47.35462],
            [-67.79035, 47.06624],
            [-67.79141, 45.70258],
            [-67.13734, 45.13745]
            ]
            ]
            }
            }
            });
             
            // Add a new layer to visualize the polygon.
            map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine', // reference the data source
            'layout': {},
            'paint': {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0.3
            }
            });
            // Add a black outline around the polygon.
            map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'maine',
            'layout': {},
            'paint': {
            'line-color': '#000',
            'line-width': 2
            }
            });

            map.flyTo({
                center:   [-67.13734, 45.13745],
                duration: 1500,
                zoom: 6.2,
              });
    }
}


