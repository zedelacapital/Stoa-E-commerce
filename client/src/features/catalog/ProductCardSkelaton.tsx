import {
    Card,
    CardActions,
    CardContent,
    Grid,
    Skeleton
} from "@mui/material";

export default function ProductCardSkeleton() {
    return (
        <Grid item xs component={Card}>
            {/* <CardHeader
                avatar={
                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                }
                title={
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                    />
                }
                 sx={{ height: 190 }} 
            /> */}
            <Skeleton sx={{ height: 150 }} animation="wave" variant="rectangular" />
            <CardContent>
                <>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }}  width="20%"  />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} width="80%" />
                    <Skeleton animation="wave" height={10}/>
                </>
            </CardContent>
            <CardActions>
                <>
                    <Skeleton animation="wave" height={10} width='40%' style={{ marginLeft: 8 }} />
                    <Skeleton animation="wave" height={10} width="20%" />
                </>
            </CardActions>
        </Grid>
    )
}