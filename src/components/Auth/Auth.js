import React, { useState } from "react";
import classes from "./Auth.module.scss";

import Axios from "axios";

export const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  const userInputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "username" ? setUsername(value) : setPassword(value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    (await formValidation()) && window.location.reload(true);
  };

  const formValidation = async () => {
    let isPasswordValid = false;
    let isUsernameValid = false;
    let isValid = false;

    setPasswordErr("");
    setUsernameErr("");

    const regExp = /^.(?=.*[a-zA-Z])(?=.*\d).*$/;

    if (!regExp.test(password)) {
      setPasswordErr("Пароль должен содержать большую и маленькую буквы и цифры");
      isPasswordValid = false;
    } else if (password.length < 8) {
      setPasswordErr("Пароль должен быть не менее 8 символов");
      isPasswordValid = false;
    } else {
      isPasswordValid = true;
    }

    if (!username) {
      isUsernameValid = false;
      setUsernameErr("Пользователь не существует");
    }

    if (username) {
      try {
        const resp = await Axios.get(
          `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        );
        if (resp.status === 200) {
          isUsernameValid = true;
          const avatar = resp.data.avatar_url;
          sessionStorage.setItem("avatar_url", avatar);
        } else {
          isUsernameValid = false;
        }
      } catch (err) {
        isUsernameValid = false;
        setUsernameErr("Пользователь не существует");
      }
    }

    if (isPasswordValid && isUsernameValid) isValid = true;

    sessionStorage.setItem("isValid", isValid);
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
        {usernameErr && <p className={classes.error}>{usernameErr}</p>}
        {passwordErr && <p className={classes.error}>{passwordErr}</p>}
      </div>
    </form>
  );
};
