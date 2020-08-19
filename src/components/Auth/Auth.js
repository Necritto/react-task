import React from "react";
import classes from "./Auth.module.scss";

export const Auth = () => {
  return (
    <form className={classes.form}>
      <fieldset>
        <legend>Вход</legend>
        <div className={classes.input__form}>
          <input type="text" placeholder="Имя пользователя" name="username" />
        </div>
        <div className={classes.input__form}>
          <input type="password" placeholder="Пароль" name="password" />
        </div>
        <div className={classes.input__form}>
          <input type="submit" value="Войти" />
        </div>
      </fieldset>
      <div className={classes.errors}></div>
    </form>
  );
};
