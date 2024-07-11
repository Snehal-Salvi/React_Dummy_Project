import React from "react";
import styles from "./Home.module.css";
import backgroundImage from '../../assets/backgroundImage.png';  

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1>Your App Text Here</h1>
      </div>
      <div className={styles.rightContainer}>
        {/* <img src={backgroundImage} alt="app-img" className={styles.image} />
         */}

<div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img
        src={backgroundImage} alt="app-img" 
        className={styles.image}
          />
        </div>
        <div className={styles.flipCardBack}>
          <h1>John Doe</h1>
          <p>Architect &amp; Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
