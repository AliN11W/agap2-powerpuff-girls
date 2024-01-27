import React from "react";

import "./styles/App.scss";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Episodes from "./Episodes";
import Home from "./Home";
import { store } from "./redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="container mt-5">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
        </Router>
      </div>
    </ReduxProvider>
  );
}

export default App;
