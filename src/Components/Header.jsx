import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.logo}>logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Language</li>
          <li>Genre</li>
          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
