import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation-left">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">K | BLOG</Link>
      </li>
      <li className={styles.navigationItem}>
      <a href="https://karanbalaji.com"  target="_self" rel="Portfolio">PORTFOLIO</a>
      </li>
      {/* whenClicked is a property not an event, per se. 
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li> */}
    </ul>
  </nav>
)
