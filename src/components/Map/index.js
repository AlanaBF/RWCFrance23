import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.css";
import venues from "./venues.json";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Card from "../Card/VenueCard";
import './index.css';

function Map() {
  console.log("here it comes");
  return (
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
  );
}
export default Map;
