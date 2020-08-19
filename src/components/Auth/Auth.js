import React, { useState } from "react";
import classes from "./Auth.module.scss";

import Axios from "axios";

export const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErr, setUsernameErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const userInputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "username" ? setUsername(value) : setPassword(value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await formValidation();
  };

  const formValidation = async () => {
    const usernameErr = {};
    const passwordErr = {};
    let isValid = true;

    const regExp = /^.(?=.*[a-zA-Z])(?=.*\d).*$/;

    if (!regExp.test(password)) {
      passwordErr.err = "Пароль должен содержать большую и маленькую буквы и цифры";
      isValid = false;
    }

    if (password.length < 8) {
      passwordErr.err = "Пароль должен быть не менее 8 символов";
      isValid = false;
    }

    if (!username) {
      isValid = false;
      usernameErr.err = "Пользователь не существует";
    }

    if (username) {
      try {
        const resp = await Axios.get(
          `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        );
        resp.status === 200 ? (isValid = true) : (isValid = false);
      } catch (err) {
        isValid = false;
        usernameErr.err = "Пользователь не существует";
      }
    }

    setPasswordErr(passwordErr);
    setUsernameErr(usernameErr);

    return isValid;
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <fieldset>
        <legend>Вход</legend>
        <div className={classes.input__form}>
          <input
            type="text"
            placeholder="Имя пользователя"
            name="username"
            value={username}
            onChange={userInputHandler}
          />
        </div>
        <div className={classes.input__form}>
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={userInputHandler}
          />
        </div>
        <div className={classes.input__form}>
          <input type="submit" value="Войти" />
        </div>
      </fieldset>
      <div className={classes.errors}>
        {Object.keys(usernameErr).map((key, index) => {
          return (
            <p key={index} className={classes.error}>
              {usernameErr[key]}
            </p>
          );
        })}
        {Object.keys(passwordErr).map((key, index) => {
          return (
            <p key={index} className={classes.error}>
              {passwordErr[key]}
            </p>
          );
        })}
      </div>
    </form>
  );
};
