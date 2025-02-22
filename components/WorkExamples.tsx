import React from "react";
import styles from "./Section.module.css";
import Showcase from "./Showcase";

const WorkExamples = () => {
  return (
    <section>
      <div>
        <h1 className={styles.title}>Work Examples</h1>
        <p className={styles.bio}>
          Here are short videos demonstrating my understanding of the Roblox
          API.
        </p>
        <br />
        <div>
          <Showcase
            videoURL="https://www.youtube.com/embed/hYi_0rUs1MY?si=Bn-PxMrC6m5T7t5N"
            description="Description of video"
            title="ImpactFrames Library"
          />
          <Showcase
            videoURL="https://www.youtube.com/embed/tQ5lSIPtsyE?si=OrQBPbWu28iOz4sT"
            description="This is perfect for MMORPG games or any other game that wants to create a lively atmosphere. These NPCs are really cheap, meaning they don't overpack the bandwidth and cause lag. The video demonstrates 100 NPCs consuming less than 16 KB of bandwidth. "
            title="Light NPCs"
            docsLink="/docs"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExamples;
