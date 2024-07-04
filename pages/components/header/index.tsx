import styles from "styles/header/Header.module.css";
import Nav from "../nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.divImg}>
        <img src="/logo.png" alt="logo marca" />
      </div>

      <h1>Monitore</h1>
      <p>SEU</p>
      <span className={styles.animatedsubtitle}>
        <img
          className={styles.ponteiro}
          src="/ponteiro.png"
          alt="ponteiro de localização"
        />
        <img className={styles.car} src="/car.png" alt="veiculo" />
      </span>
      <h2>Com</h2>
      <div className={styles.animatedheader}>
        <span className={styles.t}>7</span>
        <span>S</span>
        <span className={styles.a}>A</span>
        <span>T</span>
      </div>
    </header>
  );
};

export default Header;
