import React from "react";

function Map({ latitude, longitude }) {
  return (
    <div className="map">
      {latitude && (
        <iframe
          width="100%"
          height="100%"
          className="map"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${latitude},%20${longitude}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      )}
    </div>
  );
}

export default Map;
