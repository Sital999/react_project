import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import { Home } from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Food } from "./Pages/Food";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Cart from "./Pages/Cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/food/:id" element={<Food />} />
            <Route path="/cart/:name" element={<Cart />}></Route>
          </Routes>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
