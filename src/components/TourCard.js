import React from "react";

//mui imports
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

//mui icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function TourCard({tour}) {
  const theme = createTheme({
    component: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 10,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 6,
            },
          },
        ],
      },
    },
  });

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            className="img"
            src={tour.image}
            alt="img"
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon
                sx={{
                  width: 12.5,
                  marginRight: 0.5,
                }}
              />
              <Typography variant="body2" component="p" sx={{fontSize: '11px'}}>
                {tour.duration} hours
              </Typography>
            </Box>

            {/* rating */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating
                name="read-only"
                value={tour.rating}
                readOnly
                size="small"
                precision={0.5}
              />
              <Typography sx={{fontSize: '11px'}} variant="body2" component="p">
              {tour.rating}
              </Typography>
              <Typography sx={{fontSize: '9px'}} variant="body2" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>

            {/* price box */}

            <Box>
              <Typography  variant="h6" component="h3" marginTop={1.2}>
                 ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
