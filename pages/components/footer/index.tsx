import styles from "styles/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5551997782938&text=Olá%20Gostaria%20de%20mais%20informações"
            target="_blank"
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{ color: "#63E6BE" }}
            ></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/people/SevenSat-Rastreamento/100043691811416/?ref=embed_page">
            <i
              className="fa-brands fa-square-facebook"
              style={{ color: "#1877F2" }}
            ></i>
          </a>
        </li>
        <li>
          <a href="https://www.oloko" target="_blank">
            <i
              className="fa-brands fa-square-instagram"
              style={{ color: "#de0d45" }}
            ></i>
          </a>
        </li>
      </ul>

      <div className={styles.divAddress} id="contato">
        <small>Copyright © 2023-2024 www.7satrastreamento.com LTDA.</small>

        <p>
          CNPJ: 00.000.000/0000-00 / R. Maria Olinda Telles, 900-Canudos, Novo
          Hamburgo - CEP 93546-060 - Empresa 7SAT fone: 51 99778-2938 / 51
          99909-8314.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
