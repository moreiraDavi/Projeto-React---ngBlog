import { Link } from "react-router-dom";

// CSS
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o ng <span>Blog</span>
      </h2>
      <p>
        Esse projeto consiste em um blog feito com o React no front-end e o Firebase do Google no back-end.
      </p>
      <Link to="/posts/create" className="btn">Criar um post</Link>
    </div>
  );
};

export default About;
