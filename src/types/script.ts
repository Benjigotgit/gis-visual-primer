import type { FitBoundsOptions, FlyToOptions } from "mapbox-gl";
import type { ScriptFuncKeys } from "../scriptFuncs";

export interface ScriptObj {
  name: string;
  displayName: string;
  scrollLocked: boolean;
  mapInteractions: ScriptFuncKeys[];
  geojsonToRender?:
    | GeoJSON.Feature<GeoJSON.Geometry>
    | GeoJSON.FeatureCollection<GeoJSON.Geometry>;
  flyToOptions?: FlyToOptions;
  fitBoundsOptions?: FitBoundsOptions;
  text: string[];
  mapInteractionArgs?: string;
}
