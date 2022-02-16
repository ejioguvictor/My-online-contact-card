import React from "react";
import styles from '../index.module.scss'

export default function About() {
  return (
    <div className={styles.about}>
      <h3 className={styles.details}>About</h3>
      <p>
        As a fullstack developer with a particular interest in
        automating daily tasks and solving problems in N+1 way, I
        am interested in the entire lifecycle of web development;
        design, architecture, developing, testing, down to deployment.
        I am passionate about code efficiency and user experience,
        alongside an aptitude to solve problems using MERN stack
        technologies.
        Constantly I am learning and adapting to thrive well in fast
        paced teams and projects.
      </p>
    </div>
  )
}