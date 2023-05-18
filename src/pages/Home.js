//mui imports
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
//components
import cities from "../data.json";
import TourCard from "../components/TourCard";
const Home = () => {
    return ( 
        <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              marginTop={5}
              marginBottom={3}
              variant="h2"
              component="h4"
            >
              Top {city.name} Tours
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map((tour, index)=>(
                <TourCard tour={tour} key={index}/>
              ))}
            </Grid>
          </>
        ))}
      </Container>
     );
}
 
export default Home;