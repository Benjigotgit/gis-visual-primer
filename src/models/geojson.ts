import { lineString } from "@turf/turf";

export const NorthPoleCoords = [90.0, -90.0];
export const SouthPoleCoords = [90.0, 90];

export const northToSouthLine = lineString([NorthPoleCoords, SouthPoleCoords]);
