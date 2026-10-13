import { geoGraticule10, geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import type { Feature, FeatureCollection, Geometry } from "geojson";

const ANTARCTICA = "010";
const PAD_X = 14;
const PAD_Y = 22;

export const MAP_WIDTH = 1000;

const world = feature(
  worldData as unknown as Parameters<typeof feature>[0],
  (worldData as unknown as { objects: { countries: never } }).objects.countries
) as unknown as FeatureCollection<Geometry>;

// Antarctica is dropped so the plate crops tightly around the inhabited world.
const land: FeatureCollection<Geometry> = {
  type: "FeatureCollection",
  features: world.features.filter((f: Feature) => f.id !== ANTARCTICA),
};

const projection = geoNaturalEarth1().fitWidth(MAP_WIDTH - PAD_X * 2, land);
const [[x0, y0], [, y1]] = geoPath(projection).bounds(land);
const [tx, ty] = projection.translate();
projection.translate([tx + PAD_X - x0, ty + PAD_Y - y0]);

export const MAP_HEIGHT = Math.ceil(y1 - y0 + PAD_Y * 2);

const path = geoPath(projection);

/** Every country's outline, keyed by its ISO 3166 numeric code. */
export const countryPaths: { id: string; d: string }[] = land.features
  .map((f) => ({ id: String(f.id), d: path(f) || "" }))
  .filter((c) => c.d);

export const graticulePath: string = path(geoGraticule10()) || "";

/** Project [lng, lat] to viewBox units. */
export function project(coords: [number, number]): [number, number] {
  return projection(coords) ?? [0, 0];
}

/** Project [lng, lat] to percentages of the plate, for HTML overlays. */
export function projectToPercent(coords: [number, number]) {
  const [x, y] = project(coords);
  return { left: (x / MAP_WIDTH) * 100, top: (y / MAP_HEIGHT) * 100 };
}
