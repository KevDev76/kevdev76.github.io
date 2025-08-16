import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Container} from "@mui/material";
import 'leaflet/dist/leaflet.css';

function Map() {
    return (
        <Container sx={{border: '1px solid #ccc', width: '100%'}}>
            <MapContainer center={[45.34, 3.16]} zoom={6} scrollWheelZoom={false}
                          style={{height: '400px', width: '100%'}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[43.5421, 4.1501]}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    )
}

export default Map