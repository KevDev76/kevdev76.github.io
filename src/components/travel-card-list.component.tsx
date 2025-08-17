import TravelCard from "./travel-card.component.tsx";
import {Grid} from "@mui/material";
import type {TravelModel} from "../model/travel.model.ts";

export interface TravelCardListProps {
    travels: TravelModel[],
}
function TravelCardList(props: Readonly<TravelCardListProps>) {
    return (
        <Grid container spacing={6} width={'100%'}>
            {props.travels.map((travel, index) => (
                <Grid key={index} size={3}>
                    <TravelCard imageUrl={travel.photo} alt={travel.name} title={travel.name} description={'Eté 2025'}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default TravelCardList