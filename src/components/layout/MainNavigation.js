import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>QuestionZ</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/questions" activeClassName={classes.active}>
              All Questions
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-question" activeClassName={classes.active}>
              Add Question
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
