import styles from "styles/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5551997782938&text=Olá!%20Gostaria%20de%20mais%20informações."
            target="_blank"
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{ color: "#63E6BE" }}
            ></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/people/SevenSat-Rastreamento/100043691811416/?ref=embed_page"
            target="_blank"
          >
            <i
              className="fa-brands fa-square-facebook"
              style={{ color: "#1877F2" }}
            ></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/7sat_rastreamento/"
            target="_blank"
          >
            <i
              className="fa-brands fa-square-instagram"
              style={{ color: "#de0d45" }}
            ></i>
          </a>
        </li>
        <li>
          <a href="mailto:7sat.rastreamento@gmail.com" target="_blank">
            <i
              className="fa-regular fa-envelope"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
        </li>
      </ul>

      <div className={styles.divAddress} id="contato">
        <small>
          7sat rastreamento - CNPJ: 36.069.454/0001-66 - Telefones:
          (51)99909-8314 / (51)99778-2938
        </small>

        <p>
          Rua Maria Olinda Telles, 900 - Bairro: Canudos - Cidade: Novo
          Hamburgo/RS - Cep: 93.546-060
        </p>
      </div>
    </footer>
  );
};
export default Footer;
