import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Auth from "../pages/Auth";
const Routers = () => {
  console.log("router");
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Routers;
