import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contactme.module.css";

const Contactme = () => {
  return (
    <>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto: rowshonamin10@gmail.com">
              rowshonamin10@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/amin-muna/">
              linkedin.com/in/amin-muna/
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href="https://github.com/aminmuna-prog/">
              github.com/aminmuna-prog/
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Contactme;
