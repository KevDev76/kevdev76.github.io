import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router";

const maxWidth = 500;
const height = 140;

export interface TravelCardProps {
    imageUrl: string,
    alt: string,
    title?: string,
    description?: string,
}

function TravelCard(props: Readonly<TravelCardProps>) {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log('clicked');
        navigate('/travel');
    };
    return (
        <Card sx={{maxWidth: maxWidth}}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component='img'
                    height={height}
                    image={props.imageUrl}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography variant='h5'> {props.title ?? 'title'}</Typography>
                    <Typography variant='body1'> {props.description ?? 'description'} </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TravelCard