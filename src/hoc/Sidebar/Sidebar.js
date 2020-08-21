import React from "react";
import classes from "./Sidebar.module.scss";

import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authLogout } from "../../store/authAction";

const Sidebar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <aside className={classes.aside}>
          <div className={classes.aside__wrap}>
            <div className={classes.aside__image}>
              <img src={props.userAvatar} alt="src" />
            </div>
            <nav className={classes.aside__nav}>
              <ul>
                <li>
                  <NavLink
                    to="/terminals"
                    activeClassName={classes.active_link}
                    className={classes.aside__content_link}
                  >
                    <span>Терминалы</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/buyers"
                    activeClassName={classes.active_link}
                    className={classes.aside__content_link}
                  >
                    <span>Клиенты</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className={classes.aside__footer}>
              <button onClick={props.authLogout}>Выйти</button>
              <span>Copyright &copy; 2020</span>
            </div>
          </div>
        </aside>
        <>{props.children}</>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userAvatar: state.userAvatar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authLogout: () => dispatch(authLogout()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
