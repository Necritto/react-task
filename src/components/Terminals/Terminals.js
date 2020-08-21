import React, { useState } from "react";
import classes from "./Terminals.module.scss";

export const Terminals = () => {
  const [terminal, setTerminal] = useState("");
  const [description, setDescription] = useState("");
  const [listTerminals, setListTerminals] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (terminal && description) {
      const list = {
        terminal,
        description,
      };
      setListTerminals([...listTerminals, list]);
      setTerminal("");
      setDescription("");
    }
  };

  const userInputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "terminal" ? setTerminal(value) : setDescription(value);
  };

  const onRemoveTerminal = (rowIndex) => {
    const filteredList = listTerminals.filter((_, index) => index !== rowIndex);
    setListTerminals(filteredList);
  };

  return (
    <div className={classes.terminals}>
      <h1>Терминалы</h1>
      <div className={classes.container}>
        <form className={classes.terminals_form} onSubmit={onSubmitHandler}>
          <div className={classes.terminals_form__input}>
            <input
              type="text"
              placeholder="Название терминала"
              name="terminal"
              value={terminal}
              onChange={userInputHandler}
            />
          </div>
          <div className={classes.terminals_form__input}>
            <textarea
              placeholder="Описание"
              name="description"
              value={description}
              onChange={userInputHandler}
            />
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
              {listTerminals &&
                listTerminals.map((item, index) => (
                  <tr key={index}>
                    <td>{item.terminal}</td>
                    <td>{item.description}</td>
                    <td>
                      <button onClick={() => onRemoveTerminal(index)}>&times;</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
