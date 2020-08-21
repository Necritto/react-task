import React from "react";
import classes from "./Buyer.module.scss";

import { Link, Redirect } from "react-router-dom";
import { buyers } from "../Buyers";

export const Buyer = ({ match }) => {
  const buyerId = match.params.id;

  if (!buyers[buyerId]) {
    return (
      <>
        <Redirect to="/404" />
      </>
    );
  }

  const { name, check, amount, proceeds } = buyers[buyerId];

  return (
    <div className={classes.buyer}>
      <Link to="/buyers">&#10149;</Link>
      <div className={classes.buyer_content}>
        <h1>Покупатель : {name}</h1>
        <p>Средний чек покупателя : {check} рублей</p>
        <p>Количество покупок : {amount}</p>
        <p>Общая выручка : {proceeds}</p>
      </div>
    </div>
  );
};
