import React, { useEffect, useState } from "react";

import Card from "../Components/Card";
import style from "./Main.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Main = () => {
  const [value, setValue] = useState([]);
  const [isloading, setisLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://imdb8.p.rapidapi.com/title/v2/find",

        {
          headers: {
            "X-RapidAPI-Key":
              "cfbb0ff9f4msh447485a012a5e7bp101d21jsnbdd731bc948e",
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          },
          params: { title: "game of", limit: "20", sortArg: "moviemeter,asc" },
        }
      )
      .then((res) => {
        console.log(res);
        setValue(res?.data?.results);
        setisLoading(true);
      });
  }, [isloading]);
  console.log("rending", value, isloading);
  return (
    <>
      {isloading ? (
        <div className={style.main}>
          {value?.map((item, index) => (
            <div key={index}>
              <Link to={`react-osos${item?.id}`}>
                <Card image={item?.image?.url} title={item?.title} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h1>....Loading.....</h1>
      )}
    </>
  );
};

export default Main;
