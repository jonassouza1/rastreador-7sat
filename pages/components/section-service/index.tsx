import styles from "styles/section/SectionService.module.css";
import Footer from "../footer";
import SectionDepoiments from "../section-depoiment";
import AnimationCar from "../animation-car";
import Nav from "../nav";

const SectionService = () => {
  return (
    <section className={styles.section}>
      <Nav />
      <AnimationCar />

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

      <ul className={styles.ul2}>
        <li>
          <img src="/homologado.png" alt="seguranaça veicular" />
          <div className={styles.divText}>
            <span>RASTREADORES HOMOLOGADOS PELA ANATEL</span>
          </div>
        </li>
        <li>
          <img src="/casa.png" alt="seguranaça veicular" />
          <div className={styles.divText}>
            <span>VAMOS ATÉ SUA CASA</span>
          </div>
        </li>
        <li>
          <img src="/cartao.png" alt="seguranaça veicular" />
          <div className={styles.divText}>
            <span>ACEITAMOS PARCELAMENTO NO CARTÃO</span>
          </div>
        </li>
        <li>
          <img src="/duvida.png" alt="seguranaça veicular" />
          <div className={styles.divText}>
            <span>PARA MAIS INFORMAÇÕES ENTRE EM CONTATO CONOSCO</span>
          </div>
        </li>
      </ul>
      <SectionDepoiments />
      <Footer />
    </section>
  );
};

export default SectionService;
