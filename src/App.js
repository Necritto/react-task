import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Auth from "./components/Auth/Auth";
import Sidebar from "./hoc/Sidebar/Sidebar";
import { Terminals } from "./components/Terminals/Terminals";
import { Buyers } from "./components/Buyers/Buyers";
import { Buyer } from "./components/Buyers/Buyer/Buyer";
import { NoMatch } from "./components/NoMatch/NoMatch";

const App = (props) => {
  return (
    <>
      {props.isValid ? (
        <Sidebar>
          <Switch>
            <Route exact path="/">
              <Redirect to="/terminals" />
            </Route>
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

function mapStateToProps(state) {
  return {
    isValid: state.isValid,
  };
}

export default withRouter(connect(mapStateToProps, null)(App));
