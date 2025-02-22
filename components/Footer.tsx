import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["logo-and-text-container"]}>
        <img
          src="/images/Maple-logo.png"
          alt="Maple Logo"
          className={styles["footer-logo"]}
        />
        <h1>Get in touch.</h1>
      </div>
      <div className={styles["logo-and-text-container"]}>
        <img
          src="/images/Discord-logo.png"
          alt="Discord Logo"
          className={styles["discord-logo"]}
        />
        <p className={styles["discord-id"]}>UserID: mapletheparrot</p>
      </div>
    </footer>
  );
};

export default Footer;
