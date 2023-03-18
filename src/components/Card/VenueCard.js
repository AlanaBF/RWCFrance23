import React from "react";
import "./index.css";

function VenueCard({ venue }) {
  const { name, image, city, capacity, url } = venue;

  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} width="100%" />
      </div>
      <div className="content pt-3">
        <ul>
          <div>
            <h4>{city}</h4>
          </div>
          <div>
            <h3>{name}</h3>
          </div>
          <div>
            <h5>Capacity: {capacity}</h5>
          </div>
        </ul>
        <a href={url}>Explore More</a>
      </div>
    </div>
  );
}

export default VenueCard;
