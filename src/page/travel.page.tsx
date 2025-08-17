import {useState} from "react";
import {Container, Stack, Typography} from "@mui/material";
import Galery from "../components/galery.component.tsx";
import Map from "../components/map.tsx";
import DiaporamaComponent from "../components/diaporama.component.tsx";
import useGetTravelConfig from "../hook/use-get-travel-config.hook.ts";

function TravelPage() {
    const [isDiaporamaOpen, setIsDiaporamaOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    const {getVisits, getAllPhotos} = useGetTravelConfig();

    const photos = getAllPhotos();
    const visits = getVisits();

    const openDiaporama = (index: number) => {
        setPhotoIndex(index);
        setIsDiaporamaOpen(true)
    };
    const closeDiaporama = () => setIsDiaporamaOpen(false);

    return (
        <>
            {isDiaporamaOpen ? (
                <DiaporamaComponent photos={photos} onClose={closeDiaporama} index={photoIndex}/>
            ) : (
                <Container>
                    <Typography variant='h2' textAlign={'center'}>La Camargue</Typography>
                    {visits.map((visit, index) => (
                        <Stack key={index} direction='column' spacing={2} alignItems={'center'}>
                            <Typography variant='h3'>{visit.name}</Typography>
                            <Stack direction='row' spacing={2} alignItems={'center'}>
                                <Map center={visit.position} zoom={15} markers={[{position: visit.position}]}/>
                                <Galery photos={visit.photos} onPhotoClick={openDiaporama}/>
                            </Stack>
                        </Stack>
                    ))}
                </Container>
            )}
        </>
    )
}

export default TravelPage