import type { LayerId, LayerSource } from "./layersAndSources";

export interface ScriptObj {
  name: string;
  displayName: string;
  scrollLocked: boolean;
  mapInteractions: string[];
  geojsonToRender: any;
  flyToCoords: boolean;
  text: string[];
  layer?: LayerId;
  layerSource?: LayerSource;
}
