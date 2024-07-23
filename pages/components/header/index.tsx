import styles from "styles/header/Header.module.css";
import Nav from "../nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.container}>
        <div className={styles.divImg}>
          <img src="/home.jpg" alt="imagem de fundo da empresa" />
        </div>

        <div className={styles.divTitle}>
          <h1>Sobre a</h1>

          <img src="/logo.png" alt="logo da empresa 7sat" />
        </div>
      </div>
    </header>
  );
};

export default Header;
