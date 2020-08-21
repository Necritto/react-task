import React from "react";
import classes from "./NoMatch.module.scss";

export const NoMatch = ({ location }) => {
  return (
    <div className={classes.nomatch}>
      <h3>
        404 - No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};
