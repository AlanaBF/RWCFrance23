import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import venues from "./venues.json";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Card from "../Card/VenueCard";
import "./index.css";

function Map() {
  let slogan = (
    <h1>Get in the game with ease! Explore venues with just one click on the map</h1>
  );
  return (
    <div className="venues">
      <div className="slogan">
          {slogan}
      </div>
      <MapContainer
        center={[46.41667656076642, 2.6462079034383494]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {venues.map((p) => {
          return (
              <Marker key={p.id} position={[p.longitude, p.latitude]}>
                <Popup>
                  <Card venue={p} />
                  {/* {p.name} <br /> <b>{p.city}</b> */}
                </Popup>
              </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
export default Map;
