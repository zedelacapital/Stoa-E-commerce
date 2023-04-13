import { Divider, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";

export default function SeverError() {

const {state} = useLocation();
    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                <Typography gutterBottom variant="h3" color='secondary'>
                    {state.error.title}
                    </Typography>
                    <Divider/>
                    <Typography variant="body1">{state.error.detail || "Internal Server Error"}</Typography>
                    </>
            ) : (
                <Typography gutterBottom variant="h5">Server Error</Typography>
            )}
            <Typography variant="h5" gutterBottom>Server Error</Typography>
        </Container>
    )
}