import React from "react";
import Card from "../Components/Card";
import image from "../image.jpg";
import style from "./Detail.module.css";
const Detail = () => {
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
        <article>
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
            <Card key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detail;
