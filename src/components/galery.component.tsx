import 'photoswipe/style.css';
import {ImageList, ImageListItem} from "@mui/material";

export interface GaleryProps {
    photos: string[],
    onPhotoClick?: (index: number) => void,
}

function Galery(props: Readonly<GaleryProps>) {

    return (
        <ImageList sx={{maxHeight: '500px'}} cols={3} rowHeight={164} variant="quilted" gap={8}>
            {props.photos.map((photo, index) => (
                <ImageListItem key={photo} sx={{cursor: 'pointer'}}>
                    <img
                        srcSet={`${photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${photo}?w=164&h=164&fit=crop&auto=format`}
                        alt={photo}
                        loading="lazy"
                        onClick={() => props.onPhotoClick?.(index)}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default Galery