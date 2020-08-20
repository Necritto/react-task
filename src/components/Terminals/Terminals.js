import React from "react";
import classes from "./Terminals.module.scss";

export const Terminals = () => {
  return (
    <div className={classes.terminals}>
      <h1>Терминалы</h1>
      <div className={classes.container}>
        <form className={classes.terminals_form}>
          <div className={classes.terminals_form__input}>
            <input type="text" placeholder="Название терминала" name="terminal" />
          </div>
          <div className={classes.terminals_form__input}>
            <textarea placeholder="Описание" name="description" />
          </div>
          <div className={classes.terminals_form__input}>
            <input type="submit" value="Добавить" />
          </div>
        </form>
        <div className={classes.table_wrap}>
          <table className={classes.terminals_table}>
            <thead>
              <tr>
                <th>Список терминалов</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Терминал</th>
                <th>Описание</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
