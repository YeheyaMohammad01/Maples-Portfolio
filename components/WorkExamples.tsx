import React from 'react'
import styles from './AboutMe.module.css';


const WorkExamples = () => {
  return (
    <section className={styles.aboutMe}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Work Examples
            </h1>
            <p className={styles.bio}>
              Here are short videos demonstrating my understanding of the Roblox API.
            </p>
            <br />
            
        </div>
    </section>
);
}

export default WorkExamples