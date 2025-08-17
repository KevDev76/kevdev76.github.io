import {useEffect, useState} from "react";
import {Container, Stack, Typography} from "@mui/material";
import Galery from "../components/galery.component.tsx";
import Map from "../components/map.tsx";
import DiaporamaComponent from "../components/diaporama.component.tsx";

function TravelPage() {
    const [photos, setPhotos] = useState<string[]>([]);
    const [isDiaporamaOpen, setIsDiaporamaOpen] = useState<boolean>(false);
    const [photoIndex, setPhotoIndex] = useState<number>(0);

    useEffect(() => {
        fetch("/photo/camargue/salin/photos.json")
            .then((res) => res.json())
            .then((data) => setPhotos(data));
    }, []);

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
                    <Stack direction='row' spacing={2} justifyContent={'space-between'}>
                        <Map center={[43.557467, 4.183377]} zoom={15} markers={[{position: [43.557467, 4.183377]}]}/>
                        <Galery photos={photos} onPhotoClick={openDiaporama}/>
                    </Stack>
                </Container>
            )}
        </>
    )
}

export default TravelPage