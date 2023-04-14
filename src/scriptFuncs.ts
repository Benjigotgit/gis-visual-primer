import mapboxgl, { LngLat, } from "mapbox-gl";

export const scriptFuncs = {


    'drawPoint': (map) => {


        map.flyTo({
            center:   [  -91.20030444282527,
                32.97243392969706],
            duration: 1500,
            zoom: 3.2,
          });

        const marker1 = new mapboxgl.Marker({
            color:'#A020F0'
        })
        .setLngLat([-94.15727, 36.07727])
        .addTo(map);
  
        
    },

    'setProjection': (map, currStepObj) => {

        map.flyTo({
            center:   [   -94.60745018298526,
                36.507038565628505],
            duration: 1500,
            zoom: 1.6,
          });

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

        map.setStyle('mapbox://styles/mapbox/light-v11')

        setTimeout(() => {
            map.addSource('arkansas', {
                'type': 'geojson',
                'data': {
                    
                        "type": "FeatureCollection",
                        "features": [
                          {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                              "coordinates": [
                                [
                                  [
                                    -91.20030444282527,
                                    32.97243392969706
                                  ],
                                  [
                                    -91.13841664297293,
                                    33.18943308273121
                                  ],
                                  [
                                    -91.20182718443264,
                                    33.387332518046904
                                  ],
                                  [
                                    -91.14767405917821,
                                    33.76475587911328
                                  ],
                                  [
                                    -90.71888454510024,
                                    34.324299290068424
                                  ],
                                  [
                                    -89.68214673495058,
                                    35.91026139684783
                                  ],
                                  [
                                    -90.3919992419318,
                                    35.95562374469044
                                  ],
                                  [
                                    -90.03416547094123,
                                    36.3142254927798
                                  ],
                                  [
                                    -90.15525229483258,
                                    36.467993527633965
                                  ],
                                  [
                                    -94.60745018298526,
                                    36.507038565628505
                                  ],
                                  [
                                    -94.39749865982041,
                                    35.423611488544154
                                  ],
                                  [
                                    -94.49657143065964,
                                    33.660123043653996
                                  ],
                                  [
                                    -94.31892542469974,
                                    33.614209849896426
                                  ],
                                  [
                                    -94.07308322426191,
                                    33.56767001462978
                                  ],
                                  [
                                    -94.02106318183094,
                                    33.02971240615334
                                  ],
                                  [
                                    -91.20030444282527,
                                    32.97243392969706
                                  ]
                                ]
                              ],
                              "type": "Polygon"
                            }
                          }
                        ]
                    }
                
                });
    
    
    
        map.addLayer({
            'id': 'arkansas',
            'type': 'fill',
            'source': 'arkansas', // reference the data source
            'layout': {},
            'paint': {
            'fill-color': '#A020F0', 
            'fill-opacity': 0.3
            }
            });
            // Add a black outline around the polygon.
            map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'arkansas',
            'layout': {},
            'paint': {
            'line-color': 'black',
            'line-width': 1
            }
            });
    
            
                 
                // Add a new layer to visualize the polygon.
              
    
    
                map.flyTo({
                    center:   [   -94.60745018298526,
                        36.507038565628505],
                    duration: 1500,
                    zoom: 6.2,
                  });
        
        }, 1000)
    }     
}


