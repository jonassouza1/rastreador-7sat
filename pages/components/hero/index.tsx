import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import styles from "styles/hero/Hero.module.css";
const Hero = () => {
  const images = [
    { id: "1", image: "/carro.jpg", text: "RASTREAMENTO VEICULAR" },
    { id: "2", image: "/notebook.jpg", text: "LOCALIZAÇÃO EM TEMPO REAL" },
    { id: "3", image: "/celular.jpg", text: "APLICATIVO COM INFORMAÇÕES" },
    {
      id: "4",
      image: "/rastreador.jpg",
      text: "TODO O CONTROLE QUE CABE NA PALMA DE SUA MÃO",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.divCarousel}>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          fadeEffect={{ crossFade: true }}
          effect="fade"
          speed={1500}
        >
          {images.map((el) => (
            <SwiperSlide key={el.id}>
              <div className={styles.slideContent}>
                <img src={el.image} alt="images marketing" />
                <p className={styles.descript}>{el.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
};
export default Hero;
