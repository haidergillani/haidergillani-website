import { geoNaturalEarth1, geoPath, type GeoProjection } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import type { FeatureCollection, Geometry } from "geojson";

export const MAP_WIDTH = 980;
export const MAP_HEIGHT = 480;

// world-atlas ships TopoJSON; convert the "countries" object to GeoJSON.
const world = feature(
  worldData as unknown as Parameters<typeof feature>[0],
  (worldData as unknown as { objects: { countries: never } }).objects.countries
) as unknown as FeatureCollection<Geometry>;

// A single shared projection so land paths and pins align perfectly.
export const projection: GeoProjection = geoNaturalEarth1().fitExtent(
  [
    [12, 12],
    [MAP_WIDTH - 12, MAP_HEIGHT - 12],
  ],
  world
);

const pathGen = geoPath(projection);

/** SVG path `d` string for every country. */
export const countryPaths: string[] = world.features
  .map((f) => pathGen(f) || "")
  .filter(Boolean);

/** Project a [lng, lat] pair to percentage coordinates within the viewBox. */
export function projectToPercent(coordinates: [number, number]) {
  const point = projection(coordinates);
  if (!point) return { left: 0, top: 0 };
  return {
    left: (point[0] / MAP_WIDTH) * 100,
    top: (point[1] / MAP_HEIGHT) * 100,
  };
}
