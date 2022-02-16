import React from "react";
import passport from "../images/Passport.png"
import emailLogo from "../../src/images/Icon.png"
import linkedInLogo from "../../src/images/Vector.png"
import styles from '../index.module.scss'


export default function Info() {
  return (
    <div className={styles.header}>
      <img className={styles["profile-picture"]} src={passport} alt="" />
      <h2 className={styles.name}>Victor Ejiogu</h2>
      <h4 className={styles.title}>Fullstack Developer</h4>
      <h6 className={styles.website}>ejioguvictor.me</h6>

      <div className={styles["contact-profiles"]}>
        <a href="mailto:ejioguvictor6054@gmail.com"><button type="submit"><img src={emailLogo} alt="Email-logo" />Email</button></a>
        <a href="https://www.linkedin.com/in/ejioguvictorC" target="_blank" rel="noreferrer"><button type="submit" className={styles["linkedln-button"]}><img src={linkedInLogo} alt="LinkendIn-logo" />LinkendIn</button></a>
      </div>
    </div>
  )
}