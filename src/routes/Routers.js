import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
const Routers = () => {
  console.log("router");
  return (
    <Routes>
      <Route path="react-osos/" element={<Main />} />
      <Route path="react-osos/:title/:id" element={<Detail />} />
    </Routes>
  );
};

export default Routers;
