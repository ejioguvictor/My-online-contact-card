import React from "react";
import twitterLogo from "../../src/images/Twitter.png"
import githubLogo from "../../src/images/GitHub.png"
import styles from '../index.module.scss'


export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://twitter.com/sirEjioguVictor" target="_blank" rel="noreferrer"><img src={twitterLogo} alt="" /></a>
      <a href="https://github.com/ejioguvictor" target="_blank" rel="noreferrer" ><img src={githubLogo} alt="" /></a>
    </div >
  )
}