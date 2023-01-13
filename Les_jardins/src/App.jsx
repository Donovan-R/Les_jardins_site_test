import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavShared from "./pages/NavShared";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plantation from "./pages/Plantation";
import Ressources from "./pages/Ressources";

const App = () => {
  return (
    <Router>
      <h1>Les jardins de l'Autour</h1>
      <Routes>
        <Route path="/" element={<NavShared />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plantation" element={<Plantation />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/ressources" element={<Ressources />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
