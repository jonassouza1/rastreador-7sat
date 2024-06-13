import styles from "styles/nav/Nav.module.css";
import NavResponsive from "./nav-responsive";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href="/components/section-service" target="_blank">
            SERVIÇOS
          </Link>

          <a href="#contato">CONTATO</a>
        </li>
      </ul>
      <NavResponsive />
    </nav>
  );
};
export default Nav;
