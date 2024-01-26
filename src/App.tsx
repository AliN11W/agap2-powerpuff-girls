import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { store } from "./store";

import Details from "./Details";
import Home from "./Home";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="container mt-5">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </ReduxProvider>
  );
}

export default App;
