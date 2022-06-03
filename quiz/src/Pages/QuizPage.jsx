import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Grid, Button, Typography } from "@mui/material";
import Header from "../Component/Header";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// sports
import { fetchQuestions } from "../Features/sports/sportsHardSlice";
import { fetchQuestionSportsMedium } from "../Features/sports/sportsMediumSlice";
import { fetchQuestionSportsEasy } from "../Features/sports/sportsEasySlice";

// history
import { fetchQuestionsHistoryHard } from "../Features/history/historyHardSlice";
import { fetchQuestionsHistoryMedium } from "../Features/history/historyMediumSlice";
import { fetchQuestionsHistoryEasy } from "../Features/history/historyEasySlice";

// science
import { fetchQuestionsScienceHard } from "../Features/science/scienceHardSlice";
import { fetchQuestionsScienceMedium } from "../Features/science/scienceMediumSlice";
import { fetchQuestionsScienceEasy } from "../Features/science/scienceEasySlice";

// geography
import { fetchQuestionsGeoHard } from "../Features/Geography/geoHardSlice"
import { fetchQuestionsGeoMedium } from "../Features/Geography/geoMediumSlice";
import { fetchQuestionsGeoEasy } from "../Features/Geography/geoEasySlice";

const hard = "hard";
const medium = "medium";
const easy = "easy";

const QuizPage = () => {

const url ="https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";
  const dispatch = useDispatch();
  // type of quiz
  const { section } = useParams();

  const easyHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header title={section.toUpperCase()} />
      <Container
        maxWidth="xl"
        sx={{
          background: "rgb(219,219,219)",
          background:
            "linear-gradient(-45deg, rgba(219,219,219,1) 11%, rgba(219,219,219,1) 31%, rgba(250,241,241,1) 44%, rgba(224,222,222,1) 57%, rgba(219,219,219,1) 75%, rgba(254,241,241,0.45451684091605393) 100%)",
          height: "100vh",
          mt: 5,
          padding: "3rem",
        }}
      >
        <Grid container spacing={1}>
          {section == "sports" ? (
            <Grid items xs={4}>
              <Card>
                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"></img>
              </Card>
            </Grid>
          ) : null}
          {section == "science" ? (
            <Grid items xs={4}>
              <Card sx={{ maxHeight: "650px" }}>
                <img src="https://thumbs.dreamstime.com/z/cybernetic-data-analytics-computer-science-future-coding-wallpaper-ai-robot-algorithms-155190397.jpg"></img>
              </Card>
            </Grid>
          ) : null}
          {section == "geography" ? (
            <Grid items xs={4}>
              <Card sx={{ maxHeight: "650px" }}>
                <img src="https://r1.ilikewallpaper.net/iphone-wallpapers/download/11222/Dragon-Age-2-Map-iphone-wallpaper-ilikewallpaper_com.jpg"></img>
              </Card>
            </Grid>
          ) : null}
          {section == "history" ? (
            <Grid items xs={4}>
              <Card sx={{ maxHeight: "650px" }}>
                <img src="https://images2.alphacoders.com/659/659390.jpg"></img>
              </Card>
            </Grid>
          ) : null}

          <Grid items xs={8}>
            <Card sx={{ height: "90%", padding: "2rem" }}>
              <Grid container spacing={12}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    align="center"
                    sx={{ color: "blue" }}
                  >
                    Difficulty Levels
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to={`/quiz/${section}/${hard}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      sx={{ color: "red" }}
                      gutterBottom
                    >
                      <Button
                        variant="contained"
                        color="error"
                        size="large"
                        fullWidth
                        onClick={() => {
                          dispatch(fetchQuestions());
                          dispatch(fetchQuestionsHistoryHard());
                          dispatch(fetchQuestionsScienceHard());
                          dispatch(fetchQuestionsGeoHard());

                        }}
                      >
                        Hard
                      </Button>
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to={`/quiz/${section}/${medium}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="h4" align="center" gutterBottom>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        onClick={() => {
                          dispatch(fetchQuestionSportsMedium());
                          dispatch(fetchQuestionsHistoryMedium());
                          dispatch(fetchQuestionsScienceMedium());
                          dispatch(fetchQuestionsGeoMedium());


                        }}
                      >
                        Medium
                      </Button>
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    to={`/quiz/${section}/${easy}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography variant="h4" align="center" gutterBottom>
                      <Button
                        variant="contained"
                        color="success"
                        size="large"
                        fullWidth
                        onClick={() => {
                          dispatch(fetchQuestionSportsEasy());
                          dispatch(fetchQuestionsHistoryEasy());
                          dispatch(fetchQuestionsScienceEasy());
                          dispatch(fetchQuestionsGeoEasy(url));


                        }}
                      >
                        Easy
                      </Button>
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default QuizPage;
