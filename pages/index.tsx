import Circle from "../ui/Circle";
import styles from "./index.module.css";

const Home = () => (
  <main className={styles.main}>
    <Circle text="Quick brown fox jumps over the lazy dog." />
    <Circle text="Ceci est un test." />
    <Circle text="Ceci est un texte très long, avec beacoup de mots, qui prend beaucoup de place." />
  </main>
);

export default Home;
