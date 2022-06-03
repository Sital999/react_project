import React, { Component } from "react";
import "./App.css";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import HomePage from "./Pages/HomePage";
import MainQuizPage from "./Pages/MainQuizPage";
import {Provider} from "react-redux"
import store from "./Features/store"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>

        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>

            <Route exact path="/quiz/:section" element={<QuizPage />}></Route>
            <Route exact path="/random:section/random" element={<MainQuizPage />}></Route>
            <Route
              exact
              path="/quiz/:section/:difficulty"
              element={<MainQuizPage />}
            ></Route>
          </Routes>
        </Router>
        <div className="footer">
          <Footer />
        </div>
        </Provider>

      </React.Fragment>
    );
  }
}

export default App;
