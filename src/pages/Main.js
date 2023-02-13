import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import style from "./Main.module.css";
import axios from "axios";
const Main = () => {
  const [value, setValue] = useState([]);
  const [isloading, setisLoading] = useState(false);
  // axios.get("https://imdb8.p.rapidapi.com/title/v2/find").then((res) => {
  //   console.log(res);
  // });
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
  console.log(value);
  return (
    <>
      {isloading ? (
        <h1>....Loading.....</h1>
      ) : (
        <div className={style.main}>
          {value?.map((item, index) => (
            <Card key={index} image={item?.image?.url} title={item?.title} />
          ))}
        </div>
      )}
      {/* <div className={style.main}>
        {[0, 2, 3, 5, 6, 7, 8, 9, 4].map((item, index) => (
          <Card key={index} />
        ))}
      </div> */}
    </>
  );
};

export default Main;
