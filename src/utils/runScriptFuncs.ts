import { Map, Marker } from "mapbox-gl";
import { ScriptFuncKeys, scriptFuncs } from "../scriptFuncs";
import { ScriptObj } from "../types/script";

export const runScriptFuncs = (map: Map, scriptObj: ScriptObj, markers: Marker[]) => {
  scriptObj.mapInteractions.forEach(async (interaction: ScriptFuncKeys) => {
    switch (interaction) {
      case "setBaseMap":
        scriptFuncs[interaction](map, scriptObj);
        break;
      case "drawPoint":
        const marker = scriptFuncs[interaction](map, scriptObj);
        markers.push(marker);
        break;
      case "removePoints":
        scriptFuncs[interaction](markers);
        break;
      case "addPOIS":
        scriptFuncs[interaction](map, scriptObj);
        break;
      case "setProjection":
        scriptFuncs[interaction](map, scriptObj);
        break;
      case "drawPolygon":
        scriptFuncs[interaction](map, scriptObj);
        break;
      default:
        scriptFuncs[interaction](map, scriptObj);
    }
  });
};
