import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Muna</h1>
          <p className={styles.description}>
            I'm a frontend developer with 2 years of experience using React and
            Next.js. Reach out if you'd like to learn more!
          </p>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        {/* <div className={styles.imgpart}> */}
        <img
          src={getImageUrl("hero/programmer2.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </div>
  );
};

export default Hero;
