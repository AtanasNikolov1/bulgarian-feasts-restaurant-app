import styles from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.body}>
      <div className={styles.errorPage}>
        <div className={styles.content}>
          <h1>404</h1>
          <h4>Oops! Page not found</h4>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken, report a problem.
          </p>
          <div className={styles.btns}>
            <Link to="/">return home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
