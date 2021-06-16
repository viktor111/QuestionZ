import { Link } from "react-router-dom";
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link to="/new-question" className="btn">
        Add a Question
      </Link>
    </div>
  );
};

export default NoQuotesFound;
