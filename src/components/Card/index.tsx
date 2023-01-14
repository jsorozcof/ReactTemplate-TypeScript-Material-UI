import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cart.slice";
import { setItem } from "../../utils/localStorage";


type CardProps = {
    id: number;
    image: string;
    name: string;
    species: string;
    status: string;
}

export const CardComponent: React.FC<CardProps> = ({ id, image, name, species, status }) => {
    
    const [disabledBtn, setdisabledBtn] = React.useState<boolean>(false)
    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    const itemsExistt = useAppSelector((state) => state.cartReducer);
    
    React.useEffect(() =>{
         setdisabledBtn(itemsExistt.some((item) => item.id === id));
         setItem('cart',itemsExistt);
    },[itemsExistt, id])

    const handleAddToCart = () => {
       dispatch(addToCart({
        id,
        name,
        image,
        info: status
       }));
    };


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography variant="h5" sx={{ mb: 1.5 }}>{name}</Typography>
                <Divider />
                <Typography sx={{ mt: 1.5 }}>Especie: {species}</Typography>
                <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small" onClick={() => navigate(`/character/${id}`)}>Learn More</Button>
                <Button fullWidth 
                variant="outlined" 
                size="small" 
                disabled={disabledBtn}
                onClick={handleAddToCart}
                
                >Add to cart</Button>
            </CardActions>
        </Card>
    )
}