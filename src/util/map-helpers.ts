export const geojsonFromBounds = (bounds: any) => ({
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [
            [bounds?.min_lon, bounds?.max_lat],
            [bounds?.min_lon, bounds?.min_lat],
            [bounds?.max_lon, bounds?.min_lat],
            [bounds?.max_lon, bounds?.max_lat],
            [bounds?.min_lon, bounds?.max_lat],
          ],
        ],
        type: "Polygon",
      },
    },
  ],
});

/**
 * Returns the south-west and north-east corners of the bounding box that
 * contains all the areas in the list.
 */
export const getTotalBounds = (boundsList: any): any => {
  return [
    [-74.0894, 45.3081],
    [-73.3465, 45.7916],
  ];
};

/**
 * Returns all of the feeds whose bounds cover the long/lat coordinate.
 *
 */
// export const getFeedsAtLocation = (lng: any, lat: any, feeds: any) => {
//   return feeds;
// }
