import React from 'react'
import styles from './Language.module.css'

interface LanguageProps {
    name: string;
    imageSrc: string;
    langName: string;
}

const Language: React.FC<LanguageProps> = ({ name, imageSrc, langName }) => {
  return (
    <div className={styles.languageContainer}>
        <img src={imageSrc} alt={`${name} logo`} className={styles.languageLogo}></img>
        <h2>{langName}</h2>
    </div>
  )
}

export default Language