import styles from "styles/header/Header.module.css";
import Nav from "../nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.divImg}>
        <img src="/logo.png" alt="logo marca" />
      </div>
      <div className={styles.animatedheader}>
        <h1>RASTREAMENTO</h1>
        <span>V</span>
        <span>E</span>
        <span>I</span>
        <span>C</span>
        <span>U</span>
        <span>L</span>
        <span>A</span>
        <span>R</span>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
