import styles from "./Section.module.css"
import Language from "./Language"

const AboutMe = () => {
    return (
        <section className={`${styles.aboutMe} section`}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    About Me
                </h1>
                <p className={styles.bio}>
                    Heya! I'm a Roblox developer with over <span className='text-red-400 font-bold'>five years</span> of experience in LUAU scripting. I specialize in both frontend and backend development, crafting high-quality solutions for immersive experiences.
                    I actively contribute to Discord communities like Roblox Scripting Assistance, where I share knowledge and continue to refine my skills. With a deep understanding of Roblox APIs and scripting, I'm passionate about delivering clean, efficient, and optimized solutions for your project! :D
                    <br />
                    <br />
                    <span className='text-blue-400 font-bold'>Outside of Roblox, I am pursuing a CS degree and currently have experience with the following:</span>
                </p>
                <br />
                <div className={styles.languagesGrid}>
                    <Language name="JavaScript" imageSrc="/images/JS-logo.jpg" langName="JavaScript"/>
                    <Language name="TypeScript" imageSrc="/images/TS-logo.png" langName="TypeScript"/>
                    <Language name="HTML" imageSrc="/images/HTML-logo.png" langName="HTML" />
                    <Language name="CSS" imageSrc="/images/CSS-logo.png" langName="CSS"/>
                    <Language name="React" imageSrc="/images/React-logo.png" langName="React"/>
                    <Language name="Python" imageSrc="/images/Python-logo.png" langName="Python"/>
                    <Language name="Java" imageSrc="/images/Java-logo.png" langName="Java"/>
                    <Language name="Git Bash" imageSrc="/images/GitBash-logo.png" langName="Git"/>
                    <Language name="Bash" imageSrc="/images/Bash-logo.png" langName="Bash"/>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
