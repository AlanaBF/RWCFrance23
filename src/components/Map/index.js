import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./index.css";
import venues from "./venues.json";
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

function Map() {
  console.log("here it comes");
  return (
    <MapContainer
      center={[48.839778927446694, 2.337432936304376]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {venues.map((p) => {
        return <Marker key={p.id} position={[p.longitude, p.latitude]}>
          <Popup>
            {p.name} <br /> <b>{p.city}</b>
          </Popup>
        </Marker>;
      })}
    </MapContainer>
  );
}
export default Map;
