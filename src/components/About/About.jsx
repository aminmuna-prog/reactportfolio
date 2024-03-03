import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor icon"
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                With a computer science degree from AIUB, I landed my first job
                at Mighty Egg Technologies Ltd as their Junior Front End
                Developer . Here I got the opportunity to build and scale up the
                front-end of web applications using wordpress, HTML, CSS,
                JavaScript and Bootstrap. I also contributed to the testing,
                debugging, SEO of the platform, ensuring seamless user
                experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
