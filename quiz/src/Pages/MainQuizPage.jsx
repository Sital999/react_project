import React, { useEffect, useState,useRef } from "react";
import { useParams,Link } from "react-router-dom";
import {  useSelector,useDispatch } from "react-redux";
import {
  Container,
  Card,
  Button,
  Typography,
  Alert,
  Stack,
} from "@mui/material";

import Header from "../Component/Header";
import "../Component/all.css";
import {fetchRandom} from "../Features/Random/randomSlice"

// for header

const MainQuizPage = () => {

// urls
const url ="https://opentdb.com/api.php?amount=10"
// for random url

 useEffect(() => {
  dispatch(fetchRandom(url))
 },[])

  // difficulty levels passed
  const { section, difficulty } = useParams();
  const dispatch= useDispatch();
  // selecting store values
  // data+letter of section+letter of difficulty=newData to render
  // sports
  const dataSH = useSelector((state) => state.sportsHard);
  const dataSM=useSelector((state) => state.sportsMedium);
  const dataSE=useSelector((state) => state.sportsEasy);

  // history
  const dataHH=useSelector((state) => state.historyHard);
  const dataHM=useSelector((state) => state.historyMedium);
  const dataHE=useSelector((state) => state.historyEasy);

  // science
  const dataScH=useSelector((state) => state.scienceHard)
  const dataScM=useSelector((state) => state.scienceMedium)
  const dataScE=useSelector((state) => state.scienceEasy)

  // geography
  const dataGH=useSelector((state) => state.geoHard)
  const dataGM=useSelector((state) => state.geoMedium)
  const dataGE=useSelector((state) => state.geoEasy)

  const dataRandom=useSelector((state) => state.random)

  let data
  // console.log(data.question.results);
    if (section=="sports" && difficulty=="medium"){
      data=dataSM
    }
    else if(section=="sports" && difficulty=="hard"){
      data=dataSH
    }
    else if(section=="sports" && difficulty=="easy"){
      data=dataSE
    }
    
    else if(section=="science" && difficulty=="hard"){
      data=dataScH
    }
    else if(section=="science" && difficulty=="medium"){
      data=dataScM
    }
    else if(section=="science" && difficulty=="easy"){
      data=dataScE
    }
    else if(section=="geography" && difficulty=="hard"){
      data=dataGH
    }
    else if(section=="geography" && difficulty=="medium"){
      data=dataGM
    }
    else if(section=="geography" && difficulty=="easy"){
      data=dataGE
    }
    else if(section=="history" && difficulty=="hard"){
      data=dataHH
    }
    else if(section=="history" && difficulty=="medium"){
      data=dataHM
    }
    else if(section=="history" && difficulty=="easy"){
      data=dataHE
    }
    else{
      data=dataRandom
    }


  // for answers clicked
  const [click, setClick] = useState("");
  // for correct answer
  const [correct, setCorrect] = useState([]);
  // to pass single element
  const [index, setIndex] = useState(0);
  // to display the result
  const [evaluate, setEvaluate] = useState(false);
  // check if options are  clicked or not
  const [options, setOptions] = useState(false);
  // alert message
  const [alert, setAlert] = useState(false);

  // for correct answer button
  const handleClick = (e) => {
    e.preventDefault();
    setClick(e.target.value);
    setOptions(true);
  };
  // for incorrect_answers button
  const handleClick1 = (e) => {
    e.preventDefault();
    setClick("");
    setOptions(true);
  };

  // for next button
  const handleClick2 = (e) => {
    e.preventDefault();
    if (options) {
      setIndex(index + 1);
      setOptions(false);
      value.current=Math.floor(Math.random()*10 )
    } else {
      setAlert(true);
    }
  };

  // for sunmit button
  const handleClick3 = (e) => {
    e.preventDefault();
    if (options) {
      setEvaluate(!evaluate);
      setOptions(false);
    } else {
      setAlert(true);
    }
  };

  // adding correct answers
  useEffect(() => {
    setCorrect([...correct, click]);
  }, [index, evaluate]);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 300);
  }, [click]);

  useEffect(() => {});
  // number of correct answers
  let numOfCorrect = correct
    .map((items) => items)
    .filter((item) => item != "").length;
  
    const value=useRef(Math.floor(Math.random()*10 ))

  return (
    <>
      <Header title={section.toUpperCase()} />
      <Container
        maxWidth="xl"
        sx={{
          background: "rgb(219,219,219)",
          background:
            "linear-gradient(-45deg, rgba(219,219,219,1) 11%, rgba(219,219,219,1) 31%, rgba(250,241,241,1) 44%, rgba(224,222,222,1) 57%, rgba(219,219,219,1) 75%, rgba(254,241,241,0.45451684091605393) 100%)",
          height: "100%",
          mt: 5,
          padding: "3rem",
        }}
      >
        {data.loading ? <div>...loading</div> : null}
        {!data.loading && data.error ? <div>...error</div> : null}
        {!data.loading && data.question ? (
          <Container maxWidth="lg" sx={{ height: "50%" }}>
            {evaluate ? (
              <Typography
                variant="h2"
                align="center"
                sx={{ color: "green", mb: 5 }}
              >
                Result:
              </Typography>
            ) : (
              <Typography variant="h2" align="center" sx={{ color: "green" }}>
                Multiple Choice Question
              </Typography>
            )}
            {evaluate ? (
              <Container>
                <Typography
                  variant="h4"
                  align="center"
                  sx={{ color: "green" }}
                  gutterBottom
                >{numOfCorrect>5?
                <>Congratulations Your result is {numOfCorrect}/10</>:
                <>
                Your result is {numOfCorrect}/10. <br/>You can do better. Don't be upset :-D
                </>}
                
                  
                </Typography>
                <Typography align="center">
                  <Link to={`/`}  style={{textDecoration:"none"}}>
                  <Button
                    variant="contained"
                    sx={{ m: "10%" }}
                   
                  >
                    Play Again
                  </Button>
                  </Link>
                  
                </Typography>
              </Container>
            ) : data.question.results ? (
              <Card sx={{ padding: "2%", m: 2 }}>
                {alert ? (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity="error">Please select option</Alert>
                  </Stack>
                ) : null}
                {data.question.results
                  .filter((qn) => index == data.question.results.indexOf(qn))
                  .map((question, index) => {
                    return (
                      <div key={index}>
                        {question.question}
                        {/* to shuffle answers */}
                        {value.current%2==0? (
                          <>
                            <button
                              className="answerbtn"
                              id={question.correct_answer}
                              value={question.correct_answer}
                              onClick={handleClick}
                            >
                              {question.correct_answer}
                            </button>
                            {question.incorrect_answers.map((ans, index) => {
                              return (
                                <button
                                  className="answerbtn"
                                  id={ans}
                                  value={ans}
                                  key={index}
                                  onClick={handleClick1}
                                >
                                  {ans}
                                </button>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            {question.incorrect_answers.map((ans, index) => {
                              return (
                                <button
                                  className="answerbtn"
                                  id={ans}
                                  value={ans}
                                  key={index}
                                  onClick={handleClick1}
                                >
                                  {ans}
                                </button>
                              );
                            })}
                            <button
                              className="answerbtn"
                              id={question.correct_answer}
                              value={question.correct_answer}
                              onClick={handleClick}
                            >
                              {question.correct_answer}
                            </button>
                          </>
                        )}
                      </div>
                    );
                  })}
              </Card>
            ) : null}
            {index < 9 ? (
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: "100%" }}
                onClick={handleClick2}
              >
                Next
              </Button>
            ) : evaluate ? null : (
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: "100%" }}
                onClick={handleClick3}
              >
                Submit
              </Button>
            )}
          </Container>
        ) : null}
      </Container>
    </>
  );
};
export default MainQuizPage;
