import {Container, Stack, Typography} from "@mui/material";
import Map from "../components/map.tsx";
import TravelCardList from "../components/travel-card-list.component.tsx";

function SelectTravel() {

    return (
        <Container>
            <Typography variant='h2' textAlign={'center'}> Mes Voyages</Typography>
            <Stack direction='column' spacing={2} alignItems={'center'}>
                <Map center={[43.50622, 4.14122]} zoom={6} markers={[{position: [43.50622, 4.14122]}]}/>
                <TravelCardList/>
            </Stack>
        </Container>
    )
}

export default SelectTravel
