import TravelCard from "./travel-card.component.tsx";
import {Grid} from "@mui/material";

function TravelCardList() {
    return (
        <Grid container spacing={6} width={'100%'}>
            <Grid size={3}>
                <TravelCard imageUrl={'/photo/camargue/salin/1000008134.jpeg'} alt={'photo-test'} title={'Camargue'} description={'Eté 2025'}/>
            </Grid>
        </Grid>
    )
}

export default TravelCardList