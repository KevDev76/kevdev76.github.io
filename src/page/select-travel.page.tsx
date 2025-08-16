import {Container, Stack, Typography} from "@mui/material";
import Map from "../components/map.tsx";
import TravelCardList from "../components/travel-card-list.component.tsx";

function SelectTravel() {

    return (
        <Container>
            <Typography variant='h2' textAlign={'center'}> Mes Voyages</Typography>
            <Stack direction='column' spacing={2} alignItems={'center'}>
                <Map/>
                <TravelCardList/>
            </Stack>
        </Container>
    )
}

export default SelectTravel
