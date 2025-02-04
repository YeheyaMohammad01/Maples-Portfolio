import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import WorkExamples from '../components/WorkExamples';
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <>
      <BackgroundImage />
      <Hero />
      <AboutMe />
      <WorkExamples />
    </>
  );
}
