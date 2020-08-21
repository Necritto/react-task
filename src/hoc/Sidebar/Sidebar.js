import React from "react";
import classes from "./Sidebar.module.scss";

import { NavLink } from "react-router-dom";

export const Sidebar = ({ children }) => {
  const imgSrc = sessionStorage.getItem("avatar_url");

  const logoutHendler = () => {
    sessionStorage.clear();
    window.location.reload(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <aside className={classes.aside}>
          <div className={classes.aside__wrap}>
            <div className={classes.aside__image}>
              <img src={imgSrc} alt="src" />
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
              <button onClick={logoutHendler}>Выйти</button>
              <span>Copyright &copy; 2020</span>
            </div>
          </div>
        </aside>
        <>{children}</>
      </div>
    </div>
  );
};
