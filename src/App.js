import React from "react";
import Home from "./Pages/Home";
import "../src/assets/css/style.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/owl.carousel.min.css";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presenters from "./Pages/Presenters";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import Login from "./Pages/Login";
import Schedule from "./Pages/Schedule";
import Sponsors from "./Pages/Sponsors";
function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Presenters" element={<Presenters />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Sponsors" element={<Sponsors />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
