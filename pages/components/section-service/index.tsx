import styles from "styles/section/SectionService.module.css";
import Footer from "../footer";
const SectionService = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divImg}>
        <img src="/logo.png" alt="logo imagem" />
      </div>
      <div className={styles.divTitle}>
        <h2>Se o seu veículo fosse roubado</h2>
        <h2>você gostaria de localizá-lo em minutos?</h2>
        <h3>Com nossos serviços de rastreamento</h3>
        <h3>isso é possível!</h3>
      </div>

      <div className={styles.divUl}>
        <ul className={styles.ul}>
          <li>
            <img src="/segurança.png" alt="seguranaça veicular" />
            <span>Mais Segurança</span>
          </li>
          <li>
            <img src="/tranquilidade.png" alt="seguranaça veicular" />
            <span>Mais Tranquilidade</span>
          </li>
          <li>
            <img src="/monitorar.png" alt="seguranaça veicular" />
            <span>Monitore seu veículo em tempo real 24 horas por dia</span>
          </li>
          <li>
            <img src="/velocidade.png" alt="seguranaça veicular" />
            <span>Controle de Velocidade</span>
          </li>
          <li>
            <img src="/acesso.png" alt="seguranaça veicular" />
            <span>Acesso 24 horas pelo APP</span>
          </li>{" "}
          <li>
            <img src="/historico.png" alt="seguranaça veicular" />
            <span>Histórico de Rotas</span>
          </li>
          <li>
            <img src="/qualidade.png" alt="seguranaça veicular" />
            <span>Serviço de Qualidade</span>
          </li>
        </ul>
      </div>

      <Footer />
    </section>
  );
};

export default SectionService;
