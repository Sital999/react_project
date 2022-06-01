import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import QuizPage from "./Pages/QuizPage"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/quiz" element={<QuizPage/>}></Route>
          </Routes>
        </Router>
        <div className="footer">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
