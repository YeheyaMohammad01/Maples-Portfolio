import React from "react";
import styles from "./Showcase.module.css";
import Link from "next/link";

interface ShowcaseProps {
  videoURL: string;
  description: string;
  title: string;
  docsLink?: string;
}

const Showcase: React.FC<ShowcaseProps> = ({
  videoURL,
  description,
  title,
  docsLink,
}) => {
  return (
    <div className={styles["showcase-container"]}>
      <div className={styles["video-container"]}>
        <iframe
          src={videoURL}
          title="YouTube video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles["text-container"]}>
        <h1 className={styles["video-title"]}>{title}</h1>
        <p className={styles["description"]}>
          {description}
          {docsLink && (
            <>
              <br />
              <br />
              You can view the library documentation{" "}
              <Link
                href={docsLink}
                style={{ color: "#61dafb", textDecoration: "none" }}
              >
                here.
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Showcase;
