import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import WorkExamples from "../components/WorkExamples";
import BackgroundImage from "../components/BackgroundImage";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <BackgroundImage />
      <NavBar fadeOnScroll={true} />
      <Hero />
      <div id="about">
        <AboutMe />
      </div>
      <div id="work">
        <WorkExamples />
      </div>
    </>
  );
}
