import React from "react";
import Card from "../Components/Card";
import style from "./Main.module.css";
const Main = () => {
  return (
    <>
      <div className={style.main}>
        {[0, 2, 3, 5, 6, 7, 8, 9, 4].map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </>
  );
};

export default Main;
