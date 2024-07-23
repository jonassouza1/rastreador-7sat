import styles from "styles/hero/Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divText}>
        <p>
          A 7sat é uma empresa gaúcha que oferece os melhores serviços em
          rastreamento veicular. Fundada em 13 de dezembro de 2017, inicialmente
          com o nome de Rastrek Novo Hamburgo, a empresa vem crescendo cada vez
          mais graças ao trabalho sério e de qualidade oferecido a seus
          clientes. Com sede em Novo Hamburgo, no bairro Canudos, a empresa
          presta serviços em todo o Vale dos Sinos, Vale do Paranhana, Vale do
          Caí, Serra gaúcha, Porto Alegre e região metropolitana oferecendo o
          melhor pra quem procura uma solução em rastreamento de veículos.
        </p>
      </div>
    </section>
  );
};
export default Hero;
