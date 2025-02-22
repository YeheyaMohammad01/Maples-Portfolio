"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

interface NavBarProps {
  fadeOnScroll?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ fadeOnScroll = false }) => {
  const [visible, setVisible] = useState(!fadeOnScroll);

  useEffect(() => {
    if (!fadeOnScroll) return;

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [fadeOnScroll]);

  return (
    <nav
      className={styles["navbar-container"]}
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease" }}
    >
      <img
        src="/images/Maple-logo.png"
        alt="Maple Logo"
        className={styles["navbar-logo"]}
      />
      <div className={styles["redirect-container"]}>
        <Link href="/#about">
          <h2 className={styles["nav-text"]}>About Me</h2>
        </Link>
        <Link href="/#work">
          <h2 className={styles["nav-text"]}>Work Examples</h2>
        </Link>
        <Link href="/#contact">
          <h2 className={styles["nav-text"]}>Contact</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
