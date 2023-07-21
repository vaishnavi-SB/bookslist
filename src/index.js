import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Books from "./components/booksList";
import About from "./components/about";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      {/* <Switch> */}
      <Routes>
        <Route exact path="/" element={<App />} />{" "}
      </Routes>
      <Routes>
        {" "}
        <Route path="/books" element={<Books />} />{" "}
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />{" "}
      </Routes>
      {/* </Switch> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
