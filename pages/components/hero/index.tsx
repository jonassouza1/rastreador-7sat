import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import styles from "styles/hero/Hero.module.css";
const Hero = () => {
  const images = [
    { id: "1", image: "/carro.jpg" },
    { id: "2", image: "/notebook.jpg" },
    { id: "3", image: "/celular.jpg" },
    { id: "4", image: "/rastreador.jpg" },
    { id: "5", image: "/products.jpg" },
    { id: "6", image: "/supermarket.jpg" },
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
              <img src={el.image} alt="images marketing" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
};
export default Hero;
