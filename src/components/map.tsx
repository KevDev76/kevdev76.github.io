import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {Container} from "@mui/material";
import 'leaflet/dist/leaflet.css';
import RoomIcon from '@mui/icons-material/Room';
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import type {MarkerModel} from "../model/marker.model.ts";

export interface MapProps {
    center: L.LatLngExpression,
    zoom: number,
    markers: MarkerModel[],
}

function Map(props: Readonly<MapProps>) {
    const roomIcon = L.divIcon({
        html: ReactDOMServer.renderToString(<RoomIcon sx={{fontSize: 40}} style={{fill: '#00B7FF'}}/>),
        className: "", // on désactive le style par défaut
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
    });

    return (
        <Container sx={{border: '1px solid #ccc', width: '100%'}}>
            <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={false}
                          style={{height: '400px', width: '100%'}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    props.markers.map((marker, index) => (
                        <Marker key={index} position={marker.position} icon={roomIcon}>
                        </Marker>
                    ))
                }
            </MapContainer>
        </Container>
    )
}

export default Map