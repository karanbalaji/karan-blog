import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'
import TextLoop from "react-text-loop"

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>
      <TextLoop springConfig={{ stiffness: 180, damping: 12, fade: true }}>
                    <span>My Name is&nbsp;</span>
                    <span>J'm appele&nbsp;</span>
                    <span>என் பெயர்&nbsp;</span>
                </TextLoop>
                
      {data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
