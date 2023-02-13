import React, { useState } from "react";
import style from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const submitHandle = (e) => {
    e.preventDefault();
    localStorage.setItem("login", "loginUser");
    dispatch(login({ email, password }));
  };
  return (
    <div className={style.card}>
      <h1>Sign in to your account</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="Email/Phone number"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Auth;
