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
          <Link href="/components/section-service" target="_blank">
            SERVIÇOS
          </Link>

          <Link href="/components/section-contat" target="_blank">
            CONTATO
          </Link>

          <a href="#confira">CONFIRA</a>
        </li>
      </ul>
    </div>
  );
};

export default NavResponsive;
