import React from "react";
import classes from "./Buyers.module.scss";

import { Link } from "react-router-dom";

export const Buyers = () => {
  const buyers = [
    { id: 0, name: "Алексей", check: 1000, amount: 3, proceeds: 23434 },
    { id: 1, name: "Антон", check: 356, amount: 13, proceeds: 567 },
    { id: 2, name: "Аркадий", check: 43563, amount: 3, proceeds: 234734 },
    { id: 3, name: "Анатолий", check: 10560, amount: 23, proceeds: 324525 },
    { id: 4, name: "Артур", check: 4564, amount: 33, proceeds: 4636 },
    { id: 5, name: "Борис", check: 45454, amount: 43, proceeds: 231234434 },
    { id: 6, name: "Борис", check: 4545, amount: 53, proceeds: 345345 },
    { id: 7, name: "Борис", check: 890, amount: 31, proceeds: 23456434 },
    { id: 8, name: "Вадим", check: 7878, amount: 32, proceeds: 23434 },
    { id: 9, name: "Валентин", check: 456, amount: 33, proceeds: 2323434 },
    { id: 10, name: "Валерий", check: 657, amount: 34, proceeds: 7666 },
    { id: 11, name: "Василий", check: 12340, amount: 331, proceeds: 23634 },
    { id: 12, name: "Виктор", check: 14560, amount: 324, proceeds: 7880908 },
    { id: 13, name: "Виталий", check: 1000, amount: 33, proceeds: 23434 },
    { id: 14, name: "Алексей", check: 1000, amount: 9, proceeds: 236734 },
  ];

  return (
    <div className={classes.table_wrap}>
      <table className={classes.buyers}>
        <thead>
          <tr>
            <th>Покупатели</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>ID покупателя</th>
            <th>Имя покупателя</th>
            <th>Средний чек</th>
            <th>Количество покупок</th>
            <th>Общая выручка</th>
          </tr>
          {buyers.map((buyer) => (
            <tr key={buyer.id}>
              <td>
                <Link to={`/buyers/${buyer.id}`}>{buyer.id}</Link>
              </td>
              <td>{buyer.name}</td>
              <td>{buyer.check}</td>
              <td>{buyer.amount}</td>
              <td>{buyer.proceeds}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.pagination}></div>
    </div>
  );
};
