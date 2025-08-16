import {useEffect, useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

export interface PhotoGalleryProps {
    photos: string[],
    index: number,
    onClose: () => void,
}

function PhotoGallery(props: Readonly<PhotoGalleryProps>) {
    const [currentIndex, setCurrentIndex] = useState<number>(props.index);

    const showPrev = () =>
        setCurrentIndex((prev) =>
            (prev - 1 + props.photos.length) % props.photos.length
        );

    const showNext = () =>
        setCurrentIndex((prev) =>
            (prev + 1) % props.photos.length
        );

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                props.onClose();
            } else if (event.key === "ArrowLeft") {
                showPrev();
            } else if (event.key === "ArrowRight") {
                showNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [props.photos.length]);

    return (
        <div>
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 50,
            }}>
                <CloseIcon
                    onClick={props.onClose}
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        color: 'white',
                        fontSize: 40,
                        cursor: 'pointer',
                    }}
                />
                <ArrowBackIosIcon
                    onClick={showPrev}
                    sx={{
                        position: 'absolute',
                        left: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        fontSize: 60,
                        cursor: 'pointer',
                    }}
                />
                <img
                    src={props.photos[currentIndex]}
                    alt={props.photos[currentIndex]}
                    style={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        objectFit: 'contain',
                    }}
                />
                <ArrowForwardIosIcon
                    onClick={showNext}
                    sx={{
                        position: 'absolute',
                        right: 16,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        fontSize: 60,
                        cursor: 'pointer',
                    }}
                />
            </div>
        </div>
    );
}

export default PhotoGallery;
