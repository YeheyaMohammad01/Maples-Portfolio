// app/docs/page.tsx
import React from "react";
import NavBar from "@/components/NavBar";
import styles from "./page.module.css"

export default function DocsPage() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRvzY43d0J6-1Q4ltz_QlpsolVRHtEfwwg2ly_OMN51fARkeSEELZy3vD6D0uCFXQOZPuSaF4J6R-gp/pub?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: "none" }}
          title="Documentation"
        ></iframe>
      </div>
    </>
  );
}
