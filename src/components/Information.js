import React from "react";

function Information({ location, label }) {
  return (
    <div
      className={"information"}
      style={{ backgroundColor: label == "Searched Ip" && "var(--color-main)" }}
    >
      <p className="information__label">{label}</p>
      {location && (
        <div>
          <p>
            <span className="information__data">IP: </span>
            {location.ip}
          </p>
          <p>
            <span className="information__data">Continent: </span>
            {location.continent_name}
          </p>
          <p>
            <span className="information__data">Country: </span>
            {location.country_name}
          </p>
          <p>
            <span className="information__data">City: </span>
            {location.city}
          </p>
          <p>
            <span className="information__data">Latitude: </span>{" "}
            {location.latitude}
          </p>
          <p>
            <span className="information__data">Longitude: </span>{" "}
            {location.longitude}
          </p>
        </div>
      )}
    </div>
  );
}

export default Information;
