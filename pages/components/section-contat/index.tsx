import styles from "styles/section/SectionContat.module.css";
import Footer from "../footer";

const SectionContat = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.divTitle}>
          <h3>ENTRE EM CONTATO AGORA MESMO</h3>
          <h3>E</h3>
          <h4>PROTEJA-SE CONTRA ROUBO</h4>
        </div>

        <div className={styles.divImg}>
          <img src="/logo.png" alt="logo imagem" />
        </div>
      </div>

      <div className={styles.divMapa}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.653924188996!2d-51.11143182330786!3d-29.700811715428905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943f444b7a105%3A0x2a2d2ef1914aeba!2sR.%20Maria%20Olinda%20Telles%2C%20900%20-%20Canudos%2C%20Novo%20Hamburgo%20-%20RS%2C%2093546-060!5e0!3m2!1spt-BR!2sbr!4v1720099062950!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </div>

      <div className={styles.divText}>
        <h3> Acesse nossos canais de comunicação </h3>
        <h4>| |</h4>
        <div className={styles.arrow}></div>
      </div>

      <Footer />
    </section>
  );
};

export default SectionContat;
