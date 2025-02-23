import React from 'react'
import styles from './Hero.module.css'; // Import CSS module

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            M A P
          </h1>
          <img src="/images/CustomLuau.png" alt="L" className={styles.heroImage} />
          <h1 className={styles.title}>
            E
          </h1>
        </div>
        <h2 className={styles.subtitle}>Programming Your Ideas to Life.</h2>
      </div>
    </div>
  )
}

export default Hero