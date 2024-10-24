"use client";

import styles from "../../styles.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";
import { Layer, Map, NavigationControl, Source, MapRef } from "react-map-gl";
import { geojsonFromBounds, getTotalBounds } from "~/util/map-helpers";

export function FeedMap({ mapboxAccessToken, feeds }: any) {
  const mapRef = useRef<MapRef>(null);
  const [selectedFeeds, setSelectedFeeds] = useState<any>([]);

  mapRef.current?.fitBounds(
    getTotalBounds(selectedFeeds.map((f: any) => f.bounds)),
    {
      padding: 20,
      duration: 1000,
    }
  );

  const onFeedSelect = (values: any) => {
    setSelectedFeeds(feeds.filter((f: any) => values.includes(f.feed_code)));
  };

  return (
    <div>
      <div className={styles["map"]}>
        <Map
          ref={mapRef}
          onClick={(e) => alert(JSON.stringify(e.lngLat))}
          mapboxAccessToken={mapboxAccessToken}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          maxZoom={20}
          minZoom={3}
        >
          {selectedFeeds.length ? (
            <Source
              id="feed-envelope"
              type="geojson"
              data={geojsonFromBounds(selectedFeeds[0].bounds)}
            >
              <Layer
                id="envelope-layer"
                source="feed-envelope"
                type="fill"
                paint={{
                  "fill-color": "#FF0000",
                  "fill-outline-color": "#FFFFFF",
                  "fill-opacity": 0.15,
                }}
              />
            </Source>
          ) : null}
          <NavigationControl position="bottom-right" />
        </Map>
      </div>
      <div className={styles["control"]}>
        <select
          multiple={true}
          value={selectedFeeds.map((f: any) => f.feed_code)}
          onChange={(e) => {
            const options = [...e.target.selectedOptions];
            const values = options.map((option) => option.value) ?? [];
            onFeedSelect(values);
          }}
        >
          {feeds.map((f: any) => (
            <option
              key={`select-${f.feed_code}`}
              value={f.feed_code}
              style={
                selectedFeeds.find((sf: any) => sf.feed_code === f.feed_code)
                  ? { fontWeight: "bold" }
                  : {}
              }
            >
              {f.feed_code}
            </option>
          ))}
        </select>
        <button onClick={() => setSelectedFeeds([])}>Clear feeds</button>
      </div>
    </div>
  );
}
