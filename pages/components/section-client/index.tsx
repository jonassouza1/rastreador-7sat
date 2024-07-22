import styles from "styles/section/SectionClient.module.css";
import Footer from "../footer";

const SectionClient = () => {
  return (
    <section className={styles.section}>
      <div className={styles.divTitle}>
        <h2>PORTAL DO CLIENTE</h2>
      </div>

      <div className={styles.divLogo}>
        <img src="/logo.png" alt="" />
      </div>
      <h3>CONTA PESSOAL</h3>
      <div className={styles.animatedtext}>
        <p>
          <span>A</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
          <span>s</span>
          <span>e</span>
        </p>
        <p>
          <span>o</span>
          <span>s</span>
        </p>
        <p>
          <span>l</span>
          <span>i</span>
          <span>n</span>
          <span>k</span>
          <span>s</span>
        </p>
        <p>
          <span>a</span>
          <span>b</span>
          <span>a</span>
          <span>i</span>
          <span>x</span>
          <span>o</span>
        </p>
        <p>
          <span>p</span>
          <span>a</span>
          <span>r</span>
          <span>a</span>
        </p>
        <p>
          <span>f</span>
          <span>a</span>
          <span>z</span>
          <span>e</span>
          <span>r</span>
        </p>

        <p>
          <span>l</span>
          <span>o</span>
          <span>g</span>
          <span>i</span>
          <span>n</span>
          <span>.</span>
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.divImg}>
          <div className={styles.arrow}></div>
          <a href="https://sistema.getrak.com/7sat" target="_blank">
            <img src="/getrak.webp" alt="link do site getrak" />
            <p>Acesse Getrak</p>
          </a>
        </div>
        <div className={styles.divImg}>
          <div className={styles.arrow}></div>
          <a href="https://www.fulltrackapp.com/emp/7sat" target="_blank">
            <img src="/fulltrack.webp" alt="link do site fulltrackapp" />
            <p>Acesse Fulltrack</p>
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SectionClient;
