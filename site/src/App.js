import React from "react";

import { Routes, Route } from "react-router-dom";
import Routs from "./components/Routs";
import Home from "./components/Pages/Home/Home";


const App = () => {
  return (
    // <Routes>
    //   {Routs &&
    //     Routs.map((rt, index) => (
    //       <Route key={index} path={rt.path} element={rt.component} />
    //     ))}
    // </Routes>
    <Home/>
   
  );
};

export default App;
