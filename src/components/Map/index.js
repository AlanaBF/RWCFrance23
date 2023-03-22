import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import venues from "./venues.json";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Card from "../Card/VenueCard";
import "./index.css";

function Map() {
  let slogan = (
    <h1>All Venues</h1>
  );

  return (
    <div className="venues">
      <div className="slogan">
          {slogan}
      </div>
      <MapContainer
        center={[47.32545032413824, 2.5233774686971278]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {venues.map((p) => {
          return (
            <div onClick={() => console.log('works!')}>
              <Marker key={p.id} position={[p.longitude, p.latitude]}>
                <Popup>
                  <Card venue={p} />
                  {/* {p.name} <br /> <b>{p.city}</b> */}
                </Popup>
              </Marker>
            </div>
          );
        })}
      </MapContainer>
    </div>
  );
}
export default Map;
