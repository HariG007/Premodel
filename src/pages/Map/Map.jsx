import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { Room } from "@mui/icons-material";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.REACT_APP_TOKEN;

const MapView = () => {
  const [newPlace, setNewPlace] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 28.6446,
    longitude: 77.216,
    zoom: 6,
  });
  function handleClick(e) {
    console.log("Event:", e);

    if (e.lnglat) {
      const [latitude, longitude] = e.lnglat;

      setNewPlace({
        lat: latitude,
        long: longitude,
      });
    }
  }

  console.log(newPlace);

  return (
    <div style={{ width: "100vw", height: "100vh", zIndex: 999 }}>
      <ReactMapGl
        {...viewport}
        // mapboxApiAccessToken={TOKEN}
        mapboxAccessToken={TOKEN}
        width="100%"
        height="100%"
        transitionDuration={200}
        mapStyle="mapbox://styles/dhanusri-tk/clpvqu46z01hp01pkdekk5lov?title=view&zoomwheel=true&fresh=true"
        onViewportChange={(viewport) => setViewport(viewport)}
        onDblClick={handleClick}
      />

      {newPlace ? (
        <>
          <Marker
            latitude={newPlace?.lat}
            longitude={newPlace?.long}
            offset={{ x: -3.5 * viewport.zoom, y: -7 * viewport.zoom }}
          >
            <Room
              style={{
                fontSize: 7 * viewport.zoom,
                color: "tomato",
                cursor: "pointer",
              }}
            />
          </Marker>
        </>
      ) : null}
    </div>
  );
};

export default MapView;
