import React from "react";
import styles from "./Section.module.css";
import Showcase from "./Showcase";

const WorkExamples = () => {
  return (
    <div>
      <h1 className={`${styles.title}`}>Work Examples</h1>
      <p className={styles.bio}>
        Here are short videos demonstrating my understanding of the Roblox API.
      </p>
      <br />
      <div className="flex flex-col gap-2">
        <Showcase
          videoURL="https://www.youtube.com/embed/hYi_0rUs1MY?si=Bn-PxMrC6m5T7t5N"
          description="Library that helps you create visual frames, also allows you to 'distort' parts with particles to create unique visual effects. Comes with provided presets."
          title="ImpactFrames Library"
          docsLink="/docs"
        />
        <Showcase
          videoURL="https://www.youtube.com/embed/tQ5lSIPtsyE?si=OrQBPbWu28iOz4sT"
          description="This is perfect for MMORPG games or any other game that wants to create a lively atmosphere. These NPCs are really cheap, meaning they don't overpack the bandwidth and cause lag. The video demonstrates 100 NPCs consuming less than 16 KB of bandwidth. "
          title="Light NPCs"
        />
        <Showcase
          videoURL="https://www.youtube.com/embed/B2EBbPPLlPU?si=mnNsoA-JYEvMTeef"
          description="A third person gun system that is visually captivating, and a simple gunship system. "
          title="Third Person Gun System"
        />
        <Showcase
          videoURL="https://www.youtube.com/embed/JSd-EHcR9pQ?si=4YyHelHQyVSRW-Po"
          description="This is an example of a small island survival game, which includes an inventory system, food system, thirst system, growth system, tree system, etc. "
          title="Basic Survival"
        />
        <Showcase
          videoURL="https://www.youtube.com/embed/mJomb8LtrN4?si=b9gd17vE40wX4jSh"
          description="Here is a short video demonstrating a board game I have created. Which includes dice rolling, character selection, lobby system, cards and more."
          title="Board Game"
        />
      </div>
    </div>
  );
};

export default WorkExamples;
