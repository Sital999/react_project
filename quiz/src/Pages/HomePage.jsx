import React from "react";
import Slider from "../Component/Slider";
import { Card, Grid, Paper, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Slider />

      <Card sx={{ width: "50%", height: "70%", ml: "22%", padding: "5%" }}>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Paper
              elevation={12}
              sx={{ width: "90%", height: "15rem", padding: "2rem" ,}}
            >
              <Typography
                variant="h3"
                align="center"
                sx={{ color: "navy" }}
                gutterBottom
              >
                SPORTS
              </Typography>
              <Typography paragraph variant="subtitle1" align="justify" sx={{}}>
                This section consists quiz about the sports section. All the
                sports enthusiasts are encouraged to play. Also to make it
                interesting we have 3 different levels to quench your thirst.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={12}
              sx={{ width: "90%", height: "15rem", padding: "2rem" }}
            >
              <Typography
                variant="h3"
                align="center"
                sx={{ color: "navy" }}
                gutterBottom
              >
                SPORTS
              </Typography>
              <Typography paragraph variant="subtitle1" align="justify" sx={{}}>
                This section consists quiz about the sports section. All the
                sports enthusiasts are encouraged to play. Also to make it
                interesting we have 3 different levels to quench your thirst.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={12}
              sx={{ width: "90%", height: "15rem", padding: "2rem" }}
            >
              <Typography
                variant="h3"
                align="center"
                sx={{ color: "navy" }}
                gutterBottom
              >
                SPORTS
              </Typography>
              <Typography paragraph variant="subtitle1" align="justify" sx={{}}>
                This section consists quiz about the sports section. All the
                sports enthusiasts are encouraged to play. Also to make it
                interesting we have 3 different levels to quench your thirst.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={12}
              sx={{ width: "90%", height: "15rem", padding: "2rem" }}
            >
              <Typography
                variant="h3"
                align="center"
                sx={{ color: "navy" }}
                gutterBottom
              >
                SPORTS
              </Typography>
              <Typography paragraph variant="subtitle1" align="justify" sx={{}}>
                This section consists quiz about the sports section. All the
                sports enthusiasts are encouraged to play. Also to make it
                interesting we have 3 different levels to quench your thirst.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default HomePage;
