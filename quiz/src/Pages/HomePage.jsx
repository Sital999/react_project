import React from "react";
import Slider from "../Component/Slider";
import { Card, Grid, Paper, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Header from "../Component/Header"


const sports = "sports";
const history = "history";
const geography = "geography";
const science = "science";
const random = "random";
const title = "QuizSite"


const HomePage = () => {
  return (
    <>
    <Header title={title}/>
      <Slider />
      {/* main card */}
      <Card
        sx={{
          width: "60%",
          height: "70%",
          ml: "18%",
          padding: "5%",

          background: "rgb(2,0,36)",
          background:
            "linear-gradient(-45deg, rgba(219,219,219,1) 11%, rgba(219,219,219,1) 31%, rgba(219,219,219,1) 44%, rgba(219,219,219,1) 59%, rgba(252,252,252,1) 96%)",
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              align="center"
              sx={{ color: "darkblue" }}
              gutterBottom
            >
              Dive into any section you prefer
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {/* paper containg eac section */}
            <Link to={`/quiz/${sports}`} style={{ textDecoration: "none" }}>
              <IconButton>
                <Paper
                  elevation={12}
                  sx={{ width: "90%", height: "15rem", padding: "2rem" }}
                  className="paper"
                >
                  <Typography
                    variant="h3"
                    align="center"
                    sx={{ color: "navy" }}
                    gutterBottom
                  >
                    SPORTS
                  </Typography>
                  <Typography
                    paragraph
                    variant="subtitle1"
                    align="justify"
                    sx={{}}
                  >
                    I contain quiz about the sports section. All the sports
                    enthusiasts are encouraged to click me. Also to make it
                    interesting I have 3 different levels to quench your thirst.
                    Get surprsied by meeting Ronaldo and Messi in same field.
                  </Typography>
                </Paper>
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to={`/quiz/${science}`} style={{ textDecoration: "none" }}>
              <IconButton>
                <Paper
                  elevation={12}
                  sx={{ width: "90%", height: "15rem", padding: "2rem" }}
                  className="paper"
                >
                  <Typography
                    variant="h3"
                    align="center"
                    sx={{ color: "navy" }}
                    gutterBottom
                  >
                    SCIENCE
                  </Typography>
                  <Typography
                    paragraph
                    variant="subtitle1"
                    align="justify"
                    sx={{}}
                  >
                    Science and Technology have made us the best among the rest
                    organisms. It have driven our world in the speed of 'c'. So,
                    you better bucke up your seat and increase your 'v'. If you
                    are curious then click me and get surprsied.
                  </Typography>
                </Paper>
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to={`/quiz/${history}`} style={{ textDecoration: "none" }}>
              <IconButton>
                <Paper
                  elevation={12}
                  sx={{ width: "90%", height: "15rem", padding: "2rem" }}
                  className="paper"
                >
                  <Typography
                    variant="h3"
                    align="center"
                    sx={{ color: "navy" }}
                    gutterBottom
                  >
                    HISTORY
                  </Typography>
                  <Typography
                    paragraph
                    variant="subtitle1"
                    align="justify"
                    sx={{}}
                  >
                    I am 10000 years old and have seen Dianosour as you might
                    have seen Ross babbling and briefing about it. I have been
                    through many epochs and here I am to show you some of the
                    epiccc moments that I captured during these times.
                  </Typography>
                </Paper>
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to={`/quiz/${geography}`} style={{ textDecoration: "none" }}>
              <IconButton>
                <Paper
                  elevation={12}
                  sx={{ width: "90%", height: "15rem", padding: "2rem" }}
                  className="paper"
                >
                  <Typography
                    variant="h3"
                    align="center"
                    sx={{ color: "navy" }}
                    gutterBottom
                  >
                    GEOGRAPHY
                  </Typography>
                  <Typography
                    paragraph
                    variant="subtitle1"
                    align="justify"
                    sx={{}}
                  >
                    Geography doesn't mean studying maps and memorizing state
                    capitals! From making a treasure hunt to keeping a sensory
                    journal, get ideas for how to have fun with geography in
                    your daily life. Wanna explore world with me?
                  </Typography>
                </Paper>
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Link to={`/quiz/${random}/random`} style={{ textDecoration: "none" }}>
              <IconButton>
                <Paper
                  elevation={12}
                  sx={{ width: "90%", height: "15rem", padding: "2rem" }}
                  className="paper"
                >
                  <Typography
                    variant="h3"
                    align="center"
                    sx={{ color: "navy" }}
                    gutterBottom
                  >
                    RANDOM
                  </Typography>
                  <Typography
                    paragraph
                    variant="subtitle1"
                    align="justify"
                    sx={{}}
                  >
                    Just here to freshen up your mind.Hope you would like it. I have collection of all
                    genre and all difficulty levels which I even don't know else I would say what's inside.
                    So come on why are you even reading this dummt text. Just click and explore.
                  </Typography>
                </Paper>
              </IconButton>
            </Link>
          </Grid>
          <Grid item xs={3}></Grid>

        </Grid>
      </Card>
    </>
  );
};
export default HomePage;
