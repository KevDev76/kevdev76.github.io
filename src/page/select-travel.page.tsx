import {Container, Stack, Typography} from "@mui/material";
import Map from "../components/map.tsx";
import TravelCardList from "../components/travel-card-list.component.tsx";
import useGetTravelConfig from "../hook/use-get-travel-config.hook.ts";

function SelectTravel() {

    const {getTravelConfig} = useGetTravelConfig();

    const travelConfig = getTravelConfig();

    return (
        <Container>
            <Typography variant='h2' textAlign={'center'}> Mes Voyages</Typography>
            {travelConfig && (
                <Stack direction='column' spacing={2} alignItems={'center'}>
                    <Map center={travelConfig.position} zoom={6} markers={[{position: travelConfig.position}]}/>
                    <TravelCardList travels={[travelConfig]}/>
                </Stack>
            )}
        </Container>
    )
}

export default SelectTravel
