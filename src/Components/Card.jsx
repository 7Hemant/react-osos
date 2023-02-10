import React from "react";
import style from "./Card.module.css";
import image from "../image.jpg";
const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div className={style.content}>
        <h1>Movie Name</h1>
        <h2>Play now</h2>
      </div>
    </div>
  );
};

export default Card;
