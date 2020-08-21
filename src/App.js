import React from "react";
import { Route, Switch } from "react-router-dom";

import { Auth } from "./components/Auth/Auth";
import { Sidebar } from "./hoc/Sidebar/Sidebar";
import { Terminals } from "./components/Terminals/Terminals";
import { Buyers } from "./components/Buyers/Buyers";
import { Buyer } from "./components/Buyers/Buyer/Buyer";
import { NoMatch } from "./components/NoMatch/NoMatch";

export const App = () => {
  const isAuth = sessionStorage.getItem("isValid");

  return (
    <>
      {isAuth ? (
        <Sidebar>
          <Switch>
            <Route exact path="/terminals" component={Terminals} />
            <Route exact path="/buyers" component={Buyers} />
            <Route path="/buyers/:id" component={Buyer} />
            <Route path="/404" component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </Sidebar>
      ) : (
        <Auth />
      )}
    </>
  );
};
