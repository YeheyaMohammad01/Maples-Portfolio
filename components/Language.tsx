import React from 'react'
import styles from './Language.module.css'

interface LanguageProps {
    name: string;
    imageSrc: string;
}

const Language: React.FC<LanguageProps> = ({ name, imageSrc }) => {
  return (
    <div className={styles.languageContainer}>
        <img src={imageSrc} alt={`${name} logo`} className={styles.languageLogo}></img>
    </div>
  )
}

export default Language