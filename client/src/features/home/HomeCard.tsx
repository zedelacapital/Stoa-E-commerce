import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

type Deme = {
  title: string
  img: string
  path: string
}

export default function HomeCard(props: Deme)  {
  return (  
    <Grid  item xs={4} sm={3} md={3}>
   <CardActionArea>
    <Card   sx={{ display: 'flex', alignItems: 'center'}}>
    <CardMedia
        component={"img"}
        sx={{ width: 70 }}
        image={props.img}
        style={{marginTop: "12px", marginBottom:"10px", marginLeft:"15px", padding:"7px"}}
        alt="Catrgory"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography fontFamily="Work Sans"  component="div" variant="h4" sx={{marginTop:"10px"}} >
              {props.title}
          </Typography>
        </CardContent>
      </Box>
    </Card> 
    </CardActionArea>
    </Grid>
  );
}
