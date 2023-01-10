import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import NavShared from "./NavShared";
import Home from "./Accueil";
import A_propos from "./a_propos";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route to="/" element={<NavShared />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<A_propos />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
