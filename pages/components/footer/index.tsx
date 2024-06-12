import styles from "styles/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=555196848538&text=Olá%20Gostaria%20de%20mais%20informações"
            target="_blank"
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{ color: "#63E6BE" }}
            ></i>
          </a>
        </li>
        <li>
          <a href="##">
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
        <small>Copyright © 2023-2024 Slack.com.br LTDA.</small>

        <p>
          CNPJ: 00.000.000/0000-00 / Av. dos municipios, 0.000 , Campo Bom/RS -
          CEP 937-000-00 - Empresa slack.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
