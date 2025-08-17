export interface TravelModel {
    name: string;
    photo: string;
    position: L.LatLngExpression;
    visits: VisitModel[];
}

export interface VisitModel {
    name: string;
    position: L.LatLngExpression;
    photos: string[];
}
