import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import image from "../image.jpg";
import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const Detail = () => {
  const [value, setValue] = useState([]);
  const [isloading, setisLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        "https://imdb8.p.rapidapi.com/title/get-synopses",

        {
          headers: {
            "X-RapidAPI-Key":
              "cfbb0ff9f4msh447485a012a5e7bp101d21jsnbdd731bc948e",
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          },
          params: { tconst: id },
        }
      )
      .then((res) => {
        console.log("result ", res?.data);
        setValue(res?.data);
        setisLoading(true);
      });
  }, [isloading]);
  console.log("rending", value, isloading);
  return (
    <section className={style.detail}>
      <div className={style.movieDetail}>
        <div className={style.headpart}>
          <div className={style.imgContainer}>
            <img src={image} alt="" />
          </div>
          <div className={style.content}>
            <h1>Movie Name</h1>
            <p>Movie stype</p>
            <p>movie duration</p>
            <div>
              <button>Watch now</button>
              <button>Watch Later</button>
            </div>
          </div>
        </div>
        <article style={{ marginTop: "2rem" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis
            odio a commodi dignissimos qui nihil, distinctio quae corrupti
            facilis veritatis libero provident aspernatur tempore incidunt earum
            accusantium excepturi fugit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            inventore totam maxime ipsa, sequi suscipit animi? At,
            necessitatibus ducimus! Et voluptas nisi consequuntur vero dolor,
            consectetur quia sed eum accusantium!
          </p>
        </article>
      </div>
      <div>
        <h1 style={{ color: "green" }}>Similar Movies</h1>
        <div className={style.similarMovies}>
          {[1, 2, 3, 4].map((item, index) => (
            <Card key={index} image={image} title="movie Name" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detail;
