import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

/**
 * ErrorPage component displays a 404 error page when a route is not found.
 * It provides a link to navigate back to the home page.
 */
export default function Error() {
  return (
    <section className={styles.page_404}>
      <div>
        <div className={styles.four_zero_four_bg}>
          <h1>404</h1>
        </div>
        <div className={styles.contant_box_404}>
          <h3>Look like you're lost</h3>
          <p>The page you are looking for is not available!</p>
          <Link to="/" className={styles.link_404}>
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
