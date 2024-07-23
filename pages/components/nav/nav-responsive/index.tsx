import React from "react";
import styles from "styles/nav/NavResponsivo.module.css";
import Link from "next/link";

const NavResponsive = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputHamburger}
        type="checkbox"
        id="menu-hamburger"
      />

      <label className={styles.labelHamburger} htmlFor="menu-hamburger">
        <div className={styles.menu}>
          <span className={styles.hamburger}></span>
        </div>
      </label>

      <ul className={styles.ul2}>
        <li>
          <a href="/">PÁGINA PRINCIPAL</a>
          <Link href="/components/section-service">SERVIÇOS</Link>

          <Link href="/components/section-contat">CONTATO</Link>

          <Link href="/components/section-client">ÁREA DO CLIENTE</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavResponsive;
