import { LoadingButton } from "@mui/lab";
import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/Product";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";
import { addBasketItemAsync, } from "../basket/basketSlice";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const {status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();

    return (
        <Card sx={{borderRadius: "5px"}}>
            {/* <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'white'}}>
                        {product.name.charAt(0).toUpperCase}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            /> */}
            <CardMedia
                sx={{ height: 140, backgroundSize:'contain', bgcolor: 'primary.main' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='info' variant="body1" component="div">
                   <b> {currencyFormat(product.price)}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
                <Typography variant="subtitle1" color="text.main">
                {product.name}

                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton loading={status.includes('pendingAddItem' + product.id)} 
                onClick={()=> dispatch(addBasketItemAsync({productId: product.id, quantity:1}))} 
                size="small">
                    Add to Cart
                    </LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
        </Card>
    )
}